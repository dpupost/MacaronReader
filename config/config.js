var config = {};

config.mongoDb = {};
config.mongoDb.host = 'localhost';
config.mongoDb.port = 27017;
config.mongoDb.database = 'MacaronReader';
config.mongoDb.uri = `mongodb://${config.mongoDb.host}:${config.mongoDb.port}/${config.mongoDb.database}`;

module.exports = config;