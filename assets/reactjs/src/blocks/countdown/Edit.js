import icons from '../../helpers/icons';
const { __ } = wp.i18n;
const {
    Component,
    Fragment
} = wp.element;

const {
    PanelBody,
    CheckboxControl,
    DateTimePicker,
    TextControl,
} = wp.components

const {
    BlockControls,
    InspectorControls
} = wp.blockEditor

const {
    Range,
    Color,
    Styles,
    Border,
    Padding,
    BoxShadow,
    Background,
    ButtonGroup,
    BorderRadius,
    Typography,
    Inline: {
        InlineToolbar
    },
    CssGenerator: {
        CssGenerator },
    gloalSettings: {
        globalSettingsPanel,
        animationSettings,
        interactionSettings
    },
    ContextMenu: {
        ContextMenu,
        handleContextMenu
    }
} = wp.qubelyComponents

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            device: 'md',
            spacer: true,
            date: new Date()
        }

        this._runQubelyTimer = this._runQubelyTimer.bind(this)

        this.qubely_timer = React.createRef()
    }

    componentDidMount() {
        const { setAttributes, clientId, attributes: { uniqueId } } = this.props
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client });
        }

        this._runQubelyTimer();

    }

    _runQubelyTimer() {
        if (this.qubelyTimer) {
            this.qubelyTimer.reboot();
        } else {
            this.qubelyTimer = new window.qubelyTimer(this.qubely_timer.current);
        }
    }

    _setDate(date) {
        this.props.setAttributes({ date })
        this._runQubelyTimer()
    }


    render() {

        const {
            name,
            clientId,
            attributes,
            setAttributes,
            attributes: {
                uniqueId,
                className,
                layout,
                date,

                //container
                background,
                padding,
                border,
                spaceBetween,
                borderRadius,
                boxShadow,

                //Number
                numberTypo,

                //LABEL
                labelView,
                labelPosition,
                enableDay,
                enableHour,
                enableMinute,
                enableSecond,
                dayText,
                hourText,
                minuteText,
                secondText,
                labelColor,
                labelTypo,

                //separator
                separatorType,
                separatorTypo,
                separatorColor,

                // global
                animation,
                interaction,
                enablePosition,
                selectPosition,
                positionXaxis,
                positionYaxis,
                globalZindex,
                hideTablet,
                hideMobile,
                globalCss
            }
        } = this.props;

        const { device } = this.state;

        if (uniqueId) { CssGenerator(this.props.attributes, 'countdown', uniqueId) }

        return (
            <Fragment>
                <InspectorControls key={'inspector'}>
                    <PanelBody opened={true}>
                        <Styles
                            value={layout}
                            options={[
                                { value: 1, img: icons.form_classic },
                                { value: 2, img: icons.form_material },
                            ]}
                            onChange={val => setAttributes({ layout: val })}
                        />
                        <DateTimePicker
                            label={__('Date & Time')}
                            currentDate={date}
                            onChange={newDate => this._setDate(newDate)}
                        />
                    </PanelBody>
                    <PanelBody title={__('Container')} initialOpen={false}>
                        <Background
                            value={background}
                            label={__('Background')}
                            sources={['image', 'gradient']}
                            onChange={val => setAttributes({ background: val })}
                        />
                        <Padding
                            min={0}
                            max={300}
                            responsive
                            value={padding}
                            device={device}
                            label={__('Padding')}
                            unit={['px', 'em', '%']}
                            onChange={val => setAttributes({ padding: val })}
                            onDeviceChange={value => this.setState({ device: value })}
                        />

                        <Range
                            min={0}
                            max={300}
                            responsive
                            device={device}
                            value={spaceBetween}
                            label={__('Space Between')}
                            unit={['px', 'em', '%']}
                            onChange={value => setAttributes({ spaceBetween: value })}
                            onDeviceChange={value => this.setState({ device: value })}
                        />

                        <Border
                            responsive
                            value={border}
                            device={device}
                            label={__('Border')}
                            onChange={val => setAttributes({ border: val })}
                            onDeviceChange={value => this.setState({ device: value })}
                        />

                        <BorderRadius
                            min={0}
                            max={100}
                            label={__('Radius')}
                            value={borderRadius}
                            unit={['px', 'em', '%']}
                            responsive device={device}
                            onDeviceChange={value => this.setState({ device: value })}
                            onChange={(value) => setAttributes({ borderRadius: value })}
                        />
                        <BoxShadow
                            value={boxShadow}
                            label={__('Box-Shadow')}
                            onChange={(value) => setAttributes({ boxShadow: value })}
                        />
                    </PanelBody>

                    <PanelBody title={__('Label Text')} initialOpen={false}>

                        <ButtonGroup
                            label={__('View')}
                            options={
                                [
                                    [__('Inside'), 'inside'],
                                    [__('Outside'), 'outside']
                                ]
                            }
                            value={labelView}
                            onChange={value => setAttributes({ labelView: value })}
                        />
                        <ButtonGroup
                            label={__('Position')}
                            options={
                                [
                                    [__('Top'), 'top'],
                                    [__('Right'), 'right'],
                                    [__('Bottom'), 'bottom'],
                                    [__('Left'), 'left']
                                ]
                            }
                            value={labelPosition}
                            onChange={value => setAttributes({ labelPosition: value })}
                        />

                        <div className="qubely-countdown-label-control-text">
                            <div className="qubely-coutdown-label-left">
                                <CheckboxControl
                                    checked={enableDay}
                                />
                            </div>
                            <div className="qubely-coutdown-label-right">
                                <TextControl
                                    value={dayText}
                                />
                            </div>
                        </div>
                        <div className="qubely-countdown-label-control-text">
                            <div className="qubely-coutdown-label-left">
                                <CheckboxControl
                                    checked={enableHour}
                                />
                            </div>
                            <div className="qubely-coutdown-label-right">
                                <TextControl
                                    value={hourText}
                                />
                            </div>
                        </div>
                        <div className="qubely-countdown-label-control-text">
                            <div className="qubely-coutdown-label-left">
                                <CheckboxControl
                                    checked={enableMinute}
                                />
                            </div>
                            <div className="qubely-coutdown-label-right">
                                <TextControl
                                    value={minuteText}
                                />
                            </div>
                        </div>
                        <div className="qubely-countdown-label-control-text">
                            <div className="qubely-coutdown-label-left">
                                <CheckboxControl
                                    checked={enableSecond}
                                />
                            </div>
                            <div className="qubely-coutdown-label-right">
                                <TextControl
                                    value={secondText}
                                />
                            </div>
                        </div>


                        <Color
                            label={__('Color')}
                            value={labelColor}
                            onChange={val => setAttributes({ labelColor: val })}
                        />
                        <Typography
                            device={device}
                            label={__('Typography')}
                            value={labelTypo}
                            onChange={val => setAttributes({ labelTypo: val })}
                            onDeviceChange={value => this.setState({ device: value })}
                        />
                    </PanelBody>

                    <PanelBody title={__('Number Text')} initialOpen={false}>
                        <Typography
                            device={device}
                            label={__('Typography')}
                            value={numberTypo}
                            onChange={val => setAttributes({ numberTypo: val })}
                            onDeviceChange={value => this.setState({ device: value })}
                        />
                    </PanelBody>

                    {
                        layout === 1 &&
                        <PanelBody title={__('Separator')} initialOpen={false}>

                            <ButtonGroup
                                label={__('Separator Type')}
                                options={
                                    [
                                        [__(' : '), ':'],
                                        [__(' | '), '|']
                                    ]
                                }
                                value={separatorType}
                                additionalClass="extra-padding"
                                onChange={value => setAttributes({ separatorType: value })}
                            />

                            <Color
                                label={__('Color')}
                                value={separatorColor}
                                onChange={val => setAttributes({ separatorColor: val })}
                            />

                            <Typography
                                device={device}
                                label={__('Typography')}
                                value={separatorTypo}
                                onChange={val => setAttributes({ separatorTypo: val })}
                                onDeviceChange={value => this.setState({ device: value })}
                            />

                        </PanelBody>
                    }

                    {animationSettings(uniqueId, animation, setAttributes)}
                    {interactionSettings(uniqueId, interaction, setAttributes)}
                </InspectorControls>


                {globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes)}

                <div className={`qubely-block-${uniqueId} ${className ? className : ''}`}>
                    <div className='qubely-block-countdown' onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}>


                        <div ref={this.qubely_timer} className="qubely-countdown" data-date={date}>
                            <div className="qubely-countdown-item">
                                <h5 className="day"></h5>
                                <p>Days</p>
                            </div>
                            <div className="qubely-countdown-item">
                                <h5 className="hour"></h5>
                                <p>Hours</p>
                            </div>
                            <div className="qubely-countdown-item">
                                <h5 className="minute"></h5>
                                <p>Minutes</p>
                            </div>
                            <div className="qubely-countdown-item">
                                <h5 className="second"></h5>
                                <p>Seconds</p>
                            </div>
                        </div>

                        <div ref="qubelyContextMenu" className="qubely-context-menu-wraper" >
                            <ContextMenu
                                name={name}
                                clientId={clientId}
                                attributes={attributes}
                                setAttributes={setAttributes}
                                qubelyContextMenu={this.refs.qubelyContextMenu}
                            />
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Edit;