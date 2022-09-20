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
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0465f8ceeb872bb03f30fb7ecc099a5a~c5_300x300.webp?x-expires=1663768800&x-signature=9nKMYiWFZgmykCr4NEK%2F4Vnq8%2Bc%3D"
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
