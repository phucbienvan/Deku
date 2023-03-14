async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Token = await ethers.getContractFactory("DekuCrowdSale");
    const token = await Token.deploy(1000, 100, '0x0445501FD391ea9aB2C9aFaeA9914e7c1228580F', '0x054bC1Edb52C41877B7F1C2C21156540CDd2dbdF');
  
    console.log("Deku crowd sale address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  