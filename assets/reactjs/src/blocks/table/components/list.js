const { __ } = wp.i18n;
const { RichText } = wp.blockEditor;

const List = (props) => {

    const {
        ordered,
        values = "<li>item one</li><li>item two</li>",
        onChange,
        identifier
    } = props;
    // console.log('props : ',props);
    const tagName = ordered ? 'ol' : 'ul';
    return (
        <div>
            <RichText
                value={'values'}
            />
            <RichText
                multiline="li"
                value={values}
                identifier={identifier}
                __unstableMultilineRootTag={tagName}
                onChange={nextValues => onChange(nextValues)}
                placeholder={__('Write list…')}
            />
        </div>
    )
}

export default List;