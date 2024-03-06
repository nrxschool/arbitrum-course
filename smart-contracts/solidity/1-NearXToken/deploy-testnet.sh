source .env


forge script script/NearX.s.sol:Deploy \
    --private-key $PRIVATE_KEY \
    --rpc-url http://127.0.0.1:8449 \
    --gas-limit 1000000 \
    --broadcast
