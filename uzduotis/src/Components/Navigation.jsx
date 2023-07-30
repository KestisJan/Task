import React from 'react'
import '../Styles/Navigation.css';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Switch from '@mui/material/Switch';

export default function Navigation() {
  return (
    <div className='navigation-container'>
        <div className='nav-top'>
            <div >Princie
            </div>
        </div>
        <div className='nav-middle'>
                <div className='nav-icons'><SpaceDashboardOutlinedIcon/><p>Dashboard</p></div>
                <div className='nav-icons'><Inventory2OutlinedIcon/><p>Product</p></div>
                <div className='nav-icons'><StoreOutlinedIcon/><p>Store</p></div>
                <div className='nav-icons'><SupervisedUserCircleOutlinedIcon/><p>Visitor</p></div>
                <div className='nav-icons'><LeaderboardOutlinedIcon/><p>Analytics</p></div>
                <div className='nav-icons'><NotificationsOutlinedIcon/><p>Notifications</p></div>
        </div>
        <div className='nav-bottom'>
                <div className='nav-icons'><HeadsetMicOutlinedIcon/><p>Help Center</p></div>
                <div className='nav-icons'><SettingsOutlinedIcon/><p>Settings</p></div>
                <div className='nav-icons'><DarkModeOutlinedIcon/><p>Dark Mode</p><Switch  defaultChecked /></div>
        </div>
    </div>
  )
}
