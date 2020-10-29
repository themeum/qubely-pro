/* eslint-disable react/react-in-jsx-scope */
import classnames from 'classnames';
const { __ } = wp.i18n;
const {
    Popover,
    Tooltip
} = wp.components;
const {
    useState
} = wp.element;

const {
    Range
} = wp.qubelyComponents;

const Ratings = (props) => {
    const [showRatingsPicker, toggleRatingsPikcer] = useState(false)
    const {
        ratings = 5,
        classes,
        onChange,
        isSelected,
        ratingsCustomColor
    } = props;

    const classNames = classnames(
        'ratings-cell',
        'ratings-wrapper',
        classes
    )
    return (
        <div className={classNames}>
            <Tooltip text={__('Change ratings')}>
                <div className="table-ratings"
                    style={{ '--qubely-rating': `${ratings * 20}%`, ...(typeof ratingsCustomColor !== 'undefined' && { color: ratingsCustomColor }) }}
                    onClick={() => toggleRatingsPikcer(!showRatingsPicker)}
                />
            </Tooltip>
            {
                (isSelected && showRatingsPicker) &&
                <Popover
                    position="top center"
                    className="qubely-table-ratings-popover"
                >
                    <Range
                        min={0.1}
                        max={5}
                        step={0.1}
                        value={ratings}
                        label={__('Ratings')}
                        onChange={newValue => onChange(newValue)}
                    />
                </Popover>
            }
        </div>
    );
}

const RatingSave = (props) => {
    const {
        ratings = 5,
        classes,
        ratingsCustomColor,
    } = props;

    const classNames = classnames(
        'ratings-cell',
        'ratings-wrapper',
        classes
    )
    return (
        <div className={classNames}>
            <div className="table-ratings"
                style={{ '--qubely-rating': `${ratings * 20}%`, ...(typeof ratingsCustomColor !== 'undefined' && { color: ratingsCustomColor }) }}
            />
        </div>
    );
}

export { Ratings, RatingSave };