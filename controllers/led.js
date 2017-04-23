var mraa = require('mraa');

function Led(pin) {
  var _pwmController = new mraa.Pwm(pin); // C++ binding to edison pulse width modulation
  var _ledType = 1; // 1 = anode, 0 = cathode
  var _value = 0;

  enableLed();

  return {
    setValue: setValue,
    setType: setType,
    disableLed: disableLed
  };

  function enableLed() {
    _pwmController.enable(true);
  }

  function disableLed() {
    _pwmController.enable(false);
  } 

  // set value of led (0 - 255)
  function setValue(val) {
    if (val < 0 || val > 255) {
      console.log("Value must be between 0 and 255");
      return;
    }
    _value = valToDutyCycle(val);
    _pwmController.write(_value);
  }

  // return current value of led (0 - 255)
  function getValue() {
    return _value;
  }

  // 1 = anode, 0 = cathode
  function setType(type) {
    _ledType = type;
  }

  function valToDutyCycle(val) {
    var dc = val / 255;
    if (dc === 1 && _ledType === 1) { dc = .99999 } // setting common anode to 0 doesn't work
    return _ledType === 1 ? 1 - dc : dc;
  }
}

module.exports = Led;
