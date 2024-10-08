module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Dirección local
      port: 8545, // Puerto por defecto de Ganache CLI o Desktop
      network_id: "*", // Cualquier red (lo que es válido para la blockchain local)
    },
  },
  compilers: {
    solc: {
      version: "0.8.20", // Versión de Solidity que estás utilizando
    },
  },
};
