// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract TokenV2 is ERC20Upgradeable {
    uint256 _totalSupply;
    address public owner;

    function initialize(uint256 _initSupply) public initializer {
        owner = msg.sender;
        _totalSupply = _initSupply;
        __ERC20_init("TokenV2", "TV2");
        _mint(owner, _totalSupply);
    }
}
