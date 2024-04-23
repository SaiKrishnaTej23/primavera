import { CalculatorOutlined, CalendarOutlined, FileMarkdownOutlined, FolderOutlined, HomeOutlined, InfoCircleOutlined, InfoOutlined, MailOutlined, MoneyCollectOutlined, OrderedListOutlined, UnorderedListOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Menu, MenuProps, Typography } from 'antd';
import React from 'react';
import { Tasks } from './tasks';

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
  },
  {
    key: '6',
    label: `Information`,
    icon: <InfoCircleOutlined />
  },
  {
    key: '7',
    label: `Document Management`,
    icon: <FolderOutlined />,
    children: [
      {
        key: '7.1',
        label: `New Document`,
        icon: <InfoOutlined />
      }
    ]
  },
  {
    key: '8',
    label: `Change Mangement`,
    icon: <CalendarOutlined />,
    children: [
      {
        key: '8.1',
        label: `Preferences`,
        icon: <InfoOutlined />
      }
    ]
  },
  {
    key: '9',
    label: `Budget Mangement`,
    icon: <MoneyCollectOutlined />,
    children: [
      {
        key: '9.1',
        label: `Preferences`,
        icon: <InfoOutlined />
      }
    ]
  },
  {
    key: '10',
    label: `Project Mangement`,
    icon: <UsergroupAddOutlined />,
    children: [
      {
        key: '10.1',
        label: `Preferences`,
        icon: <InfoOutlined />
      }
    ]
  },
  {
    key: '11',
    label: `Schedule Mangement`,
    icon: <CalculatorOutlined />,
    children: [
      {
        key: '11.1',
        label: `Preferences`,
        icon: <InfoOutlined />
      }
    ]
  }
];
export const Workspace = ({ name }: { name: string }) => {
  return (
    <div className='flex flex-row w-full min-h-screen'>
      <Menu
        mode="inline"
        defaultSelectedKeys={['2']}
        style={{ width: 256 }}
        items={items}
      />
      <div className='flex flex-col w-full'>
        <Tasks />
      </div>
    </div>
  )
};
