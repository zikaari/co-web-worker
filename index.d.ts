declare class CrossOriginWorker extends Worker {
    /**
     * Creates a cross-origin web worker through proxy
     *
     * scriptUrl must be absolute.
     * Valid Example: `https://example.com/js/worker.js`
     * Invalid Example: `../worker.js`
     * @param scriptUrl
     */
    constructor(scriptUrl: string);
}

export default CrossOriginWorker;
