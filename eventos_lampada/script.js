class Lamp {
    static image = document.querySelector("#lamp");
    static btn_on = document.querySelector("#lamp_on");
    static btn_off = document.querySelector("#lamp_off");

    static toggle(intState) {
        if (intState === 1) {
            Lamp.image.src = "images/lamp_on_v2.png";
        } else {
            Lamp.image.src = "images/lamp_off_V2.png";
        }
    }

    static startLogic() {
        Lamp.btn_on.addEventListener("click", () => Lamp.toggle(1));
        Lamp.btn_off.addEventListener("click", () => Lamp.toggle(0));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    Lamp.startLogic();
});
