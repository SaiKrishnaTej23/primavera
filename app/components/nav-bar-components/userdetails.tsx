import { Menu, MenuProps } from 'antd';
import React from 'react'

const items = [
    {
        key: '1',
        label: 'Get unifier Mobile App',
    },
    {
        key: '2',
        label: 'Preferences...',
    },
    {
        key: '3',
        label: 'Change password',
    },
    {
        key: '4',
        label: 'Proxy For',
        children: [
            {
                key: '4.1',
                label: 'Admin',
            },
            {
                key: '4.2',
                label: 'John Doe',
            },
            {
                key: '4.3',
                label: 'Jane Doe',
            }
            
        ]
    },
    {
        key: '5',
        label: 'Sign out',
    }

]



function UserDetails({ closeUserPop }: any) {
    const onClick: MenuProps['onClick'] = (e: any) => {
        e.key && console.log(e.key);
    }
    return (
        <Menu onClick={onClick} style={{ width: 256 }} mode="vertical" items={items}  />

    )
}

export default UserDetails;