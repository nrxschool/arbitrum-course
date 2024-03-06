// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {NearX, Only_1_TokenPerTransfer} from "../src/NearX.sol";

contract NearXTest is Test {
    NearX public token;

    function setUp() public {
        vm.prank(address(0x11));
        token = new NearX();
    }

    function test_balance(address addr) public {
        assertEq(token.balanceOf(addr), 1 ether);
    }

    function test_transfer() public {
        vm.prank(address(0x11));
        token.transfer(address(0x22), 1 ether);

        assertEq(token.balanceOf(address(0x22)), 2 ether);
    }

    function test_transfer_more_than_one() public {

        vm.startPrank(address(0x11));

        vm.expectRevert(Only_1_TokenPerTransfer.selector);
        token.transfer(address(0x22), 2 ether);

        vm.stopPrank();
    }
}
