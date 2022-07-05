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

  it("Adds to Inventory", async () => {
    // Add your test here.
    const tx = await program.methods.manageInventory({add: {}}, new anchor.BN(5))
    .accounts({
      inventory: kp.publicKey,
      payer: kp.publicKey,
    })
    .signers([kp])
    .rpc();
    console.log("Your transaction signature", tx);
  });

  it("Subtracts from Inventory", async () => {
    // Add your test here.
    const tx = await program.methods.manageInventory({subtract: {}}, new anchor.BN(3))
    .accounts({
      inventory: kp.publicKey,
      payer: kp.publicKey,
    })
    .signers([kp])
    .rpc();
    console.log("Your transaction signature", tx);
  });

  it("Multiplys Inventory", async () => {
    // Add your test here.
    const tx = await program.methods.manageInventory({multiply: {}}, new anchor.BN(2))
    .accounts({
      inventory: kp.publicKey,
      payer: kp.publicKey,
    })
    .signers([kp])
    .rpc();
    console.log("Your transaction signature", tx);
  });

  it("Divides Inventory", async () => {
    // Add your test here.
    const tx = await program.methods.manageInventory({divide: {}}, new anchor.BN(2))
    .accounts({
      inventory: kp.publicKey,
      payer: kp.publicKey,
    })
    .signers([kp])
    .rpc();
    console.log("Your transaction signature", tx);
  
  });









});
