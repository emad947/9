let player = game.createSprite(4, 2)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    player.move(-1)
})
