/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Account,
  AccountInterface,
} from "../../../contracts/Account.sol/Account";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "DER_Split_Error",
    type: "error",
  },
  {
    inputs: [],
    name: "expmod_Error",
    type: "error",
  },
  {
    inputs: [],
    name: "k256Decompress_Invalid_Length_Error",
    type: "error",
  },
  {
    inputs: [],
    name: "k256DeriveY_Invalid_Prefix_Error",
    type: "error",
  },
  {
    inputs: [],
    name: "recoverV_Error",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "in_contract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "in_data",
        type: "bytes",
      },
    ],
    name: "call",
    outputs: [
      {
        internalType: "bytes",
        name: "out_data",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exportPrivateKey",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "starterOwner",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "isController",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "keypairAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "modifyController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "digest",
        type: "bytes32",
      },
    ],
    name: "sign",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "v",
            type: "uint256",
          },
        ],
        internalType: "struct SignatureRSV",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "gasPrice",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "gasLimit",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
        ],
        internalType: "struct EIP155Signer.EthTx",
        name: "txToSign",
        type: "tuple",
      },
    ],
    name: "signEIP155",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "in_contract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "in_data",
        type: "bytes",
      },
    ],
    name: "staticcall",
    outputs: [
      {
        internalType: "bytes",
        name: "out_data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "in_target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461002357600160ff1960005416176000556118e690816100298239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c90816313aa893f146100ba5750806319ab453c146100b55780631b8b921d146100b0578063260558a0146100ab57806337022e98146100a6578063799cd333146100a1578063952e625a1461009c578063a9059cbb14610097578063b429afeb146100925763ccb3c9d11461008d57600080fd5b610605565b6105c6565b610559565b61046c565b6103f8565b61038f565b610346565b6102d0565b610125565b346100f357806003193601126100f357600160ff60406100e69333815283602052205416151514610b8c565b6020600354604051908152f35b80fd5b600435906001600160a01b038216820361010c57565b600080fd5b35906001600160a01b038216820361010c57565b3461010c57602036600319011261010c5761013e6100f6565b60ff600054166101de576001600160a01b03166000908152600160205260409020610171905b805460ff19166001179055565b6101a761018561017f610723565b60035590565b60018060a01b03166bffffffffffffffffffffffff60a01b6002541617600255565b6002546001600160a01b031660009081526001602052604090206101ca90610164565b6101dc600160ff196000541617600055565b005b60405162461bcd60e51b8152602060048201526012602482015271105b1c9958591e525b9a5d1a585b1a5e995960721b6044820152606490fd5b604060031982011261010c576004356001600160a01b038116810361010c57916024356001600160401b039283821161010c578060238301121561010c57816004013593841161010c576024848301011161010c576024019190565b60005b8381106102875750506000910152565b8181015183820152602001610277565b906020916102b081518092818552858086019101610274565b601f01601f1916010190565b9060206102cd928181520190610297565b90565b3461010c576102de36610218565b916000928380933382526001602052610302600160ff604085205416151514610b8c565b826040519384928337810182815203925af161031c610aaa565b901561033e5761033a90604051918291602083526020830190610297565b0390f35b602081519101fd5b3461010c5760008061035736610218565b903384526001602052610375600160ff604087205416151514610b8c565b816040519283928337810184815203915afa61031c610aaa565b3461010c57604036600319011261010c576103a86100f6565b60243580151580910361010c5760009133835260016020526103d5600160ff604086205416151514610b8c565b60018060a01b031682526001602052604082209060ff8019835416911617905580f35b3461010c57602036600319011261010c57610411610f4a565b50336000526001602052610431600160ff60406000205416151514610b8c565b60025460035460609161045091600435916001600160a01b0316610f80565b6040805191805183526020810151602084015201516040820152f35b3461010c5760031960203682011261010c576004356001600160401b039182821161010c5760e090823603011261010c573360005260016020526104bc600160ff60406000205416151514610b8c565b60018060a01b03600254166003546104d26106d6565b916104df84600401610bcb565b8352602484013560208401526104f760448501610bcb565b604084015261050860648501610111565b60608401526084840135608084015260a484013594851161010c5760c461054d9461053c61033a9760043691840101610bdf565b60a0860152013560c0840152610c55565b604051918291826102bc565b3461010c57604036600319011261010c576105726100f6565b602435906000808080948194338352600160205261059b600160ff604086205416151514610b8c565b829082156105bc575b6001600160a01b031690f1156105b75780f35b611282565b6108fc91506105a4565b3461010c57602036600319011261010c576001600160a01b036105e76100f6565b166000526001602052602060ff604060002054166040519015158152f35b3461010c57600036600319011261010c576002546040516001600160a01b039091168152602090f35b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b0382111761065f57604052565b61062e565b60e081019081106001600160401b0382111761065f57604052565b602081019081106001600160401b0382111761065f57604052565b604081019081106001600160401b0382111761065f57604052565b90601f801991011681019081106001600160401b0382111761065f57604052565b604051906106e382610664565b565b6001600160401b03811161065f57601f01601f191660200190565b602081519101519060208110610714575090565b6000199060200360031b1b1690565b60408051906107318261067f565b60008252805191600080602092856107588582019286845287808401526060830190610297565b039561076c601f19978881018352826106b5565b51906001600160981b015afa610780610aaa565b901561083e576000816107938293610700565b956107c1865191826107b588820195600487528a808401526060830190610297565b039081018352826106b5565b51906005600160981b015afa916107d6610aaa565b92156107fb575081816107f2926107f894518301019101610b49565b50610877565b91565b60649250519062461bcd60e51b82526004820152601b60248201527f67656e207369676e696e67206b6579706169723a206661696c656400000000006044820152fd5b50606491519062461bcd60e51b8252600482015260136024820152721c985b991bdb509e5d195cce8819985a5b1959606a1b6044820152fd5b602181510361097857602181015190805115610973576020015160f81c6000600282141580610968575b61095657806401000003d019604051602081019160208352602060408301526020606083015280600781808a80098a0908608083015263400000f4600160fe1b0360a083015260c08083019190915281526108fb81610664565b519060055afa9161090a610aaa565b92156109445761092f6109296109226102cd95610700565b9384610a5f565b60011690565b15610ada579061093e90610a6c565b90610ada565b60405163102875ed60e01b8152600490fd5b60405163ab4be04160e01b8152600490fd5b5060038214156108a1565b61098a565b604051636446a2c560e11b8152600490fd5b634e487b7160e01b600052603260045260246000fd5b8051156109735760200190565b8051600210156109735760220190565b8051600110156109735760210190565b8051600310156109735760230190565b8051600410156109735760240190565b908151811015610973570160200190565b634e487b7160e01b600052601160045260246000fd5b9060238201809211610a2257565b6109fe565b6004019081600411610a2257565b9060018201809211610a2257565b9060048201809211610a2257565b9060028201809211610a2257565b91908201809211610a2257565b6401000003d01990810391908211610a2257565b600019810191908211610a2257565b6020039060208211610a2257565b91908203918211610a2257565b3d15610ad5573d90610abb826106e5565b91610ac960405193846106b5565b82523d6000602084013e565b606090565b6040519160208301918252604083015260408252610af782610644565b905190206001600160a01b031690565b81601f8201121561010c578051610b1d816106e5565b92610b2b60405194856106b5565b8184526020828401011161010c576102cd9160208085019101610274565b91909160408184031261010c578051926001600160401b039384811161010c5781610b75918401610b07565b93602083015190811161010c576102cd9201610b07565b15610b9357565b60405162461bcd60e51b815260206004820152601060248201526f27b7363ca13ca1b7b73a3937b63632b960811b6044820152606490fd5b35906001600160401b038216820361010c57565b81601f8201121561010c57803590610bf6826106e5565b92610c0460405194856106b5565b8284526020838301011161010c57816000926020809301838601378301015290565b600381901b91906001600160fd1b03811603610a2257565b908160081b918083046101001490151715610a2257565b610cc590929192610c64610f4a565b5060c0830193610c92855160405190610c7c82610644565b6000825260006020830152604082015285610de3565b604051610cbc60208281610caf8183019687815193849201610274565b81010380845201826106b5565b51902091610f80565b9060408201805193601a198501948511610a2257518060011b9080820460021490151715610a2257610cfd610d02916102cd96610a5f565b610a14565b9052610de3565b6040519061014082018281106001600160401b0382111761065f57604052600982528160005b6101208110610d3c575050565b806060602080938501015201610d2f565b8051600110156109735760400190565b8051600210156109735760600190565b8051600310156109735760800190565b8051600410156109735760a00190565b8051600510156109735760c00190565b8051600610156109735760e00190565b805160071015610973576101000190565b805160081015610973576101200190565b80518210156109735760209160051b010190565b610f3160206102cd93610ed760a0610df9610d09565b95610e22610e1d610e1183516001600160401b031690565b6001600160401b031690565b61163a565b610e2b886109a0565b52610e35876109a0565b50610e428582015161163a565b610e4b88610d4d565b52610e5587610d4d565b50610e70610e1d610e1160408401516001600160401b031690565b610e7988610d5d565b52610e8387610d5d565b506060810151610e9b906001600160a01b0316611608565b610ea488610d6d565b52610eae87610d6d565b50610ebc608082015161163a565b610ec588610d7d565b52610ecf87610d7d565b500151611369565b610ee085610d8d565b52610eea84610d8d565b50610ef8604082015161163a565b610f0185610d9d565b52610f0b84610d9d565b50610f16815161163a565b610f1f85610dad565b52610f2984610dad565b50015161163a565b610f3a82610dbe565b52610f4481610dbe565b506114e5565b60405190610f5782610644565b60006040838281528260208201520152565b90610f7c60209282815194859201610274565b0190565b90929192610f8c610f4a565b5060409060008083610ff961101c825160209687820152868152610faf8161069a565b8351908b88830152878252610fc38261069a565b6107b58551610fd18161067f565b87815261100c875196879460808d87019a610fec8c60049052565b87015260a0860190610297565b601f199586868303016060870152610297565b9084848303016080850152610297565b51906006600160981b015afa91611031610aaa565b921561104e575050906110466106e392611080565b93849161128e565b60649250519062461bcd60e51b82526004820152600c60248201526b1cda59db8e8819985a5b195960a21b6044820152fd5b90611089610f4a565b91600881511061123b576001600160f81b0319600360fc1b816110bc6110ae856109a0565b516001600160f81b03191690565b160361123b57600160f91b80826110d56110ae866109ad565b160361123b576110f96110f36110ed6110ae866109bd565b60f81c90565b60ff1690565b9161110c6110f36110ed6110ae876109cd565b926021841161123b5761111e84610a27565b9061113a6110f36110ed6110ae61113486610a35565b8a6109ed565b936021851161123b576111606111536110ae858a6109ed565b6001600160f81b03191690565b0361123b57806111786111738688610a5f565b610a43565b0361123b57611188865191610a51565b0361123b5761119690610a51565b906004906021851461124d575b60218414611208575b509060208092860101519401015191602081106111f1575b50602081106111d9575b509083526020830152565b6111e56111ea91610a8f565b610c26565b1c386111ce565b6111e561120091949294610a8f565b1c91386111c4565b6112186110ae84889694966109ed565b1661123b57602061123261122c8294610a35565b92610a80565b939192506111ac565b6040516386cd05c560e01b8152600490fd5b93908461125c6110ae886109dd565b16611273575061126d600591610a80565b936111a3565b6040516386cd05c560e01b8152fd5b6040513d6000823e3d90fd5b916040810190601b8252805192602082019060206112ca835160405197848960609194939260808201958252601b602083015260408201520152565b866000978892838052039060015afa156105b75784516001600160a01b0396871696168690036112fd575b505050505050565b61132f8593601c602096525192516040519384938460609194939260808201958252601c602083015260408201520152565b838052039060015afa156105b757516001600160a01b031603611357573880808080806112f5565b604051634532600d60e01b8152600490fd5b9060009180519260019384811490816114cd575b501561138857509150565b81519360388510156113fa5750926113ec6102cd926113e694956113c96113b960ff6113b261170d565b9616611783565b60f81b6001600160f81b03191690565b901a6113d4846109a0565b535b6040519485936020850190610f69565b90610f69565b03601f1981018352826106b5565b9190808380805b61149b575b505061141961141483610a35565b61173f565b936114316113b961142c60ff8616611783565b611771565b821a61143c866109a0565b535b8281111561145c575050506113e6929350906113ec6102cd926113d6565b806114846113b96110f36110f361147e611479611496978a610a9d565b6117a7565b8c6116de565b831a61149082886109ed565b536116fe565b61143e565b90926114a784896116de565b156114c5576114b86114be916116fe565b93610c3e565b9080611401565b925080611406565b905015610973576080602083015160f81c103861137d565b6114ee906117b6565b80516000603882101561155f575060206102cd916115196113b960ff61151261170d565b9316611795565b60001a611525826109a0565b535b604051938161153f8693518092868087019101610274565b820161155382518093868085019101610274565b010380845201826106b5565b909260019290915b61157184866116de565b15611588576114b8611582916116fe565b92611567565b90925092909261159a61141482610a35565b916115ad6113b961142c60ff8516611795565b60001a6115b9846109a0565b5360015b828111156115d35750505060206102cd91611527565b806115f66113b96110f36110f36115f0611479611603978a610a9d565b876116de565b60001a61149082876109ed565b6115bd565b6102cd90604051906bffffffffffffffffffffffff199060601b166020820152601481526116358161069a565b611369565b90604051611654816113ec60209586830160209181520190565b60009283905b8082106116b4575b5061166f61141482610a8f565b91845b83518110156116a6576116a1906116956110ae61168e866116fe565b95856109ed565b871a61149082876109ed565b611672565b5050506102cd919250611369565b906116c56111536110ae83866109ed565b6116d8576116d2906116fe565b9061165a565b90611662565b81156116e8570490565b634e487b7160e01b600052601260045260246000fd5b6000198114610a225760010190565b6040519061171a8261069a565b6001825260203681840137565b6040516117338161067f565b60008152906000368137565b90611749826106e5565b61175660405191826106b5565b8281528092611767601f19916106e5565b0190602036910137565b60ff60379116019060ff8211610a2257565b60ff60809116019060ff8211610a2257565b60ff60c09116019060ff8211610a2257565b601f8111610a22576101000a90565b80511561184f5790600091825b81518410156117f1576117e56117eb916117dd8685610dcf565b515190610a5f565b936116fe565b926117c3565b6117fd9192935061173f565b906020808301936000945b83518610156118475761183b611841916118316118258988610dcf565b51868151910183611858565b6117dd8887610dcf565b956116fe565b94611808565b509350505090565b506102cd611727565b92905b6020938484106118905781518152848101809111610a2257938101809111610a225791601f198101908111610a22579161185b565b9290919350600019906020036101000a019081199051169082511617905256fea2646970667358221220d64c0e88400ec3447ba0a89f79cf988bc231fd328bec6ddcab36ec1b18a0ddce64736f6c63430008150033";

type AccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Account__factory extends ContractFactory {
  constructor(...args: AccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Account & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Account__factory {
    return super.connect(runner) as Account__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccountInterface {
    return new Interface(_abi) as AccountInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Account {
    return new Contract(address, _abi, runner) as unknown as Account;
  }
}
