import * as alt from "alt-server";

alt.onClient("noclip:setPos", (player, x, y, z) => {
    player.pos = new alt.Vector3(x, y, z);
});