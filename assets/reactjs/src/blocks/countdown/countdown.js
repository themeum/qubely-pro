import Pie from './pie';

const {useState, useRef, useEffect} = wp.element;

const Countdown = (props) => {
    const {
        date,
        startDate,
        enableDay,
        enableHour,
        enableMinute,
        enableSecond,
        dayText,
        hourText,
        minuteText,
        secondText,
        className,
        layout,
        pie
    } = props

    pie.startDate = startDate

    const couterRef = useRef(null)


    const [day, setDay] = useState('00');
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');

    const [secondPercent, setSecondPercent] = useState(0);
    const [minutePercent, setMinutePercent] = useState(0);
    const [hourPercent, setHourPercent] = useState(0);
    const [dayPercent, setDayPercent] = useState(0);


    const _updateDateState = () => {
        const start = new Date(Date.now());
        const end = new Date(date);
        const diff = new Date(end - start);
        const time = diff / 1000 / 60 / 60 / 24;
        const day = parseInt(time);
        const hour = parseInt((diff / 1000 / 60 / 60) % 24);
        const minute = parseInt((diff / 1000 / 60) % 60);
        const second = parseInt((diff / 1000) % 60);

        if(diff < 0) {
            setDay('00');
            setHour('00');
            setMinute('00');
            setSecond('00');

            setSecondPercent(100);
            setMinutePercent(100);
            setHourPercent(100);
            setDayPercent(100);

            couterRef.current && clearInterval(couterRef.current)
            return;
        }

        setDay(day);
        setHour(hour);
        setMinute(minute);
        setSecond(second);

        const secondPercent = (second * 100) / 60;
        const minutePercent = (minute * 100) / 60;
        const hourPercent = (hour * 100) / 24;
        const dayPercent = 100 - _getDayPercent();

        setSecondPercent(secondPercent ? secondPercent : 100);
        setMinutePercent(minutePercent ? minutePercent : 100);
        setHourPercent(hourPercent ? hourPercent : 100);
        setDayPercent(dayPercent ? dayPercent : 100);


    }

    const _getDayPercent = () => {
        let {date, startDate} = props;
        let today = new Date();
        // convert to time stamp
        date = Date.parse(date);
        startDate = Date.parse(startDate);
        today = today.getTime();

        const diff = parseInt((date > startDate ? date - startDate : 0) / 1000 / 60 / 60 / 24);
        const passed = parseInt((today > startDate ? today - startDate : 0) / 1000 / 60 / 60 / 24);
        return parseInt(passed * 100 / diff);
    }

    useEffect(() => {
        if (couterRef.current !== null ) {
            clearInterval(couterRef.current)
        }
        couterRef.current = setInterval(() => {
            _updateDateState()
        }, 1000);
    }, [date, startDate]);

    return (

        layout === 1 ? (
            <div className={className} data-date={date}>
                {
                    enableDay && (
                        <div className="qubely-countdown-item">
                            <h5 className="day">{day}</h5>
                            {dayText && <p>{dayText}</p>}
                        </div>
                    )
                }
                {
                    enableHour && (
                        <div className="qubely-countdown-item">
                            <h5 className="hour">{('0' + hour).slice(-2)}</h5>
                            {hourText && <p>{hourText}</p>}
                        </div>
                    )
                }
                {
                    enableMinute && (

                        <div className="qubely-countdown-item">
                            <h5 className="minute">{('0' + minute).slice(-2)}</h5>
                            {minuteText && <p>{minuteText}</p>}
                        </div>
                    )
                }
                {
                    enableSecond && (
                        <div className="qubely-countdown-item">
                            <h5 className="second">{('0' + second).slice(-2)}</h5>
                            {secondText && <p>{secondText}</p>}
                        </div>
                    )
                }
            </div>
        ) : (
            <div className={className} data-date={date}>
                {
                    enableDay && (
                        <div className="qubely-countdown-item">
                            <Pie percent={dayPercent} {...pie}/>
                            <div className="qubely-countdown-item-content">
                                <h5 className="day">{day}</h5>
                                {dayText && <p>{dayText}</p>}
                            </div>
                        </div>
                    )
                }
                {
                    enableHour && (
                        <div className="qubely-countdown-item">
                            <Pie percent={hourPercent} {...pie}/>
                            <div className="qubely-countdown-item-content">
                                <h5 className="hour">{('0' + hour).slice(-2)}</h5>
                                {hourText && <p>{hourText}</p>}
                            </div>
                        </div>
                    )
                }
                {
                    enableMinute && (
                        <div className="qubely-countdown-item">
                            <Pie percent={minutePercent} {...pie}/>
                            <div className="qubely-countdown-item-content">
                                <h5 className="minute">{('0' + minute).slice(-2)}</h5>
                                {minuteText && <p>{minuteText}</p>}
                            </div>
                        </div>
                    )
                }
                {
                    enableSecond && (
                        <div className="qubely-countdown-item">
                            <Pie percent={secondPercent} {...(pie)}/>
                            <div className='qubely-countdown-item-content'>
                                <h5 className="second">{('0' + second).slice(-2)}</h5>
                                {secondText && <p>{secondText}</p>}
                            </div>
                        </div>
                    )
                }
            </div>
        )
    )
}

export default Countdown