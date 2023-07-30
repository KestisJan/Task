import React from 'react'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import '../Styles/Donut.css';



export default function Donut() {
  return (
    <div>
        <div>
            <Inventory2OutlinedIcon/>
            <h3>Selling Product</h3>
        </div>
        
        <div>
            <h3>This Month</h3>
            <KeyboardArrowDownOutlinedIcon/>
        </div>
    </div>
  )
}
