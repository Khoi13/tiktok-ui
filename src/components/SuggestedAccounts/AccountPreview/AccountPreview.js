import classNames from 'classnames/bind';

import { CircleCheckIcon } from '~/components/Icons';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9d9505b3b89096928e37f883abb28f44~c5_100x100.jpeg?x-expires=1665979200&x-signature=QW9%2B9nqGn13YzZNOKaritjJ0TSc%3D"
                    alt=""
                />

                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <CircleCheckIcon className={cx('check')} />
                </p>
                <p className={cx('name')}>Quốc Nguyễn Phú</p>

                <p className={cx('analytics')}>
                    <strong className={cx('value')}>7.6M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>531.4M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
