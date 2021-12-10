input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    difference = Math.abs(7000 - elapsed)
    score = difference / 1000
    music.setVolume(255)
    basic.showNumber(Math.round(score))
    basic.pause(2000)
    if (score <= 2) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.showIcon(IconNames.Happy)
    } else {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showIcon(IconNames.Sad)
    }
})
let score = 0
let difference = 0
let elapsed = 0
let start = 0
basic.showString("START")
basic.showArrow(ArrowNames.West)
basic.showString("7Sec")
basic.showArrow(ArrowNames.East)
basic.clearScreen()
