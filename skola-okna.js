let posunBlok = 0
let pocet = 0
player.onChat("okna", function () {
    builder.face(SOUTH)
    builder.teleportTo(world(0, 13, 1))
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 2; index++) {
            posunBlok = 3
            for (let index = 0; index < 4; index++) {
                okno()
                builder.move(FORWARD, posunBlok)
                if (posunBlok == 3) {
                    posunBlok = 2
                } else {
                    posunBlok += 1
                }
            }
            builder.turn(RIGHT_TURN)
            builder.move(FORWARD, 2)
            okno()
            builder.turn(LEFT_TURN)
            builder.shift(6, 0, 1)
            for (let index = 0; index < 2; index++) {
                okno()
                builder.move(FORWARD, 2)
            }
            builder.turn(RIGHT_TURN)
            builder.move(FORWARD, 1)
            for (let index = 0; index < 2; index++) {
                okno()
                builder.move(FORWARD, 2)
            }
            builder.shift(0, 0, 2)
            builder.turn(LEFT_TURN)
            for (let index = 0; index < 2; index++) {
                okno()
                builder.move(FORWARD, 3)
            }
            builder.shift(-2, 0, -2)
            builder.turn(RIGHT_TURN)
            posunBlok = 3
            for (let index = 0; index < 2; index++) {
                for (let index = 0; index < 6; index++) {
                    okno()
                    builder.move(FORWARD, posunBlok)
                    if (posunBlok == 3) {
                        posunBlok = 2
                    } else {
                        posunBlok += 1
                    }
                }
                builder.move(FORWARD, 4)
                posunBlok = 3
            }
            builder.move(BACK, 4)
            builder.turn(RIGHT_TURN)
            builder.move(FORWARD, 2)
            for (let index = 0; index < 2; index++) {
                okno()
                builder.move(FORWARD, 2)
            }
            builder.turn(LEFT_TURN)
            builder.move(FORWARD, 2)
            for (let index = 0; index < 2; index++) {
                okno()
                builder.move(FORWARD, 2)
            }
            builder.move(BACK, 1)
            builder.turn(RIGHT_TURN)
            builder.move(FORWARD, 2)
            for (let index = 0; index < 2; index++) {
                okno()
                builder.move(FORWARD, 2)
            }
            builder.shift(4, 0, -1)
            builder.turn(LEFT_TURN)
            okno()
            builder.shift(2, 0, -2)
            builder.turn(RIGHT_TURN)
            pocet = 3
            for (let index = 0; index < 4; index++) {
                okno()
                builder.move(FORWARD, posunBlok)
                if (posunBlok == 3) {
                    posunBlok = 2
                } else {
                    posunBlok += 1
                }
            }
        }
        builder.move(DOWN, 4)
    }
})
function okno () {
    builder.mark()
    builder.shift(1, 1, 0)
    builder.fill(GLASS)
    builder.move(DOWN, 1)
}
