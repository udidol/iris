import * as React from 'react';
import classNames from 'classnames';
import styles from './GridBlock.scss';

const displayName = 'GridBlock';

const propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    nowrap: React.PropTypes.bool,
};

const defaultProps = {
    nowrap: false,
};

const GridBlock = (props) => {
    const {
        children,
        className,
        nowrap,
        ...filteredProps
    } = props;

    // Class builder
    const gridBlockClasses = classNames(
        styles.GridBlock,
        (nowrap ? styles.nowrap : null),
        className
    );

    return (
        <div className={gridBlockClasses} {...filteredProps}>
            {children}
        </div>
    );
};


GridBlock.displayName = displayName;

GridBlock.propTypes = propTypes;

GridBlock.defaultProps = defaultProps;

export default GridBlock;
