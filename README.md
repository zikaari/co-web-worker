# Cross-origin web workers using proxies (kinda)

## What???

If a site is on domain `https://abc.com` and wants to run a web worker located at `https://xyz.com/dist/worker.js`, it won't work.

Cross-origin web workers are not allowed.

So what can be done to get a worker at `xyz.com` run on `abc.com`?

Say no more.

### Install

```bash
$ npm i co-web-worker
```

### Light it up

```javascript
import ProxyWorker from 'co-web-worker';

console.log(window.location.origin);
// > https://abc.com

const worker = new ProxyWorker('https://xyz.com/dist/worker.js');

console.log(worker instanceof Worker);
// > true

```

## License

Licensed under MIT license. See `LICENSE` at root of this repo for more information.
