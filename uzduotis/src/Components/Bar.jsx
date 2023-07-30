import React from 'react'
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

export default function Bar() {
  return (
    <div>
        <div>
            <div>
                <CurrencyExchangeOutlinedIcon/>
                <h1>Monthly Recurring Revenue</h1>
            </div>
                <MoreHorizOutlinedIcon/>
        </div>
        <div>
            <div>
                <h4>Income</h4>
                <h4><AttachMoneyOutlinedIcon/>156,098.1</h4>
            </div>
            <div>
                <h4>Spend</h4>
                <h4><AttachMoneyOutlinedIcon/>80,112.02</h4>
            </div>
        </div>
    </div>
  )
}
