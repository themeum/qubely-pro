import icons from '../../helpers/icons';
import Countdown from './countdown';
import classnames from 'classnames'
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
        }

        this._setAttributes = this._setAttributes.bind(this);
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

    }


    _setAttributes(attribute, value) {
        this.props.setAttributes({
            [attribute]: value
        });
    };


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
                labelSpacing,

                //separator
                separatorType,
                separatorTypo,
                separatorColor,
                separatorSize,

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
                            onChange={newDate => this._setAttributes('date', newDate)}
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
                                    onChange={value => this._setAttributes('enableDay', value)}
                                />
                            </div>
                            <div className="qubely-coutdown-label-right">
                                <TextControl
                                    value={dayText}
                                    onChange={dayText => setAttributes({dayText})}
                                />
                            </div>
                        </div>
                        <div className="qubely-countdown-label-control-text">
                            <div className="qubely-coutdown-label-left">
                                <CheckboxControl
                                    checked={enableHour}
                                    onChange={value => this._setAttributes('enableHour', value)}
                                />
                            </div>
                            <div className="qubely-coutdown-label-right">
                                <TextControl
                                    value={hourText}
                                    onChange={hourText => setAttributes({hourText})}
                                />
                            </div>
                        </div>
                        <div className="qubely-countdown-label-control-text">
                            <div className="qubely-coutdown-label-left">
                                <CheckboxControl
                                    checked={enableMinute}
                                    onChange={value => this._setAttributes('enableMinute', value)}
                                />
                            </div>
                            <div className="qubely-coutdown-label-right">
                                <TextControl
                                    value={minuteText}
                                    onChange={minuteText => setAttributes({minuteText})}
                                />
                            </div>
                        </div>
                        <div className="qubely-countdown-label-control-text">
                            <div className="qubely-coutdown-label-left">
                                <CheckboxControl
                                    checked={enableSecond}
                                    onChange={value => this._setAttributes('enableSecond', value)}
                                />
                            </div>
                            <div className="qubely-coutdown-label-right">
                                <TextControl
                                    value={secondText}
                                    onChange={secondText => setAttributes({secondText})}
                                />
                            </div>
                        </div>

                        <Range
                            min={0}
                            max={100}
                            label={__('Spacing')}
                            value={labelSpacing}
                            onChange={labelSpacing => setAttributes({labelSpacing})}
                        />


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
                        {  /* Note: Label Spacing & Number Spacing are same */ }
                        <Range
                            min={0}
                            max={100}
                            label={__('Spacing')}
                            value={labelSpacing}
                            onChange={labelSpacing => setAttributes({labelSpacing})}
                        />
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
                                        [<img src={qubely_pro_admin.plugin + 'assets/img/blocks/countdown/ban.svg'} alt={__('None')}/>, 'none'],
                                        [<img src={qubely_pro_admin.plugin + 'assets/img/blocks/countdown/colon.svg'} alt={__('Colon')}/>, 'colon'],
                                        [<img src={qubely_pro_admin.plugin + 'assets/img/blocks/countdown/pipe.svg'} alt={__('Pipe')}/>, 'line']
                                    ]
                                }
                                value={separatorType}
                                additionalClass="qubely-countdown-separator-control extra-padding"
                                onChange={value => setAttributes({ separatorType: value })}
                            />

                            <Color
                                label={__('Color')}
                                value={separatorColor}
                                onChange={val => setAttributes({ separatorColor: val })}
                            />

                            <Range
                                device={device}
                                label={__('Size')}
                                value={separatorSize}
                                onChange={separatorSize => setAttributes({ separatorSize })}
                                onDeviceChange={value => this.setState({ device: value })}
                                unit={['px', 'em', '%']}
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
                    <div
                        className='qubely-block-countdown'
                        onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}
                        style={{
                            '--label-spacing': labelSpacing + 'px'
                        }}
                    >
                        <Countdown
                            date={date}
                            dayText={dayText}
                            hourText={hourText}
                            minuteText={minuteText}
                            secondText={secondText}
                            enableDay={enableDay}
                            enableHour={enableHour}
                            enableMinute={enableMinute}
                            enableSecond={enableSecond}
                            className={classnames(
                                'qubely-countdown',
                                'qubely-countdown-label-' + labelPosition,
                                'qubely-item-separator-' + separatorType
                            )}
                        />

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