// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import {NearX} from "../src/NearX.sol";


contract Deploy is Script {
    NearX token;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        token = new NearX();

        console2.log("NearX Token: ", address(token));

        vm.stopBroadcast();
    }
}
