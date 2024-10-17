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
  TestP256R1,
  TestP256R1Interface,
} from "../../../contracts/test/TestP256R1";

const _abi = [
  {
    inputs: [],
    name: "DER_Split_Error",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "x2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y2",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [
      {
        internalType: "uint256",
        name: "x3",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y3",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "double",
    outputs: [
      {
        internalType: "uint256",
        name: "x2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y2",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "secret",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "z",
        type: "uint256",
      },
    ],
    name: "ecdsa_sign_raw",
    outputs: [
      {
        internalType: "uint256",
        name: "r",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "s",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "secret",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "z",
        type: "uint256",
      },
    ],
    name: "ecdsa_sign_raw_precompile",
    outputs: [
      {
        internalType: "uint256",
        name: "r",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "s",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "pubkey",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "r",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "s",
        type: "uint256",
      },
    ],
    name: "ecdsa_test_encode",
    outputs: [
      {
        internalType: "bytes",
        name: "pkb",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Point256",
        name: "pubkey",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "z",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "r",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "s",
        type: "uint256",
      },
    ],
    name: "ecdsa_verify_raw",
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
    inputs: [
      {
        internalType: "uint256[2]",
        name: "pubkey",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "z",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "r",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "s",
        type: "uint256",
      },
    ],
    name: "ecdsa_verify_raw_precompile",
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
    inputs: [
      {
        internalType: "bytes",
        name: "pkb",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "z",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "ecdsa_verify_raw_precompile_raw",
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
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "isOnCurve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "s",
        type: "uint256",
      },
    ],
    name: "multiply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657611f14908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c9081630b0dbcfa146100ba57508063154b72bf146100b55780631b1baf1c146100b057806355dcf504146100ab5780635975c35a146100a657806382f46c0a146100a1578063b3a9b5f61461009c578063d89adb1d14610097578063e022d77c146100925763f37e21651461008d57600080fd5b610967565b61093f565b610671565b610634565b6105dc565b610502565b610424565b61032f565b61025f565b3461015c57604036600319011261015c57630586de7d60e11b608090815260043560845260243560a45260209060448173__$48c1d2fad93a6f4bc06b9bb3a587c0c12c$__5af4908115610150579061011f575b6040519015158152602090f35b0390f35b5060203d8111610149575b6101428161013a61011b93610175565b608001611d16565b905061010e565b503d61012a565b604051903d90823e3d90fd5b80fd5b634e487b7160e01b600052604160045260246000fd5b601f80199101166080016080811067ffffffffffffffff82111761019857604052565b61015f565b6040810190811067ffffffffffffffff82111761019857604052565b6060810190811067ffffffffffffffff82111761019857604052565b90601f8019910116810190811067ffffffffffffffff82111761019857604052565b67ffffffffffffffff811161019857601f01601f191660200190565b81601f8201121561025a5780359061022a826101f7565b9261023860405194856101d5565b8284526020838301011161025a57816000926020809301838601378301015290565b600080fd5b3461025a57606036600319011261025a5767ffffffffffffffff60043581811161025a57610291903690600401610213565b9060443590811161025a5760008061011b936102b461031d943690600401610213565b6102f16040516024356020820152602081526102cf8161019d565b6102e3604051938492602084019687611c8a565b03601f1981018352826101d5565b51906007600160981b015afa61030e61030861190f565b91611cd9565b60208082518301019101611d31565b60405190151581529081906020820190565b3461025a5760408060031936011261025a5760043590602435600091825b60015b15610388575b600093825161037f816102e36020820194888b8791606093918352602083015260408201520190565b51902093610350565b8315801561040c575b61035657939091926103a2816114ed565b5093600080516020611ebf833981519152809506948515610400576103c6836111fc565b966103fb576000968180868909840890099586156103ef57845186815260208101889052604090f35b9194509291945061034d565b6109b6565b5092919490935061034d565b50600080516020611ebf833981519152841015610391565b3461025a5760408060031936011261025a5761043e6118df565b50805161011b6104e660008085602095600435878201528681526104618161019d565b6104c48783516024358282015281815261047a8161019d565b856104ae61049b87519660808689019960078b5289015260a08801906105b7565b601f1993848883030160608901526105b7565b85810392830160808701525280845201826101d5565b51906006600160981b015afa6104e16104db61190f565b9161193f565b611a88565b8051920151925191825260208201929092529081906040820190565b3461025a57366003190160a0811261025a5760401361025a57602061054960405161052c8161019d565b600435815260243583820152608435906064359060443590611745565b6040519015158152f35b806023121561025a57604051906105698261019d565b81604491821161025a576004905b8282106105845750505090565b8135815260209182019101610577565b60005b8381106105a75750506000910152565b8181015183820152602001610597565b906020916105d081518092818552858086019101610594565b601f01601f1916010190565b3461025a57608036600319011261025a576106266106016105fc36610553565b611e60565b61011b610612606435604435611d7b565b6040519384936040855260408501906105b7565b9083820360208501526105b7565b3461025a57606036600319011261025a5761065f6106596044356024356004356116a7565b9161114e565b60408051928352602083019190915290f35b3461025a57604036600319011261025a5761065f600160601b63ffffffff60c01b0319600160043509600160601b63ffffffff60c01b031960016024350990600160601b63ffffffff60c01b0319806024358009600160601b63ffffffff60c01b031984800809600160601b63ffffffff60c01b0319908008600160601b63ffffffff60c01b031990800891600160601b63ffffffff60c01b031980808080868008600080516020611e9f83398151915209600160601b63ffffffff60c01b0319806003816004358009086003600160601b0363ffffffff60c01b03190908600160601b63ffffffff60c01b03196003600160601b0363ffffffff60c01b031981806004358009600160601b63ffffffff60c01b0319806004358009600160601b63ffffffff60c01b0319600435800908080809600160601b63ffffffff60c01b03198080600080516020611e9f83398151915281808980086003600160601b0363ffffffff60c01b03190908600160601b63ffffffff60c01b0319602435800908600160601b63ffffffff60c01b031980600080516020611e9f83398151915281808a80086003600160601b0363ffffffff60c01b03190908600160601b63ffffffff60c01b031990810390602435800908090891600160601b63ffffffff60c01b0319918290818080858008600080516020611e9f83398151915209600160601b63ffffffff60c01b0319806003816004358009086003600160601b0363ffffffff60c01b0319090890600160601b63ffffffff60c01b031990800809600160601b63ffffffff60c01b03199081039181908190600080516020611e9f833981519152908290819080086003600160601b0363ffffffff60c01b03190908600160601b63ffffffff60c01b031990810390602435800908600160601b63ffffffff60c01b03198060243560043509600160601b63ffffffff60c01b03196024356004350908090861114e565b3461025a57608036600319011261025a5761065f6106596064356044356024356004356109cc565b3461025a5760a036600319011261025a5761011b61031d60008061098d6105fc36610553565b61099b608435606435611d7b565b6102f16040516044356020820152602081526102cf8161019d565b634e487b7160e01b600052601260045260246000fd5b9290939193831580610c99575b610c9157841580610c89575b610c7f57600160601b63ffffffff60c01b03198060018188880908600160601b63ffffffff60c01b0319908103908060018908600160601b63ffffffff60c01b031960018908090890600160601b63ffffffff60c01b03198060018186850908600160601b63ffffffff60c01b0319908103908060018708600160601b63ffffffff60c01b03196001860809086003600160601b0363ffffffff60c01b031995909190600080516020611e9f83398151915290600160601b63ffffffff60c01b031980868a09830897600160601b63ffffffff60c01b0319898103818987090898600160601b63ffffffff60c01b031990818987090895600160601b63ffffffff60c01b031982818d8181880990600160601b63ffffffff60c01b03199081818a0990600160601b63ffffffff60c01b0319908a0908080893600163ffffffff60601b0360601b1992600163ffffffff60601b0360601b19908d6003600163ffffffff60601b0360601b1991600163ffffffff60601b0360601b1990890908900991600160601b63ffffffff60c01b0319910908600160601b63ffffffff60c01b031980828509600160601b63ffffffff60c01b0319888c090898600160601b63ffffffff60c01b03199182908709600160601b63ffffffff60c01b031990810391818d81808d8b09600160601b63ffffffff60c01b0319838a0908600160601b63ffffffff60c01b03199081039181908e9008600160601b63ffffffff60c01b03198b8a080908090898600160601b63ffffffff60c01b031996879485938480848409600160601b63ffffffff60c01b031986840908600160601b63ffffffff60c01b031990810394909384910891600160601b63ffffffff60c01b0319910809080991600160601b63ffffffff60c01b031991090890565b9293506001919050565b5081156109e5565b509150600190565b5080156109d9565b949190959395851580611146575b61113d57831580611135575b61112c57600160601b63ffffffff60c01b03198080808080888809600160601b63ffffffff60c01b03198a8d0908600160601b63ffffffff60c01b03199081039080898b08600160601b63ffffffff60c01b0319898e0809086003600160601b0363ffffffff60c01b031909600160601b63ffffffff60c01b031980878709600080516020611e9f8339815191520908600160601b63ffffffff60c01b03198984090890600160601b63ffffffff60c01b0319808585096003600160601b0363ffffffff60c01b03190997600160601b63ffffffff60c01b0319898180898c09600160601b63ffffffff60c01b0319808b8e09600160601b63ffffffff60c01b03198c8f0908080898600160601b63ffffffff60c01b031990819081908103818a8d09086003600160601b0363ffffffff60c01b031909600160601b63ffffffff60c01b03198080808a8a09600160601b63ffffffff60c01b03198c8f0908600160601b63ffffffff60c01b0319908103908d818c8e0890600160601b63ffffffff60c01b0319908c90080908600080516020611e9f833981519152090897600160601b63ffffffff60c01b0319808a8c09600160601b63ffffffff60c01b031986818080808e8e8e8380838309600160601b63ffffffff60c01b0319858f0908600160601b63ffffffff60c01b031990810393909283910890600160601b63ffffffff60c01b0319908d0809086003600160601b0363ffffffff60c01b031909600160601b63ffffffff60c01b0319808e8e09600080516020611e9f8339815191520908600160601b63ffffffff60c01b031990810390888a0908090898600160601b63ffffffff60c01b03199081908180808b8b09600160601b63ffffffff60c01b0319888a0908600160601b63ffffffff60c01b031990810390808c8908600160601b63ffffffff60c01b03198c8b08090809600160601b63ffffffff60c01b031990810390808080808d8d8d8380838309600160601b63ffffffff60c01b0319858e0908600160601b63ffffffff60c01b031990810393909283910890600160601b63ffffffff60c01b0319908c0809086003600160601b0363ffffffff60c01b031909600160601b63ffffffff60c01b0319808d8d09600080516020611e9f8339815191520908600160601b63ffffffff60c01b03199081039087890908600160601b63ffffffff60c01b03198080888a09600160601b63ffffffff60c01b03198e890908600160601b63ffffffff60c01b03199081039080898f08600160601b63ffffffff60c01b03198b8a080908090899600160601b63ffffffff60c01b031997889283918280878909600160601b63ffffffff60c01b031983850908600160601b63ffffffff60c01b0319908103929091829088900890600160601b63ffffffff60c01b03199089900809080994600160601b63ffffffff60c01b03199485938480848409600160601b63ffffffff60c01b031986840908600160601b63ffffffff60c01b031990810394909384910891600160601b63ffffffff60c01b031991080908090890565b94955092915050565b508615610cbb565b50509250929190565b508015610caf565b9291909260405190602092838352838084015283604084015260608301527fffffffff00000001000000000000000000000000fffffffffffffffffffffffd6080830152600163ffffffff60601b0360601b19928360a0840152808360c08160055afa925192156111c3575081839109930990565b6064906040519062461bcd60e51b8252600482015260126024820152715345435032353652312e696e76657273652160701b6044820152fd5b9060405191602090818452818085015281604085015260608401527fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63254f6080840152600080516020611ebf83398151915260a0840152808360c08160055afa925192156111c35750565b919290600160601b63ffffffff60c01b0319848409600080516020611e9f833981519152906003600160601b0363ffffffff60c01b031990600160601b63ffffffff60c01b0319808080808580088709600160601b63ffffffff60c01b03198080808e80098909600160601b63ffffffff60c01b0319908103908d800908870908600160601b63ffffffff60c01b031980808c80098709600160601b63ffffffff60c01b0319808c8009600160601b63ffffffff60c01b03198d8181800990600160601b63ffffffff60c01b031990800908080809600160601b63ffffffff60c01b0319808080808d80098909600160601b63ffffffff60c01b031980888008890908600160601b63ffffffff60c01b031989800908600160601b63ffffffff60c01b03198080808e80098a09600160601b63ffffffff60c01b0319808980088a0908600160601b63ffffffff60c01b0319908103908a800908090895600160601b63ffffffff60c01b0319888609600160601b63ffffffff60c01b031990800897600160601b63ffffffff60c01b031994858080808780088409600160601b63ffffffff60c01b03198080808880098b09600160601b63ffffffff60c01b031990810390898009088909088b09600160601b63ffffffff60c01b031990810395909485938493849182908009900991600160601b63ffffffff60c01b03199182908008900908600160601b63ffffffff60c01b0319908103908780090890600160601b63ffffffff60c01b0319908187820990600160601b63ffffffff60c01b03199088900908090893600160601b63ffffffff60c01b031991829080099009600160601b63ffffffff60c01b0319908008600160601b63ffffffff60c01b031990800890565b6106596114f9916115d8565b9091565b600080516020611ebf833981519152900680156115cc5760018082167f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296818102947f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f592830294909290841c9160009185915b60ff841061157e575050505050565b91611590916001939998959799611265565b929091946115a28a828b87878b610ca1565b909b9192848b169b8c8603948d02908502019c8c02908402019a0291020196811c9301929361156f565b50600090600090600190565b600080516020611ebf833981519152900680156115cc5760018082167f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296818102947f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f592830294909290841c9160009185915b60ff8410611659575050505050565b9161166b916001939998959799611265565b9290919461167d8a828b87878b610ca1565b909b9192848b169b8c8603948d02908502019c8c02908402019a0291020196811c9301929361164a565b91600080516020611ebf8339815191529093919306908115611738578284906001948585168091029602948094811c926000925b60ff84106116ea575050505050565b916116fc916001939998959799611265565b9290919461170e8a828b87878b610ca1565b909b9192848b169b8c8603948d02908502019c8c02908402019a0291020196811c930192936116db565b6000935083925060019150565b909192815161176161175d602085019283519061182a565b1590565b6117f057841580611812575b6117f0578115806117fa575b6117f0576117c1936117cb93611791610659946111fc565b9586936117b0600080516020611ebf83398151915280998196096114fd565b969195909451918b099151906116a7565b9491929093610ca1565b81159081156117e7575b506117df57061490565b505050600090565b905015386117d5565b5050505050600090565b50600080516020611ebf833981519152821015611779565b50600080516020611ebf83398151915285101561176d565b801580156118c7575b80156118bf575b80156118a7575b6118a057600160601b63ffffffff60c01b03199081907f5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b90829081806003600160601b0363ffffffff60c01b0319830991818180090908089180091490565b5050600090565b50600160601b63ffffffff60c01b0319821015611841565b50811561183a565b50600160601b63ffffffff60c01b0319811015611833565b604051906060820182811067ffffffffffffffff8211176101985760405260006040838281528260208201520152565b3d1561193a573d90611920826101f7565b9161192e60405193846101d5565b82523d6000602084013e565b606090565b1561194657565b60405162461bcd60e51b815260206004820152600c60248201526b1cda59db8e8819985a5b195960a21b6044820152606490fd5b634e487b7160e01b600052603260045260246000fd5b80511561199d5760200190565b61197a565b80516002101561199d5760220190565b80516001101561199d5760210190565b80516003101561199d5760230190565b80516004101561199d5760240190565b90815181101561199d570160200190565b634e487b7160e01b600052601160045260246000fd5b6004019081600411611a1757565b6119f3565b9060018201809211611a1757565b9060048201809211611a1757565b9060028201809211611a1757565b91908201809211611a1757565b600019810191908211611a1757565b6020039060208211611a1757565b600381901b91906001600160fd1b03811603611a1757565b90611a916118df565b916008815110611c43576001600160f81b0319600360fc1b81611ac4611ab685611990565b516001600160f81b03191690565b1603611c4357600160f91b8082611add611ab6866119a2565b1603611c4357611b01611afb611af5611ab6866119b2565b60f81c90565b60ff1690565b91611b14611afb611af5611ab6876119c2565b9260218411611c4357611b2684611a09565b90611b42611afb611af5611ab6611b3c86611a1c565b8a6119e2565b9360218511611c4357611b68611b5b611ab6858a6119e2565b6001600160f81b03191690565b03611c435780611b80611b7b8688611a46565b611a2a565b03611c4357611b90865191611a38565b03611c4357611b9e90611a38565b9060049060218514611c55575b60218414611c10575b50906020809286010151940101519160208110611bf9575b5060208110611be1575b509083526020830152565b611bed611bf291611a62565b611a70565b1c38611bd6565b611bed611c0891949294611a62565b1c9138611bcc565b611c20611ab684889694966119e2565b16611c43576020611c3a611c348294611a1c565b92611a53565b93919250611bb4565b6040516386cd05c560e01b8152600490fd5b939084611c64611ab6886119d2565b16611c7b5750611c75600591611a53565b93611bab565b6040516386cd05c560e01b8152fd5b611cba611cd69493611cac6020946007855260a08686015260a08501906105b7565b9083820360408501526105b7565b90608083828403806060850152600085520191015201906105b7565b90565b15611ce057565b60405162461bcd60e51b815260206004820152600e60248201526d1d995c9a599e4e8819985a5b195960921b6044820152606490fd5b602090607f19011261025a57608051801515810361025a5790565b9081602091031261025a5751801515810361025a5790565b60029291600360fc1b825260ff60f81b9060f81b166001820152611d768251809360208685019101610594565b010190565b6024611d92611d8c611e0293611e22565b93611e22565b92805193805191604051958693600160f91b9283602087015260ff60f81b809360f81b166021870152611dcf81518092602060228a019101610594565b850192602284015260f81b166023820152611df38251809360208785019101610594565b010360048101845201826101d5565b611cd6611e10825160ff1690565b6102e360405193849260208401611d49565b600160ff1b8116611e435760405190602082015260208152611cd68161019d565b6040519060006020830152602182015260218152611cd6816101b9565b6020810151600116611e96576002905b516040519160ff60f81b9060f81b166020830152602182015260218152611cd6816101b9565b600390611e7056fe1052a18afeafbbb61bc3380063c994352f57141164fb12e2b36ab4ba777720e2ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551a2646970667358221220301269ab501835bec8c83ace6a41226f25ea4834b00247b6fd3b99cb5d41ebe264736f6c63430008150033";

type TestP256R1ConstructorParams =
  | [linkLibraryAddresses: TestP256R1LibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestP256R1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class TestP256R1__factory extends ContractFactory {
  constructor(...args: TestP256R1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        TestP256R1__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: TestP256R1LibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$48c1d2fad93a6f4bc06b9bb3a587c0c12c\\$__", "g"),
      linkLibraryAddresses["contracts/lib/SECP256R1.sol:SECP256R1"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TestP256R1 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestP256R1__factory {
    return super.connect(runner) as TestP256R1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestP256R1Interface {
    return new Interface(_abi) as TestP256R1Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): TestP256R1 {
    return new Contract(address, _abi, runner) as unknown as TestP256R1;
  }
}

export interface TestP256R1LibraryAddresses {
  ["contracts/lib/SECP256R1.sol:SECP256R1"]: string;
}
