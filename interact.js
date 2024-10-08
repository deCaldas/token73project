const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:8545"); // Conexión a la blockchain local

const abi = [
  /* ABI generado por el contrato compilado */
];
const contractAddress = "0x..."; // Dirección del contrato desplegado

const contract = new web3.eth.Contract(abi, contractAddress);

// Ver saldo de una cuenta
async function getBalance(address) {
  const balance = await contract.methods.balanceOf(address).call();
  console.log(`Saldo de T73: ${balance}`);
}

getBalance("0x..."); // Dirección de una cuenta de Ganache
