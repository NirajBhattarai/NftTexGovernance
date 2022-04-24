const hre = require("hardhat");

async function main() {
  const Governance2 = await hre.ethers.getContractFactory(
    "ShardedWallet"
  );
  const deployedGovernance2 = await Governance2.deploy(
  );

  await deployedGovernance2.deployed();

  console.log(
    "Deployed Governance2 Address:",
    deployedGovernance2.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
