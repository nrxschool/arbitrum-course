// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract Counter {
    uint256 public number;
    bool state;



    function increment() public {
        number++;
    }

    function flip() external {
        state = !state;
    }

    function getState() external view returns (bool) {
        return state;
    }
}
