const Pie = (props) => {
    const {
        corner,
        fill,
        emptyFill,
        className
    } = props;

    const size = parseInt(props.size);
    const thickness = parseInt(props.thickness);
    const percent = parseInt(props.percent);
    const radius = (size - thickness) * .5
    const circumference = 2 * Math.PI * radius
    const offset = circumference * percent / 100
    const radialPercent = (size /2 * thickness / 100) * .5
    const uniqueId = 'pie_' + Math.random().toString(36).substr(2, 8) + '_' + Math.random().toString(36).substr(2, 8)

    return (
        <div className={className} style={{width: size, height: size}}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`${size / 2} ${size / 2} ${size} ${size}`}
                style={{transform: 'rotate(-90deg)'}}>

                {
                    fill.bgType !== 'color' && (
                        fill.gradient.type == 'radial' ? (
                            <radialGradient id={uniqueId} fx="50%" fy="50%" cx="50%" cy="50%" r={`${radialPercent}%`} spreadMethod="reflect">
                                <stop offset={`${fill.gradient.start || 0}%`} stop-color={fill.gradient.color1} />
                                <stop offset={`${fill.gradient.stop || 100}%`} stop-color={fill.gradient.color2} />
                            </radialGradient>
                        ) : (
                            <linearGradient id={uniqueId} x1="0%" y1="0%" x2="0%" y2="100%" gradientTransform={`rotate(${fill.gradient.direction - 90 || 0}, .5, .5)`}>
                                <stop offset={`${fill.gradient.start || 0}%`} stop-color={fill.gradient.color1} />
                                <stop offset={`${fill.gradient.stop || 100}%`} stop-color={fill.gradient.color2} />
                            </linearGradient>
                        )
                    )
                }

                {/* Circle / Background */}
                <circle
                    cx={size}
                    cy={size}
                    r={radius}
                    stroke={emptyFill}
                    stroke-width={thickness}
                    fill='none'
                />

                {/* Progress / Forground */}
                <circle
                    cx={size}
                    cy={size}
                    r={radius}
                    stroke-dasharray={circumference}
                    stroke-dashoffset={circumference - offset}
                    stroke-width={thickness}
                    stroke-linecap={corner}
                    fill="none"
                    stroke={(fill.type === 'gradient' && fill.openColor === 1) ? `url(#${uniqueId})` : fill.color}
                />

            </svg>
        </div>
    )
};

Pie.defaultProps = {
    size: 200,
    thickness: 15,
    percent: 40,
    corner: '',
    emptyFill: '#ffffff',
    className: '',
    fill: {
        color: '#25b5e1',
        openColor: 1,
        type: 'gradient',
        gradient: {
            type: 'linear',
            color1: '#25b5e1',
            color2: '#45dbca',
            direction: '47',
            start: '0',
            stop: '100'
        }
    },
}

export default Pie;