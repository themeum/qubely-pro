import icons from '../../helpers/icons';
import Countdown from './countdown';
import classnames from 'classnames'
import templates from './templates'
const {PluginBlockSettingsMenuItem} = wp.editPost

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
    Dropdown,
    Toolbar
} = wp.components

const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar
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
    RadioAdvanced,
    Toggle,
    InspectorSections,
    InspectorTabs,
    InspectorTab,
    Inline: {
        InlineToolbar
    },
    withCSSGenerator,
    gloalSettings: {
        globalSettingsPanel,
        animationSettings,
        interactionSettings
    },
    ContextMenu: {
        ContextMenu,
        handleContextMenu
    },
    Templates
} = wp.qubelyComponents

const DEFAULT_ALIGNMENT_CONTROLS = [
    {
        icon: <span className={'qubely-countdown-block-control-icon-style fas fa-align-left'} />,
        title: __( 'Justify Left' ),
        align: 'flex-start',
    },
    {
        icon: <span className={'qubely-countdown-block-control-icon-style fas fa-align-center'} />,
        title: __( 'Justify center' ),
        align: 'center',
    },
    {
        icon: <span className={'qubely-countdown-block-control-icon-style fas fa-align-right'} />,
        title: __( 'Justify Right' ),
        align: 'flex-end',
    },
    {
        icon: <span className={'qubely-countdown-block-control-icon-style fas fa-align-justify'} />,
        title: __( 'Space Between' ),
        align: 'space-between',
    }
];

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            device: 'md',
            spacer: true,
            showStartDate: false,
            showEndDate: false
        }

        this.qubely_timer = React.createRef()
    }

    componentDidMount() {
        const { setAttributes, clientId, attributes: { uniqueId, date, startDate } } = this.props;
        const _client = clientId.substr(0, 6);

        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client });
        }
        if (date === null && startDate === null) {
            const today = new Date();

            // Default Date
            let defaultDate = today.getTime() + (7 * 24 * 60 * 60 * 1000);
            defaultDate = new Date(defaultDate);
            defaultDate = defaultDate.toISOString();

            // Start Date
            let startDate = today.getTime() - (7 * 24 * 60 * 60 * 1000);
            startDate = new Date(startDate);
            startDate = startDate.toISOString();

            setAttributes({
                date: defaultDate,
                startDate: startDate
            });

        }

    }


    copyAttributes = () => {
        const {
            attributes,
            attributes: {
                qubelyStyleAttributes
            }
        } = this.props
        const {copyToClipboard} = wp.qubelyComponents.HelperFunction
        let template = {}
        qubelyStyleAttributes.forEach(key => {
            template[key] = attributes[key]
        })

        copyToClipboard(JSON.stringify(template))

    }

    _setDate = (type, newDate) => {
        if (typeof type === 'undefined' || typeof newDate === 'undefined') {
            return;
        }

        const prevDate = this.props.attributes.date;

        let date = prevDate.split('T')[0];
        let time = prevDate.split('T')[1];

        if (type === 'date') {
            date = newDate.split('T')[0]
        } else {
            time = newDate.split('T')[1]
        }

        this.props.setAttributes({
            date: date + 'T' + time
        })
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
                startDate,
                justifyAlign,

                //container
                background,
                padding,
                border,
                spaceBetween,
                borderRadius,
                boxShadow,
                minWidth,

                //circle
                size,
                thickness,
                thicknessBg,
                fill,
                emptyFill,
                strokeLinecap,
                circleTransition,

                //Number
                numberColor,
                numberTypo,

                //LABEL
                enableLabel,
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

        return (
            <Fragment>
                <InspectorControls key={'inspector'}>
                    <InspectorTabs>
                        <InspectorTab key={"layout"}>
                            <PanelBody title={__('Design Templates')}>
                                <Templates
                                    updateStyle={setAttributes}
                                    attributes={this.props.attributes}
                                    templates={templates}
                                />
                            </PanelBody>
                            <PanelBody title={__('Related Sections')}>
                                <InspectorSections block={'countdown'}/>
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={"style"}>
                            <PanelBody opened={true}>
                                <Styles
                                    value={layout}
                                    options={[
                                        { value: 1, img: icons.countdown.layout1 },
                                        { value: 2, img: icons.countdown.layout2 },
                                    ]}
                                    onChange={val => setAttributes({ layout: val })}
                                />
                                <div className='qubely-countdown-control-date-picker'>
                                    <Dropdown
                                        className="qubely-countdown-control-dropdown-parent"
                                        position="bottom center"
                                        renderToggle={({ isOpen, onToggle }) => (
                                            <TextControl
                                                label={__('Event Date')}
                                                value={date && date.split('T')[0]}
                                                onClick={onToggle}
                                                aria-expanded={isOpen}
                                                readOnly
                                            />
                                        )}
                                        renderContent={() => (
                                            <div className='qubely-countdown-control-dropdown' style={{ display: 'flex' }}>
                                                <DatePicker
                                                    label={__('Date & Time')}
                                                    currentDate={date}
                                                    onChange={newDate => this._setDate('date', newDate)}
                                                />
                                            </div>
                                        )}
                                    />
                                    {layout === 2 && (
                                        <Dropdown
                                            className="qubely-countdown-control-dropdown-parent"
                                            position="bottom center"
                                            renderToggle={({ isOpen, onToggle }) => (
                                                <TextControl
                                                    label={__('Starting Date')}
                                                    value={startDate && startDate.split('T')[0]}
                                                    onClick={onToggle}
                                                    aria-expanded={isOpen}
                                                    readOnly
                                                />
                                            )}
                                            renderContent={() => (
                                                <div className='qubely-countdown-control-dropdown'>
                                                    <DatePicker
                                                        label={__('Date & Time')}
                                                        currentDate={startDate}
                                                        onChange={startDate => setAttributes({ startDate })}
                                                    />
                                                </div>
                                            )}
                                        />
                                    )}
                                </div>
                                <div className="qubely-countdown-control-time-picker">
                                    <label>{__('Event Time (24 Hour Clock)')}</label>
                                    <TimePicker
                                        currentDate={date}
                                        onChange={newDate => this._setDate('time', newDate)}
                                    />
                                </div>
                            </PanelBody>
                            <PanelBody title={layout === 1 ? __('Container') : __('Circle')} initialOpen={false}>
                                {
                                    layout === 2 && (
                                        <Fragment>
                                            <Range
                                                min={40}
                                                max={500}
                                                responsive
                                                value={size}
                                                device={device}
                                                label={__('Size')}
                                                onChange={size => setAttributes({ size })}
                                                onDeviceChange={value => this.setState({ device: value })}
                                            />
                                            <Range
                                                min={1}
                                                max={50}
                                                responsive
                                                value={thickness}
                                                device={device}
                                                label={__('Border Width')}
                                                onChange={thickness => setAttributes({ thickness })}
                                                onDeviceChange={value => this.setState({ device: value })}
                                            />
                                            <Range
                                                min={1}
                                                max={50}
                                                responsive
                                                value={thicknessBg}
                                                device={device}
                                                label={__('BG Border Width')}
                                                onChange={thicknessBg => setAttributes({ thicknessBg })}
                                                onDeviceChange={value => this.setState({ device: value })}
                                            />
                                        </Fragment>
                                    )
                                }
                                {
                                    layout === 1 ? (
                                        <Fragment>
                                            <Background
                                                value={background}
                                                label={__('Background')}
                                                sources={['image', 'gradient']}
                                                onChange={val => setAttributes({ background: val })}
                                            />
                                            <Range
                                                min={0}
                                                max={500}
                                                responsive
                                                value={minWidth}
                                                device={device}
                                                label={__('Minimum Width')}
                                                onChange={minWidth => setAttributes({ minWidth })}
                                                onDeviceChange={value => this.setState({ device: value })}
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
                                            <RadioAdvanced
                                                label={__('Border Style')}
                                                value={strokeLinecap}
                                                options={[
                                                    { value: 'round', label: __('Round') },
                                                    { value: 'square', label: __('Square') }
                                                ]}
                                                onChange={strokeLinecap => setAttributes({ strokeLinecap })}
                                            />
                                            <ColorAdvanced
                                                label={__('Border Fill')}
                                                value={fill}
                                                onChange={fill => setAttributes({ fill })}
                                            />
                                            <Color
                                                label={__('Border Empty Fill')}
                                                value={emptyFill}
                                                onChange={emptyFill => setAttributes({ emptyFill })}
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

                                {
                                    layout === 1 ? (
                                        <Border
                                            responsive
                                            value={border}
                                            device={device}
                                            label={__('Border')}
                                            onChange={val => setAttributes({ border: val })}
                                            onDeviceChange={value => this.setState({ device: value })}
                                        />
                                    ) : (
                                        <Toggle
                                            label={__('Change Circle Smoothly')}
                                            value={circleTransition}
                                            onChange={circleTransition => setAttributes({ circleTransition })}
                                        />
                                    )
                                }

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
                                <Toggle
                                    label={'Enable Label'}
                                    value={enableLabel}
                                    onChange={(enableLabel) => setAttributes({enableLabel})}
                                />
                                {
                                    enableLabel && (
                                        <Fragment>
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
                                                        [__('Bottom'), 'bottom'],
                                                    ]
                                                }
                                                value={labelPosition}
                                                onChange={value => setAttributes({ labelPosition: value })}
                                            />
                                        </Fragment>
                                    )
                                }

                                <div className="qubely-countdown-label-control-text">
                                    <div className="qubely-coutdown-label-left">
                                        <CheckboxControl
                                            checked={enableDay}
                                            onChange={enableDay => setAttributes({ enableDay })}
                                        />
                                    </div>
                                    <div className="qubely-coutdown-label-right">
                                        <TextControl
                                            placeholder={__('Day')}
                                            value={dayText}
                                            onChange={dayText => setAttributes({ dayText })}
                                        />
                                    </div>
                                </div>
                                <div className="qubely-countdown-label-control-text">
                                    <div className="qubely-coutdown-label-left">
                                        <CheckboxControl
                                            checked={enableHour}
                                            onChange={enableHour => setAttributes({ enableHour })}
                                        />
                                    </div>
                                    <div className="qubely-coutdown-label-right">
                                        <TextControl
                                            placeholder={__('Hour')}
                                            value={hourText}
                                            onChange={hourText => setAttributes({ hourText })}
                                        />
                                    </div>
                                </div>
                                <div className="qubely-countdown-label-control-text">
                                    <div className="qubely-coutdown-label-left">
                                        <CheckboxControl
                                            checked={enableMinute}
                                            onChange={enableMinute => setAttributes({ enableMinute })}
                                        />
                                    </div>
                                    <div className="qubely-coutdown-label-right">
                                        <TextControl
                                            placeholder={__('Minute')}
                                            value={minuteText}
                                            onChange={minuteText => setAttributes({ minuteText })}
                                        />
                                    </div>
                                </div>
                                <div className="qubely-countdown-label-control-text">
                                    <div className="qubely-coutdown-label-left">
                                        <CheckboxControl
                                            checked={enableSecond}
                                            onChange={enableSecond => setAttributes({ enableSecond })}
                                        />
                                    </div>
                                    <div className="qubely-coutdown-label-right">
                                        <TextControl
                                            placeholder={__('Second')}
                                            value={secondText}
                                            onChange={secondText => setAttributes({ secondText })}
                                        />
                                    </div>
                                </div>

                                <Range
                                    min={0}
                                    max={100}
                                    label={__('Spacing')}
                                    value={labelSpacing}
                                    onChange={labelSpacing => setAttributes({ labelSpacing })}
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
                                {  /* Note: Label Spacing & Number Spacing are same */}
                                <Color
                                    label={__('Color')}
                                    value={numberColor}
                                    onChange={numberColor => setAttributes({ numberColor })}
                                />
                                <Range
                                    min={0}
                                    max={100}
                                    label={__('Spacing')}
                                    value={labelSpacing}
                                    onChange={labelSpacing => setAttributes({ labelSpacing })}
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
                                (layout === 1 && justifyAlign !== 'space-between') &&
                                <PanelBody title={__('Separator')} initialOpen={false}>
                                    <ButtonGroup
                                        label={__('Separator Type')}
                                        options={
                                            [
                                                [<img src={qubely_pro_admin.plugin + 'assets/img/blocks/countdown/ban.svg'} alt={__('None')} />, 'none'],
                                                [<img src={qubely_pro_admin.plugin + 'assets/img/blocks/countdown/colon.svg'} alt={__('Colon')} />, 'colon'],
                                                [<img src={qubely_pro_admin.plugin + 'assets/img/blocks/countdown/pipe.svg'} alt={__('Pipe')} />, 'line']
                                            ]
                                        }
                                        value={(layout === 2 || justifyAlign === 'space-between') ? 'none' : separatorType}
                                        additionalClass="qubely-countdown-separator-control extra-padding"
                                        onChange={value => setAttributes({ separatorType: value })}
                                    />

                                    {(separatorType !== 'none') && (
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
                        </InspectorTab>
                        <InspectorTab key={"advance"}>
                            {animationSettings(uniqueId, animation, setAttributes)}
                            {interactionSettings(uniqueId, interaction, setAttributes)}
                        </InspectorTab>
                    </InspectorTabs>
                </InspectorControls>

                <BlockControls>
                    <Toolbar>
                        <InlineToolbar
                            data={[{ name: 'InlineSpacer', key: 'spacer', responsive: true, unit: ['px', 'em', '%'] }]}
                            {...this.props}
                            prevState={this.state}
                        />
                    </Toolbar>
                    <AlignmentToolbar
                        value={justifyAlign}
                        alignmentControls={DEFAULT_ALIGNMENT_CONTROLS}
                        onChange={(justifyAlign) => setAttributes({justifyAlign})}
                    />
                    <PluginBlockSettingsMenuItem
                        icon={'editor-code'}
                        label={__('Copy Attributes')}
                        onClick={() => this.copyAttributes()}
                    />
                </BlockControls>

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
                            startDate={startDate}
                            dayText={dayText  || 'Day'}
                            hourText={hourText || 'Hour'}
                            minuteText={minuteText || 'Minute'}
                            secondText={secondText || 'Second'}
                            enableDay={enableDay}
                            enableHour={enableHour}
                            enableMinute={enableMinute}
                            enableSecond={enableSecond}
                            enableLabel={enableLabel}
                            labelView={labelView}
                            className={classnames(
                                'qubely-countdown',
                                'qubely-countdown-label-' + labelPosition,
                                'qubely-item-separator-' + ((layout === 2 || justifyAlign === 'space-between') ? 'none' : separatorType)
                            )}
                            layout={layout}
                            pie={{
                                fill,
                                emptyFill,
                                size: size.md,
                                thickness: thickness.md,
                                thicknessBg: thicknessBg.md
                            }}
                            id={uniqueId}
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

export default withCSSGenerator()(Edit);