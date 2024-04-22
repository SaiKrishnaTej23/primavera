import { BookOutlined, NotificationOutlined, QuestionCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
 const items = [ {
    label: '',
    key: 'upload',
    icon: <UploadOutlined style={{ justifyContent: 'center', fontSize: '25px'}}/>
  },
  {
    label: '',
    key: 'announcement',
    icon: <NotificationOutlined style={{ justifyContent: 'center', fontSize: '25px'}} />
  },
  {
    label: '',
    key: 'bookmark',
    icon: <BookOutlined style={{ justifyContent: 'center', fontSize: '25px'}} />
  },
  {
    label: '',
    key: 'help',
    icon: <QuestionCircleOutlined style={{ justifyContent: 'center', fontSize: '25px'}} />
  },
  {
    label: 'Sai Krishna Teja',
    key: 'profile',
    icon: <Avatar alt='SKT'/>
  }

];

export default items.reverse();