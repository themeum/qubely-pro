
const QubelyTimer = function(elem) {
    this.elem = elem;
    this.date = elem.getAttribute('data-date') || '2020-05-10';
    this.children = {
        day: elem.querySelector('.day'),
        hour: elem.querySelector('.hour'),
        minute: elem.querySelector('.minute'),
        second: elem.querySelector('.second')
    };

    this.init();
};

QubelyTimer.prototype.init = function() {
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
    this.displayTime();
    clearInterval(this.interval);
};

QubelyTimer.prototype.destroy = function () {
    this.clearInterval();
};

QubelyTimer.prototype.getDistanceDate = function() {
    const start = new Date(this.date + 'T00:00:00');
    const end = new Date(Date.now());
    const diff = new Date(start - end);
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

QubelyTimer.prototype.displayTime = function() {
    this.children.day.innerHTML = this.distanceDate.day;
    this.children.hour.innerHTML = this.distanceDate.hour;
    this.children.minute.innerHTML = this.distanceDate.minute;
    this.children.second.innerHTML = this.distanceDate.second;
};

window.qubelyTimer = QubelyTimer
