var led = require('./led')

function RGBLed () {
  var redLed = new led(20);
  var greenLed = new led(14);
  var blueLed = new led(0);

  return {
    setRGB: setRGB
  }

  function setRGB(r,g,b) {
    redLed.setValue(r)
    greenLed.setValue(g)
    blueLed.setValue(b)
  }
}

module.exports = RGBLed
