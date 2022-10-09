import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import {
    MessagesIcon as InboxIcon,
    PaperPlaneIcon,
    EllipsisVerticalIcon,
    UserIcon,
    CoinIcon,
    CameraIcon,
    GearIcon,
    LanguageIcon,
    CircleQuestionIcon,
    KeyboardIcon,
    SignOutIcon,
} from '~/components/Icons';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <CircleQuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle
                break;
            default:
                return 0;
        }
    };

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: '/@abc',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <CameraIcon />,
            title: 'LIVE Studio',
            to: '/studio',
        },
        {
            icon: <GearIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <SignOutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo-link')} to={config.routes.home}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button
                                className={cx('upload-btn')}
                                outlineClear
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>
                            <Tippy placement="bottom" delay={[0, 0]} content="Messages">
                                <button className={cx('action-btn')}>
                                    <PaperPlaneIcon />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" delay={[0, 0]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                className={cx('upload-btn')}
                                outlineClear
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>
                            <Button primary className={cx('login-btn')}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9d9505b3b89096928e37f883abb28f44~c5_100x100.jpeg?x-expires=1665234000&amp;x-signature=AmZFN3rTkC4speaheDpa4xE5cWs%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <EllipsisVerticalIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
