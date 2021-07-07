require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile proof hockey arctic tail swap'; 
let testAccounts = [
"0x9346cd00aa0da0df71150217c28cb92f2b878c6f1bda3cc1eaccd705ee259505",
"0x8608dbeb86ee48836f510f0fb2c9595c59b18ee4015679e75c0db57b670ed3b9",
"0x8bfe625d19cc8e7639ff0b255c50b43a3b05dd8a7d0e0eea363daea9ec161078",
"0x48b459e5fa90ac31b9cfa0af6e9889f234dbeb0b6ba61dc742a0aeb8cc5d2112",
"0x183775c491294f007d2dc8eb33e3fd73674349a5abf6f1760e07891dac4109e5",
"0xab921812762946081ef0317f23985f2d9a75e1a571c6199ebc228846a88fa37d",
"0x61d34c7d7c2e40c4c12c74df9ec70a798f178975de817db102e2921f1d71fdd4",
"0x513d6be4f70f0879b6d2a6ef3399b6865646adf2b47d45ab027d115b5242c956",
"0xa4fcb14a2101f48ac838f49d1842bef38db838c1ff1874c5d7dc3ce210dbab01",
"0x341e9d29c9513075b0f567fad8d70684b7cc10bd904aee6eee62e82ae311143f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

