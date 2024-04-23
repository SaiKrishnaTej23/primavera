import { EditOutlined, PaperClipOutlined, PlusOutlined, PrinterOutlined, ReloadOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Space, Table, Typography } from 'antd';
import React from 'react'
const dataSource: any[] = [];

for (let i = 1; i <= 20; i++) {
    dataSource.push({
        key: `${i}`, // Unique key for each row
        "attachment": i % 3 == 0 || i % 5 == 0 || i % 7 == 0 ? true : false,
        "Business Process": `Process ${i}`, // Business Process
        "Record Number": `Record #${i}`,  // Record Number
        Title: `Title ${i}`,               // Title
        Origin: `Origin ${i}`,              // Origin
        "Last saved": new Date().toLocaleString(), // Last saved date/time
        Discussion: `Discussion for record ${i}`, // Discussion
    });
}

const columns = [
    {
        title: <PaperClipOutlined />,
        dataIndex: 'attachment',
        key: 'attachment',
        render: (hasAttachment: boolean) => hasAttachment ? "" : <PaperClipOutlined />,
    },
    {
        title: 'Business Process',
        dataIndex: 'Business Process',
        key: 'businessProcess',
    },
    {
        title: 'Record Number',
        dataIndex: 'Record Number',
        key: 'recordNumber',
    },
    {
        title: 'Title',
        dataIndex: 'Title',
        key: 'title',
    },
    {
        title: 'Origin',
        dataIndex: 'Origin',
        key: 'origin',
    },
    {
        title: 'Last saved',
        dataIndex: 'Last saved',
        key: 'lastSaved',
    },
    {
        title: 'Discussion',
        dataIndex: 'Discussion',
        key: 'discussion',
    },
];
export const Tasks = () => {
    return (
        <div>
            <div className='bg-white p-2'>
                <Typography.Title level={2}>Tasks</Typography.Title>
            </div>
            <div className='flex flex-row justify-items-start min-h-9 w-full px-3 py-2 border'>
                <Space>
                    <Button type="text" icon={<PlusOutlined />} >Create </Button>
                </Space>
                <Space>
                    <Button type="text" >Actions </Button>
                </Space>
                <Space>
                    <Typography.Text>View: </Typography.Text>
                </Space>
                <Space>
                    <Button type="text" >All Drafts </Button>
                </Space>
                <Space>
                    <Button type="text" icon={<EditOutlined />} ></Button>
                </Space>
                <Space>
                    <Button type="text" icon={<ReloadOutlined />} > </Button>
                </Space>
                <Space>
                    <Button type="text" icon={<PrinterOutlined />} ></Button>
                </Space>
                <Space>
                    <Button type="text" icon={<SearchOutlined />} ></Button>
                </Space>
            </div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
};
