//in this file we can add connect to DB or options for start server on another port

const config = {
    serverDef: {
        port: 3500
    }
};

let currencies = {
    autorized: ['BTC', 'LTC', 'DASH', 'ETH', 'USD', 'EUR', 'XRP'],
    nonAutorized: ['BTC', 'USD']
};

const rateApi ='https://api.cryptonator.com/api/ticker/';

const typeAuth='Basic'

const tokens = [
    'YWxhZGRpbjpvcGVuc2VzYW1l',
    'YWxhRBRpbjpvcGVuc2VzYW1l',
    'YWxhZGRpbjpvcGVuc2VzYW2B',
    'NTxhZGRpbjpvcGVuc2VzYW1l'];

export { config, currencies, tokens, rateApi, typeAuth };