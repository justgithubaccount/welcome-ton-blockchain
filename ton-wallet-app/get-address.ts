import { mnemonicToWalletKey } from "ton-crypto";
import { loadTransaction, WalletContractV4 } from "ton";

async function main() {
  // open wallet v4 (notice the correct wallet version here)
  const mnemonic = "loan copy popular talent throw mirror wage latin deliver tide random observe venue gym crystal blue hero drastic tribe lady elevator pen session cover"; // your 24 secret words (replace ... with the rest of the words)
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });

  // print wallet address
  console.log(wallet.address.toString({ testOnly: true }));

  // print wallet workchain
  console.log("workchain:", wallet.address.workChain);
}

main();