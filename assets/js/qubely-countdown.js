
const QubelyTimer = function(elem) {
    this.elem = elem;
    if(this.elem){
        this.init();
    }
};

QubelyTimer.prototype.init = function() {
    this.defaultDate = new Date();
    this.defaultDate.setDate(this.defaultDate.getDate() + (12 - this.defaultDate.getDay()))
    this.date = this.elem.getAttribute('data-date') || this.defaultDate;
    this.items = {
        day: this.elem.querySelector('.qubely-countdown-item-day'),
        hour: this.elem.querySelector('.qubely-countdown-item-hour'),
        minute: this.elem.querySelector('.qubely-countdown-item-minute'),
        second: this.elem.querySelector('.qubely-countdown-item-second')
    };
    this.children = {
        day: this.elem.querySelector('.day'),
        hour: this.elem.querySelector('.hour'),
        minute: this.elem.querySelector('.minute'),
        second: this.elem.querySelector('.second')
    };
    this.dayPercent = 100;
    this.hourPercent = 100;
    this.minutePercent = 100;
    this.secondPercent = 100;

    this.getDistanceDate();
    this.runInterval();
};

QubelyTimer.prototype.runInterval = function() {
    this.interval = setInterval(() => {
        this.getDistanceDate();
        this.displayTime();
        this.updatePiePercent();
    }, 1000);
};

QubelyTimer.prototype.clearInterval = function() {
    this.getDistanceDate();
    this.displayTime();
    clearInterval(this.interval);
};

QubelyTimer.prototype.destroy = function () {
    clearInterval(this.interval);
    this.elem = null
};

QubelyTimer.prototype.reboot = function() {
    clearInterval(this.interval);
    this.init();
};

QubelyTimer.prototype.getDistanceDate = function() {
    const start = new Date(Date.now());
    const end = new Date(this.date);
    const diff = new Date(end - start);
    const time = diff / 1000 / 60 / 60 / 24;
    const day = parseInt(time);
    const hour = parseInt((diff / 1000 / 60 / 60) % 24);
    const minute = parseInt((diff / 1000 / 60) % 60);
    const second = parseInt((diff / 1000) % 60);

    if(diff.getTime() <= 0) {
        this.distanceDate = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        };
        this.displayTime();
        this.destroy();
        return;
    }
    this.distanceDate = {
        day,
        hour,
        minute,
        second
    };
};

QubelyTimer.prototype.formatNumber = function (number) {
    return number < 10 ? '0' + number.toString() : number;
}

QubelyTimer.prototype.displayTime = function() {
    if(this.children.day){
        this.children.day.innerHTML = this.formatNumber(this.distanceDate.day);
    }
    if(this.children.hour){
        this.children.hour.innerHTML = this.formatNumber(this.distanceDate.hour);
    }
    if(this.children.minute){
        this.children.minute.innerHTML = this.formatNumber(this.distanceDate.minute);
    }
    if(this.children.second){
        this.children.second.innerHTML = this.formatNumber(this.distanceDate.second);
    }
};

QubelyTimer.prototype.updatePiePercent = function () {
    const {day, hour, minute, second} = this.items
    if(day){
        const startDate = day.getAttribute('date-startdate');
        this.dayPercent = 100 - this._getDayPercent(startDate)
        this.updatePie('day', day)
    }
    if(hour){
        this.hourPercent = parseInt((this.distanceDate.hour * 100) / 24);
        this.updatePie('hour', hour)
    }
    if(minute){
        this.minutePercent = parseInt((this.distanceDate.minute * 100) / 60);
        this.updatePie('minute', minute)
    }
    if(second){
        this.secondPercent = parseInt((this.distanceDate.second * 100) / 60);
        this.updatePie('second', second)
    }

};

QubelyTimer.prototype.updatePie = function(type, elem) {
    if(typeof elem === 'undefined' || typeof type === 'undefined') {
        return;
    }
    let percent = 100;

    if(type === 'second'){
        percent = this.secondPercent
    } else if(type === 'minute') {
        percent = this.minutePercent
    } else if(type === 'hour') {
        percent = this.hourPercent
    } else if(type === 'day') {
        percent = this.dayPercent
    }

    const circumference = parseFloat(elem.getAttribute('data-circumference'));
    const circle = elem.querySelector('.qubely-countdown-cirlce-forground');
    const offset = circumference - (circumference * percent / 100)

    circle.style.strokeDashoffset = offset;

}


QubelyTimer.prototype._getDayPercent = function (startDate) {
    let date = this.date;
    let today = new Date();
    // convert to time stamp
    date = Date.parse(date);
    startDate = Date.parse(startDate);
    today = today.getTime();
    const diff = parseInt((date > startDate ? date - startDate : 0) / 1000 / 60 / 60 / 24);
    const passed = parseInt((today > startDate ? today - startDate : 0) / 1000 / 60 / 60 / 24);
    return parseInt(passed * 100 / diff);
}

// fire qubely timer
document.addEventListener("DOMContentLoaded", function(){
    const qubelyTimer = document.querySelectorAll('.qubely-countdown');
    if(qubelyTimer.length){
        qubelyTimer.forEach(element => {
            new QubelyTimer(element);
        })
    }
});
