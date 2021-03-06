namespace SpriteKind {
    export const Object = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
8 8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 
8 8 8 8 8 8 8 8 8 8 9 8 8 9 8 8 
8 8 8 8 8 8 8 8 8 8 9 8 8 9 8 8 
8 8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 
8 8 9 8 8 9 8 8 8 8 8 8 8 8 8 8 
8 8 9 8 8 9 8 8 8 8 8 8 8 8 8 8 
8 8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Jared.vy = -50
    Boost.setKind(SpriteKind.Object)
    // Puts boost in front of Jared
    Boost.x += Math.randomRange(-35, 35)
    Boost.y += -50
})
// This adds a lose condition
info.onCountdownEnd(function () {
    game.over(false, effects.dissolve)
})
let Boost: Sprite = null
let Jared: Sprite = null
scene.setBackgroundColor(6)
Jared = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 3 . . . . . . 
. . . . . . 7 3 3 7 . . . . . . 
. . . . . . 3 3 3 3 . . . . . . 
. . . . . d d 3 3 d d . . . . . 
. . 3 3 3 7 e 7 7 e 7 3 3 3 . . 
. . . . . 7 e 7 7 e 7 . . . . . 
. . . . . d d 7 7 d d . . . . . 
. . . . . d d 7 7 d d . . . . . 
. . . . . 2 2 7 7 2 2 . . . . . 
. . . . . 4 4 8 8 4 4 . . . . . 
. . . . . 5 5 8 8 5 5 . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Jared.setPosition(80, 120)
Jared.ay = 5
Boost = sprites.create(img`
. . . . . . 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
`, SpriteKind.Object)
Boost.setPosition(80, 110)
// starts countdown for lose condition
info.startCountdown(15)
scene.cameraFollowSprite(Jared)
game.onUpdate(function () {
    Jared.x += controller.dx()
    if (info.score() == 15) {
        // Adds win condition
        game.over(true, effects.confetti)
    }
})
