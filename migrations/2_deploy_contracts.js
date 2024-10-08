const Token73 = artifacts.require("Token73");

module.exports = function (deployer) {
  const initialSupply = web3.utils.toBN(web3.utils.toWei("5329", "ether")); // Convertimos a BigNumber y luego a wei
  deployer.deploy(Token73, initialSupply);
};
