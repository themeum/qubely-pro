const {
    Component,
    Fragment
} = wp.element;

const {
    PanelBody,
    Tooltip,
    Toolbar
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

    renderData = ({cells}, name, rowIndex) => {
        return cells.map(({content, tag: CellTag, scope, align}, columnIndex) => {
            const cellLocation = {
                sectionName: name,
                rowIndex,
                columnIndex,
            };

            const className = classnames(
                {
                    [ `has-text-align-${ align }` ]: align,
                },
                'qubely-block-table_cell-content'
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

        data[cellLocation.rowIndex].cells[field] = content;
        setAttributes({[cellLocation.sectionName]: data});
    }

    renderTableContent = () => {
        const Section = this.renderSections;
        const CellGenerator = this.renderCellGenerator;

        if(!this.state.default.length) {
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
                <div className='qubely-tcg-container' onMouseLeave={() => this.currentGeneratorCell(-1, -1)} >
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
                                                onMouseEnter: () => this.currentGeneratorCell(row_index, index),
                                            }
                                            return <span {...columnprops}> {row_index}+{index}</span>
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            )
        }

        return <Row cell={8} row={8}/>
    }

    generateCells = ({row, column}) => {
        const { body } = this.props.attributes.body
    }

    currentGeneratorCell = (row, column) => {
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
                    <Toolbar>
                        <InlineToolbar
                            data={[{ name: 'InlineSpacer', key: 'spacer', responsive: true, unit: ['px', 'em', '%'] }]}
                            {...this.props}
                            prevState={this.state} />

                    </Toolbar>
                </BlockControls>

                {globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes)}

                <div className={`qubely-block-${uniqueId} ${className ? className : ''}`}>
                    <div className='qubely-block-table' onContextMenu={event => handleContextMenu(event, this.refs.qubelyContextMenu)}>

                        {
                            this.renderTableContent()
                        }

                        {
                            this.state.default.length !== 0 && (
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