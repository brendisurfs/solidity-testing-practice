import { ethers, upgrades } from "hardhat";

async function main() {
  let Box = await ethers.getContractFactory("TestTokenV1");
  let box = await upgrades.deployProxy(Box, [100000]);

  await box.deployed();

  console.log("Box Deployed to ", box.address);
}

main();
