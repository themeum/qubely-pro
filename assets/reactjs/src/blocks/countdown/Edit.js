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
    TimePicker,
    DatePicker,
    TextControl,
    Dropdown
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
    ColorAdvanced,
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
            showStartDate: false,
            showEndDate: false,
            date: props.date,
            time: props.time
        }

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

    _setDate = () => {
        const {date, time} = this.state
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

                //circle
                size,
                fill,
                emptyFill,

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
                separatorColor,
                separatorSize,
                separatorSizeX,
                separatorOffset,

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
                        <div className='qubely-countdown-control-date-picker'>
                            <Dropdown
                                className="qubely-countdown-control-dropdown-parent"
                                position="bottom center"
                                renderToggle={ ( { isOpen, onToggle } ) => (
                                    <TextControl
                                        label={__('Starting Date')}
                                        value={date.substr(0, 10)}
                                        onClick={onToggle}
                                        aria-expanded={ isOpen }
                                        readOnly
                                    />
                                ) }
                                renderContent={ () => (
                                    <div className='qubely-countdown-control-dropdown'>
                                        <DatePicker
                                            label={__('Date & Time')}
                                            currentDate={date}
                                            onChange={date => setAttributes({date})}
                                        />
                                    </div>
                                ) }
                            />
                            <Dropdown
                                className="qubely-countdown-control-dropdown-parent"
                                position="bottom center"
                                renderToggle={ ( { isOpen, onToggle } ) => (
                                    <TextControl
                                        label={__('Ending Date')}
                                        value={date.substr(0, 10)}
                                        onClick={onToggle}
                                        aria-expanded={ isOpen }
                                        readOnly
                                    />
                                ) }
                                renderContent={ () => (
                                    <div className='qubely-countdown-control-dropdown' style={{display: 'flex'}}>
                                        <DatePicker
                                            label={__('Date & Time')}
                                            currentDate={date}
                                            onChange={date => setAttributes({date})}
                                        />
                                    </div>
                                ) }
                            />
                        </div>

                        <div className="qubely-countdown-control-time-picker">
                            <label>{__('Ending Time')}</label>
                            <TimePicker
                                currentDate={date}
                                onChange={date => setAttributes({date})}
                                is12Hour={true}
                            />
                        </div>
                    </PanelBody>
                    <PanelBody title={layout === 1 ? __('Container'): __('Circle')} initialOpen={false}>
                        {
                            layout === 1 ? (
                                <Fragment>
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
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <ColorAdvanced
                                        label={__('Fill')}
                                        value={fill}
                                        onChange={fill => setAttributes({ fill})}
                                    />
                                    <Color
                                        label={__('Empty Fill')}
                                        value={emptyFill}
                                        onChange={emptyFill => setAttributes({ emptyFill })}
                                    />
                                    <Range
                                        min={40}
                                        max={500}
                                        responsive
                                        value={size}
                                        device={device}
                                        label={__('Size')}
                                        onChange={size => setAttributes({size})}
                                        onDeviceChange={value => this.setState({ device: value })}
                                    />
                                </Fragment>
                            )
                        }

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

                        {
                            layout === 1 && (
                                <Fragment>
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
                                </Fragment>
                            )
                        }

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
                                    onChange={enableDay => setAttributes({enableDay})}
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
                                    onChange={enableHour => setAttributes({enableHour})}
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
                                    onChange={enableMinute => setAttributes({enableMinute})}
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
                                    onChange={value => setAttributes({enableSecond})}
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

                            { separatorType !== 'none' && (
                                <Fragment>
                                    <Color
                                        label={__('Color')}
                                        value={separatorColor}
                                        onChange={val => setAttributes({ separatorColor: val })}
                                    />
                                    {
                                        separatorType === 'line' && (
                                            <Range
                                                device={device}
                                                label={__('Width')}
                                                value={separatorSizeX}
                                                onChange={value => setAttributes({ separatorSizeX: value })}
                                                onDeviceChange={value => this.setState({ device: value })}
                                                min={1}
                                                max={20}
                                                responsive
                                            />
                                        )
                                    }
                                    <Range
                                        device={device}
                                        label={separatorType === 'line' ? __('Height') : __('Size')}
                                        value={separatorSize}
                                        onChange={value => setAttributes({ separatorSize: value })}
                                        onDeviceChange={value => this.setState({ device: value })}
                                        min={10}
                                        max={200}
                                        responsive
                                    />
                                    <Range
                                        device={device}
                                        label={__('Offset')}
                                        value={separatorOffset}
                                        onChange={value => setAttributes({ separatorOffset: value })}
                                        onDeviceChange={value => this.setState({ device: value })}
                                        min={-20}
                                        max={120}
                                        responsive
                                    />
                                </Fragment>
                            )}
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
                                'qubely-item-separator-' + ( layout === 2 ? 'none' : separatorType)
                            )}
                            layout={layout}
                            pie={{
                                fill,
                                emptyFill,
                                size: size.md
                            }}
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