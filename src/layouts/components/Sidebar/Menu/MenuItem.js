import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink
            end
            className={(nav) => cx('menu-item', { active: nav.isActive })}
            to={to}
            children={({ isActive }) => {
                const currentIcon = isActive ? activeIcon : icon;
                return (
                    <>
                        {currentIcon}
                        <span className={cx('title')}>{title}</span>
                    </>
                );
            }}
        />
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node,
};

export default MenuItem;
