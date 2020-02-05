const {useState, useRef, useEffect} = wp.element

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
        secondText
    } = props

    const couterRef = useRef(null)


    const [day, setDay] = useState('00');
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');


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

            couterRef.current && clearInterval(couterRef.current)

            return;
        }

        setDay(day);
        setHour(hour);
        setMinute(minute);
        setSecond(second);

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
        <div className="qubely-countdown" data-date={date}>
            {
                enableDay && (
                    <div className="qubely-countdown-item">
                        <h5 className="day">{day}</h5>
                        <p>{dayText}</p>
                    </div>
                )
            }
            {
                enableHour && (
                    <div className="qubely-countdown-item">
                        <h5 className="hour">{hour}</h5>
                        <p>{hourText}</p>
                    </div>
                )
            }
            {
                enableMinute && (

                    <div className="qubely-countdown-item">
                        <h5 className="minute">{minute}</h5>
                        <p>{minuteText}</p>
                    </div>
                )
            }
            {
                enableSecond && (
                    <div className="qubely-countdown-item">
                        <h5 className="second">{second}</h5>
                        <p>{secondText}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Countdown