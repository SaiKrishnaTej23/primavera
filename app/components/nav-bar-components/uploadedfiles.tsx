import React from 'react';
import { List } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';

const data = [
    {
        title: 'New Demo Document 1',
        description: '1 Kb , Uploaded on 01/01/2021',
    },{
        title: 'New Demo Document 2',
        description: '1 Kb , Uploaded on 01/01/2021',
    },
    {
        title: 'New Demo Document 3',
        description: '1 Kb , Uploaded on 01/01/2021',
    },
    {
        title: 'New Demo Document 4',
        description: '1 Kb , Uploaded on 01/01/2021',
    },
    {
        title: 'New Demo Document 5',
        description: '1 Kb , Uploaded on 01/01/2021',
    }
];

const UploadedFiles = () => {
    return (
        <div className='flex flex-col min-w-72 max-h-80 overflow-y-auto'>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<FileTextOutlined style={{ fontSize: '25px' }} />}
                            title={<a href="/">{item.title}</a>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default UploadedFiles;