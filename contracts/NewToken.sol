// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NewToken is ERC20 {
    constructor() ERC20("New Token", "NEWT") {
        _mint(msg.sender, 3141592); // PI = 3.141592...
    }

    function burn(uint256 value) public {
        _burn(msg.sender, value);
    }
}
