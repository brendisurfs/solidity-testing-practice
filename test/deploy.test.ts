import { expect } from "chai";
import { Signer } from "ethers";
import { ethers } from "hardhat";
const println = (args: any) => console.log(args);

const TOTAL_TOKEN_SUPPLY = 10_000_000_000;

describe("Token ", () => {
  let accounts: Signer[];

  beforeEach(async () => {
    accounts = await ethers.getSigners();
  });

  it("should pass 50 tokens to the address", async () => {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("TokenV1");

    // pass in args here for the constructor.
    const hhToken = await Token.deploy(TOTAL_TOKEN_SUPPLY);

    let ownerBalance = await hhToken.balanceOf(owner.address);
    await hhToken.connect(owner).transfer(addr2.address, 50);

    expect(await hhToken.balanceOf(addr2.address)).to.equal(50);

    ownerBalance = await hhToken.balanceOf(owner.address);

    const addr2balance = await hhToken.balanceOf(addr2.address);
    console.log(ownerBalance.toLocaleString() + " BRNG");
    println("address 2 : " + addr2balance + " BRNG");
  });
});
