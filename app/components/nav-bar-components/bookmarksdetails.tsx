import { BookFilled, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Menu, MenuProps, Typography } from 'antd';
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



function BookmarksDetails({ closeUserPop }: any) {

    return (
        <>
            <div className='flex flex-row flex-wrap'>
                <Button className='mx-2' type="primary" icon={<BookFilled />}>Bookmark this page</Button>
                <Button className='mx-2' type="text" icon={<DeleteOutlined />}>Remove</Button>
                <Button className='mx-2' type="text" icon={<EditOutlined />}>Rename</Button>
                <Button className='mx-2' type="text">Mark As Default</Button>
            </div>
            <div className='flex flex-col'>
                <Typography.Link className='px-2 py-2 pt-3 border-b'> Home - Home </Typography.Link>
                <Typography.Link className='px-2 py-2 border-b'> Test - Project 13 - Build Tower - Home </Typography.Link>
                <Typography.Link className='px-2 py-2'> Test - Project 12 - Build Floor - Tasks </Typography.Link>
            </div>
        </>

    )
}

export default BookmarksDetails;