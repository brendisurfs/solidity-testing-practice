import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("Box", function () {
  it("should swap proxies and hold the same state", async () => {
    const TokenV1 = await ethers.getContractFactory("TokenV1");
    const TokenV2 = await ethers.getContractFactory("TokenV2");

    const instance = await upgrades.deployProxy(TokenV1, [42]);

    const upgraded = await upgrades.upgradeProxy(instance.address, TokenV2);

    const value = await upgraded.value();
    expect(value.toString().to.equal("1000"));
  });
});
