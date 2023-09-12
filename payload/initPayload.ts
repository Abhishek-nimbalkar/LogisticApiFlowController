import { faker } from '@faker-js/faker';
import { bap_uri } from './searchPayload';
const message_id = faker.string.uuid();
const transaction_id = faker.string.uuid();
const timestamp = new Date().toISOString();

export const initPayload = (providerId: string, ff_id: string) => {
  return {
    context: {
      domain: 'nic2004:60232',
      country: 'IND',
      city: 'std:0172',
      action: 'init',
      core_version: '1.2.0',
      bap_id: 'logistics_buyer.com',
      bap_uri: bap_uri,
      transaction_id: transaction_id,
      message_id: message_id,
      bpp_id: 'lsp.com',
      bpp_uri: 'https://lsp.com/ondc',
      timestamp: timestamp,
      ttl: 'PT30S',
    },
    message: {
      order: {
        provider: {
          id: providerId,
        },
        items: [
          {
            id: 'c5f6d07a-852a-45c6-aa62-4f334d9e34af',
            fulfillment_id: ff_id,
            category_id: 'Immediate Delivery',
            descriptor: {
              code: 'P2P',
            },
          },
        ],
        fulfillments: [
          {
            id: ff_id,
            type: 'Delivery',
            start: {
              location: {
                gps: '30.7467856,76.642856',
                address: {
                  name: 'Kumar chauhan',
                  building: 'f-164',
                  locality: 'chandigarh',
                  city: 'kharar',
                  state: 'punjab',
                  country: 'India',
                  area_code: '140301',
                },
              },
              contact: {
                phone: '9886098860',
                email: 'abcd.efgh@gmail.com',
              },
            },
            end: {
              location: {
                gps: '30.744600, 76.652496',
                address: {
                  name: 'Rohan Kumar',
                  building: 'f-163',
                  locality: 'chandigarh',
                  city: 'kharar',
                  state: 'punjab',
                  country: 'India',
                  area_code: '140301',
                },
              },
              contact: {
                phone: '9886098860',
                email: 'abcd.efgh@gmail.com',
              },
            },
          },
        ],
        billing: {
          name: 'ONDC Logistics Buyer NP',
          address: {
            name: 'Rohan Kumar',
            building: 'f-163',
            locality: 'chandigarh',
            city: 'kharar',
            state: 'punjab',
            country: 'India',
            area_code: '140301',
          },
          tax_number: 'XXXXXXXXXXXXXXX',
          phone: '9886098860',
          email: 'abcd.efgh@gmail.com',
          created_at: timestamp,
          updated_at: timestamp,
        },
        payment: {
          '@ondc/org/settlement_details': [
            {
              settlement_counterparty: 'buyer-app',
              settlement_type: 'upi',
              beneficiary_name: 'xxxxx',
              upi_address: 'gft@oksbi',
              settlement_bank_account_no: 'XXXXXXXXXX',
              settlement_ifsc_code: 'XXXXXXXXX',
            },
          ],
        },
      },
    },
  };
};
