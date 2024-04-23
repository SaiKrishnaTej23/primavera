'use client';
import React from 'react';
import TabBar, { TabBarItem } from './components/toolbar-components/tabbar';
import Home from './components/tabbar-components/home';
import { HomeOutlined } from '@ant-design/icons';
const Page: React.FC = () => {
  

  const tabs : TabBarItem[] = [
    {
      label: '',
      key: 'home',
      children: <Home />,
      closable: false, 
      icon: <HomeOutlined />
    }
  ]
  return (
    <div className='min-h-96 flex flex-row '>
      <TabBar tabs={tabs} />
    </div>
  );
};

export default Page;