/* eslint-disable react/react-in-jsx-scope */

import icons from '../../helpers/icons';
import classnames from 'classnames';
import {
  Icon,
  Image,
  List,
  Ratings
} from './components';

import templates from './templates';
const { PluginBlockSettingsMenuItem } = wp.editPost;
const {
  Component,
  Fragment,
  createRef
} = wp.element;

const { __ } = wp.i18n;

const {
  PanelBody,
  Tooltip,
  Toolbar,
  DropdownMenu,
  ToolbarGroup,
  Dropdown,
  Popover,
  ColorPicker,
} = wp.components;

const {
  BlockControls,
  InspectorControls,
  RichText,
  InnerBlocks
} = wp.blockEditor;

const {
  Url,
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
  Typography,
  IconList,
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
  Templates,
  InspectorSections,
} = wp.qubelyComponents;

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: 'md',
      toggle: false,
      spacer: true,
      cellLocation: null,
      default: [],
      selectedCell: null,
      showPostTextTypography: false,
      openPanelSetting: true,
      currentGeneratorCell: {
        row: -1,
        column: -1
      },
      showCellTypeChange: false,
      currentCellType: '',
    }
    this.qubelyContextMenu = createRef();
    this.wrapperRef = createRef();
    this.tableBlockRef = createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    const { setAttributes, clientId, attributes: { uniqueId } } = this.props;
    const _client = clientId.substr(0, 6);
    if (!uniqueId) {
      setAttributes({ uniqueId: _client });
    } else if (uniqueId && uniqueId != _client) {
      setAttributes({ uniqueId: _client });
    }

    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
    * Alert if clicked on outside of element
    */
  handleClickOutside(event) {
    if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target) && this.tableBlockRef.current.contains(event.target)) {
      this.setState({ cellLocation: null })
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
      {
        icon: <span className={'fas fa-table'} />,
        title: __('Merge Next Column'),
        isDisabled: this.disableColumnMerge(),
        onClick: this.onMergeColumn.bind(this),
      },
      {
        icon: <span className={'fas fa-table'} />,
        title: __('Merge Next Row'),
        isDisabled: !selectedCell ||
          selectedCell.rowIndex === body.length - 1 ||
          selectedCell.sectionName === 'head' ||
          selectedCell.sectionName === 'foot' ||
          !body.length ||
          (body.length && body[0].cells.length < 2),
        onClick: this.onMergeRow.bind(this),
      },
    ];
  };

  disableColumnMerge() {
    const {
      selectedCell,
      selectedCell: {
        rowIndex,
        columnIndex,
        sectionName,
      } } = this.state;
    const {
      attributes,
      attributes: {
        body },
    } = this.props;

    let disable = false;

    if (!selectedCell ||
      selectedCell.columnIndex === body[0].cells.length - 1 ||
      !body.length || (body.length && body[0].cells.length < 2)) {
      return true;
    }
    let colSpan = 1, rowSpan = 1;
    if (typeof attributes[sectionName][rowIndex] === 'undefined') {
      return true;
    }
    let activeCell = attributes[sectionName][rowIndex].cells[columnIndex];
    let nextCell = attributes[sectionName][rowIndex].cells[columnIndex + colSpan];

    if (typeof nextCell === 'undefined') {
      return true;
    }
    if (typeof nextCell.rowSpan === 'undefined') {
      nextCell.rowSpan = 1;
    }
    if (activeCell.colSpan) {
      colSpan = activeCell.colSpan;
      rowSpan = activeCell.rowSpan;
    }

    if (rowSpan < nextCell.rowSpan ||
      typeof nextCell.replacedby !== 'undefined') {
      disable = true;
    }
    return disable;
  }
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
    head.map(column => ({ cells: column.cells.splice(index, 0, this.generateEmptyColumn(1, 'th', 'head')[0]) }));
    foot.map(column => ({ cells: column.cells.splice(index, 0, this.generateEmptyColumn(1, 'td', 'foot')[0]) }));
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
   * Handle Merge column
   * @returns {Promise<void>}
   */
  async onMergeColumn() {
    const { setAttributes } = this.props;
    const deleted = this.deleteColumnForSpan();
    setAttributes(deleted);
    this.resetSelectedCell();
  }

  /**
   * Handle Merge Row
   * @returns {Promise<void>}
   */
  async onMergeRow() {
    const { setAttributes } = this.props;
    const deleted = this.deleteRowForSpan();
    setAttributes(deleted);
    this.resetSelectedCell();
  }

  /**
   * Add colSpan
   * @returns updated attributes
   */
  deleteColumnForSpan = () => {
    const {
      attributes,
      setAttributes,
      attributes: {
        body,
        head,
        foot,
      },
    } = this.props;

    const {
      rowIndex,
      sectionName,
      columnIndex,
    } = this.state.selectedCell;

    let currentRowSpan = 1,
      currentColumnSpan = 1,
      nextRowSpan = 1,
      targetCellColumnSpan = 1;

    let temp = JSON.parse(JSON.stringify(attributes[sectionName]));

    if (typeof temp[rowIndex].cells[columnIndex].colSpan !== 'undefined') {
      currentColumnSpan = temp[rowIndex].cells[columnIndex].colSpan;
    }

    let increment = 1;
    if (typeof temp[rowIndex].cells[columnIndex + currentColumnSpan].colSpan !== 'undefined') {
      increment = temp[rowIndex].cells[columnIndex + currentColumnSpan].colSpan;
    }

    if (typeof temp[rowIndex].cells[columnIndex].colSpan !== 'undefined') {
      temp[rowIndex].cells[columnIndex].colSpan += increment
    } else {
      temp[rowIndex].cells[columnIndex].colSpan = (increment + 1);
    }

    if (typeof temp[rowIndex].cells[columnIndex].rowSpan !== 'undefined') {
      let tempIndex = 1;
      while (tempIndex <= temp[rowIndex].cells[columnIndex].rowSpan) {
        temp[rowIndex + (tempIndex - 1)].cells[columnIndex + currentColumnSpan].replacedFor = 'colSpan';
        temp[rowIndex + (tempIndex - 1)].cells[columnIndex + currentColumnSpan].replacedby = {
          rowIndex,
          columnIndex
        };
        tempIndex++
      }
    } else {
      temp[rowIndex].cells[columnIndex + currentColumnSpan].replacedFor = 'colSpan';
      temp[rowIndex].cells[columnIndex + currentColumnSpan].replacedby = {
        rowIndex,
        columnIndex
      };
    }
    setAttributes({ [sectionName]: temp, });
  };
  /**
   * Add colSpan
   * @returns updated attributes
   */

  deleteRowForSpan = () => {
    const {
      attributes,
      setAttributes,
      attributes: {
        body,
        head,
        foot,
      },
    } = this.props;

    const {
      rowIndex,
      sectionName,
      columnIndex,
    } = this.state.selectedCell;

    let temp = JSON.parse(JSON.stringify(attributes[sectionName]));

    // console.log('temp : ', temp);
    // console.log('selected rowIndex : ', rowIndex);
    // console.log('selected column index : ', columnIndex);

    let currentRowSpan = 1,
      currentColumnSpan = 1,
      nextRowSpan = 1,
      targetCellColumnSpan = 1;


    if (typeof temp[rowIndex].cells[columnIndex].rowSpan !== 'undefined') {
      currentRowSpan = temp[rowIndex].cells[columnIndex].rowSpan;
    }
    // console.log('check : ', rowIndex + currentRowSpan, 'th rows at : ',columnIndex,'th column');

    if (typeof temp[rowIndex].cells[columnIndex].colSpan !== 'undefined') {
      currentColumnSpan = temp[rowIndex].cells[columnIndex].colSpan;
    }
    if (typeof temp[rowIndex + currentRowSpan].cells[columnIndex].colSpan !== 'undefined') {
      targetCellColumnSpan = temp[rowIndex + currentRowSpan].cells[columnIndex].colSpan;
    }

    let increment = 1;

    if (typeof temp[rowIndex + currentRowSpan].cells[columnIndex] !== 'undefined' &&
      typeof temp[rowIndex + currentRowSpan].cells[columnIndex].rowSpan !== 'undefined') {
      increment = temp[rowIndex + currentRowSpan].cells[columnIndex].rowSpan;
    }

    nextRowSpan = currentRowSpan + increment;
    temp[rowIndex].cells[columnIndex].rowSpan = nextRowSpan;

    if (typeof temp[rowIndex].cells[columnIndex].colSpan !== 'undefined') {
      let counter = 0;
      while (counter < temp[rowIndex].cells[columnIndex].colSpan) {
        temp[rowIndex + currentRowSpan].cells[columnIndex + counter].replacedFor = 'rowSpan';
        temp[rowIndex + currentRowSpan].cells[columnIndex + counter].replacedby = {
          rowIndex,
          columnIndex
        };
        counter++
      }
    } else {
      temp[rowIndex + currentRowSpan].cells[columnIndex].replacedFor = 'rowSpan';
      temp[rowIndex + currentRowSpan].cells[columnIndex].replacedby = {
        rowIndex,
        columnIndex
      };
    }
    setAttributes({ [sectionName]: temp, });
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
    const classNames = classnames(
      { 'head-row': name === 'head' },
      { 'foot-row': name === 'foot' },
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
    const { selectedCell } = this.state;
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
        'qubely-block-table_cell-content',
        'qubely-table-cell-edit',
        { ['hidden-cell']: typeof replacedFor !== 'undefined' },
        { [`align-${customAlignment}`]: customAlignment },
      );

      let placeholder = 'Add Content';
      if (name === 'head') {
        placeholder = __('Header label');
      } else if (name === 'foot') {
        placeholder = __('Footer label');
      }

      return (
        <Tag
          className={className}
          onClick={(event) => this.handleOnCellClick(event, cellLocation, Tag)}
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
              isSelectedCell,
              imageSize,
              buttonType,
              buttonCustomUrl,
              iconCustomColor,
              ratingsCustomColor,
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
    listCustomIcon,
    isSelectedCell,
    imageSize,
    buttonType,
    buttonCustomUrl = '',
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
        imageCommonSize,
        imageCustomSize,
        enableListIcons,
        iconColor,
        iconPosition,
        listIcon,
        imageAlignment,
      }
    } = this.props;

    let buttonLayout = buttonFillType;
    if (typeof buttonType !== 'undefined') {
      buttonLayout = buttonType;
    }

    switch (type) {
      case 'button':
        return (
          <QubelyButtonEdit
            enableButton={enableButton}
            buttonFillType={buttonLayout}
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
            listCustomIcon={listCustomIcon}
            identifier={`list-${cellLocation.rowIndex}${columnIndex}`}
            onChange={nextValues => this.onChangeCell(cellLocation, nextValues, 'listItems')}
          />

        )
      case 'icon':
        return (
          <Icon
            iconCustomColor={iconCustomColor}
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
            imageCommonSize={imageCommonSize}
            imageCustomSize={imageCustomSize}
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
            ratingsCustomColor={ratingsCustomColor}
            onChange={newRatings => this.onChangeCell(cellLocation, newRatings, 'ratings')}
          />)
      default:
        return (
          <RichText
            keepPlaceholderOnFocus
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
              <Popover
                position="bottom center"
                className="qubely-table-icon-picker-popover"
                onClose={() => this.setState({ showIconPicker: false })}
              >
                <div className="qubely-tc-type-changer">
                  {
                    AVAILABLE_CELL_TYPES.map(({ text, icon, type }) => (
                      <button
                        className={type === this.state.currentCellType ? 'active' : ''}
                        onClick={() => {
                          this.setState((prevState) => {
                            return { showCellTypeChange: !prevState.showCellTypeChange }
                          });
                          this.onChangeCell(location, type, 'type');
                        }}
                      >
                        <i className={icon} /> {text}
                      </button>
                    ))
                  }
                </div>
              </Popover>

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

    if (!body.length) {
      return <Row cell={8} row={8} />
    }
    const tableClasses = classnames(
      'qubely-table',
      { 'no-border': !cellBorder.openBorder },
      { 'no-outer-border': !outerBoder },
      { 'no-vertical-border': !verticalBorder },
      { 'no-horizontal-border': !horizontalBorder },
    );

    return (
      <figure className={'qubely-table-figure'}>
        <table
          style={{ width: '100%' }}
          ref={this.wrapperRef}
          className={tableClasses}
        >
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
        width: undefined,
        height: undefined,
      },
      iconName: undefined,
      listItems: '<li>one </li><li>two </li>'
    }))
  );
  copyAttributes = () => {
    const {
      attributes,
      attributes: {
        qubelyStyleAttributes
      }
    } = this.props
    const { copyToClipboard } = wp.qubelyComponents.HelperFunction
    let template = {}
    qubelyStyleAttributes.forEach(key => {
      template[key] = attributes[key]
    })

    copyToClipboard(JSON.stringify(template))

  }

  render() {

    const {
      name,
      clientId,
      isSelected,
      attributes,
      setAttributes,
      attributes: {
        uniqueId,
        className,
        layout,
        stripeColor,
        recreateStyles,
        tableHeader,
        tableFooter,
        body,
        tableMaxWdith,
        fixedWithCells,
        outerBoder,
        horizontalBorder,
        verticalBorder,
        tableBorderRadius,
        tableBoxShadow,

        //cell
        cellBg,
        cellTextColor,
        cellPadding,
        cellAlignment,
        cellBorder,
        cellTypography,
        cellVerticalPosition,

        //Header
        headerTextColor,
        headerBg,
        headerBorder,
        headerBorderColor,
        headerTypo,

        //Footer
        footerTextColor,
        footerBg,
        footerBorder,
        footerBorderColor,
        footerTypo,
        //button
        buttonUrl,
        //image
        imageAlignment,
        imageCommonSize,
        imageCustomSize,
        imagePadding,
        imageRadius,

        //icon
        iconColor,
        iconAlignment,
        iconPadding,
        iconBg,
        iconRadius,
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

    // console.log('body : ', body);

    const TableContent = this.renderTableContent;
    const Row = this.renderCellGenerator;

    const {
      device,
      cellType,
      isOrdered,
      showIconPicker,
      showButtonUrlPicker,
      enableCustomTypo,
      enableCustomColor,
      cellLocation: activeCellLocation,
      currentCellType,
      showPostTextTypography
    } = this.state;

    let activeCell;
    if (activeCellLocation && typeof attributes[activeCellLocation.sectionName][activeCellLocation.rowIndex] !== 'undefined') {
      activeCell = attributes[activeCellLocation.sectionName][activeCellLocation.rowIndex].cells[activeCellLocation.columnIndex];
    }
    const wrapperClasses = classnames(
      `qubely-block-${uniqueId}`,
      className
    )
    const classes = classnames(
      'qubely-block-table',
      layout,
      { ['fixed-width']: fixedWithCells }
    );

    let activeCellType = null;
    if (activeCellLocation !== null
      && typeof body[activeCellLocation.rowIndex] !== 'undefined'
      && body[activeCellLocation.rowIndex].cells[activeCellLocation.columnIndex]) {
      activeCellType = body[activeCellLocation.rowIndex].cells[activeCellLocation.columnIndex].type;
      if (currentCellType !== activeCellType) {
        this.setState({
          currentCellType: activeCellType
        });
      }
    } else {
      this.setState(prevState => {
        if (prevState.currentCellType !== null) {
          return ({
            currentCellType: null
          });
        }
      });
    }

    return (
      <Fragment>
        <InspectorControls key={'inspector'}>
          <InspectorTabs  >
            <InspectorTab key={"layout"}>
              <PanelBody title={__('Design Templates')}>
                <Templates
                  updateStyle={setAttributes}
                  attributes={this.props.attributes}
                  templates={templates}
                />
              </PanelBody>
              <InspectorSections block={'table'} />
            </InspectorTab>
            <InspectorTab key={'style'}>
              <PanelBody title="" opened={true}>
                <Styles
                  options={[
                    {
                      value: 'bordered',
                      svg: icons.table_1,
                      label: __(''),
                    },
                    {
                      value: 'row-stripe',
                      svg: icons.table_2,
                      label: __(''),
                    },
                    {
                      value: 'column-stripe',
                      svg: icons.table_3,
                      label: __(''),
                    },
                  ]}
                  value={layout}
                  onChange={(val) => setAttributes({ layout: val })}
                />
                {
                  layout !== 'bordered' && (
                    <Color
                      label={__('Stripe Color')}
                      value={stripeColor}
                      onChange={(value) =>
                        setAttributes({ stripeColor: value })
                      }
                    />
                  )
                }
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

                <Border
                  responsive
                  value={cellBorder}
                  device={device}
                  label={__('Border')}
                  onDeviceChange={(value) =>
                    this.setState({ device: value })
                  }
                  disableCustom
                  onChange={(val) => setAttributes({ cellBorder: val, tableBoxShadow: { ...tableBoxShadow, border: val }, recreateStyles: !recreateStyles, })}
                />
                {
                  cellBorder.openBorder === 1 && (
                    <Fragment>
                      <Range
                        min={0}
                        max={200}
                        responsive
                        device={device}
                        value={tableBorderRadius}
                        label={__('Border Radius')}
                        unit={['px', 'em', '%']}
                        onChange={(value) => setAttributes({ tableBorderRadius: value })}
                        onDeviceChange={value => this.setState({ device: value })}
                      />
                      <Toggle
                        label={__('Horizontal border')}
                        value={horizontalBorder}
                        onChange={(nextValue) =>
                          setAttributes({ horizontalBorder: nextValue })
                        }
                      />
                      <Toggle
                        label={__('Vertical border')}
                        value={verticalBorder}
                        onChange={(nextValue) =>
                          setAttributes({ verticalBorder: nextValue })
                        }
                      />
                      <Toggle
                        label={__('Outer border')}
                        value={outerBoder}
                        onChange={(nextValue) =>
                          setAttributes({ outerBoder: nextValue })
                        }
                      />

                    </Fragment>
                  )
                }
              </PanelBody>

              <PanelBody title={__('Cell Settings')} initialOpen={false}>
                <Typography
                  device={device}
                  value={cellTypography}
                  label={__('Typography')}
                  onChange={(value) => setAttributes({ cellTypography: value })}
                  onDeviceChange={value => this.setState({ device: value })}
                />
                <Padding
                  min={0}
                  max={100}
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
                <div className="qubely-field">
                  <label>{__('Vertical Position')}</label>
                  <div className="qubely-field-button-list qubely-field-button-list-fluid">
                    <Tooltip text={__('Top')}>
                      <button
                        onClick={() => setAttributes({ cellVerticalPosition: 'top' })}
                        className={"qubely-button" + (cellVerticalPosition === 'top' ? ' active' : '')}
                      >{icons.vertical_top}</button>
                    </Tooltip>

                    <Tooltip text={__('Middle')} >
                      <button
                        onClick={() => setAttributes({ cellVerticalPosition: 'middle' })}
                        className={"qubely-button" + (cellVerticalPosition === 'middle' ? ' active' : '')}
                      >{icons.vertical_middle}</button>
                    </Tooltip>

                    <Tooltip text={__('Bottom')} >
                      <button
                        onClick={() => setAttributes({ cellVerticalPosition: 'bottom' })}
                        className={"qubely-button" + (cellVerticalPosition === 'bottom' ? ' active' : '')}
                      >{icons.vertical_bottom}</button>
                    </Tooltip>
                  </div>
                </div>
              </PanelBody>

              {
                (activeCellLocation === null || currentCellType === 'button') && buttonSettings(
                  attributes,
                  device,
                  (key, value) => {
                    setAttributes({ [key]: value });
                  },
                  (key, value) => {
                    this.setState({ [key]: value });
                  },
                  false,
                  currentCellType === 'button'
                )}
              {
                (activeCellLocation === null || currentCellType === 'image') &&
                <PanelBody title={__('Image')} initialOpen={currentCellType === 'image'}>
                  <RadioAdvanced
                    label={__('Size')}
                    options={[
                      { label: 'S', value: '60px', title: 'Small' },
                      { label: 'M', value: '100px', title: 'Medium' },
                      { label: 'L', value: '150px', title: 'Large' },
                      // {
                      //   icon: 'fas fa-cog',
                      //   value: 'custom',
                      //   title: 'Custom',
                      // },
                    ]}
                    value={imageCommonSize}
                    onChange={(value) =>
                      setAttributes({
                        imageCommonSize: value,
                        recreateStyles: !recreateStyles,
                      })
                    }
                  />
                  {imageCommonSize == 'custom' &&
                    <Fragment>
                      <Range
                        min={10}
                        max={200}
                        responsive
                        device={device}
                        value={imageCustomSize}
                        label={__('Size')}
                        unit={['px', 'em', '%']}
                        onChange={(value) => setAttributes({ imageCustomSize: value, recreateStyles: !recreateStyles })}
                        onDeviceChange={value => this.setState({ device: value })}
                      />
                      {/* <Range
                        min={10}
                        max={100}
                        responsive
                        device={device}
                        value={imageCustomHeight}
                        label={__('Size')}
                        unit={['px', 'em', '%']}
                        onChange={(value) => setAttributes({ imageCustomHeight: value, recreateStyles: !recreateStyles })}
                        onDeviceChange={value => this.setState({ device: value })}
                      /> */}
                    </Fragment>

                  }

                  <Padding
                    min={0}
                    max={100}
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
              }
              {
                (activeCellLocation === null || currentCellType === 'icon') &&
                <PanelBody title={__('Icon')} initialOpen={currentCellType === 'icon'}>
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
                  <Padding
                    min={0}
                    max={50}
                    responsive
                    value={iconPadding}
                    device={device}
                    label={__('Padding')}
                    unit={['px', 'em', '%']}
                    onChange={(val) => setAttributes({ iconPadding: val })}
                    onDeviceChange={(value) => this.setState({ device: value })}
                  />
                  <ColorAdvanced
                    label={__('Background')}
                    value={iconBg}
                    onChange={(nextValue) =>
                      setAttributes({ iconBg: nextValue })
                    }
                  />
                  {
                    iconBg.openColor && (
                      <Range
                        label={__('Border Radius')}
                        min={1}
                        max={100}
                        step={1}
                        allowReset
                        value={iconRadius}
                        onChange={nextValue => setAttributes({ iconRadius: nextValue })}
                      />
                    )
                  }
                </PanelBody>
              }
              {
                (activeCellLocation === null || currentCellType === 'list') &&
                <PanelBody title={__('List')} initialOpen={currentCellType === 'list'}>
                  <Color
                    label={__('Color')}
                    value={listColor}
                    onChange={(value) => setAttributes({ listColor: value })}
                  />
                  <IconSelector
                    label="Icon"
                    value={listIcon.name}
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
                  <Padding
                    min={0}
                    max={100}
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
              }
              {
                (activeCellLocation === null || currentCellType === 'rating') &&
                <PanelBody title={__('Ratings')} initialOpen={currentCellType === 'rating'}>
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
                      max={50}
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

                  <Padding
                    min={0}
                    max={100}
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
              }
              <PanelBody title={__('Header')} initialOpen={false}>
                <Toggle
                  label={__('Table Header')}
                  value={tableHeader}
                  onChange={(tableHeader) => setAttributes({ tableHeader })}
                />
                {
                  tableHeader && (
                    <Fragment>
                      <ColorAdvanced
                        label={__('Background')}
                        value={headerBg}
                        onChange={(nextValue) =>
                          setAttributes({ headerBg: nextValue })
                        }
                      />
                      <Color
                        label={__('Color')}
                        value={headerTextColor}
                        onChange={(value) =>
                          setAttributes({ headerTextColor: value })
                        }
                      />
                      <Range
                        min={1}
                        max={10}
                        responsive
                        device={device}
                        value={headerBorder}
                        label={__('Border')}
                        unit={['px', 'em', '%']}
                        onChange={(value) => setAttributes({ headerBorder: value })}
                        onDeviceChange={value => this.setState({ device: value })}
                      />
                      <Color
                        label={__('Border Color')}
                        value={headerBorderColor}
                        onChange={(value) => setAttributes({ headerBorderColor: value })}
                      />
                      <Typography
                        label={__('Typography')}
                        value={headerTypo}
                        disableLineHeight
                        device={device}
                        onChange={(value) => setAttributes({ headerTypo: value })}
                        onDeviceChange={value => this.setState({ device: value })}
                      />
                    </Fragment>
                  )
                }

              </PanelBody>

              <PanelBody title={__('Footer')} initialOpen={false}>
                <Toggle
                  label={__('Table Footer')}
                  value={tableFooter}
                  onChange={(tableFooter) => setAttributes({ tableFooter })}
                />
                {
                  tableFooter && (
                    <Fragment>
                      <ColorAdvanced
                        label={__('Background')}
                        value={footerBg}
                        onChange={(nextValue) =>
                          setAttributes({ footerBg: nextValue })
                        }
                      />
                      <Color
                        label={__('Color')}
                        value={footerTextColor}
                        onChange={(value) =>
                          setAttributes({ footerTextColor: value })
                        }
                      />
                      <Range
                        min={1}
                        max={10}
                        responsive
                        device={device}
                        value={footerBorder}
                        label={__('Border')}
                        unit={['px', 'em', '%']}
                        onChange={(value) => setAttributes({ footerBorder: value })}
                        onDeviceChange={value => this.setState({ device: value })}
                      />
                      <Color
                        label={__('Border Color')}
                        value={footerBorderColor}
                        onChange={(value) => setAttributes({ footerBorderColor: value })}
                      />
                      <Typography
                        label={__('Typography')}
                        value={footerTypo}
                        onChange={(value) => setAttributes({ footerTypo: value })}
                        disableLineHeight
                        device={device}
                        onDeviceChange={value => this.setState({ device: value })}
                      />
                    </Fragment>
                  )
                }

              </PanelBody>

            </InspectorTab>
            <InspectorTab key={'advance'}>
              {animationSettings(uniqueId, animation, setAttributes)}
              {interactionSettings(uniqueId, interaction, setAttributes)}
            </InspectorTab>
          </InspectorTabs>
        </InspectorControls>

        {/* <BlockControls
          state={this.state}
          attributes={this.props.attributes}
        /> */}
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
          {cellType === 'image' && (
            <Fragment>

              <Toolbar
                controls={[
                  {
                    icon: 'insert',
                    title: __('Change Image'),
                    onClick: () => {
                      this.onChangeCell(activeCellLocation, {}, 'image')
                    },
                    className: `qubely-action-pick-listcustom-icon`,
                  },
                ]}
              />

            </Fragment>
          )}
          {cellType === 'button' && (
            <Fragment>

              <Toolbar
                controls={[
                  {
                    icon: <img src={`${window.qubely_admin.plugin + 'assets/img/blocks'}/button/fill_xs.svg`} alt={__('Fill')} />,
                    title: __('Fill'),
                    onClick: () => this.onChangeCell(activeCellLocation, 'fill', 'buttonType'),

                    className: `qubely-action-change-listype`,
                  },
                  {
                    icon: <img src={`${window.qubely_admin.plugin + 'assets/img/blocks'}/button/outline_xs.svg`} alt={__('Fill')} />,
                    title: __('Outline'),
                    onClick: () => this.onChangeCell(activeCellLocation, 'outline', 'buttonType')
                    ,
                    className: `qubely-action-change-listype`,
                  },
                  {
                    icon: 'admin-links',
                    title: __('Outline'),
                    onClick: () => {
                      this.setState({ showButtonUrlPicker: true });
                    },
                    className: `qubely-action-change-listype`,
                  },
                ]}
              />
              {
                (activeCell && showButtonUrlPicker && isSelected) && (
                  <Popover
                    position="bottom center"
                    className="qubely-table-button-url"
                    onClose={() => this.setState({ showButtonUrlPicker: false })}
                  >
                    <Url
                      label={__('URL')}
                      disableAdvanced
                      value={typeof activeCell.buttonCustomUrl === 'undefined' ? buttonUrl : activeCell.buttonCustomUrl}
                      onChange={(value) => this.onChangeCell(activeCellLocation, value, 'buttonCustomUrl')}
                    />
                  </Popover>
                )
              }
            </Fragment>
          )}
          {cellType === 'text' && (
            <Fragment>
              <Toolbar
                controls={[
                  {
                    icon: 'admin-links',
                    title: __('Typography'),
                    onClick: () => {
                      this.setState({ enableCustomTypo: true });
                    },
                    className: `qubely-action-change-listype`,
                  },
                ]}
              />
              {
                (activeCell && enableCustomTypo && isSelected) && (
                  <Popover
                    position="bottom center"
                    className="qubely-table-custom-typo"
                    onClose={() => this.setState({ enableCustomTypo: false })}
                  >
                    <Range
                      min={0}
                      max={100}
                      value={activeCell.customTypo}
                      label={__('Custom Typography')}
                      onChange={(value) => this.onChangeCell(activeCellLocation, value, 'customTypo')}
                    />
                  </Popover>
                )
              }
            </Fragment>
          )}
          {(cellType === 'icon' || cellType === 'rating') && (
            <Fragment>
              <Toolbar
                controls={[
                  {
                    icon: 'admin-links',
                    title: __('Color'),
                    onClick: () => {
                      this.setState({ enableCustomColor: true });
                    },
                    className: `qubely-action-change-listype`,
                  },
                ]}
              />
              {
                (activeCell && enableCustomColor && isSelected) && (
                  <Popover
                    position="bottom center"
                    className="qubely-table-custom-typo"
                    onClose={() => this.setState({ enableCustomColor: false })}
                  >
                    <ColorPicker
                      disableAlpha
                      color={cellType === 'icon' ?
                        typeof activeCell.iconCustomColor === 'undefined' ? iconColor : activeCell.iconCustomColor :
                        typeof activeCell.ratingsCustomColor === 'undefined' ? ratingsColor : activeCell.ratingsCustomColor
                      }
                      onChangeComplete={(newColor) => {
                        if (newColor.rgb) {
                          this.onChangeCell(activeCellLocation, 'rgba(' + newColor.rgb.r + ',' + newColor.rgb.g + ',' + newColor.rgb.b + ',' + newColor.rgb.a + ')', cellType === 'icon' ? 'iconCustomColor' : 'ratingsCustomColor')
                        } else {
                          this.onChangeCell(activeCellLocation, newColor.hex, cellType === 'icon' ? 'iconCustomColor' : 'ratingsCustomColor')
                        }
                      }}
                    />
                  </Popover>
                )
              }
            </Fragment>
          )}
          {isSelected && (
            <Toolbar
              controls={[
                {
                  icon: 'editor-alignleft',
                  title: __('Left'),
                  onClick: () => this.onChangeCell(activeCellLocation, 'left', 'customAlignment'),
                  className: `qubely-action-change-listype`,
                },
                {
                  icon: 'editor-aligncenter',
                  title: __('Center'),
                  onClick: () => this.onChangeCell(activeCellLocation, 'center', 'customAlignment'),
                  className: `qubely-action-change-listype`,
                },
                {
                  icon: 'editor-alignright',
                  title: __('Right'),
                  onClick: () => this.onChangeCell(activeCellLocation, 'right', 'customAlignment'),
                  className: `qubely-action-change-listype`,
                },

              ]}
            />
          )}
          {
            (isSelected && this.state.selectedCell !== null) &&
            <ToolbarGroup>
              <DropdownMenu
                popoverProps={
                  {
                    className: "qubely-table-editor"
                  }
                }
                hasArrowIndicator
                icon={<span className={'fas fa-table'} />}
                label={__('Edit table')}
                controls={this.getTableControls()}
              />
            </ToolbarGroup>
          }
          <PluginBlockSettingsMenuItem
            icon={'editor-code'}
            label={__('Copy Attributes')}
            onClick={() => this.copyAttributes()}
          />
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

        <div className={wrapperClasses} ref={this.tableBlockRef}>
          <div className={classes} onContextMenu={event => handleContextMenu(event, this.qubelyContextMenu.current)}>
            <TableContent />
            <div
              ref={this.qubelyContextMenu}
              className={`qubely-context-menu-wraper`}
            >
              <ContextMenu
                name={name}
                clientId={clientId}
                attributes={attributes}
                setAttributes={setAttributes}
                qubelyContextMenu={this.qubelyContextMenu.current}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withCSSGenerator()(Edit);
