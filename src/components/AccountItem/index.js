import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AcountItem.module.scss';
import Image from '~/components/Image';
import { CircleCheckIcon } from '~/components/icons';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>{data.nickname}</span>
                    {data.tick && <CircleCheckIcon className={cx('check')} />}
                </h4>
                <span className={cx('name')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
