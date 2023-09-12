import { faker } from '@faker-js/faker';
const order_id = faker.string.uuid();
const message_id = faker.string.uuid();
const timestamp = new Date().toISOString();
export const confirmPayload = (
  trx_id: string,
  provider_id: string,
  full_id: string,
  quote: any,
  billing: { created_at: string; updated_at: string },
  bap_uri: string,
) => {
  return {
    context: {
      domain: 'nic2004:60232',
      country: 'IND',
      city: 'std:080',
      action: 'confirm',
      core_version: '1.2.0',
      bap_id: 'logistics_buyer.com',
      bap_uri: bap_uri,
      bpp_id: 'lsp.com',
      bpp_uri: 'https://lsp.com/ondc',
      transaction_id: trx_id,
      message_id: message_id,
      timestamp: timestamp,
      ttl: 'PT30S',
    },
    message: {
      order: {
        id: order_id,
        state: 'Created',
        provider: {
          id: provider_id,
          locations: [
            {
              id: '64f1bb471d58d44f5c8f4134',
            },
          ],
        },
        items: [
          {
            id: 'ty',
            fulfillment_id: full_id,
            category_id: 'Immediate Delivery',
            descriptor: {
              code: 'P2P',
            },
            time: {
              label: 'TAT',
              duration: 'PT45M',
              timestamp: '2023-09-04',
            },
          },
        ],
        quote: {
          price: quote.price,
          breakup: quote.breakup,
        },
        fulfillments: [
          {
            id: full_id,
            type: 'Delivery',
            start: {
              time: {
                duration: 'PT15M',
              },
              person: {
                name: 'Kumar chauhan',
              },
              location: {
                gps: '30.7467833,76.642853',
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
              instructions: {
                code: 'P2P',
                short_desc: 'value of PCC',
              },
            },
            end: {
              person: {
                name: 'Rohan Kumar',
              },
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
              instructions: {
                code: 'P2P',
                short_desc: 'value of DCC',
              },
            },
            tags: [
              {
                code: 'state',
                list: [
                  {
                    code: 'ready_to_ship',
                    value: 'yes',
                  },
                ],
              },
            ],
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
          created_at: billing.created_at,
          updated_at: billing.updated_at,
        },
        payment: {
          '@ondc/org/collection_amount': '300.00',
          type: 'ON-FULFILLMENT',
        },
        '@ondc/org/linked_order': {
          items: [
            {
              category_id: 'Grocery',
              descriptor: {
                name: 'Atta',
              },
              quantity: {
                count: 1,
                measure: {
                  unit: 'kilogram',
                  value: 5,
                },
              },
              price: {
                currency: 'INR',
                value: '300.00',
              },
            },
          ],
          provider: {
            descriptor: {
              name: 'Aadishwar Store',
            },
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
          order: {
            id: '721a3a44-87ab-4f50-8424-8ad1f8b7ed7c',
            weight: {
              unit: 'kilogram',
              value: 5,
            },
            dimensions: {
              length: {
                unit: 'centimeter',
                value: 15,
              },
              breadth: {
                unit: 'centimeter',
                value: 10,
              },
              height: {
                unit: 'centimeter',
                value: 10,
              },
            },
          },
        },
        tags: [
          {
            code: 'bpp_terms',
            list: [
              {
                code: 'max_liability',
                value: '2',
              },
              {
                code: 'max_liability_cap',
                value: '10000',
              },
              {
                code: 'mandatory_arbitration',
                value: 'false',
              },
              {
                code: 'court_jurisdiction',
                value: 'Bengaluru',
              },
              {
                code: 'delay_interest',
                value: '1000',
              },
              {
                code: 'static_terms',
                value:
                  'https://github.com/ONDC-Official/protocol-network-extension/discussions/79',
              },
            ],
          },
          {
            code: 'bap_terms',
            list: [
              {
                code: 'accept_bpp_terms',
                value: 'Y',
              },
            ],
          },
        ],
        created_at: '2023-09-04T10:38:40.990Z',
        updated_at: '2023-09-04T10:38:40.990Z',
      },
    },
  };
};
