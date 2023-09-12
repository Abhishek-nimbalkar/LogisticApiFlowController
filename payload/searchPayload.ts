import { faker } from '@faker-js/faker';
export const bap_uri = 'https://bbcf-112-196-2-205.ngrok-free.app';

const transaction_id = faker.string.uuid();
export const message_id = faker.string.uuid();
export const timestamp = new Date().toISOString();
export const searchPayload = {
  context: {
    domain: 'nic2004:60232',
    country: 'IND',
    city: 'std:0172',
    action: 'search',
    core_version: '1.2.0',
    bap_id: 'logistics_buyer.com',
    bap_uri: bap_uri,
    transaction_id: transaction_id,
    message_id: message_id,
    timestamp: timestamp,
    ttl: 'PT30S',
  },
  message: {
    intent: {
      category: {
        id: 'Immediate Delivery',
      },
      provider: {
        time: {
          days: '1,2,3,4,5,6,7',
          schedule: {
            holidays: [],
          },
          duration: 'PT30M',
          range: {
            start: '1100',
            end: '2200',
          },
        },
      },
      fulfillment: {
        type: 'Delivery',
        start: {
          location: {
            gps: '30.7467833, 76.642853',
            address: {
              area_code: '140301',
            },
          },
        },
        end: {
          location: {
            gps: '30.744600, 76.652496',
            address: {
              area_code: '140301',
            },
          },
        },
      },
      payment: {
        type: 'POST-FULFILLMENT',
        '@ondc/org/collection_amount': '300.00',
      },
      '@ondc/org/payload_details': {
        weight: {
          unit: 'kilogram',
          value: 4,
        },
        dimensions: {
          length: {
            unit: 'centimeter',
            value: 10,
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
        category: 'Grocery',
        value: {
          currency: 'INR',
          value: '500.00',
        },
        dangerous_goods: false,
      },
    },
  },
};
