input.onButtonPressed(Button.A, function () {
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Yards = Feet / 3
    basic.showNumber(Yards)
    basic.showString("Yards")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Meters = Feet * 0.3
    basic.showNumber(Meters)
    basic.showString("Meters")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Centimeters = Inches * 2.54
    basic.showNumber(Centimeters)
    basic.showString("Centimeters")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Inches = Feet * 12
    basic.showNumber(Inches)
    basic.showString("Inches")
})
let Inches = 0
let Centimeters = 0
let Meters = 0
let Yards = 0
let Feet = 0
Feet = randint(1, 100)
basic.forever(function () {
	
})
