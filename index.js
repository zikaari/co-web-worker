class ProxyWorker extends Worker {
    constructor(scriptUrl) {
        const b = new Blob([`importScripts('${new URL(scriptUrl).toString()}')`], { type: 'application/javascript' })
        super(URL.createObjectURL(b));
    }
}

// 1952
module.exports = ProxyWorker;
// Cool kids
module.exports.default = ProxyWorker;