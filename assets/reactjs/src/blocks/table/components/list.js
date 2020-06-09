const { __ } = wp.i18n;
const { RichText } = wp.blockEditor;
import classnames from 'classnames';

const List = (props) => {

    const {
        classes,
        listIcon,
        ordered = false,
        values = "<li>item one</li><li>item two</li>",
        onChange,
        identifier
    } = props;

    const wrapperClassName = classnames(
        'list-cell',
        'list-wrapper',
        classes
    )
    const tagName = ordered ? 'ol' : 'ul';
    const listClasses = classnames(
        'list-item',
        { [`custom-style qubely-list-bullet-${listIcon.name}`]: typeof listIcon.name !== 'undefined' },
        { [`default-style}`]: typeof listIcon.name === 'undefined' },
        { ['qubely-unordered-list']: tagName === 'ul' },
    )
    return (
        <div className={wrapperClassName}>
            <RichText
                multiline="li"
                tagName={tagName}
                value={values}
                identifier={identifier}
                __unstableMultilineRootTag={tagName}
                onChange={nextValues => onChange(nextValues)}
                placeholder={__('Write list…')}
                className={listClasses}
            />
        </div>
    )
}

const ListSave = (props) => {

    const {
        classes,
        listIcon,
        ordered = false,
        values = "<li>item one</li><li>item two</li>",
        onChange,
        identifier
    } = props;

    const wrapperClassName = classnames(
        'list-cell',
        'list-wrapper',
        classes
    )
    const tagName = ordered ? 'ol' : 'ul';
    const listClasses = classnames(
        'list-item',
        { [`custom-style qubely-list-bullet-${listIcon.name}`]: typeof listIcon.name !== 'undefined' },
        { [`default-style}`]: typeof listIcon.name === 'undefined' },
        { ['qubely-unordered-list']: tagName === 'ul' },
    )
    return (
        <div className={wrapperClassName}>
            <RichText.Content
                multiline="li"
                tagName={tagName}
                value={values}
                identifier={identifier}
                __unstableMultilineRootTag={tagName}
                className={listClasses}
            />
        </div>
    )
}

export { List, ListSave };