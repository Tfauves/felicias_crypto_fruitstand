use anchor_lang::prelude::*;

declare_id!("Aru5TV39J4P7Fx75BhhPieTKbsJLR4917HysPeo6d5TA");

#[program]
pub mod felicias_crypto_fruitstand {
    use super::*;

    pub fn create_inventory(_ctx: Context<CreateInventory>) -> Result<()> {
        Ok(())
    }

    pub fn manage_inventory(ctx: Context<ManageInventory>, control: ControlInventory, amt: i64) -> Result<()> {
        let inventory_item = &mut ctx.accounts.inventory;
        match control {
            ControlInventory::Add => inventory_item.qty += amt,
            ControlInventory::Subtract => inventory_item.qty -= amt,
            ControlInventory::Multiply => inventory_item.qty *= amt,
            ControlInventory::Divide => inventory_item.qty /= amt,
        }
        Ok(())
    }
}


#[derive(AnchorSerialize, AnchorDeserialize)]
pub enum ControlInventory {
    Add,
    Subtract,
    Multiply,
    Divide,
}


#[derive(Accounts)]
pub struct CreateInventory<'info> {
    #[account(init, payer = payer, space = 8 + 8)]
    pub inventory: Account<'info, InventoryData>,

    #[account(mut)]
    pub payer: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ManageInventory<'info> {
    #[account(mut)]
    pub inventory: Account<'info, InventoryData>,

    #[account(mut)]
    pub payer: Signer<'info>,
}

#[account]
pub struct InventoryData {
    pub qty: i64,
}
