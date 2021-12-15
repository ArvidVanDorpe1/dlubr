import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutLinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, IconButton} from '@material-ui/core';
import AddIcon from  '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './header.css'
<link rel="stylesheet" href="header.css" />


const header = () => {
    return (
        <div className='header'>
            <div className='header_links'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="facebook logo" />
                <div className='header_input'>
                <SearchIcon />
                <input type="text" placeholder='Search CLUBR...' />
                </div>
            </div>
            <div className='header_center'>
                <div className='header_option header_option--active'><HomeIcon fontsize='large' /></div>
                <div className='header_option'><FlagIcon fontsize='large' /></div>
                <div className='header_option'><SubscriptionsOutLinedIcon fontsize='large'/></div>
                <div className='header_option'><StorefrontOutlinedIcon fontsize='large'/></div>
                <div className='header_option'><SupervisedUserCircleIcon fontsize='large' /></div>
            </div>
            <div className="header_rechts">
                <div className='header_info'><Avatar /> <h4>Arvid Van Dorpe</h4></div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            
        </div>
    )
}

export default header
