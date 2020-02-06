const {Fragment} = wp.element;
import Pie from './pie';

const {useState, useRef, useEffect} = wp.element;

const Countdown = (props) => {
    const {
        date,
        enableDay,
        enableHour,
        enableMinute,
        enableSecond,
        dayText,
        hourText,
        minuteText,
        secondText,
        className
    } = props

    const couterRef = useRef(null)


    const [day, setDay] = useState('00');
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');

    const [secondPercent, setSecondPercent] = useState(0);


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
            setSecondPercent(0);

            couterRef.current && clearInterval(couterRef.current)

            return;
        }

        setDay(day);
        setHour(hour);
        setMinute(minute);
        setSecond(second);

        setSecondPercent((second * 100) / 60);


    }

    useEffect(() => {
        if (couterRef.current !== null ) {
            clearInterval(couterRef.current)
        }
        couterRef.current = setInterval(() => {
            _updateDateState()
        }, 1000);

    }, [date]);


    return (
        <Fragment>
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

            <div className={className} data-date={date}>
                {
                    enableDay && (
                        <div className="qubely-countdown-item">
                            <h5 className="day">{day}</h5>
                            {dayText && <p>{dayText}</p>}
                            <Pie />
                        </div>
                    )
                }
                {
                    enableHour && (
                        <div className="qubely-countdown-item">
                            <h5 className="hour">{('0' + hour).slice(-2)}</h5>
                            {hourText && <p>{hourText}</p>}
                            <Pie />
                        </div>
                    )
                }
                {
                    enableMinute && (

                        <div className="qubely-countdown-item">
                            <h5 className="minute">{('0' + minute).slice(-2)}</h5>
                            {minuteText && <p>{minuteText}</p>}
                            <Pie />
                        </div>
                    )
                }
                {
                    enableSecond && (
                        <div className="qubely-countdown-item">
                            <h5 className="second">{('0' + second).slice(-2)}</h5>
                            {secondText && <p>{secondText}</p>}
                            <Pie percent={secondPercent} />
                        </div>
                    )
                }
            </div>
        </Fragment>
    )
}

export default Countdown