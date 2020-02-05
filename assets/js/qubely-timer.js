
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
    this.children = {
        day: this.elem.querySelector('.day'),
        hour: this.elem.querySelector('.hour'),
        minute: this.elem.querySelector('.minute'),
        second: this.elem.querySelector('.second')
    };
    this.getDistanceDate();
    this.runInterval();
};

QubelyTimer.prototype.runInterval = function() {
    this.interval = setInterval(() => {
        this.getDistanceDate();
        this.displayTime();
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

    if(diff < 0) {
        this.distanceDate = {
            day: '00',
            hour: '00',
            minute: '00',
            second: '00'
        };
        this.displayTime();
        this.clearInterval();
        return;
    }
    this.distanceDate = {
        day,
        hour,
        minute,
        second
    };
};

QubelyTimer.prototype.displayTime = function() {
    if(this.children.day){
        this.children.day.innerHTML = this.distanceDate.day;
    }
    if(this.children.hour){
        this.children.hour.innerHTML = this.distanceDate.hour;
    }
    if(this.children.minute){
        this.children.minute.innerHTML = this.distanceDate.minute;
    }
    if(this.children.second){
        this.children.second.innerHTML = this.distanceDate.second;
    }
};

window.qubelyTimer = QubelyTimer
