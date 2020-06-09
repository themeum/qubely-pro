import {
    IconSave as Icon,
    ImageSave as Image,
    ListSave as List,
    RatingSave as Ratings
} from './components';
import classnames from 'classnames';
const { Component, Fragment } = wp.element;
const {QubelyButtonSave, HelperFunction: { animationAttr, IsInteraction } } = wp.qubelyComponents;
const {
    RichText
} = wp.blockEditor;
class Save extends Component {

    /**
       * Render table section (table body, table head & table footer)
       * @param name
       * @param rows
       * @returns {*}
       */
    renderSections = ({ name, rows }) => {
        const Tag = `t${name}`;
        return (
            <Tag>
                {
                    rows.map((cells, rowIndex) => (
                        <tr key={rowIndex}>{this.renderData(cells, name, rowIndex)}</tr>
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
        return cells.map(({ content, tag: Tag, scope, align, type, listItems, iconName, ratings, image, ordered, imageSize }, columnIndex) => {
            const cellLocation = {
                sectionName: name,
                rowIndex,
                columnIndex,
            };


            const className = classnames(
                `has-text-align-${align}`,
                'qubely-block-table_cell-content',
                'qubely-table-cell-edit'
            );

            let placeholder = 'cell content';
            if (name === 'head') {
                placeholder = __('Header label');
            } else if (name === 'foot') {
                placeholder = __('Footer label');
            }

            return (
                <Tag className={className} >
                    {this.renderCellContent({ type, content, columnIndex, Tag, scope, placeholder, cellLocation, listItems, iconName, ratings, image, ordered, imageSize })}
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
    renderCellContent = ({ type, content, columnIndex, Tag, scope, placeholder, cellLocation, iconName, ratings, image, ordered, listItems, imageSize }) => {
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
                imageAlignment
            }
        } = this.props;

        switch (type) {
            case 'button':
                return (
                    <QubelyButtonSave
                        buttonFillType={buttonFillType}
                        buttonSize={buttonSize}
                        buttonText={content}
                        buttonIconName={buttonIconName}
                        buttonIconPosition={buttonIconPosition}
                        buttonTag={buttonTag}
                    />
                )
            case 'list':
                return (
                    <List
                        listIcon={listIcon}
                        ordered={ordered}
                        values={listItems}
                        identifier={`list-${cellLocation.rowIndex}${columnIndex}`}
                        onChange={nextValues => console.log('nextValues : ', nextValues)}
                    />

                )
            case 'icon':
                return (
                    <Icon
                        iconName={iconName}
                    />
                )
            case 'image':
                return (
                    <Image
                        imageAlignment={imageAlignment}
                        imageSize={imageSize}
                        image={image}
                    />)
            case 'rating':
                return (
                    <Ratings
                        ratings={ratings}
                        isSelected={isSelected}
                    />)
            default:
                return (
                    <RichText.Content
                        key={columnIndex}
                        scope={Tag === 'th' ? scope : undefined}
                        value={content}
                    />
                )
        }
    };
    /**
 * Render table content
 * @returns {*}
 */
    renderTableContent = () => {
        const Section = this.renderSections;
        const Row = this.renderCellGenerator;

        if (!this.props.attributes.body.length) {
            return <Row cell={8} row={8} />
        }

        return (
            <figure className={'class="wp-block-table is-style-regular"'}>
                <table style={{ width: '100%' }}>
                    <Section name='body' rows={this.props.attributes.body} />
                </table>
            </figure>
        );
    };
    /**
         * Render empty cell generator
         * @param cell
         * @param row
         * @param className
         * @returns {*}
         */
    renderCellGenerator = ({ cell, row, className = '' }) => {
        const containerClass = classnames('qubely-tcg-container', className);
        return (
            <div className={containerClass} >
                {
                    Array(row).fill(0).map((_, row_index) => {
                        const rowclass = classnames('qubely-tcg-row', `qubely-tcg-row-${row_index}`);
                        return (
                            <div className={rowclass}>
                                {
                                    Array(cell).fill(0).map((_, index) => {
                                        const columnclass = classnames(
                                            'qubley-tcg-col',
                                            'qubely-tcg-col-' + index
                                        );
                                        const columnprops = {
                                            className: columnclass
                                        };
                                        return <span {...columnprops} />
                                    })
                                }
                            </div>
                        )
                    })
                }
                <div className="qubely-tcg-info">
                    <span>{`${currentGeneratorCell.row + 1}x${currentGeneratorCell.column + 1}`}</span>
                </div>
            </div>
        )
    };
    render() {
        const {
            attributes: {
                uniqueId,
                animation,
                interaction
            }
        } = this.props
        const interactionClass = IsInteraction(interaction) ? 'qubley-block-interaction' : '';
        const TableContent = this.renderTableContent;
        return (
            <div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
                <div className={`qubely-block-table ${interactionClass}`} >
                    <TableContent />
                </div>
            </div>
        );
    }
}

export default Save;