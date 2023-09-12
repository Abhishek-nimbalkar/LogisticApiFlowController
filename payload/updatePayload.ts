import { faker } from '@faker-js/faker';

const message_id = faker.string.uuid();
const timestamp = new Date().toISOString();
export const updatePayload = (
  order_id: string,
  transaction_id: string,
  fulfillment_id: string,
  bap_uri: string,
) => {
  return {
    context: {
      domain: 'nic2004:60232',
      country: 'IND',
      city: 'std:0172',
      action: 'update',
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
      update_target: 'fulfillment',
      order: {
        id: order_id,
        items: [
          {
            id: 'express',
            fulfillment_id: fulfillment_id,
            category_id: 'Immediate Delivery',
            descriptor: {
              code: 'P2P',
            },
            time: {
              label: 'TAT',
              duration: 'PT60M',
              timestamp: '2023-09-09',
            },
          },
        ],
        fulfillments: [
          {
            id: fulfillment_id,
            type: 'Delivery',
            start: {
              instructions: {
                code: '3',
                short_desc: '070147',
                long_desc: 'Order pickup code.',
              },
            },
            end: {},
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
          order: {
            id: 'f5f43ebd-2b5f-4420-a574-64d080fb0269',
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
        updated_at: timestamp,
      },
    },
  };
};
