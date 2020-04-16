const {
    Component,
    Fragment
} = wp.element;

const {__} = wp.i18n

const {
    PanelBody,
    Tooltip,
    Toolbar,
    DropdownMenu,
    ToolbarGroup
} = wp.components

const {
    BlockControls,
    InspectorControls,
    RichText
} = wp.blockEditor

const {
    Inline: { InlineToolbar },
    CssGenerator: { CssGenerator },
    gloalSettings: { globalSettingsPanel, animationSettings, interactionSettings },
    ContextMenu: { ContextMenu, handleContextMenu }
} = wp.qubelyComponents;

import classnames from 'classnames';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            device: 'md',
            spacer: true,
            cellLocation: {},
            default: [],
            selectedCell: null,
            currentGeneratorCell: {
                row: -1,
                column: -1
            }
        }
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


    /**
     * Gets the table controls to display in the block toolbar.
     *
     * @return {Array} Table controls.
     */
    getTableControls = () => {
        const { selectedCell } = this.state;
        const { body }  = this.props.attributes;
        return [
            {
                icon: <span className={'fas fa-table'}/>,
                title: __( 'Add Row Before' ),
                isDisabled: ! selectedCell,
                onClick: this.onInsertRowBefore.bind(this),
            },
            {
                icon:  <span className={'fas fa-table'}/>,
                title: __( 'Add Row After' ),
                isDisabled: ! selectedCell,
                onClick: this.onInsertRowAfter.bind(this),
            },
            {
                icon:  <span className={'fas fa-table'}/>,
                title: __( 'Delete Row' ),
                isDisabled: ! selectedCell || body.length < 2,
                onClick: this.onDeleteRow.bind(this),
            },
            {
                icon:  <span className={'fas fa-table'}/>,
                title: __( 'Add Column Before' ),
                isDisabled: ! selectedCell,
                onClick: this.onInsertColumnBefore.bind(this),
            },
            {
                icon:  <span className={'fas fa-table'}/>,
                title: __( 'Add Column After' ),
                isDisabled: ! selectedCell,
                onClick: this.onInsertColumnAfter.bind(this),
            },
            {
                icon:  <span className={'fas fa-table'}/>,
                title: __( 'Delete Column' ),
                isDisabled: ! selectedCell || !body.length || ( body.length && body[0].cells.length < 2),
                onClick: this.onDeleteColumn.bind(this),
            },
        ];
    }

    async onInsertRowBefore () {
        const { rowIndex } = this.state.selectedCell
        await this.insertRowAtIndex(rowIndex);
    }

    async onInsertRowAfter () {
        const { rowIndex } = this.state.selectedCell
        await this.insertRowAtIndex(rowIndex + 1);
    }

    insertRowAtIndex = (index) => {
        const { setAttributes, attributes: { body } } = this.props;
        const columnCount = body.length ? body[0].cells.length : 0;
        if(columnCount) {
            const newBody = body;
            newBody.splice(index, 0, this.generateEmptyRow(1, columnCount)[0]);
            setAttributes({body: newBody});
            this.resetSelectedCell();
        }
    }

    async onDeleteRow () {
        const { rowIndex } = this.state.selectedCell;
        const { setAttributes, attributes }    = this.props;
        const body = await attributes.body.filter((_, index) => index !== rowIndex);
        setAttributes({body});
        this.resetSelectedCell();
    }

    async onInsertColumnBefore () {
        const { columnIndex } = this.state.selectedCell;
        await this.insertColumnAtIndex(columnIndex);
    }

    async onInsertColumnAfter () {
        const { columnIndex } = this.state.selectedCell;
        await this.insertColumnAtIndex(columnIndex + 1);
    }

     insertColumnAtIndex = (index) => {
        const { setAttributes, attributes: { body } } = this.props;
        body.map(column => ({ cells: column.cells.splice(index, 0, this.generateEmptyColumn(1)[0])}));
        setAttributes({body});
        this.resetSelectedCell();
    }

    async onDeleteColumn () {
        const { setAttributes } = this.props;
        const deleted = await this.deleteColumnByIndex();
        setAttributes(deleted);
        this.resetSelectedCell();
    }

    deleteColumnByIndex = () => {
        const { body } = this.props.attributes;
        const { columnIndex } = this.state.selectedCell;
        return body.reduce((acc, obj) => {
            obj['cells'] = obj['cells'].filter((_, index) => index !== columnIndex);
            acc.push(obj);
            return acc;
        }, []);
    }

    resetSelectedCell = () => this.setState({selectedCell: null});

    renderSections = ({name, rows}) => {
        const Tag = `t${ name }`;
        return (
            <Tag>
                {
                    rows.map( (cells, rowIndex) => (
                        <tr key={rowIndex}>{this.renderData(cells, name, rowIndex)}</tr>
                    ))
                }
            </Tag>
        );
    }

    renderData = ( {cells} , name, rowIndex) => {
        const { selectedCell } = this.state;
        return cells.map(({content, tag: CellTag, scope, align}, columnIndex) => {
            const cellLocation = {
                sectionName: name,
                rowIndex,
                columnIndex,
            };

            const className = classnames(
                {
                    [ `has-text-align-${ align }` ]: align,
                    'is-qubely-active' : selectedCell && (selectedCell.rowIndex === rowIndex && selectedCell.columnIndex === columnIndex)
                },
                'qubely-block-table_cell-content',
            );

            let placeholder = '';
            if ( name === 'head' ) {
                placeholder = __( 'Header label' );
            } else if ( name === 'foot' ) {
                placeholder = __( 'Footer label' );
            }

            return (
                <RichText
                    key={columnIndex}
                    tagName={CellTag}
                    scope={ CellTag === 'th' ? scope : undefined }
                    value={ content }
                    className={className}
                    placeholder={ placeholder }
                    onChange={(content) => {
                        this.onChangeCell(cellLocation, content, 'content')
                    }}
                    onClick={() => {
                        this.setState({cellLocation})
                    }}
                    unstableOnFocus={() => {
                        this.setState({
                            selectedCell: cellLocation
                        })
                    }}
                />
            )
        })
    }

    onChangeCell = (cellLocation, content, field) => {
        if( (Object.keys(cellLocation).length === 0 && cellLocation.constructor === Object) ||  (typeof field === 'undefined' || field === '')) {
            return;
        }

        const { setAttributes, attributes } = this.props;
        const data = attributes[cellLocation.sectionName];

        data[cellLocation.rowIndex].cells[cellLocation.columnIndex][field] = content;
        setAttributes({[cellLocation.sectionName]: data});
    }

    renderTableContent = () => {
        const Section = this.renderSections;
        const CellGenerator = this.renderCellGenerator;

        if(!this.props.attributes.body.length) {
            return <CellGenerator />
        }

        return (
            <figure className={'class="wp-block-table is-style-regular"'}>
                <table style={{width: '100%', tableLayout: 'fixed'}}>
                    <Section name='body' rows={this.props.attributes.body}/>
                </table>
            </figure>
        );
    }

    renderCellGenerator = () => {
        const { currentGeneratorCell } = this.state;
        const Row = ({cell, row}) => {
            return (
                <div className='qubely-tcg-container' onMouseLeave={() => this.setCurrentGeneratorCell(-1, -1)} >
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
                                                {'active': (currentGeneratorCell.row >= row_index && currentGeneratorCell.column >= index)}
                                            );
                                            const columnprops = {
                                                className: columnclass,
                                                onMouseEnter: () => this.setCurrentGeneratorCell(row_index, index),
                                                onClick: () => this.generateCells(row_index, index)
                                            }
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
        }

        return <Row cell={8} row={8}/>
    }

    generateCells = (row, column) => {
        this.props.setAttributes({body: this.generateEmptyRow(row + 1, column + 1)});
    }

    generateEmptyRow = (count, columnCount) => (
        Array(count).fill(0).map(_ => ({cells: this.generateEmptyColumn(columnCount)}))
    )

    generateEmptyColumn = (count) => (
        Array(count).fill(0).map(_ => {
            return {
                content: '',
                tag: 'td',
                scope: undefined,
                align: undefined
            }
        })
    )

    /**
     * set current generator cell to state
     */

    setCurrentGeneratorCell = (row, column) => {
        this.setState({
            currentGeneratorCell: {
                row,
                column
            }
        });
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

        if (uniqueId) { CssGenerator(this.props.attributes, 'table', uniqueId) }

        const TableContent = this.renderTableContent;

        return (
            <Fragment>
                <InspectorControls key={'inspector'}>
                    {
                        /* Code Here */
                    }

                    {animationSettings(uniqueId, animation, setAttributes)}
                    {interactionSettings(uniqueId, interaction, setAttributes)}

                </InspectorControls>

                <BlockControls>
                    <ToolbarGroup>
                        <DropdownMenu
                            hasArrowIndicator
                            icon={ <span className={'fas fa-table'} /> }
                            label={ __( 'Edit table' ) }
                            controls={ this.getTableControls() }
                        />
                        <InlineToolbar
                            data={[{ name: 'InlineSpacer', key: 'spacer', responsive: true, unit: ['px', 'em', '%'] }]}
                            {...this.props}
                            prevState={this.state} />
                    </ToolbarGroup>
                </BlockControls>

                {globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes)}

                <div className={`qubely-block-${uniqueId} ${className ? className : ''}`}>
                    <div className='qubely-block-table' onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}>

                        <TableContent />

                        {
                            this.props.attributes.body.length !== 0 && (
                                <div ref="qubelyContextMenu" className="qubely-context-menu-wraper" >
                                    <ContextMenu
                                        name={name}
                                        clientId={clientId}
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                        qubelyContextMenu={this.refs.qubelyContextMenu}
                                    />
                                </div>
                            )
                        }
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Edit;