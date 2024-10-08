// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token73 is ERC20 {
    constructor(uint256 initialSupply) ERC20("Token 73", "T73") {
        _mint(msg.sender, initialSupply);
    }
}
