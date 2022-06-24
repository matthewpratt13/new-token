// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NewToken is ERC20 {
    uint256 _totalSupply = 1_000_000;

    constructor() ERC20("New Token", "NEWT") {
        _mint(msg.sender, _totalSupply);
    }

    function totalSupply() public view override returns (uint256) {
        return _totalSupply;
    }

    function burn(uint256 value) public {
        _burn(msg.sender, value);
    }
}
