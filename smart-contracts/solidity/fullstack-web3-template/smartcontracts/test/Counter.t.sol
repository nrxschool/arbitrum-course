// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {BaseSetup} from "./BaseSetup.t.sol";

contract CounterTest is BaseSetup {
    function setUp() public override {
        BaseSetup.setUp();
        counter.set_number(0);
    }

    function test_Increment() public {
        counter.increment();
        assertEq(counter.number(), 1);
    }

    function testFuzz_Set_number(uint256 x) public {
        counter.set_number(x);
        assertEq(counter.number(), x);
    }
}
