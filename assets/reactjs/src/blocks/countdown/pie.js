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

    return (
        <div className={className} style={{width: size, height: size}}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`${size / 2} ${size / 2} ${size} ${size}`}
                style={{transform: 'rotate(-90deg)', overflow: 'visible'}}>

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
                    className='qubely-pie-circle-fg'
                    cx={size}
                    cy={size}
                    r={radius}
                    stroke-dasharray={circumference}
                    stroke-dashoffset={circumference - offset}
                    stroke-width={thickness}
                    stroke-linecap={corner}
                    fill="none"
                    stroke={fill}
                    style={{
                        transition: '1s'
                    }}
                />

            </svg>
        </div>
    )
};

Pie.defaultProps = {
    size: 150,
    thickness: 15,
    percent: 40,
    corner: '',
    fill: '#288feb',
    emptyFill: '#ffffff',
    className: ''
}

export default Pie;