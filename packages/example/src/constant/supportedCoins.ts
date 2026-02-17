export enum SupportedCoins {
  RDD_LEGACY = 'RDD_LEGACY',
  RDD = 'RDD_SEGWIT',
  RDD_NATIVE_SEGWIT = 'RDD_NATIVE_SEGWIT',
  RDD_TESTNET_SEGWIT = 'RDD_TESTNET_SEGWIT',
  RDD_TESTNET_LEGACY = 'RDD_TESTNET_LEGACY',
  RDD_TESTNET_NATIVE_SEGWIT = 'RDD_TESTNET_NATIVE_SEGWIT',
}

export const Coins = Object.values(SupportedCoins);


export enum BitcoinNetworkCode {
  Main = 'RDD',
  Test = 'RDD_TESTNET'
}
