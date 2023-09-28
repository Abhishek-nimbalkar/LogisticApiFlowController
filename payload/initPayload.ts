import { faker } from '@faker-js/faker';
const message_id = faker.string.uuid();
const transaction_id = faker.string.uuid();
const timestamp = new Date().toISOString();

export const initPayload = (
  providerId: string,
  ff_id: string,
  bap_uri: string,
  items: any,
) => {
  const newItems = [];
  items.forEach((item: any) => {
    if (item.id !== 'rto')
      newItems.push({
        id: item.id,
        fulfillment_id: ff_id,
        category_id: item?.category_id,
        descriptor: {
          code: item?.descriptor?.code,
        },
      });
  });
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
        items: newItems,
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
          type: 'ON-FULFILLMENT',
          '@ondc/org/collection_amount': '300.00',
        },
      },
    },
  };
};
