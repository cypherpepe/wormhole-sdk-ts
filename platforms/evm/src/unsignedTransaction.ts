import { Network, UnsignedTransaction } from '@wormhole-foundation/connect-sdk';
import { TransactionRequest } from 'ethers';
import { EvmChains } from './types';

/**
 * An unsigned transaction for the EVM platform
 */
export class EvmUnsignedTransaction<N extends Network, C extends EvmChains>
  implements UnsignedTransaction<N, C>
{
  constructor(
    readonly transaction: TransactionRequest,
    readonly network: N,
    readonly chain: C,
    readonly description: string,
    readonly parallelizable: boolean = false,
  ) {}
}
