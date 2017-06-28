self.onmessage = function(e) {
    var uInt8Array = e.data;
    console.log(uInt8Array)
    postMessage("Inside worker.js: uInt8Array.toString() = " + uInt8Array.toString());
    postMessage("Inside worker.js: uInt8Array.byteLength = " + uInt8Array.byteLength);
}
