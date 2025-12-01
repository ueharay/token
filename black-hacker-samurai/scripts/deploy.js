import hre from "hardhat";

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const contract = await hre.ethers.deployContract("BlackHackerSamurai", [deployer.address]);

    await contract.waitForDeployment();

    console.log(
        `BlackHackerSamurai deployed to ${contract.target}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
