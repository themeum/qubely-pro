
/* eslint-disable react/react-in-jsx-scope */


const {
    Component,
    Fragment,
    createRef
} = wp.element;

const { __ } = wp.i18n;

const {
    Toolbar,
    DropdownMenu,
    ToolbarGroup,
    Dropdown,
    Popover,
} = wp.components;

const {
    BlockControls,
} = wp.blockEditor;

const {

    IconSelector,

    Inline: {
        InlineToolbar
    },
} = wp.qubelyComponents;

const BlockControls = (props) => {
    const {
        attributes: {
            body,
        },
        state: {
            selectedCell,
        }
    } = props;


    /**
  * Handle insert row before selected index
  * helper method
  * @returns {Promise<void>}
  */
    const onInsertRowBefore = async () => {
        const { rowIndex } = this.state.selectedCell;
        await this.insertRowAtIndex(rowIndex);
    }



    /**
   * Gets the table controls to display in the block toolbar.
   *
   * @return {Array} Table controls.
   */
    const getTableControls = () => {
        return [
            {
                icon: <span className={'fas fa-table'} />,
                title: __('Add Row Before'),
                isDisabled: !selectedCell || (selectedCell.sectionName !== 'body'),
                onClick: ()=>onInsertRowBefore(),
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
    return (
        <BlockControls>
            {cellType === 'list' && (
                <Fragment>

                    <Toolbar
                        controls={[
                            {
                                icon: 'editor-ul',
                                title: __('Convert to unordered list'),
                                onClick: () => {
                                    this.setState({ isOrdered: false });
                                    this.onChangeCell(activeCellLocation, false, 'ordered');
                                },
                                className: `qubely-action-change-listype ${!isOrdered ? 'is-active' : ''
                                    }`,
                            },
                            ...(!isOrdered && [{

                                icon: 'insert',
                                title: __('Pick custom icon for this list'),
                                onClick: () => {
                                    this.setState({ showIconPicker: true });
                                },
                                className: `qubely-action-pick-listcustom-icon`,
                            }])
                            ,
                            {
                                icon: 'editor-ol',
                                title: __('Convert to ordered list'),
                                onClick: () => {
                                    this.setState({ isOrdered: true });
                                    this.onChangeCell(activeCellLocation, true, 'ordered');
                                },
                                className: `qubely-action-change-listype ${isOrdered ? 'is-active' : ''
                                    }`,
                            },
                        ]}
                    />
                    {
                        (showIconPicker && isSelected) && (
                            <Popover
                                position="bottom center"
                                className="qubely-table-icon-picker-popover"
                                onClose={() => this.setState({ showIconPicker: false })}
                            >
                                <IconSelector
                                    label=""
                                    value={body[activeCellLocation.rowIndex].cells[activeCellLocation.columnIndex].listCustomIcon}
                                    enableSearch
                                    icons={
                                        [
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
                                    onChange={newIcon => this.onChangeCell(activeCellLocation, newIcon, 'listCustomIcon')}
                                />
                            </Popover>
                        )
                    }
                </Fragment>
            )}

            <ToolbarGroup>
                <DropdownMenu
                    hasArrowIndicator
                    icon={<span className={'fas fa-table'} />}
                    label={__('Edit table')}
                    controls={getTableControls()}
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
                    {...props}
                    prevState={state}
                />
            </ToolbarGroup>
        </BlockControls>
    );

}

export default BlockControls;