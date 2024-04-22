import { BookOutlined, DownCircleFilled, DownOutlined, NotificationOutlined, QuestionCircleOutlined, SettingOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Popover, Typography } from 'antd';
import React from 'react'
import UserDetails from './nav-bar-components/userdetails';
import HelpDetails from './nav-bar-components/helpdetails';
import BookmarksDetails from './nav-bar-components/bookmarksdetails';
import { Announcements } from './nav-bar-components/announcements';
import UploadedFiles from './nav-bar-components/uploadedfiles';

function NavToolBar() {


    return (
        <div className='flex flex-row-reverse flex-grow'>
            <div className='flex flex-row'>
                <UserMenu className='flex flex-row visible max-sm:hidden' />
                <Popover className='visible md:invisible min-w-0' placement="bottomRight" title="Menu" trigger="click" content={<UserMenu className='flex flex-col max-sm:display' />} >
                    <SettingOutlined style={{ justifyContent: 'center', fontSize: '25px' }} />
                </Popover>
            </div>
        </div>
    )
}

const UserMenu = ({ className }: { className: string }) => {

    return (
        <div className={className}>
            <Popover placement='bottomRight' className='min-w-0' title="Upload Status" trigger="click" content={<UploadedFiles />}>
                <div className='cursor-pointer px-3 hover:bg-red-100 border-l border-r'>
                    <UploadOutlined style={{ justifyContent: 'center', fontSize: '25px' }} />
                </div>
            </Popover>
            <Popover placement='bottomRight' className='min-w-0' title="Announcements" trigger="click" content={<Announcements />}>
                <div className='cursor-pointer px-3  hover:bg-red-100 border-r'>
                    <NotificationOutlined style={{ justifyContent: 'center', fontSize: '25px' }} />
                </div>
            </Popover>
            <Popover placement="bottomRight" className='min-w-0' title="Bookmarks" trigger="click" content={<BookmarksDetails />}>
                <div className='cursor-pointer px-3  hover:bg-red-100 border-r'>
                    <BookOutlined style={{ justifyContent: 'center', fontSize: '25px' }} />
                </div>
            </Popover>
            <Popover placement='bottomRight' className='min-w-0' title="Help" trigger="click" content={<HelpDetails />}>
                <div className='cursor-pointer px-3  hover:bg-red-100 border-r'>
                    <QuestionCircleOutlined style={{ justifyContent: 'center', fontSize: '25px' }} />
                </div>
            </Popover>
            <Popover placement="bottomRight" className='min-w-0' title="Sai Krishna Teja" trigger="click" content={<UserDetails />}>
                <div className='cursor-pointer px-3 flex flex-row place-content-center justify-center  hover:bg-red-100'>
                    <UserOutlined style={{ justifyContent: 'center', fontSize: '25px' }} />
                    <div className='px-3 hidden sm:block' style={{ justifyContent: 'center' }}>Sai Krishna Teja
                    </div>
                </div>
            </Popover>
        </div>
    );
}

export default NavToolBar;