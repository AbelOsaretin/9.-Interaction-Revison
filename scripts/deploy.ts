import { ethers } from "hardhat";

async function main() {
  const TestToken = await ethers.deployContract("TestToken");

  await TestToken.waitForDeployment();

  console.log(`TestToken deployed to ${TestToken.target}`);

  console.log(
    "---------------------------------------------------------------------------------------------"
  );
  console.log(
    "---------------------------------------------------------------------------------------------"
  );
  console.log(
    "---------------------------------------------------------------------------------------------"
  );

  const SaveERC20 = await ethers.deployContract("SaveERC20");

  await SaveERC20.waitForDeployment();

  console.log(`SaveERC20 Contract deployed to ${SaveERC20.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
