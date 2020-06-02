const {
    Component,
    Fragment
} = wp.element;

const { __ } = wp.i18n;

const {
    PanelBody,
    Tooltip,
    Toolbar,
    DropdownMenu,
    ToolbarGroup,
    Dropdown
} = wp.components;

const {
    BlockControls,
    InspectorControls,
    RichText,
    InnerBlocks
} = wp.blockEditor;

const {
    Inline: { InlineToolbar },
    CssGenerator: { CssGenerator },
    withCSSGenerator,
    gloalSettings: { globalSettingsPanel, animationSettings, interactionSettings },
    ContextMenu: { ContextMenu, handleContextMenu },
    QubelyButtonEdit,
    Range,
    QubelyIconListEdit,
    QubelyButton: {
        buttonSettings
    },
    QubelyList: {
        listSettings
    },
    InspectorTab,
    InspectorTabs
} = wp.qubelyComponents;

import classnames from 'classnames';
import { List } from './components';
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: 'md',
            spacer: true,
            cellLocation: {},
            default: [],
            selectedCell: null,
            showPostTextTypography: false,
            openPanelSetting: true,
            currentGeneratorCell: {
                row: -1,
                column: -1
            },
            showCellTypeChange: false
        }
    }

    componentDidMount() {
        const { setAttributes, clientId, attributes: { uniqueId } } = this.props;
        const _client = clientId.substr(0, 6);
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client });
        }
    }


    /**
     * Gets the table controls to display in the block toolbar.
     *
     * @return {Array} Table controls.
     */
    getTableControls = () => {
        const { selectedCell } = this.state;
        const { body } = this.props.attributes;
        return [
            {
                icon: <span className={'fas fa-table'} />,
                title: __('Add Row Before'),
                isDisabled: !selectedCell,
                onClick: this.onInsertRowBefore.bind(this),
            },
            {
                icon: <span className={'fas fa-table'} />,
                title: __('Add Row After'),
                isDisabled: !selectedCell,
                onClick: this.onInsertRowAfter.bind(this),
            },
            {
                icon: <span className={'fas fa-table'} />,
                title: __('Delete Row'),
                isDisabled: !selectedCell || body.length < 2,
                onClick: this.onDeleteRow.bind(this),
            },
            {
                icon: <span className={'fas fa-table'} />,
                title: __('Add Column Before'),
                isDisabled: !selectedCell,
                onClick: this.onInsertColumnBefore.bind(this),
            },
            {
                icon: <span className={'fas fa-table'} />,
                title: __('Add Column After'),
                isDisabled: !selectedCell,
                onClick: this.onInsertColumnAfter.bind(this),
            },
            {
                icon: <span className={'fas fa-table'} />,
                title: __('Delete Column'),
                isDisabled: !selectedCell || !body.length || (body.length && body[0].cells.length < 2),
                onClick: this.onDeleteColumn.bind(this),
            },
        ];
    };

    /**
     * Handle insert row before selected index
     * helper method
     * @returns {Promise<void>}
     */
    async onInsertRowBefore() {
        const { rowIndex } = this.state.selectedCell;
        await this.insertRowAtIndex(rowIndex);
    }

    /**
     * Handle insert row after selected index
     * helper method
     * @returns {Promise<void>}
     */
    async onInsertRowAfter() {
        const { rowIndex } = this.state.selectedCell;
        await this.insertRowAtIndex(rowIndex + 1);
    }

    /**
     * Insert row at specific index
     * helper method
     * @param index
     */
    insertRowAtIndex = (index) => {
        const { setAttributes, attributes: { body } } = this.props;
        const columnCount = body.length ? body[0].cells.length : 0;
        if (columnCount) {
            body.splice(index, 0, this.generateEmptyRow(1, columnCount)[0]);
            setAttributes({ body });
            this.resetSelectedCell();
        }
    };

    /**
     * Delete row by index
     * helper method
     * @returns {Promise<void>}
     */
    async onDeleteRow() {
        const { rowIndex } = this.state.selectedCell;
        const { setAttributes, attributes } = this.props;
        const body = await attributes.body.filter((_, index) => index !== rowIndex);
        setAttributes({ body });
        this.resetSelectedCell();
    }

    /**
     * Handle insert column before selected index
     * helper method
     * @returns {Promise<void>}
     */
    async onInsertColumnBefore() {
        const { columnIndex } = this.state.selectedCell;
        await this.insertColumnAtIndex(columnIndex);
    }

    /**
     * Handle insert column after selected index
     * helper method
     * @returns {Promise<void>}
     */
    async onInsertColumnAfter() {
        const { columnIndex } = this.state.selectedCell;
        await this.insertColumnAtIndex(columnIndex + 1);
    }

    /**
     * Insert new column at specific index
     * helper method
     * @param index
     */
    insertColumnAtIndex = (index) => {
        const { setAttributes, attributes: { body } } = this.props;
        body.map(column => ({ cells: column.cells.splice(index, 0, this.generateEmptyColumn(1)[0]) }));
        setAttributes({ body });
        this.resetSelectedCell();
    };

    /**
     * Handle delete column
     * @returns {Promise<void>}
     */
    async onDeleteColumn() {
        const { setAttributes } = this.props;
        const deleted = await this.deleteColumnByIndex();
        setAttributes(deleted);
        this.resetSelectedCell();
    }

    /**
     * Delete table column by index
     * helper method
     * @returns {*}
     */
    deleteColumnByIndex = () => {
        const { body } = this.props.attributes;
        const { columnIndex } = this.state.selectedCell;
        return body.reduce((acc, obj) => {
            obj['cells'] = obj['cells'].filter((_, index) => index !== columnIndex);
            acc.push(obj);
            return acc;
        }, []);
    };

    /**
     * Reset selected cell
     * helper method
     * @returns {*}
     */
    resetSelectedCell = () => this.setState({ selectedCell: null });

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
        const { selectedCell } = this.state;
        return cells.map(({ content, tag: Tag, scope, align, type, listItems, ordered }, columnIndex) => {
            const cellLocation = {
                sectionName: name,
                rowIndex,
                columnIndex,
            };

            const isSelectedCell = selectedCell && (selectedCell.rowIndex === rowIndex && selectedCell.columnIndex === columnIndex);

            const className = classnames(
                { 'is-qubely-active': isSelectedCell },
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
                <Tag
                    className={className}
                    onClick={(event) => this.handleOnCellClick(event, cellLocation)}
                >
                    {this.renderCellContent({ type, content, columnIndex, Tag, scope, placeholder, cellLocation, listItems, ordered })}
                    {isSelectedCell && this.renderCellChanger({ location: cellLocation })}
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
     * @param ordered
     * @returns {*}
     */
    renderCellContent = ({ type, content, columnIndex, Tag, scope, placeholder, cellLocation, ordered, listItems }) => {
        const {
            setAttributes,
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
                iconPosition
            }
        } = this.props;
        switch (type) {
            case 'button':
                return (
                    <QubelyButtonEdit
                        enableButton={enableButton}
                        buttonFillType={buttonFillType}
                        buttonSize={buttonSize}
                        buttonText={content}
                        buttonIconName={buttonIconName}
                        buttonIconPosition={buttonIconPosition}
                        buttonTag={buttonTag}
                        onTextChange={content => this.onChangeCell(cellLocation, content, 'content')} />
                )
            case 'list':
                return (
                    <Fragment>
                        <List
                            ordered={ordered}
                            values={listItems}
                            identifier={`list-${cellLocation.rowIndex}${columnIndex}`}
                            onChange={nextValues => this.onChangeCell(cellLocation, nextValues, 'listItems')}
                        />
                        {/* <QubelyIconListEdit
                            parentBlock={`qubely-block-${uniqueId}`}
                            disableButton={listItems.length > 0}
                            buttonText={__('Add New Feature')}
                            enableListIcons={enableListIcons}
                            listItems={listItems}
                            iconColor={iconColor}
                            iconPosition={iconPosition}
                            listWrapperClassName={`qubely-list icon-position-${iconPosition}`}
                            newListItemPlaceHolder={__('Add New Feature')}
                            onListItemModification={newValues => {
                                console.log('hello : ', newValues);
                                setAttributes({ listItems: newValues })
                                this.onChangeCell(cellLocation, newValues, 'listItems');
                            }}
                            onChange={(key, value) => { console.log('world : ', key, value); setAttributes({ [key]: value }) }}
                            onIconColorChange={(color, currentListItemIndex) => setAttributes({ iconColor: color })}
                        /> */}
                    </Fragment>
                )
            default:
                return (
                    <RichText
                        key={columnIndex}
                        scope={Tag === 'th' ? scope : undefined}
                        value={content}
                        placeholder={placeholder}
                        onChange={(content) => {
                            this.onChangeCell(cellLocation, content, 'content')
                        }}
                    />
                )
        }
    };

    /**
     * cell click event handler
     * @param event
     * @param cellLocation
     */
    handleOnCellClick = (event, cellLocation) => {
        if (!location) return;
        const { selectedCell } = this.state;
        if (
            cellLocation && selectedCell &&
            !(
                cellLocation.sectionName === selectedCell.sectionName &&
                cellLocation.columnIndex === selectedCell.columnIndex &&
                cellLocation.rowIndex === selectedCell.rowIndex
            )
        ) {
            this.setState({ showCellTypeChange: false });
        }

        this.setState({
            cellLocation,
            selectedCell: cellLocation
        });

    };

    /**
     * Render cell type changer
     * @param location
     * @return mixed
     */
    renderCellChanger = ({ location = false }) => {
        if (!location) return null;
        /**
         * Available cell types
         * @type {({icon: string, text: *, type: string})[]}
         */
        const AVAILABLE_CELL_TYPES = [
            {
                text: __('Text'),
                icon: 'fas fa-font',
                type: 'text'
            },
            {
                text: __('Image'),
                icon: 'fas fa-image',
                type: 'image'
            },
            {
                text: __('Button'),
                icon: 'fas fa-mouse-pointer',
                type: 'button'
            },
            {
                text: __('Rating'),
                icon: 'fas fa-star',
                type: 'rating'
            },
            {
                text: __('Icon'),
                icon: 'fas fa-rocket',
                type: 'icon'
            },
            {
                text: __('list'),
                icon: 'fas fa-list',
                type: 'list'
            }
        ];

        return (
            <div className={'qubely-tc-type-changer-wrap'}>
                <button onClick={() => {
                    this.setState((prevState) => {
                        return { showCellTypeChange: !prevState.showCellTypeChange }
                    })
                }}>
                    <span className="fas fa-angle-down" />
                </button>
                {
                    this.state.showCellTypeChange && (
                        <div className="qubely-tc-type-changer">
                            {
                                AVAILABLE_CELL_TYPES.map(({ text, icon, type }) => (
                                    <button onClick={() => this.onChangeCell(location, type, 'type')}>
                                        <i className={icon} /> {text}
                                    </button>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        )
    };

    /**
     * Handle cell value changes
     * @param cellLocation
     * @param content
     * @param field
     */
    onChangeCell = (cellLocation, content, field) => {
        if (
            (Object.keys(cellLocation).length === 0 && cellLocation.constructor === Object) ||
            (typeof field === 'undefined' || field === '')
        ) {
            return;
        }
        const { setAttributes, attributes } = this.props;
        const data = attributes[cellLocation.sectionName];
        data[cellLocation.rowIndex].cells[cellLocation.columnIndex][field] = content;
        setAttributes({ [cellLocation.sectionName]: data });
        // this.setState({cellLocation});
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
        const { currentGeneratorCell } = this.state;
        const containerClass = classnames('qubely-tcg-container', className);
        return (
            <div className={containerClass} onMouseLeave={() => this.setCurrentGeneratorCell(-1, -1)} >
                {
                    Array(row).fill(0).map((_, row_index) => {
                        const rowclass = classnames('qubely-tcg-row', `qubely-tcg-row-${row_index}`);
                        return (
                            <div className={rowclass}>
                                {
                                    Array(cell).fill(0).map((_, index) => {
                                        const columnclass = classnames(
                                            'qubley-tcg-col',
                                            'qubely-tcg-col-' + index,
                                            { 'active': (currentGeneratorCell.row >= row_index && currentGeneratorCell.column >= index) }
                                        );
                                        const columnprops = {
                                            className: columnclass,
                                            onMouseEnter: () => this.setCurrentGeneratorCell(row_index, index),
                                            onClick: () => this.generateCells(row_index, index)
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

    /**
     * Finally generate cells using `generateEmptyRow` & `generateEmptyColumn`
     * @param row
     * @param column
     */
    generateCells = (row, column) => {
        this.props.setAttributes({ body: this.generateEmptyRow(row + 1, column + 1) });
    };

    /**
     * Generate Empty Column
     * @param count
     * @param columnCount
     * @returns {{cells: {scope: undefined, tag: string, align: undefined, type: string, content: string}[]}[]}
     */
    generateEmptyRow = (count, columnCount) => (
        Array(count).fill(0).map(_ => ({ cells: this.generateEmptyColumn(columnCount) }))
    );

    /**
     * Generate Empty Column
     * @param count
     * @returns {{scope: undefined, tag: string, align: undefined, type: string, content: string}[]}
     */
    generateEmptyColumn = (count) => (
        Array(count).fill(0).map(_ => ({
            content: '',
            tag: 'td',
            scope: undefined,
            align: undefined,
            type: 'text',
            ordered: true,
            listItems: "<li>one </li><li>two </li>"
        }))
    );

    /**
     * Select/Update current generator cell
     * @params row, column
     */
    setCurrentGeneratorCell = (row, column) => {
        this.setState({
            currentGeneratorCell: {
                row,
                column
            }
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
                body,

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

        const TableContent = this.renderTableContent;
        const Row = this.renderCellGenerator;

        const { device, showPostTextTypography } = this.state;

        return (
            <Fragment>
                <InspectorControls key={'inspector'}>
                    <InspectorTabs tabs={['style', 'advance']}>
                        <InspectorTab key={'style'}>
                            {buttonSettings(
                                attributes,
                                device,
                                (key, value) => { setAttributes({ [key]: value }) },
                                (key, value) => { this.setState({ [key]: value }) }
                            )}
                            {listSettings(attributes, device, setAttributes)}
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
                            {animationSettings(uniqueId, animation, setAttributes)}
                            {interactionSettings(uniqueId, interaction, setAttributes)}
                        </InspectorTab>
                    </InspectorTabs>
                </InspectorControls>

                <BlockControls>
                    <ToolbarGroup>
                        <DropdownMenu
                            hasArrowIndicator
                            icon={<span className={'fas fa-table'} />}
                            label={__('Edit table')}
                            controls={this.getTableControls()}
                        />
                        <InlineToolbar
                            data={[{ name: 'InlineSpacer', key: 'spacer', responsive: true, unit: ['px', 'em', '%'] }]}
                            {...this.props}
                            prevState={this.state} />

                        <Dropdown
                            position="bottom right"
                            renderToggle={({ isOpen, onToggle }) => (
                                <Tooltip text={__('Table Generator')}>
                                    <button type='button' className='components-button' onClick={onToggle} aria-expanded={isOpen}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h15zm-5 14h-5v-9h5v9zM5 10h3v9H5v-9zm12 9v-9h3v9h-3z"></path></svg>
                                        <span className="components-dropdown-menu__indicator"></span>
                                    </button>
                                </Tooltip>
                            )}
                            renderContent={() =>
                                <div className="qubely-toolber-popup">
                                    <Row cell={6} row={6} className={'qubely-tcg-toolbar'} />
                                </div>
                            }
                        >
                        </Dropdown>
                    </ToolbarGroup>
                </BlockControls>

                {globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes)}

                <div className={`qubely-block-${uniqueId} ${className ? className : ''}`}>
                    <div className='qubely-block-table'>
                        <TableContent />
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default withCSSGenerator()(Edit);