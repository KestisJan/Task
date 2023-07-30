import React from 'react'
import '../Styles/TopBody.css';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function TopBody() {
  return (
    <div className='top-body'>
        <div className='top-left'>
            <h1>Welcome back, Maxie</h1>
            <h6>Maximize product sales and store management to get the best results</h6>
        </div>
        <div className='top-right'>
            <div className='callendar-button'><CalendarMonthOutlinedIcon/>This Month<KeyboardArrowDownIcon/></div>
            <div className='download-button'>Download report</div>
        </div>
    </div>
  )
}
