/* eslint-disable react/react-in-jsx-scope */

import icons from '../../helpers/icons';
import classnames from 'classnames';
import {
    Icon,
    Image,
    List,
    Ratings
} from './components';
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
    Styles,
    Color,
    Range,
    Padding,
    Toggle,
    Alignment,
    IconSelector,
    Border,
    BorderRadius,
    ColorAdvanced,
    InspectorTab,
    InspectorTabs,
    RadioAdvanced,
    withCSSGenerator,
    QubelyButtonEdit,
    Inline: {
        InlineToolbar
    },
    QubelyButton: {
        buttonSettings
    },
    QubelyList: {
        listSettings
    },
    gloalSettings: {
        globalSettingsPanel,
        animationSettings,
        interactionSettings
    },
    ContextMenu: {
        ContextMenu,
        handleContextMenu
    },
} = wp.qubelyComponents;

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: 'md',
            toggle: false,
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
                isDisabled: !selectedCell || (selectedCell.sectionName !== 'body'),
                onClick: this.onInsertRowBefore.bind(this),
            },
            {
                icon: <span className={'fas fa-table'} />,
                title: __('Add Row After'),
                isDisabled: !selectedCell || (selectedCell.sectionName !== 'body'),
                onClick: this.onInsertRowAfter.bind(this),
            },
            {
                icon: <span className={'fas fa-table'} />,
                title: __('Delete Row'),
                isDisabled: !selectedCell || (selectedCell.sectionName !== 'body') || body.length < 2,
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
        const { rowIndex, sectionName } = this.state.selectedCell;
        if (sectionName !== 'body') {
            return;
        }
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
        const { setAttributes, attributes: { body, head, foot } } = this.props;
        body.map(column => ({ cells: column.cells.splice(index, 0, this.generateEmptyColumn(1)[0]) }));
        head.map(column => ({ cells: column.cells.splice(index, 0, this.generateEmptyColumn(1)[0]) }));
        foot.map(column => ({ cells: column.cells.splice(index, 0, this.generateEmptyColumn(1)[0]) }));
        setAttributes({ body, head, foot });
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
        const { body, head, foot } = this.props.attributes;
        const { columnIndex } = this.state.selectedCell;
        head.reduce((acc, obj) => {
            obj['cells'] = obj['cells'].filter((_, index) => index !== columnIndex);
            acc.push(obj);
            return acc;
        }, []);
        foot.reduce((acc, obj) => {
            obj['cells'] = obj['cells'].filter((_, index) => index !== columnIndex);
            acc.push(obj);
            return acc;
        }, [])
        body.reduce((acc, obj) => {
            obj['cells'] = obj['cells'].filter((_, index) => index !== columnIndex);
            acc.push(obj);
            return acc;
        }, []);
        return true;
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
        return cells.map((
            {
                content,
                tag: Tag,
                scope,
                align,
                type,
                listItems,
                iconName,
                ratings,
                image,
                ordered,
                imageSize
            },
            columnIndex
        ) => {
            const cellLocation = {
                sectionName: name,
                rowIndex,
                columnIndex,
            };

            const isSelectedCell = (
                selectedCell &&
                (
                    selectedCell.rowIndex === rowIndex &&
                    selectedCell.columnIndex === columnIndex &&
                    selectedCell.sectionName === name
                )
            );

            const className = classnames(
                { 'is-qubely-active': isSelectedCell },
                { [`has-text-align-${align}`]: align },
                'qubely-block-table_cell-content',
                'qubely-table-cell-edit'
            );

            let placeholder = 'add content';
            if (name === 'head') {
                placeholder = __('Header label');
            } else if (name === 'foot') {
                placeholder = __('Footer label');
            }

            return (
                <Tag
                    className={className}
                    onClick={(event) => this.handleOnCellClick(event, cellLocation, Tag)}
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
                            iconName,
                            ratings,
                            image,
                            ordered,
                            isSelectedCell,
                            imageSize
                        })
                    }
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
        isSelectedCell,
        imageSize
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
                imageAlignment
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
                    <List
                        listIcon={listIcon}
                        ordered={ordered}
                        values={listItems}
                        identifier={`list-${cellLocation.rowIndex}${columnIndex}`}
                        onChange={nextValues => this.onChangeCell(cellLocation, nextValues, 'listItems')}
                    />

                )
            case 'icon':
                return (
                    <Icon
                        isSelected={isSelected}
                        iconName={iconName}
                        isSelectedCell={isSelectedCell}
                        onChange={nextIcon => this.onChangeCell(cellLocation, nextIcon, 'iconName')}
                    />
                )
            case 'image':
                return (
                    <Image
                        device={this.state.device}
                        imageAlignment={imageAlignment}
                        imageSize={imageSize}
                        isSelected={isSelected}
                        isSelectedCell={isSelectedCell}
                        image={image}
                        noticeUI={noticeUI}
                        noticeOperations={noticeOperations}
                        isSelected={isSelected}
                        onResize={value => this.onChangeCell(cellLocation, value, 'imageSize')}
                        onChange={newImage => this.onChangeCell(cellLocation, newImage, 'image')}
                    />)
            case 'rating':
                return (
                    <Ratings
                        ratings={ratings}
                        isSelected={isSelected}
                        onChange={newRatings => this.onChangeCell(cellLocation, newRatings, 'ratings')}
                    />)
            default:
                return (
                    <RichText
                        key={columnIndex}
                        scope={Tag === 'th' ? scope : undefined}
                        value={content}
                        placeholder={placeholder}
                        className="cell-text"
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
     * @param Tag
     */
    handleOnCellClick = (event, cellLocation, Tag) => {
        if (!location) return;
        const { selectedCell, selectedCellType } = this.state;
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

        const {
            sectionName,
            rowIndex,
            columnIndex
        } = cellLocation;

        const {
            attributes
        } = this.props;

        const currentCellDetails = attributes[cellLocation.sectionName][rowIndex].cells[columnIndex];

        this.setState({
            cellLocation,
            selectedCell: cellLocation,
            cellType: currentCellDetails.type,
            ...(
                currentCellDetails.type === 'list' && {
                    isOrdered: currentCellDetails.ordered
                }
            )
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
            <Tooltip text={__('Change cell type')}>
                <div className={'qubely-tc-type-changer-wrap'}>
                    <button onClick={() => {
                        this.setState((prevState) => {
                            return { showCellTypeChange: !prevState.showCellTypeChange }
                        })
                    }}>
                        <span className="fas fa-angle-down" />
                    </button>
                    {
                        this.state.showCellTypeChange && this.props.isSelected && (
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
            </Tooltip>
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
        const data = JSON.parse(JSON.stringify(attributes[cellLocation.sectionName]));
        data[cellLocation.rowIndex].cells[cellLocation.columnIndex][field] = content;
        setAttributes({ [cellLocation.sectionName]: data });
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
            <figure className={'qubely-table-figure'}>
                <table style={{ width: '100%' }}>
                    {
                        this.props.attributes.tableHeader && (
                            <Section name='head' rows={this.props.attributes.head} />
                        )
                    }
                    <Section name='body' rows={this.props.attributes.body} />
                    {
                        this.props.attributes.tableFooter && (
                            <Section name='foot' rows={this.props.attributes.foot} />
                        )
                    }
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
    renderCellGenerator = ({ cell, row, className = '', reGenerate }) => {
        const { currentGeneratorCell } = this.state;
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
                                            'qubely-tcg-col-' + index,
                                            { 'active': (currentGeneratorCell.row >= row_index && currentGeneratorCell.column >= index) }
                                        );
                                        const columnprops = {
                                            className: columnclass,
                                            onMouseEnter: () => {
                                                this.setState(prevState => ({
                                                    currentGeneratorCell: {
                                                        ...prevState,
                                                        row: row_index,
                                                        column: index
                                                    }
                                                }));
                                            },
                                            onClick: () => {
                                                if (reGenerate) {
                                                  this.setState((state) => ({
                                                    ...state,
                                                    toggle: !state.toggle,
                                                    currentGeneratorCell: {
                                                      row: row_index,
                                                      column: index,
                                                    },
                                                  }));
                                                  this.reGenerateCells(
                                                    row_index,
                                                    index
                                                  );
                                                  return;
                                                }
                                                this.generateCells(row_index, index)
                                            }
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
        this.props.setAttributes({
            head: this.generateEmptyRow(1, column + 1, 'th', 'head'),
            body: this.generateEmptyRow(row + 1, column + 1),
            foot: this.generateEmptyRow(1, column + 1, 'td', 'foot')
        });

    };

    /**
     * Regenerate Cells
     * @param {*} row 
     * @param {*} column 
     */
    reGenerateCells = (row, column) => {
        column = column + 1;
        row = row + 1;
        const {
            setAttributes,
            attributes: {
                body,
                head,
                foot
            }
        } = this.props;

        let tempHead = head; //JSON.parse(JSON.stringify(head));
        let tempBody = body; //JSON.parse(JSON.stringify(body));
        let tempFoot = foot; //JSON.parse(JSON.stringify(foot));

        const prevRow = tempBody.length;
        const prevCol = tempBody[0].cells.length;

        // append rows
        if (row > prevRow) {
            const diff = row - prevRow;
            const newRows = this.generateEmptyRow(diff, prevCol);
            tempBody.push(...newRows);
        }

        // delete rows
        if (prevRow > row) {
            const diff = prevRow - row;
            tempBody.length = tempBody.length - diff;
        }

        // if: append columns
        if (column > prevCol) {
            const diff = column - prevCol;
            const headCells = this.generateEmptyColumn(diff, 'th', 'head');
            const bodyCells = this.generateEmptyColumn(diff);
            const footCells = this.generateEmptyColumn(diff, 'td', 'foot');

            // @TODO: improve performance
            tempHead[0].cells.push(...headCells);
            for (let i = 0; i < body.length; i++) {
                tempBody[i].cells.push(...bodyCells);
            }
            tempFoot[0].cells.push(...footCells);

        }
        // else: delete columns
        if (prevCol > column) {
            const diff = prevCol - column;
            const newLength = tempHead[0].cells.length - diff;
            tempHead[0].cells.length = newLength;
            tempFoot[0].cells.length = newLength;
            for (let i = 0; i < tempBody.length; i++) {
              tempBody[i].cells.length = newLength;
            }
        }

        setAttributes({
            head: tempHead,
            body: tempBody,
            foot: tempFoot
        });
    }

    /**
     * Generate Empty Column
     * @param count
     * @param columnCount
     * @param tag
     * @param scope
     * @returns {{cells: {scope: undefined, tag: string, align: undefined, type: string, content: string}[]}[]}
     */
    generateEmptyRow = (count, columnCount, tag = 'td', scope = 'body') => (
        Array(count).fill(0).map(_ => ({ cells: this.generateEmptyColumn(columnCount, tag, scope) }))
    );

    /**
     * Generate Empty Column
     * @param count
     * @param tag
     * @param scope
     * @returns {{ordered: boolean, image: {}, listItems: string, iconName: undefined, scope: string, tag: string, imageSize: {width: number, height: number}, align: undefined, type: string, content: string}[]}
     */
    generateEmptyColumn = (count, tag = 'td', scope = 'body') => (
        Array(count).fill(0).map(_ => ({
            content: '',
            tag,
            scope,
            align: undefined,
            type: 'text',
            ordered: false,
            image: {},
            imageSize: {
                width: 50,
                height: 50,
            },
            iconName: undefined,
            listItems: '<li>one </li><li>two </li>'
        }))
    );

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
                recreateStyles,
                tableHeader,
                tableFooter,
                body,
                tableMaxWdith,
                fixedWithCells,
                collapsableBorder,
                tableRadius,

                //cell
                cellBg,
                cellTextColor,
                cellPadding,
                cellAlignment,
                cellBorder,
                //icon
                imageAlignment,
                imageSize,
                imageCustomSize,
                imagePadding,
                imageRadius,

                //icon
                iconColor,
                iconAlignment,
                iconSize,
                iconCustomSize,

                //list common attributes
                listColor,
                listIconSpacing,
                listAlignment,
                listPadding,
                listIcon,

                //Ratings common attributes
                ratingsColor,
                ratingsSize,
                ratingsCustomSize,
                ratingsAlignment,
                ratingsPadding,
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

        const {
            device,
            cellType,
            isOrdered,
            cellLocation: activeCellLocation,
            showPostTextTypography
        } = this.state;

        const wrapperClasses = classnames(
            `qubely-block-${uniqueId}`,
            className
        )
        const classes = classnames(
            'qubely-block-table',
            layout,
            { ['fixed-width']: fixedWithCells }
        )
        return (
          <Fragment>
            <InspectorControls key={'inspector'}>
              <InspectorTabs tabs={['style', 'advance']}>
                <InspectorTab key={'style'}>
                  <PanelBody title="" opened={true}>
                    <Styles
                      options={[
                        {
                          value: 'bordered',
                          svg: icons.table_2,
                          label: __(''),
                        },
                        {
                          value: 'row-stripe',
                          svg: icons.table_2,
                          label: __(''),
                        },
                        {
                          value: 'column-stripe',
                          svg: icons.table_2,
                          label: __(''),
                        },
                      ]}
                      value={layout}
                      onChange={(val) => setAttributes({ layout: val })}
                    />
                    <Toggle
                      label={__('Table Header')}
                      value={tableHeader}
                      onChange={(tableHeader) => setAttributes({ tableHeader })}
                    />
                    <Toggle
                      label={__('Table Footer')}
                      value={tableFooter}
                      onChange={(tableFooter) => setAttributes({ tableFooter })}
                    />
                  </PanelBody>
                  <PanelBody title={__('Table Settings')} initialOpen={false}>
                    <Range
                      min={50}
                      max={1500}
                      responsive
                      device={device}
                      value={tableMaxWdith}
                      label={__('Max Width')}
                      unit={['px', 'em', '%']}
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                      onChange={(value) =>
                        setAttributes({ tableMaxWdith: value })
                      }
                    />
                    <Toggle
                      label={__('Fixed width cells')}
                      value={fixedWithCells}
                      onChange={(newValue) =>
                        setAttributes({ fixedWithCells: newValue })
                      }
                    />
                    <Toggle
                      label={__('Collapse border')}
                      value={collapsableBorder}
                      onChange={(nextValue) =>
                        setAttributes({ collapsableBorder: nextValue })
                      }
                    />
                    <BorderRadius
                      min={0}
                      max={100}
                      responsive
                      device={device}
                      value={tableRadius}
                      label={__('Radius')}
                      unit={['px', 'em', '%']}
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                      onChange={(value) =>
                        setAttributes({ tableRadius: value })
                      }
                    />
                  </PanelBody>
                  <PanelBody title={__('Cell Settings')} initialOpen={false}>
                    <ColorAdvanced
                      label={__('Background')}
                      value={cellBg}
                      onChange={(nextValue) =>
                        setAttributes({ cellBg: nextValue })
                      }
                    />
                    <Color
                      label={__('Color')}
                      value={cellTextColor}
                      onChange={(value) =>
                        setAttributes({ cellTextColor: value })
                      }
                    />
                    <Padding
                      min={0}
                      max={300}
                      responsive
                      value={cellPadding}
                      device={device}
                      label={__('Padding')}
                      unit={['px', 'em', '%']}
                      onChange={(val) => setAttributes({ cellPadding: val })}
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                    />
                    <Alignment
                      responsive
                      device={device}
                      value={cellAlignment}
                      label={__('Alignment')}
                      onChange={(val) => setAttributes({ cellAlignment: val })}
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                    />
                    <Border
                      responsive
                      value={cellBorder}
                      device={device}
                      label={__('Border')}
                      onChange={(val) => setAttributes({ cellBorder: val })}
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                    />
                  </PanelBody>
                  {buttonSettings(
                    attributes,
                    device,
                    (key, value) => {
                      setAttributes({ [key]: value });
                    },
                    (key, value) => {
                      this.setState({ [key]: value });
                    }
                  )}
                  <PanelBody title={__('Image')} initialOpen={false}>
                    <RadioAdvanced
                      label={__('Size')}
                      options={[
                        { label: 'S', value: '20px', title: 'Small' },
                        { label: 'M', value: '40px', title: 'Medium' },
                        { label: 'L', value: '60px', title: 'Large' },
                        {
                          icon: 'fas fa-cog',
                          value: 'custom',
                          title: 'Custom',
                        },
                      ]}
                      value={imageSize}
                      onChange={(value) =>
                        setAttributes({
                          imageSize: value,
                          recreateStyles: !recreateStyles,
                        })
                      }
                    />
                    {/* {imageSize == 'custom' &&
                                    <Fragment>
                                        <Range
                                            min={10}
                                            max={100}
                                            responsive
                                            device={device}
                                            value={imageCustomSize}
                                            label={__('Size')}
                                            unit={['px', 'em', '%']}
                                            onChange={(value) => setAttributes({ imageCustomSize: value, recreateStyles: !recreateStyles })}
                                            onDeviceChange={value => this.setState({ device: value })}
                                        />
                                        <Range
                                            min={10}
                                            max={100}
                                            responsive
                                            device={device}
                                            value={imageCustomHeight}
                                            label={__('Size')}
                                            unit={['px', 'em', '%']}
                                            onChange={(value) => setAttributes({ imageCustomHeight: value, recreateStyles: !recreateStyles })}
                                            onDeviceChange={value => this.setState({ device: value })}
                                        />
                                    </Fragment>

                                } */}

                    <Alignment
                      responsive
                      disableJustify
                      value={imageAlignment}
                      label={__('Alignment')}
                      alignmentType="content"
                      device={device}
                      onChange={(val) => setAttributes({ imageAlignment: val })}
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                    />
                    <Padding
                      min={0}
                      max={300}
                      responsive
                      value={imagePadding}
                      device={device}
                      label={__('Padding')}
                      unit={['px', 'em', '%']}
                      onChange={(val) => setAttributes({ imagePadding: val })}
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                    />
                    <BorderRadius
                      min={0}
                      max={100}
                      label={__('Radius')}
                      value={imageRadius}
                      unit={['px', 'em', '%']}
                      responsive
                      device={device}
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                      onChange={(value) =>
                        setAttributes({ imageRadius: value })
                      }
                    />
                  </PanelBody>
                  <PanelBody title={__('Icon')} initialOpen={false}>
                    <RadioAdvanced
                      label={__('Size')}
                      options={[
                        { label: 'S', value: '20px', title: 'Small' },
                        { label: 'M', value: '40px', title: 'Medium' },
                        { label: 'L', value: '60px', title: 'Large' },
                        {
                          icon: 'fas fa-cog',
                          value: 'custom',
                          title: 'Custom',
                        },
                      ]}
                      value={iconSize}
                      onChange={(value) =>
                        setAttributes({
                          iconSize: value,
                          recreateStyles: !recreateStyles,
                        })
                      }
                    />
                    {iconSize == 'custom' && (
                      <Range
                        min={10}
                        max={100}
                        responsive
                        device={device}
                        value={iconCustomSize}
                        label={__('Size')}
                        unit={['px', 'em', '%']}
                        onChange={(value) =>
                          setAttributes({
                            iconCustomSize: value,
                            recreateStyles: !recreateStyles,
                          })
                        }
                        onDeviceChange={(value) =>
                          this.setState({ device: value })
                        }
                      />
                    )}
                    <Color
                      label={__('Color')}
                      value={iconColor}
                      onChange={(value) => setAttributes({ iconColor: value })}
                    />
                    <Alignment
                      responsive
                      disableJustify
                      value={iconAlignment}
                      label={__('Alignment')}
                      alignmentType="content"
                      device={device}
                      onChange={(val) => setAttributes({ iconAlignment: val })}
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                    />
                  </PanelBody>

                  <PanelBody title={__('List')} initialOpen={false}>
                    <Color
                      label={__('Color')}
                      value={listColor}
                      onChange={(value) => setAttributes({ listColor: value })}
                    />
                    <IconSelector
                      label="Icon"
                      value={listIcon.name}
                      enableSearch
                      icons={[
                        { name: 'check', value: 'fas fa-check' },
                        { name: 'check-square', value: 'fas fa-check-square' },
                        {
                          name: 'check-square-outline',
                          value: 'far fa-check-square',
                        },
                        { name: 'check-double', value: 'fas fa-check-double' },
                        { name: 'check-circle', value: 'fas fa-check-circle' },
                        {
                          name: 'check-circle-outline',
                          value: 'far fa-check-circle',
                        },
                        { name: 'square', value: 'fas fa-square' },
                        { name: 'square-outline', value: 'far fa-square' },
                        { name: 'circle', value: 'fas fa-circle' },
                        { name: 'circle-outline', value: 'far fa-circle' },
                        { name: 'arrow-right', value: 'fas fa-arrow-right' },
                        { name: 'arrow-left', value: 'fas fa-arrow-left' },
                        {
                          name: 'arrow-circle-right',
                          value: 'fas fa-arrow-circle-right',
                        },
                        {
                          name: 'arrow-circle-left',
                          value: 'fas fa-arrow-circle-left',
                        },
                        {
                          name: 'arrow-alt-circle-right',
                          value: 'far fa-arrow-alt-circle-right',
                        },
                        {
                          name: 'arrow-alt-circle-left',
                          value: 'far fa-arrow-alt-circle-left',
                        },
                        {
                          name: 'long-arrow-alt-right',
                          value: 'fas fa-long-arrow-alt-right',
                        },
                        {
                          name: 'long-arrow-alt-left',
                          value: 'fas fa-long-arrow-alt-left',
                        },
                        {
                          name: 'chevron-right',
                          value: 'fas fa-chevron-right',
                        },
                        { name: 'chevron-left', value: 'fas fa-chevron-left' },
                        { name: 'angle-right', value: 'fas fa-angle-right' },
                        { name: 'angle-left', value: 'fas fa-angle-left' },
                        { name: 'star', value: 'fas fa-star' },
                        { name: 'star-outline', value: 'far fa-star' },
                      ]}
                      onChange={(val) => setAttributes({ listIcon: val })}
                    />
                    <Range
                      min={0}
                      max={60}
                      responsive
                      device={device}
                      value={listIconSpacing}
                      unit={['px', 'em', '%']}
                      label={__('Icon Spacing')}
                      onChange={(val) =>
                        setAttributes({ listIconSpacing: val })
                      }
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                    />
                    <Alignment
                      responsive
                      disableJustify
                      value={listAlignment}
                      label={__('Alignment')}
                      alignmentType="content"
                      device={device}
                      onChange={(val) => setAttributes({ listAlignment: val })}
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                    />
                    <Padding
                      min={0}
                      max={300}
                      responsive
                      value={listPadding}
                      device={device}
                      label={__('Padding')}
                      unit={['px', 'em', '%']}
                      onChange={(val) => setAttributes({ listPadding: val })}
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                    />
                  </PanelBody>
                  <PanelBody title={__('Ratings')} initialOpen={false}>
                    <RadioAdvanced
                      label={__('Size')}
                      options={[
                        { label: 'S', value: '60%', title: 'Small' },
                        { label: 'M', value: '90%', title: 'Medium' },
                        { label: 'L', value: '140%', title: 'Large' },
                        {
                          icon: 'fas fa-cog',
                          value: 'custom',
                          title: 'Custom',
                        },
                      ]}
                      value={ratingsSize}
                      onChange={(value) =>
                        setAttributes({
                          ratingsSize: value,
                          recreateStyles: !recreateStyles,
                        })
                      }
                    />
                    {ratingsSize == 'custom' && (
                      <Range
                        min={10}
                        max={100}
                        responsive
                        device={device}
                        value={ratingsCustomSize}
                        label={__('Size')}
                        unit={['px', 'em', '%']}
                        onChange={(value) =>
                          setAttributes({ ratingsCustomSize: value })
                        }
                        onDeviceChange={(value) =>
                          this.setState({ device: value })
                        }
                      />
                    )}

                    <Color
                      label={__('Color')}
                      value={ratingsColor}
                      onChange={(value) =>
                        setAttributes({ ratingsColor: value })
                      }
                    />
                    <Alignment
                      responsive
                      disableJustify
                      value={ratingsAlignment}
                      label={__('Alignment')}
                      alignmentType="content"
                      device={device}
                      onChange={(val) =>
                        setAttributes({ ratingsAlignment: val })
                      }
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                    />
                    <Padding
                      min={0}
                      max={300}
                      responsive
                      value={ratingsPadding}
                      device={device}
                      label={__('Padding')}
                      unit={['px', 'em', '%']}
                      onChange={(val) => setAttributes({ ratingsPadding: val })}
                      onDeviceChange={(value) =>
                        this.setState({ device: value })
                      }
                    />
                  </PanelBody>
                </InspectorTab>
                <InspectorTab key={'advance'}>
                  {animationSettings(uniqueId, animation, setAttributes)}
                  {interactionSettings(uniqueId, interaction, setAttributes)}
                </InspectorTab>
              </InspectorTabs>
            </InspectorControls>

            <BlockControls>
              {cellType === 'list' && (
                <Toolbar
                  controls={[
                    {
                      icon: 'editor-ul',
                      title: 'Convert to unordered list',
                      onClick: () => {
                        this.setState({ isOrdered: false });
                        this.onChangeCell(activeCellLocation, false, 'ordered');
                      },
                      className: `qubely-action-change-listype ${
                        !isOrdered ? 'is-active' : ''
                      }`,
                    },
                    {
                      icon: 'editor-ol',
                      title: 'Convert to ordered list',
                      onClick: () => {
                        this.setState({ isOrdered: true });
                        this.onChangeCell(activeCellLocation, true, 'ordered');
                      },
                      className: `qubely-action-change-listype ${
                        isOrdered ? 'is-active' : ''
                      }`,
                    },
                  ]}
                />
              )}

              <ToolbarGroup>
                <DropdownMenu
                  hasArrowIndicator
                  icon={<span className={'fas fa-table'} />}
                  label={__('Edit table')}
                  controls={this.getTableControls()}
                />
                <InlineToolbar
                  data={[
                    {
                      name: 'InlineSpacer',
                      key: 'spacer',
                      responsive: true,
                      unit: ['px', 'em', '%'],
                    },
                  ]}
                  {...this.props}
                  prevState={this.state}
                />

                <Dropdown
                  position="bottom right"
                  renderToggle={({ isOpen, onToggle }) => (
                    <Tooltip text={__('Table Generator')}>
                      <button
                        type="button"
                        className="components-button"
                        onClick={onToggle}
                        aria-expanded={isOpen}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h15zm-5 14h-5v-9h5v9zM5 10h3v9H5v-9zm12 9v-9h3v9h-3z"></path>
                        </svg>
                        <span className="components-dropdown-menu__indicator"></span>
                      </button>
                    </Tooltip>
                  )}
                  renderContent={() => (
                    <div className="qubely-toolber-popup">
                      <Row
                        cell={6}
                        row={6}
                        className={'qubely-tcg-toolbar'}
                        reGenerate={true}
                      />
                    </div>
                  )}
                ></Dropdown>
              </ToolbarGroup>
            </BlockControls>

            {globalSettingsPanel(
              enablePosition,
              selectPosition,
              positionXaxis,
              positionYaxis,
              globalZindex,
              hideTablet,
              hideMobile,
              globalCss,
              setAttributes
            )}

            <div className={wrapperClasses}>
              <div className={classes}>
                <TableContent />
              </div>
            </div>
          </Fragment>
        );
    }
}

export default withCSSGenerator()(Edit);
