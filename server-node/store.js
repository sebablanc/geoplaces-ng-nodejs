const client = require('redis').createClient({
    port: 6379,
    host: 'db'
});
const { promisify } = require("util");

client.on('connect', () => {
    console.log('Redis client connected');
});

client.on("error", (error) => {
    console.error(error);
});

const get = promisify(client.get).bind(client);
const set = promisify(client.set).bind(client);
const getList = promisify(client.lrange).bind(client);
const keys = promisify(client.keys).bind(client);
const geoRadius = promisify(client.georadius).bind(client);
const geoAdd = promisify(client.geoadd).bind(client);



module.exports = {
    get,
    set,
    getList,
    keys,
    geoRadius,
    geoAdd
};