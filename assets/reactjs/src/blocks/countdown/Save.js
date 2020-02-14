import Pie from './pie';
import classnames from "classnames";

const { Component, Fragment } = wp.element;
const { HelperFunction: { animationAttr, IsInteraction } } = wp.qubelyComponents
class Save extends Component {
    render() {

        const {
            attributes: {
                uniqueId,
                animation,
                interaction,
                labelSpacing,
                dayPercent,
                hourPercent,
                minutePercent,
                secondPercent,
                fill,
                emptyFill,
                size,
                day,
                hour,
                minute,
                second,
                secondText,
                minuteText,
                hourText,
                dayText,
                layout,
                date,
                startDate,
                thickness,
                thicknessBg,
                labelPosition,
                justifyAlign,
                separatorType,
                enableLabel,
                labelView
            }
        } = this.props
        const interactionClass = IsInteraction(interaction) ? 'qubley-block-interaction' : '';
        const pie = {
            fill,
            emptyFill,
            size: size.md,
            startDate,
            thickness: thickness.md,
            thicknessBg: thicknessBg.md
        }

        const countdownClass = classnames(
            'qubely-countdown',
            'qubely-countdown-label-' + labelPosition,
            'qubely-item-separator-' + ((layout === 2 || justifyAlign === 'space-between') ? 'none' : separatorType)
        )

        return (

            <div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
                <div className={`qubely-block-countdown ${interactionClass}`} style={{'--label-spacing': labelSpacing + 'px'}}>
                    <div className={countdownClass} data-date={date}>
                        {
                            layout === 1 ? (
                                <Fragment>
                                    <div className="qubely-countdown-item-outer">
                                        <div className="qubely-countdown-item">
                                            <h5 className="day">{day || '00'}</h5>
                                            {(enableLabel && labelView !== 'outside') && <p>{dayText}</p>}
                                        </div>
                                        {(enableLabel && labelView === 'outside') && <p>{dayText}</p>}
                                    </div>
                                    <div className="qubely-countdown-item-outer">
                                        <div className="qubely-countdown-item">
                                            <h5 className="hour">{hour || '00'}</h5>
                                            {(enableLabel && labelView !== 'outside') && <p>{hourText}</p>}
                                        </div>
                                        {(enableLabel && labelView === 'outside') && <p>{hourText}</p>}
                                    </div>
                                    <div className="qubely-countdown-item-outer">
                                        <div className="qubely-countdown-item">
                                            <h5 className="minute">{minute || '00'}</h5>
                                            {(enableLabel && labelView !== 'outside') && <p>{minuteText}</p>}
                                        </div>
                                        {(enableLabel && labelView === 'outside') && <p>{minuteText}</p>}
                                    </div>
                                    <div className="qubely-countdown-item-outer">
                                        <div className="qubely-countdown-item">
                                            <h5 className="second">{second || '00'}</h5>
                                            {(enableLabel && labelView !== 'outside') && <p>{secondText}</p>}
                                        </div>
                                        {(enableLabel && labelView === 'outside') && <p>{secondText}</p>}
                                    </div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <div className="qubely-countdown-item-outer">
                                        <div className="qubely-countdown-item">
                                            <Pie className={'qubely-countdown-item-day'} percent={dayPercent} {...pie} id={`${uniqueId}0`} />
                                            <div className="qubely-countdown-item-content">
                                                <h5 className="day">{day || '00'}</h5>
                                                {dayText && <p>{dayText}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="qubely-countdown-item-outer">
                                        <div className="qubely-countdown-item">
                                            <Pie className={'qubely-countdown-item-hour'} percent={hourPercent} {...pie} id={`${uniqueId}1`}/>
                                            <div className="qubely-countdown-item-content">
                                                <h5 className="hour">{hour || '00'}</h5>
                                                {hourText && <p>{hourText}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="qubely-countdown-item-outer">
                                        <div className="qubely-countdown-item">
                                            <Pie className={'qubely-countdown-item-minute'} percent={minutePercent} {...pie} id={`${uniqueId}2`}/>
                                            <div className="qubely-countdown-item-content">
                                                <h5 className="minute">{minute || '00'}</h5>
                                                {minuteText && <p>{minuteText}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="qubely-countdown-item-outer">
                                        <div className="qubely-countdown-item">
                                            <Pie className={'qubely-countdown-item-second'} percent={secondPercent} {...pie} id={`${uniqueId}3`}/>
                                            <div className="qubely-countdown-item-content">
                                                <h5 className="second">{second || '00'}</h5>
                                                {secondText && <p>{secondText}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Save;