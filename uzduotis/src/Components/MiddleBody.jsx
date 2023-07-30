import React from 'react'
import '../Styles/MiddleBody.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

export default function MiddleBody() {
  return (
    <div className='middlebody-container'>
        <div className='card'>
            <h1><MonetizationOnIcon/>Net Profit</h1>
            <h4><AttachMoneyOutlinedIcon/>302.1k</h4>
            <h6><SouthEastIcon/>2.9 vs 300.3k last year</h6>
        </div>
        <div className='card'>
            <h1><StoreIcon/>Store</h1>
            <h4>12,900</h4>
            <h6><NorthEastIcon/>12.9% vs 1,030 last year</h6>
        </div>
        <div className='card'>
            <h1><InventoryIcon/>Product</h1>
            <h4>390,040</h4>
            <h6><NorthEastIcon/>4.1% vs 320,583 last year</h6>
        </div>
        <div className='card'>
            <h1><SupervisedUserCircleOutlinedIcon/>Visitor</h1>
            <h4>3.1M</h4>
            <h6><SouthEastIcon/>1.7% vs 3.3M last year</h6>
        </div>
        
    </div>
  )
}
