/* eslint-disable react/react-in-jsx-scope */
import {
    IconSave as Icon,
    ImageSave as Image,
    ListSave as List,
    RatingSave as Ratings
} from './components';
import classnames from 'classnames';
const { Component, Fragment } = wp.element;
const { QubelyButtonSave, HelperFunction: { animationAttr, IsInteraction } } = wp.qubelyComponents;
const {
    RichText
} = wp.blockEditor;
const { __ } = wp.i18n;
class Save extends Component {

    /**
       * Render table section (table body, table head & table footer)
       * @param name
       * @param rows
       * @returns {*}
       */
    renderSections = ({ name, rows }) => {
        const Tag = `t${name}`;
        const classNames = classnames(
            { 'head-row': name === 'head' }
        )
        return (
            <Tag >
                {
                    rows.map((cells, rowIndex) => (
                        <tr key={rowIndex} className={classNames}>{this.renderData(cells, name, rowIndex)}</tr>
                    ))
                }
            </Tag>
        );
    };

    /**
     * Render table data
     * @param cells
     * @param name
     * @param rowIndex
     * @returns {*}
     */
    renderData = ({ cells }, name, rowIndex) => {
        return cells.map((
            {
                content,
                tag: Tag,
                colSpan,
                rowSpan,
                scope,
                align,
                type,
                listItems,
                listCustomIcon,
                iconName,
                ratings,
                image,
                ordered,
                imageSize,
                buttonType,
                customAlignment,
                replacedFor,
                buttonCustomUrl,
                customTypo,
                iconCustomColor,
                ratingsCustomColor,
            },
            columnIndex
        ) => {
            const cellLocation = {
                sectionName: name,
                rowIndex,
                columnIndex,
            };


            const className = classnames(
                'qubely-block-table_cell-content',
                { ['hidden-cell']: typeof replacedFor !== 'undefined' },
                { ['cell-placeholder']: type === 'text' && (!content || typeof content == 'undefined') },
                { [`align-${customAlignment}`]: customAlignment },
            );

            let placeholder = 'cell content';
            if (name === 'head') {
                placeholder = __('Header label');
            } else if (name === 'foot') {
                placeholder = __('Footer label');
            }

            return (
                <Tag className={className}
                    {...(typeof colSpan !== 'undefined' && { colSpan })}
                    {...(typeof rowSpan !== 'undefined' && { rowSpan })}
                    style={{ ...(typeof customTypo !== 'undefined' && { fontSize: `${customTypo}px` }) }}
                >
                    {
                        this.renderCellContent({
                            type,
                            content,
                            columnIndex,
                            Tag,
                            scope,
                            placeholder,
                            cellLocation,
                            listItems,
                            listCustomIcon,
                            iconName,
                            ratings,
                            image,
                            ordered,
                            imageSize,
                            buttonType,
                            buttonCustomUrl,
                            iconCustomColor,
                            ratingsCustomColor,
                        })
                    }
                </Tag>
            )
        })
    };
    /**
        * Render cell content
        * @param type
        * @param content
        * @param columnIndex
        * @param Tag
        * @param scope
        * @param placeholder
        * @param cellLocation
        * @param listItems
        * @param iconName
        * @param ratings
        * @param image
        * @param ordered
        * @returns {*}
        */
    renderCellContent = ({
        type,
        content,
        columnIndex,
        Tag,
        scope,
        placeholder,
        cellLocation,
        iconName,
        ratings,
        image,
        ordered,
        listItems,
        listCustomIcon,
        imageSize,
        buttonType,
        buttonCustomUrl,
        iconCustomColor,
        ratingsCustomColor,
    }) => {
        const {
            setAttributes,
            isSelected,
            noticeUI,
            noticeOperations,
            attributes: {
                uniqueId,
                enableButton,
                buttonFillType,
                buttonSize,
                buttonIconName,
                buttonIconPosition,
                buttonTag,
                enableListIcons,
                iconColor,
                iconPosition,
                listIcon,
                imageAlignment,
                imageCommonSize,
                imageCustomSize,
                buttonUrl,
            }
        } = this.props;
        const classNames = classnames(
            'cell-text'
        );
        let buttonLayout = buttonFillType;
        if (typeof buttonType !== 'undefined') {
            buttonLayout = buttonType;
        }
        switch (type) {
            case 'button':
                return (
                    <QubelyButtonSave
                        tableBuilder
                        buttonFillType={buttonLayout}
                        buttonSize={buttonSize}
                        buttonText={content}
                        buttonIconName={buttonIconName}
                        buttonIconPosition={buttonIconPosition}
                        buttonTag={buttonTag}
                        buttonUrl={typeof buttonCustomUrl !== 'undefined' ? buttonCustomUrl : buttonUrl}
                    />
                )
            case 'list':
                return (
                    <List
                        listIcon={listIcon}
                        ordered={ordered}
                        values={listItems}
                        listCustomIcon={listCustomIcon}
                        identifier={`list-${cellLocation.rowIndex}${columnIndex}`}
                    />

                )
            case 'icon':
                return (
                    <Icon
                        iconName={iconName}
                        iconCustomColor={iconCustomColor}
                    />
                )
            case 'image':
                return (
                    <Image
                        image={image}
                        imageSize={imageSize}
                        imageAlignment={imageAlignment}
                        imageCommonSize={imageCommonSize}
                        imageCustomSize={imageCustomSize}
                    />)
            case 'rating':
                return (
                    <Ratings
                        ratings={ratings}
                        ratingsCustomColor={ratingsCustomColor}
                    />)
            default:
                return (
                    <RichText.Content
                        key={columnIndex}
                        scope={Tag === 'th' ? scope : undefined} s
                        value={content}
                        className={classNames}
                    />
                )
        }
    };
    /**
 * Render table content
 * @returns {*}
 */
    renderTableContent = () => {
        const {
            body,
            tableHeader,
            head,
            tableFooter,
            foot,
            cellBorder,
            outerBoder,
            verticalBorder,
            horizontalBorder
        } = this.props.attributes;

        const Section = this.renderSections;
        const tableClasses = classnames(
            'qubely-table',
            { 'no-border': !cellBorder.openBorder },
            { 'no-outer-border': !outerBoder },
            { 'no-vertical-border': !verticalBorder },
            { 'no-horizontal-border': !horizontalBorder },
        );

        return (
            <figure className={'qubely-table-figure'}>
                <table style={{ width: '100%' }} className={tableClasses}>
                    {
                        tableHeader && (
                            <Section name='head' rows={head} />
                        )
                    }
                    <Section name='body' rows={body} />
                    {
                        tableFooter && (
                            <Section name='foot' rows={foot} />
                        )
                    }
                </table>
            </figure>
        );
    };

    render() {
        const {
            attributes: {
                layout,
                uniqueId,
                animation,
                interaction,
                fixedWithCells
            }
        } = this.props
        const interactionClass = IsInteraction(interaction) ? 'qubley-block-interaction' : '';
        const TableContent = this.renderTableContent;
        const classes = classnames(
            'qubely-block-table',
            layout,
            interactionClass,
            { ['fixed-width']: fixedWithCells }
        )
        return (
            <div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
                <div className={classes} >
                    <TableContent />
                </div>
            </div>
        );
    }
}

export default Save;
