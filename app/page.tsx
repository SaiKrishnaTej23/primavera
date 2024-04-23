'use client';
import React from 'react';
import TabBar, { TabBarItem } from './components/toolbar-components/tabbar';
import Home from './components/tabbar-components/home';
import { HomeOutlined } from '@ant-design/icons';
import { Workspace } from './components/tabbar-components/workspace/workspace';
const Page: React.FC = () => {
  

  const tabs : TabBarItem[] = [
    {
      label: '',
      key: 'home',
      children: <Home />,
      closable: false, 
      icon: <HomeOutlined />
    },
    {
      label: 'Build Tower 2 - Oracle - Plesanton - 2022',
      key: 'bb1',
      children: <Workspace name='Build Tower 2 - Oracle - Plesanton - 2022' key={'bb1'} />
    }
  ]
  return (
    <div className='min-h-96 flex flex-row '>
      <TabBar tabs={tabs} />
    </div>
  );
};

export default Page;