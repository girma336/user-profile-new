import React from 'react'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { deepOrange } from '@mui/material/colors';
import './UserList.css';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const UserList = ({ user, handleClick }) => {
    let displayJobTitle = user.jobTitle;

    if (displayJobTitle.length > 25) {
        displayJobTitle = `${displayJobTitle.substring(0, 23)}...`;
    }
    return (
        <div className='user_list' onClick={() => handleClick(user)}>
            {/* <MoreVertIcon /> */}
            {user.id * 1 <= 15 ? (
                <Avatar sx={{ bgcolor: deepOrange[500], width: 60, height: 60 }} className='user_profile_avatar'>{user.profile.firstName.substring(0, 1)}
                    .{user.profile.lastName.substring(0, 1)}</Avatar>
            ) : (<Avatar  sx={{ bgcolor: deepOrange[500], width: 60, height: 60 }} className='user_profile_avatar' alt={user.profile.firstName} src={user.avatar} />)}
            <div className='user__description'>
                <div className='user_name_text'>
                    <Typography variant="h6">
                        {user.profile.firstName} {' '}
                        {user.profile.lastName}
                    </Typography>
                </div>
                <div className='job_title'>
                    <Typography variant="p" className='job_title'>
                        {displayJobTitle}
                    </Typography>
                </div>
                <div className='user_name_pro'>
                    <Typography variant="p" className='user_name_pro'>
                        {user.profile.username}
                    </Typography>
                </div>

            </div>
        </div>
    )
}

export default UserList