import { Menu, MenuProps } from 'antd';
import React from 'react'

const items = [
    {
        key: '1',
        label: 'User Help',
    },
    {
        key: '2',
        label: 'Admin Help',
    },
    {
        key: '3',
        label: 'uDesigner Help',
    },
    {
        key: '4',
        label: 'Unifier Library'
    },
    {
        key: '5',
        label: 'Download Plugins',
    },
    {
        key: '6',
        label: 'About Unifier',
    },
    {
        key: '7',
        label: 'Contact Us',
    }

]



function HelpDetails({ closeUserPop }: any) {
    const onClick: MenuProps['onClick'] = (e: any) => {
        e.key && console.log(e.key);
        closeUserPop();
    }
    return (
        <Menu onClick={onClick} style={{ width: 256 }} mode="vertical" items={items}  />

    )
}

export default HelpDetails;