basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
