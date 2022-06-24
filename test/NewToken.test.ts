import { ethers } from "hardhat";
import { Contract, ContractFactory, Signer } from "ethers";
import { expect } from "chai";

describe("NewToken", function () {
    let accounts: Signer[];
    let deployer: Signer;
    let NewToken: ContractFactory;
    let newt: Contract;

    async function getDeployer(): Promise<Signer> {
        return accounts[0];
    }

    beforeEach(async function () {
        accounts = await ethers.getSigners();
        deployer = await getDeployer();
        NewToken = await ethers.getContractFactory("NewToken");
        newt = await NewToken.connect(deployer).deploy();
    });

    it("prints accounts", async function () {
        accounts.forEach(function (account) {
            console.log("Account with address:", account.getAddress());
        });
    });

    it("mints NEWT", async function () {
        await expect(await newt.balanceOf(deployer.getAddress())).to.equal(
            await newt.totalSupply()
        );

        console.log(await newt.totalSupply(), "NEWT minted");
    });

    it("burns NEWT", async function () {
        let numTokens = 678.9;
        numTokens = Math.floor(numTokens);

        await expect(numTokens > 0 && numTokens <= newt.totalSupply());
        await newt.burn(numTokens);

        console.log(numTokens, "NEWT burned");
        console.log(
            "New Balance:",
            await newt.balanceOf(deployer.getAddress()),
            "NEWT"
        );
    });
});
