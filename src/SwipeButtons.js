import React from 'react'
import './swipebuttons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BoltIcon from '@mui/icons-material/Bolt';
import IconButton from '@mui/material/IconButton';

const SwipeButtons = () => {
  return (
    <div className='swipeButtons'>
        <IconButton className="swipeButtons__repeat">
           <ReplayIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButtons__left">
           <CloseIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButtons__star">
           <StarIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButtons__right">
           <FavoriteBorderIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButtons__lightning">
           <BoltIcon fontSize="large"/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons