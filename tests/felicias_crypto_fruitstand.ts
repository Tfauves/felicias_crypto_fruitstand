import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { FeliciasCryptoFruitstand } from "../target/types/felicias_crypto_fruitstand";

describe("felicias_crypto_fruitstand", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.FeliciasCryptoFruitstand as Program<FeliciasCryptoFruitstand>;
  const kp = anchor.web3.Keypair.generate();

  it("Creates Inventory!", async () => {
    // Add your test here.
    const tx = await program.methods.createInventory()
    .accounts({
      inventory: kp.publicKey
    })
    .signers([kp])
    .rpc();
    console.log("Your transaction signature", tx);
  });
});
