var Redirect = function () {
    window.location.replace("http://164.52.221.158:5000/");
}

var FingerPrintDevice = function () {
    console.log("FingerPrintDevice");
    const AvailableHeight = window.screen.availHeight
    const AvailableWidth = window.screen.availHeight
    const numberOfProcessors = navigator.hardwareConcurrency
    const deviceMemory = navigator.deviceMemory
    const devicePixelRatio = window.devicePixelRatio
    console.log(AvailableHeight, AvailableWidth, numberOfProcessors, deviceMemory, devicePixelRatio)
}
Redirect();
FingerPrintDevice();
console.log("here")