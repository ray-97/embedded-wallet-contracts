use ethabi::ParamType;
use oasis_runtime_sdk::{modules::rofl::app::prelude::*, testing::mock};
use rand::{distributions::Alphanumeric, Rng};

/// Address where the acc_manager contract is deployed.
// #region acc_manager-contract-address
const ACC_MANAGER_CONTRACT_ADDRESS: &str = "0xYourContractAddress"; // TODO: Replace with your contract address.
// #endregion acc_manager-contract-address

struct AccManagerApp;

#[async_trait]
impl App for AccManagerApp {
    /// Application version.
    const VERSION: Version = sdk::version_from_cargo!();

    /// Identifier of the application (used for registrations).
    // #region app-id
    fn id() -> AppId {
        "rofl1qqn9xndja7e2pnxhttktmecvwzz0yqwxsquqyxdf".into() // TODO: Replace with your application ID.
    }
    // #endregion app-id

    /// Return the consensus layer trust root for this runtime; if `None`, consensus layer integrity
    /// verification will not be performed (e.g. Localnet).
    // #region consensus-trust-root
    fn consensus_trust_root() -> Option<TrustRoot> {
        // The trust root below is for Sapphire Testnet at consensus height 22110615.
        // Some(TrustRoot {
        //     height: 22110615,
        //     hash: "95d1501f9cb88619050a5b422270929164ce739c5d803ed9500285b3b040985e".into(),
        //     runtime_id: "000000000000000000000000000000000000000000000000a6d1e3ebf60dff6c".into(),
        //     chain_context: "0b91b8e4e44b2003a7c5e23ddadb5e14ef5345c0ebcb3ddcae07fa2f244cab76"
        //         .to_string(),
        // })
        None
    }
    // #endregion consensus-trust-root

    async fn run(self: Arc<Self>, _env: Environment<Self>) {
        // We are running now!
        println!("Hello ROFL-ACC-MANAGER world!");
    }

    async fn on_runtime_block(self: Arc<Self>, env: Environment<Self>, _round: u64) {
        // This gets called for each runtime block. It will not be called again until the previous
        // invocation returns and if invocation takes multiple blocks to run, those blocks will be
        // skipped.
        if let Err(err) = self.run_acc_manager(env).await {
            println!("Failed to submit observation: {:?}", err);
        }
    }
}

fn get_accumulated_emails() -> Vec<String> {
    // Mocked emails.
    vec!["test1@test.com".to_string(), "test@test2.com".to_string()]
}

fn gen_params(_email: String, _password: String) -> &'static [ParamType] {
    // Mock params todo: replace with actual params for generate gasless tx.
    &[
        ParamType::Bytes,
    ]
}

fn generate_random_password() -> String {
    rand::thread_rng()
        .sample_iter(&Alphanumeric)
        .take(7)
        .map(char::from)
        .collect()
}

fn send_recovery_email(_email: String, _password: String) {
    // Mocked send email.
    println!("Sending recovery email to: {} with password: {}", _email, _password);
}

impl AccManagerApp {

    async fn run_acc_manager(self: Arc<Self>, env: Environment<Self>) -> Result<()> {
        
        let emails = get_accumulated_emails();
        
        for email in emails {

            // ROFL used for randomness
            let password = generate_random_password();
        
            // Prepare the acc_manager contract call.
            let mut tx = self.new_transaction(
                "evm.Call",
                module_evm::types::Call {
                    address: ACC_MANAGER_CONTRACT_ADDRESS.parse().unwrap(),
                    value: 0.into(),
                    data: [
                        ethabi::short_signature(
                            "generateGaslessTx", 
                            gen_params(email.clone(), password.clone())
                        )].concat(),
                },
            );

            tx.set_fee_gas(0);

            // Submit on chain.
            env.client().sign_and_submit_tx(env.signer(), tx).await?;
            // simulate email api
            send_recovery_email(email, password);
        }
        Ok(())
    }
}

fn main() {
    AccManagerApp.start();
}