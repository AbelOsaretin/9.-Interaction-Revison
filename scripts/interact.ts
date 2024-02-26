import { ethers } from "hardhat";

async function main() {
  const save = "0xEE084C599833772Ff66F02dc723E488B6D7C82e1";

  const test = "0xB4f8709064751078CbaE907F57330910f570bbbe";

  const SaveERC20CA = await ethers.getContractAt("SaveERC20", save);

  const TestTokenCA = await ethers.getContractAt("ITestToken", test);

  const Amount = ethers.parseUnits("100");

  const ApproveTX = await TestTokenCA.approve(save, Amount);

  await ApproveTX.wait();

  console.log(ApproveTX);

  const DepositTX = await SaveERC20CA.DepositERC20(TestTokenCA, Amount);

  await DepositTX.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
