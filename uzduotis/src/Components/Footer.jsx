import React from 'react'
import '../Styles/Footer.css';
import InputBase from "@mui/material/InputBase"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Avatar } from '@mui/material';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='search-bar'>
            <div className='search'>
                <SearchOutlinedIcon/>
                <InputBase type="text" placeholder="Search anything"></InputBase>
            </div>
        </div>
        <div className='user-side'>
            <div className='user'>
            <div>
                <Avatar alt="Maxie Mon Wachid"/>
            </div>
            <div>
                <p>Maxie Mon Wachid</p>
                <div className='user-font'>
                    <p>@Maxie Mon Wachid</p>
                </div>
            </div>
        </div>
            <div>|</div>
            <div><NotificationsOutlinedIcon/></div>
            </div>
    </div>
  )
}
