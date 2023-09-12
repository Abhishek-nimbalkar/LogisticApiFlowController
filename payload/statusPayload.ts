import { faker } from '@faker-js/faker';
import { bap_uri } from './searchPayload';
const message_id = faker.string.uuid();
const timestamp = new Date().toISOString();
export const statusPayload = (order_id: string, transaction_id: string) => {
  return {
    context: {
      domain: 'nic2004:60232',
      action: 'status',
      country: 'IND',
      city: 'std:080',
      core_version: '1.2.0',
      bap_id: 'logistics_buyer.com',
      bap_uri: bap_uri,
      bpp_id: 'lsp.com',
      bpp_uri: 'https://lsp.com/ondc',
      transaction_id: transaction_id,
      message_id: message_id,
      timestamp: timestamp,
      ttl: 'PT30S',
    },
    message: {
      order_id: order_id,
    },
  };
};
