let patro = 0
player.onChat("strop", function () {
    patro = 3
    for (let index = 0; index < 4; index++) {
        builder.teleportTo(world(-10, patro, -34))
        builder.mark()
        builder.teleportTo(world(-56, patro, 34))
        builder.fill(WHITE_CONCRETE)
        builder.teleportTo(world(-63, patro, 20))
        builder.mark()
        builder.teleportTo(world(-3, patro, 26))
        builder.fill(WHITE_CONCRETE)
        builder.teleportTo(world(-1, patro, 14))
        builder.mark()
        builder.teleportTo(world(-65, patro, -14))
        builder.fill(WHITE_CONCRETE)
        builder.teleportTo(world(-63, patro, -20))
        builder.mark()
        builder.teleportTo(world(-3, patro, -26))
        builder.fill(WHITE_CONCRETE)
        builder.teleportTo(world(-8, patro, -19))
        builder.mark()
        builder.teleportTo(world(-58, patro, 19))
        builder.fill(WHITE_CONCRETE)
        patro += 4
    }
    builder.face(SOUTH)
    builder.teleportTo(world(-21, 3, -15))
    builder.mark()
    for (let index = 0; index < 2; index++) {
        builder.shift(30, 12, 0)
        builder.fill(YELLOW_TERRACOTTA)
        builder.mark()
        builder.turn(RIGHT_TURN)
        builder.shift(24, -12, 0)
        builder.fill(YELLOW_TERRACOTTA)
        builder.mark()
        builder.turn(RIGHT_TURN)
    }
    builder.teleportTo(world(-22, 15, -14))
    builder.mark()
    builder.teleportTo(world(-44, 4, 14))
    builder.fill(AIR)
})
