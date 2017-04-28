'use strict'

module.exports = {
    name: 'API',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: 5000,
    base_url: 'http://localhost:5000',
    db: {
        uri: 'mysql://127.0.0.1:3306/people',
    },
}