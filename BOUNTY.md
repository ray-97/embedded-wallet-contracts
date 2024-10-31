# Changes 

1. integrate foundry with ```@nomicfoundation/hardhat-foundry``` plugin and init forge.
2. implement password recovery for emails for ```AccountManager```:
2.1 get batches of email that is to be recovered for each block time period
2.2 use ROFL to generate random recovery password offchain and send to registered email (txn fails if email provided not valid. an extension can be added to only send email if txn successful, for now we also simulate emailing, which can be done with any email apis of choice such as Mailgun). Existing credentials (keys etc) are unaffected.
2.3 update onchain the new password for the email, which can be used by owner of email. If use wants to be able to manually change password, a corresponding smart contract function can be implemented.

Considerations:
- We recognise that this method of recovery can be prone to abuse (eg. someone else uses the reset instead of actual owner), which can cause inconvenience but is not that much a security risk unless email is compromised (embedded wallets assume email is secure). Rules can be set by app dev on app or ROFL to limit / prevent abuse.
- Maybe a smoother user journey is to not set a random password then let user manually change password (2 contract calls), but let user choose password directly first via an email form and then using that entered password from form to update password onchain. This will be prevent abuse as mentioned above and also involves less contract calls but more UIUX work on the frontend.