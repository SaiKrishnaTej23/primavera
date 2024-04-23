'use client';
import React, { useRef, useState } from 'react';
import { Modal, Select, Tabs } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Workspace } from '../tabbar-components/workspace/workspace';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

export interface TabBarProps {
  tabs: TabBarItem[];
}

export interface TabBarItem {
  label: string;
  key: string;
  children: React.ReactNode;
  closable?: boolean;
  icon?: React.ReactNode;
}

const TabBar: React.FC<TabBarProps> = ({ tabs }: TabBarProps) => {
  const [activeKey, setActiveKey] = useState(tabs[0].key);
  const [items, setItems] = useState(tabs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const newTabIndex = useRef(0);

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const add = () => {
    // const newActiveKey = `newTab${newTabIndex.current++}`;
    // setItems([...items, { label: 'New Tab', children: 'New Tab Pane', key: newActiveKey, closable: true }]);
    // setActiveKey(newActiveKey);
    setIsModalOpen(true);
  };

  const addWorkspace = (name: string) => {
    console.log(name);
    setIsModalOpen(false);
    const newActiveKey = `newTab${newTabIndex.current++}`;
    setItems([...items, { label: `${name}`, children: <Workspace name={name} />, key: newActiveKey, closable: true }]);
    setActiveKey(newActiveKey);
  }

  const remove = (targetKey: TargetKey) => {
    const targetIndex = items.findIndex((pane: any) => pane.key === targetKey);
    const newPanes = items.filter((pane: { key: TargetKey; }) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setItems(newPanes);
  };

  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };


  return (

    <div className='min-h-screen flex flex-row flex-1'>
      <Tabs
        addIcon={<PlusOutlined />}
        onChange={onChange}
        tabPosition='top'
        tabBarStyle={{
          width: '100%',
          backgroundColor: 'whitesmoke',
        }}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        items={items}
        className='w-full'
      />
      <Modal open={isModalOpen} destroyOnClose closable={false} okButtonProps={{ style: { display: 'none' } }} cancelButtonProps={{ style: { display: 'none' } }} >
        <Select
          showSearch
          style={{ width: '100%' }}
          placeholder="Search Workspace"
          onChange={(e)=> addWorkspace(e)}
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={[
            {
              value: 'Build Tower -1',
              label: 'Build Tower -1',
            },
            {
              value: 'Build Parking - San Jose',
              label: 'Build Parking - San Jose',
            },
            {
              value: 'Build Floor - Plesanton',
              label: 'Build Floor - Plesanton',
            },
            {
              value: 'Garage Expansion',
              label: 'Garage Expansion',
            },
            {
              value: 'Oracle Plesanton',
              label: 'Oracle Plesanton',
            }
          ]}
        />
      </Modal>
    </div>
  );
};

export default TabBar;