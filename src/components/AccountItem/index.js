import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AcountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9d9505b3b89096928e37f883abb28f44~c5_100x100.jpeg?x-expires=1665234000&amp;x-signature=AmZFN3rTkC4speaheDpa4xE5cWs%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>nguyenvana</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Nguyễn Văn A</span>
            </div>
        </div>
    );
}

export default AccountItem;
