import Range from "../../../../../../qubely/assets/reactjs/src/components/fields/Range";

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
    ToolbarGroup,
    Dropdown
} = wp.components

const {
    BlockControls,
    InspectorControls,
    RichText,
    InnerBlocks
} = wp.blockEditor

const {
    Inline: { InlineToolbar },
    CssGenerator: { CssGenerator },
    gloalSettings: { globalSettingsPanel, animationSettings, interactionSettings },
    ContextMenu: { ContextMenu, handleContextMenu },
    QubelyButtonEdit
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
            },
            showCellTypeChange: false
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
            body.splice(index, 0, this.generateEmptyRow(1, columnCount)[0]);
            setAttributes({body});
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
        return cells.map(({content, tag: Tag, scope, align, type}, columnIndex) => {
            const cellLocation = {
                sectionName: name,
                rowIndex,
                columnIndex,
            };

            const isSelectedCell = selectedCell && (selectedCell.rowIndex === rowIndex && selectedCell.columnIndex === columnIndex);

            const className = classnames(
                {
                    [ `has-text-align-${ align }` ]: align,
                    'is-qubely-active' : isSelectedCell
                },
                'qubely-block-table_cell-content',
                'qubely-table-cell-edit'
            );

            let placeholder = '';
            if ( name === 'head' ) {
                placeholder = __( 'Header label' );
            } else if ( name === 'foot' ) {
                placeholder = __( 'Footer label' );
            }

            return (
                <Tag className={className}>
                    <RichText
                        key={columnIndex}
                        scope={ Tag === 'th' ? scope : undefined }
                        value={ content + type }
                        placeholder={ placeholder }
                        onChange={(content) => {
                            this.onChangeCell(cellLocation, content, 'content')
                        }}
                        onClick={() => {
                            this.setState({cellLocation})
                        }}
                        unstableOnFocus={() => {
                            this.setState({
                                selectedCell: cellLocation,
                                showCellTypeChange: false
                            })
                        }}
                        />

                    { isSelectedCell && (
                        <div className={'qubely-tc-type-changer-wrap'}>
                            <button onClick={() => {this.setState({showCellTypeChange: !this.state.showCellTypeChange})}}>
                                <span className="fas fa-angle-down" />
                            </button>
                            {this.state.showCellTypeChange && (
                                <div className="qubely-tc-type-changer">
                                    <button onClick={() => { this.onChangeCell(cellLocation, 'text', 'type') }}>
                                        <i className="fas fa-font" /> Text
                                    </button>
                                    <button onClick={() => { this.onChangeCell(cellLocation, 'image', 'type')}}>
                                        <i className="fas fa-image" /> Image
                                    </button>
                                    <button onClick={() => { this.onChangeCell(cellLocation, 'button', 'type') }}>
                                        <i className="fas fa-mouse-pointer"/> Button
                                    </button>
                                    <button onClick={() => { this.onChangeCell(cellLocation, 'rating', 'type') }}>
                                        <i className="fas fa-star"/> Rating
                                    </button>
                                    <button onClick={() => { this.onChangeCell(cellLocation, 'icon', 'type') }}>
                                        <i className="fas fa-rocket"/> Icon
                                    </button>
                                    <button onClick={() => { this.onChangeCell(cellLocation, 'list', 'type') }}>
                                        <i className="fas fa-list"/> List
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </Tag>
            )
        })
    }

    onChangeCell = (cellLocation, content, field) => {
        if( (Object.keys(cellLocation).length === 0 && cellLocation.constructor === Object) ||  (typeof field === 'undefined' || field === '')) return;
        const { setAttributes, attributes } = this.props;
        const data = attributes[cellLocation.sectionName];
        data[cellLocation.rowIndex].cells[cellLocation.columnIndex][field] = content;
        setAttributes({[cellLocation.sectionName]: data});
        console.log(data);
    }

    renderTableContent = () => {
        const Section = this.renderSections;
        const Row = this.renderCellGenerator;

        if(!this.props.attributes.body.length) {
            return <Row cell={8} row={8}/>
        }

        return (
            <figure className={'class="wp-block-table is-style-regular"'}>
                <table style={{width: '100%', tableLayout: 'fixed'}}>
                    <Section name='body' rows={this.props.attributes.body}/>
                </table>
            </figure>
        );
    }

    renderCellGenerator = ({cell, row, className = ''}) => {
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
                align: undefined,
                type: 'text'
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
        const Row =  this.renderCellGenerator;

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
                                    <Row cell={6} row={6} className={'qubely-tcg-toolbar'}/>
                                </div>
                            }
                        >
                        </Dropdown>
                    </ToolbarGroup>
                </BlockControls>

                {globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes)}

                <div className={`qubely-block-${uniqueId} ${className ? className : ''}`}>
                    <div className='qubely-block-table'>
                    {/*<div className='qubely-block-table' onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}>*/}

                        <TableContent />

                        {
                            /*this.props.attributes.body.length !== 0 && (
                                <div ref="qubelyContextMenu" className="qubely-context-menu-wraper" >
                                    <ContextMenu
                                        name={name}
                                        clientId={clientId}
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                        qubelyContextMenu={this.refs.qubelyContextMenu}
                                    />
                                </div>
                            )*/
                        }
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Edit;