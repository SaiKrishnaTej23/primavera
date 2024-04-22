'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';

import { Breadcrumb, Layout, Menu, theme, Image } from 'antd';
import logo from './assets/logo.jpeg';
import NavToolBar from "./components/navbar-right";

const inter = Inter({ subsets: ["latin"] });


const { Header, Content, Footer } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Layout>
            <Header
            className="border-b"
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white'
              }}
            >
              <Image src={logo.src} className='demo-logo' width={150} preview={false} />
              <NavToolBar />
            </Header>
            
            <Content style={{ backgroundColor: 'white' }}>
              {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Designed by teja
            </Footer>
          </Layout>

        </AntdRegistry>
      </body>
    </html>
  );
}
