import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

import './header.css';
// or
// import { IconButton } from '@mui/material';
function Header() {
  return (
    <div className='header'>
        <IconButton>
        <PersonIcon fontSize="large" className="header_icon"/>
        </IconButton>

        <img 
        className='header_logo'
        
        src="https://p.kindpng.com/picc/s/390-3904131_thumb-image-doraemon-png-transparent-png.png" alt="websitelogo" />
     <IconButton>
        <ForumIcon/>

     </IconButton>

    </div>
  )
}

export default Header;