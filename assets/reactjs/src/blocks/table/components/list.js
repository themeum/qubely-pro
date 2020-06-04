const { __ } = wp.i18n;
const { RichText } = wp.blockEditor;
import classnames from 'classnames';
const List = (props) => {

    const {
        classes,
        listIcon,
        ordered,
        values = "<li>item one</li><li>item two</li>",
        onChange,
        identifier
    } = props;

    const classNames = classnames(
        'list-cell',
        'list-wrapper',
        classes
    )
    const tagName = ordered ? 'ol' : 'ul';

    return (
        <div className={classNames}>
            <RichText
                multiline="li"
                value={values}
                identifier={identifier}
                __unstableMultilineRootTag={tagName}
                onChange={nextValues => onChange(nextValues)}
                placeholder={__('Write list…')}
                className={`list-item qubely-list-bullet-${listIcon.name}`}
            />
        </div>
    )
}

export default List;