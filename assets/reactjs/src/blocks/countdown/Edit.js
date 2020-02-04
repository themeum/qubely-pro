const { __ } = wp.i18n
const {
    Component,
    Fragment
} = wp.element;

const {
    PanelBody,
    Tooltip,
    Toolbar,
    DatePicker,
    DateTimePicker
} = wp.components

const {
    BlockControls,
    InspectorControls
} = wp.blockEditor

const {
    Border,
    Padding,
    BoxShadow,
    Background,
    BorderRadius,
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
        }else{
            this.qubelyTimer = new window.qubelyTimer(this.qubely_timer.current);
        }
    }

    _setDate(date) {
        this.props.setAttributes({date})
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

                date,

                //container
                background,
                padding,
                border,
                borderRadius,
                boxShadow,

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
                    {
                        <PanelBody title={__('Date')} >
                            <DateTimePicker
                                currentDate={date}
                                onChange={newDate => this._setDate(newDate)}
                            />
                        </PanelBody>
                    }
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
                    {animationSettings(uniqueId, animation, setAttributes)}
                    {interactionSettings(uniqueId, interaction, setAttributes)}
                </InspectorControls>


                {globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes)}

                <div className={`qubely-block-${uniqueId} ${className ? className : ''}`}>
                    <div className='qubely-block-countdown' onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}>


                        <div ref={this.qubely_timer} className="qubely-timer" data-date={date}>
                            <span className="day"></span>:
                            <span className="hour"></span>:
                            <span className="minute"></span>:
                            <span className="second"></span>
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