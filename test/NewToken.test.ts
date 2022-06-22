import { ethers } from "hardhat";
import { Contract, ContractFactory, Signer } from "ethers";
import { expect } from "chai";
import "@nomiclabs/hardhat-waffle";

describe("NewToken", function () {
    let accounts: Signer[];
    let NewToken: ContractFactory;
    let Newt: Contract;

    beforeEach(async function () {
        accounts = await ethers.getSigners();
        NewToken = await ethers.getContractFactory("NewToken"); // automatically finds token definition
        Newt = await NewToken.connect(accounts[0]).deploy();
    });

    it("prints accounts", async function () {
        accounts.forEach(function (account) {
            console.log("Account with address:", account.getAddress());
        });
    });

    it("mints NEWT", async function () {
        expect(await Newt.balanceOf(Newt.address)).to.equal(0);
        console.log(await Newt.totalSupply(), "NEWT minted");
    });

    it("burns NEWT", async function () {
        let numTokens = 12.9;
        numTokens = Math.floor(numTokens);

        expect(numTokens > 0 && numTokens <= 3141592);
        Newt.burn(numTokens);
        console.log(numTokens, "NEWT burned");
    });
});
