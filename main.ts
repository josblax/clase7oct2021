enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero.vy == 0) {
        hero.vy = -300
    }
})
let hero: Sprite = null
hero = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
scene.cameraFollowSprite(hero)
hero.ay = 1500
controller.moveSprite(hero, 80, 0)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
let idle = animation.createAnimation(ActionKind.Idle, 500)
let walking = animation.createAnimation(ActionKind.Walking, 100)
idle.addAnimationFrame(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
idle.addAnimationFrame(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    ..ffffddddeef...........
    .fddddf44eef............
    .fbbbbf22f4e............
    .fbbbbf22fd4............
    ..fccf454f44............
    ...fffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
walking.addAnimationFrame(img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee............
    ...f2222e2f.............
    ...f444455f.............
    ....ffffff..............
    .....fff................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
walking.addAnimationFrame(img`
    .......ff...............
    ....ffff2ff.............
    ..ffeeeef2ff............
    .ffeeeeef22ff...........
    .feeeeffeeeef...........
    .fffffee2222ef..........
    fffe222ffffe2f..........
    ffffffffeeefff..........
    fefe44ebf44eef..........
    .fee4d4bfddef...........
    ..feee4dddee.c..........
    ...f2222eeddeccccccc....
    ...f444e44ddecddddd.....
    ...fffffeeee.ccccc......
    ..ffffffff...c..........
    ..fff..ff...............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
animation.attachAnimation(hero, idle)
animation.attachAnimation(hero, walking)
game.onUpdate(function () {
    if (hero.vx > 0) {
        animation.setAction(hero, ActionKind.Walking)
    } else {
        animation.setAction(hero, ActionKind.Idle)
    }
})
