// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenV2 is ERC20 {
    uint256 _totalSupply;
    address public owner;

    constructor(uint256 _initSupply) ERC20("TokenV1", "TV1") {
        owner = msg.sender;
        _totalSupply = _initSupply;
        _mint(owner, _totalSupply);
    }
}
