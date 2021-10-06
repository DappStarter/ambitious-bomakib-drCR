require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile proof hunt help food spray'; 
let testAccounts = [
"0x86f76bd69f4fd16b326a0540fca64c1127aa44f15b8574314399ad5eb2ea2953",
"0xd1ce3b5e0f5fc1650e12f2424bc530fb9e036d70d10541bc53a554f6678a180c",
"0x69762d1ea4dbd0f6a7b3022fd38b1bf830d9e00d9ed7ce8d520cfe908e3ad509",
"0xa0fc684535529e4e68652d19d21373b978458f1561c40a088bf663d4b550e21d",
"0xc1df690b7dfcbbb1d42686f4c3fd81a21406fa20aaf7d58afeb353658b584c61",
"0x66ea705c46c58e3ee3e9956b47c29c55a923f3be278c112b0cbae943b8acbe0c",
"0xecc684c141ab4960b5de461eccef02e0d93b521cce2047f4d5b28a3316edf94a",
"0x01495b265de200c394551c3472502d5241abe26b0d9f391a595b9a2102710291",
"0x5c3ad73be09b77dedbddaaf86e1a001cd628b79595e9f13e14a24a3941298726",
"0xf0697d45c30914d18cd2b90aa7be0f257d7ffa1602c67381b832132c83b14f8a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


