import { BitcoinUnit } from './../interface';
import { BitcoinNetwork } from '../interface';

export type BitcoinUnits = 'RDD' | 'sats' | 'tRDD' | 'tsats' | 'USD';

export const bitcoinUnitMap: Record<BitcoinNetwork, Record<BitcoinUnit, BitcoinUnits>> = {
  [BitcoinNetwork.Main] : {
    [BitcoinUnit.BTC]: 'RDD',
    sats: 'sats',
    Currency: 'USD',
  },
  [BitcoinNetwork.Test] : {
    [BitcoinUnit.BTC]: 'tRDD',
    sats: 'tsats',
    Currency: 'USD',
  }
};

export const isBTC = (unit: BitcoinUnits) => {
  return [bitcoinUnitMap[BitcoinNetwork.Main][BitcoinUnit.BTC], bitcoinUnitMap[BitcoinNetwork.Test][BitcoinUnit.BTC]].includes(unit);
};
