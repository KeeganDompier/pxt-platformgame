namespace SpriteKind {
    export const Object = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Jared.vy = -50
    Trampo.setKind(SpriteKind.Object)
    Trampo.x += Math.randomRange(-70, 70)
    Trampo.y += Math.randomRange(-50, -51)
})
let Trampo: Sprite = null
let Jared: Sprite = null
scene.setBackgroundColor(9)
Jared = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e . . . . . 
. . . . . e e e e e e . . . . . 
. . e e e e e e e e e e e e . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . . 3 7 3 3 7 3 . . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . . 3 3 8 8 3 3 . . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . . 3 . . . . 3 . . . . . 
. . . . . 3 . . . . 3 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(Jared)
Jared.ay = 25
Trampo = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f f f f f f f f f f f f f f f f 
. 5 . . . . . 5 . . . . . 5 . . 
5 . 5 . . . 5 . 5 . . . 5 . 5 . 
. . . 5 . 5 . . . 5 . 5 . . . 5 
. . . . 5 . . . . . 5 . . . . . 
. . . 5 . 5 . . . 5 . 5 . . . 5 
5 . 5 . . . 5 . 5 . . . 5 . 5 . 
. 5 . . . . . 5 . . . . . 5 . . 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Object)
Jared.setPosition(50, 50)
Trampo.setPosition(50, 50)
game.onUpdate(function () {
    Jared.x += controller.dx()
})
