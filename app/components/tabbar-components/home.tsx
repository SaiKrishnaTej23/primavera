import { FileMarkdownOutlined, HomeOutlined, MailOutlined, OrderedListOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
        key: '1',
        label: `Home`,
        icon: <HomeOutlined />
    },
    {
        key: '2',
        label: `Tasks`,
        icon: <OrderedListOutlined />
    },
    {
        key: '3',
        label: `E-Signatures`,
        icon: <UnorderedListOutlined />
    },
    {
        key: '4',
        label: `Drafts`,
        icon: <FileMarkdownOutlined />
    },
    {
        key: '5',
        label: `Mailbox`,
        icon: <MailOutlined />
    }
];

const Home = () => {
    return (
        <div className='flex flex-row min-h-screen w-full'>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ width: 256 }}
                items={items}
            />
            <div className='flex flex-col w-full'>
                <h1>Home</h1>
            </div>
        </div>
    )
}

export default Home;