const {
    Component,
    Fragment
} = wp.element;

const {
    PanelBody,
    Tooltip,
    Toolbar
} = wp.components

const {
    BlockControls,
    InspectorControls
} = wp.blockEditor

const {
    Inline: { InlineToolbar },
    CssGenerator: { CssGenerator },
    gloalSettings: { globalSettingsPanel, animationSettings, interactionSettings },
    ContextMenu: { ContextMenu, handleContextMenu }
} = wp.qubelyComponents

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            device: 'md',
            spacer: true,
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
        this._runQubelyTimer();

    }

    _runQubelyTimer() {
        if(this.qubelyTimer){
            this.qubelyTimer.destroy();
        }
        this.qubelyTimer = new window.qubelyTimer(this.qubely_timer.current);
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
        } = this.props

        if (uniqueId) { CssGenerator(this.props.attributes, 'countdown', uniqueId) }

        return (
            <Fragment>
                <InspectorControls key={'inspector'}>
                    {
                        /* Code Here */
                    }

                    {animationSettings(uniqueId, animation, setAttributes)}
                    {interactionSettings(uniqueId, interaction, setAttributes)}

                </InspectorControls>

                <BlockControls>
                    <Toolbar>
                        <InlineToolbar
                            data={[{ name: 'InlineSpacer', key: 'spacer', responsive: true, unit: ['px', 'em', '%'] }]}
                            {...this.props}
                            prevState={this.state}
                        />
                    </Toolbar>
                </BlockControls>

                {globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes)}

                <div className={`qubely-block-${uniqueId} ${className ? className : ''}`}>
                    <div className='qubely-block-countdown' onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}>


                        <div ref={this.qubely_timer} className="qubely-timer" data-date="2020-03-10">
                            <span className="day"></span> days
                            <span className="hour"></span> hours
                            <span className="minute"></span> minutes
                            <span className="second"></span> seconds
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