class Clock{
    tagHours;
    tagMinutes;
    tagSeconds;

    constructor(){
        this.tagHours = document.getElementById("clock-hours");
        this.tagMinutes = document.getElementById("clock-minutes");
        this.tagSeconds = document.getElementById("clock-seconds");
    }

    updateTime = () => {
        let date = new Date();
        this.tagHours.textContent = date.getHours();
        this.tagMinutes.textContent = date.getMinutes();
        this.tagSeconds.textContent = date.getSeconds();
    }

    activate(){
        this.updateTime();
        setInterval(this.updateTime, 1000);
    }
}

function main(){
    const clock = new Clock();
    clock.activate();
}

document.addEventListener("DOMContentLoaded", main)