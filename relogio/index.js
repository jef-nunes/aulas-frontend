class Clock
{
    tagDay;
    tagMonth;
    tagYear;
    tagGreetings;
    tagHours;
    tagMinutes;
    tagSeconds;

    constructor()
    {
        this.tagDay = document.getElementById("clock-day");
        this.tagMonth = document.getElementById("clock-month");
        this.tagYear = document.getElementById("clock-year");
        this.tagGreetings = document.getElementById("clock-greetings");
        this.tagHours = document.getElementById("clock-hours");
        this.tagMinutes = document.getElementById("clock-minutes");
        this.tagSeconds = document.getElementById("clock-seconds");
    }

    setDate()
    {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        this.tagDay.textContent = day+"/";
        
        if(month<10)
        this.tagMonth.textContent = `0${month}/`;
        else
        this.tagMonth.textContent = month+"/";

        this.tagYear.textContent = year;
    }

    setGreetings()
    {
        let date = new Date();
        let hours = date.getHours();
        if(hours >= 5 && hours <= 12)
        {
            this.tagGreetings.textContent = "Bom Dia";
        }
        else if(hours >= 12 && hours <= 18)
        {
            this.tagGreetings.textContent = "Boa Tarde";
        }
        else
        {
            this.tagGreetings.textContent = "Boa Noite";
        }
    }

    updateTime()
    {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if(hours<10)
        this.tagHours.textContent = `0${hours}`;
        else
        this.tagHours.textContent = hours;

        if(minutes<10)
        this.tagMinutes.textContent = `0${minutes}`;
        else
        this.tagMinutes.textContent = minutes;

        if(seconds<10)
        this.tagSeconds.textContent = `0${seconds}`;
        else
        this.tagSeconds.textContent = seconds;
    }

    activate()
    {
        this.updateTime();
        this.setDate();
        this.setGreetings();
        setInterval(() => this.updateTime(), 1000);
    }
}



function main()
{
    const clock = new Clock();
    clock.activate();
}

document.addEventListener("DOMContentLoaded", main)
