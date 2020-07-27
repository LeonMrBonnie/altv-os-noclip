import * as alt from "alt-client";
import * as native from "natives";

export default class NoClip {
    static enabled = false;
    static speed = 3.0;
    static everyTick = null;

    static start() {
        if (NoClip.enabled) return;
        NoClip.enabled = true;
        native.freezeEntityPosition(alt.Player.local.scriptID, true);
        this.everyTick = alt.everyTick(NoClip.keyHandler);
    }
    static stop() {
        if (!NoClip.enabled) return;
        NoClip.enabled = false;
        native.freezeEntityPosition(alt.Player.local.scriptID, false);
        alt.clearEveryTick(this.everyTick);
    }

    static KEYS = {
        FORWARD: 32,
        BACKWARD: 33,
        LEFT: 34,
        RIGHT: 35,
        UP: 22,
        DOWN: 36,
        SHIFT: 21,
    };
    static keyHandler() {
        let currentPos = alt.Player.local.pos;
        let speed = NoClip.speed;
        let rot = native.getGameplayCamRot(2);
        let dirForward = camVectorForward(rot);
        let dirRight = camVectorRight(rot);

        if (native.isDisabledControlPressed(0, NoClip.KEYS.SHIFT))
            speed = speed * 5;

        if (native.isDisabledControlPressed(0, NoClip.KEYS.FORWARD))
            currentPos = addSpeedToVector(currentPos, dirForward, speed);
        if (native.isDisabledControlPressed(0, NoClip.KEYS.BACKWARD))
            currentPos = addSpeedToVector(currentPos, dirForward, -speed);
        if (native.isDisabledControlPressed(0, NoClip.KEYS.LEFT))
            currentPos = addSpeedToVector(currentPos, dirRight, -speed, true);
        if (native.isDisabledControlPressed(0, NoClip.KEYS.RIGHT))
            currentPos = addSpeedToVector(currentPos, dirRight, speed, true);
        let zModifier = 0;
        if (native.isDisabledControlPressed(0, NoClip.KEYS.UP))
            zModifier += speed;
        if (native.isDisabledControlPressed(0, NoClip.KEYS.DOWN))
            zModifier -= speed;

        if (
            !isVectorEqual(
                new alt.Vector3(
                    currentPos.x,
                    currentPos.y,
                    currentPos.z + zModifier
                ),
                alt.Player.local.pos
            )
        )
            alt.emitServer(
                "noclip:setPos",
                currentPos.x,
                currentPos.y,
                currentPos.z + zModifier
            );
    }
}

function addSpeedToVector(vector1, vector2, speed, lr = false) {
    return new alt.Vector3(
        vector1.x + vector2.x * speed,
        vector1.y + vector2.y * speed,
        lr === true ? vector1.z : vector1.z + vector2.z * speed
    );
}

function camVectorForward(camRot) {
    let rotInRad = {
        x: camRot.x * (Math.PI / 180),
        y: camRot.y * (Math.PI / 180),
        z: camRot.z * (Math.PI / 180) + Math.PI / 2,
    };

    let camDir = {
        x: Math.cos(rotInRad.z),
        y: Math.sin(rotInRad.z),
        z: Math.sin(rotInRad.x),
    };

    return camDir;
}

function camVectorRight(camRot) {
    let rotInRad = {
        x: camRot.x * (Math.PI / 180),
        y: camRot.y * (Math.PI / 180),
        z: camRot.z * (Math.PI / 180),
    };

    var camDir = {
        x: Math.cos(rotInRad.z),
        y: Math.sin(rotInRad.z),
        z: Math.sin(rotInRad.x),
    };

    return camDir;
}

function isVectorEqual(vector1, vector2) {
    return (
        vector1.x === vector2.x &&
        vector1.y === vector2.y &&
        vector1.z === vector2.z
    );
}

alt.on("noclip:start", start);
alt.onServer("noclip:start", start);
function start() {
    if(NoClip.enabled) return;
    NoClip.start();
}

alt.on("noclip:stop", stop);
alt.onServer("noclip:stop", stop);
function stop() {
    if(!NoClip.enabled) return;
    NoClip.stop();
}