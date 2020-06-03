import classnames from 'classnames';
const { __ } = wp.i18n;
const {
    Popover,
    Tooltip
} = wp.components;

const {
    useState
} = wp.element;

const {
    IconList
} = wp.qubelyComponents;

const Icon = (props) => {

    const [showIconPicker, toggleIconPicker] = useState(false);
    const {
        iconName = undefined,
        classes,
        onChange,
        isSelected
    } = props;

    const classNames = classnames(
        'icon-cell',
        'icon-wrapper',
        classes
    )
    return (
        <div className={classNames}>
            <Tooltip text={__(iconName === undefined ? 'Add icon' : 'Change icon')}>

                {
                    iconName === undefined ?
                        <span onClick={() => toggleIconPicker(showIconPicker ? false : true)} className="table-icon-picker" role="button" arealabel={__('Add new icon')}>
                            <i className="qubely-table fas fa-plus" />
                        </span>
                        :
                        <div className="icon" onClick={() => toggleIconPicker(showIconPicker ? false : true)}>
                            <i className={iconName} />
                        </div>
                }
            </Tooltip>
            {
                (isSelected && showIconPicker) &&
                <Popover
                    position="bottom center"
                    className="qubely-socialicon-picker-popover"
                >
                    <IconList
                        disableToggle={true}
                        value={iconName}
                        onChange={newIcon => onChange(newIcon)}
                    />
                </Popover>
            }
        </div>
    );
}

export default Icon;