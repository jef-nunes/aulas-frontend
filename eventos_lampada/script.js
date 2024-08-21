class Lamp {
    static image;
    static btn_on;
    static btn_off;

    static toggleLight(intState) {
        if (intState === 1) {
            Lamp.image.src = "images/lamp_on_v2.png";
        } else {
            Lamp.image.src = "images/lamp_off_V2.png";
        }
    }

    static activate() {
        Lamp.image = document.querySelector("#lamp");
        Lamp.btn_on = document.querySelector("#lamp_on");
        Lamp.btn_off = document.querySelector("#lamp_off");
        Lamp.btn_on.addEventListener("click", () => Lamp.toggleLight(1));
        Lamp.btn_off.addEventListener("click", () => Lamp.toggleLight(0));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    Lamp.activate();
});
