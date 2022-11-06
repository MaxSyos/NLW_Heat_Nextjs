import {  Page } from '@components/common';
import { Header } from '@components/common/Header/Header';
import Sidebar from '@components/common/SideBar/SideBar';
import { Box, Button, Container, Input, Image, Grid, Text, } from '@components/ui';
import cn from 'classnames';
import s from '@styles/theme.module.scss'
import { Login } from '@components/common/Login/Login';
import theme from '@styles/theme';
import { MessageList } from '@components/Section/MessageList';
import { LoginBox } from '@components/Section/LoginBox';





export default function Home() {
  return (
    <Page
    title='NLW_heat_Nextjs'
    description=''
    >
      <Box className={`max-w-7xl h-screen grid grid-cols-2 gap-x-32 gap-x-32relative`} >
        <MessageList />
        <LoginBox />
      </Box>  
    
    </Page>
  );
}
