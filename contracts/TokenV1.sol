// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenV1 is ERC20 {
    uint256 _totalSupply;
    address public owner;

    constructor(uint256 _initSupply) ERC20("TokenV2", "TV2") {
        owner = msg.sender;
        _totalSupply = _initSupply;
        _mint(owner, _totalSupply);
    }
}
