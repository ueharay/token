import { ethers } from "ethers";

async function main() {
    const wallet = ethers.Wallet.createRandom();
    console.log("Address:", wallet.address);
    console.log("PrivateKey:", wallet.privateKey);
}

main();
