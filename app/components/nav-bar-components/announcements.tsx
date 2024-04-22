import { Table } from 'antd'
import React from 'react'

export const Announcements = () => {
    const dataSource: readonly any[] | undefined = [];
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Announced By',
            dataIndex: 'announcedBy',
            key: 'announcedBy',
        },
    ];
    return (
        <div className='bg-slate-300'>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}
