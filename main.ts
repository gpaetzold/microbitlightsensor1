basic.showIcon(IconNames.Happy)
basic.forever(function on_forever() {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
