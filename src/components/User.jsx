import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { deepOrange } from '@mui/material/colors';
import './User.css';
import UserList from './UserList';
import background from './../bg.jpg';
import EmailIcon from '@mui/icons-material/Email';
import close from './../assest/close.png'

const User = ({ users }) => {
    const [toggle, setToggle] = useState(null);
    const [contact, setContact] = useState(false);

    const handleClick = (data) => {
        setToggle(data);
    };

    const handleContact = () => {
        setContact(!contact)
    }
    return (
        <div className='box_detail_user'>
            <Box sx={{ width: '100%', maxWidth: 671 }} className={`${toggle ? 'toggle_box-div' : 'box__custom-div'}`}>
                <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }} className='box__header'>
                    User
                </Typography>
                <di>
                    {users?.map((user, idx) => (
                        <UserList key={idx} user={user} handleClick={handleClick} />
                    ))}
                </di>
            </Box>
            {toggle && (
                <div className='detail__div'>
                    <Card sx={{ maxWidth: 360 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={background}
                        />
                        {toggle?.id * 1 <= 9 ? (
                <Avatar sx={{ bgcolor: deepOrange[500], width: 90, height: 90 }} className='user_profile_avatar_detail'>{toggle?.profile?.firstName.substring(0, 1)}
                    .{toggle?.profile?.lastName.substring(0, 1)}</Avatar>
            ) : (<Avatar  sx={{ bgcolor: deepOrange[500], width: 90, height: 90}} className='user_profile_avatar_detail' alt={toggle?.profile?.firstName} src={toggle?.avatar} />)}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ marginTop: '-60px'}}>
                               { toggle?.profile?.firstName} {' '}
                               { toggle?.profile?.lastName}
                            </Typography>
                            <Typography variant="body2" sx={{ lineHeight: '18px', marginTop: '-10px', marginBottom: '10px' }}>
                            { toggle?.jobTitle}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            { toggle?.Bio}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button  onClick={handleContact}size="small">Contact</Button>
                            <Button  onClick={() => setToggle(null)}size="small">Close</Button>
                        </CardActions>
                    </Card>
                </div>
            )}
            {contact && (
                <div className='create-post'>
                    <div className="create-post-modal">
                        <div role="button" tabIndex={0} onClick={(e) => handleContact(e)} onKeyDown={(e) => handleContact(e)}>
                            <span
                                src={close}
                                alt="close bar"
                                className="modal__close"
                            >X</span>
                        </div>
                        <div className="grid-modal">
                            <Typography variant="h5" color="blue-gray" className="modal__username">
                                {toggle.profile.username}
                            </Typography>

                            <Typography variant="h6" color="blue-gray" className="modal__contact__info">
                                Contact Info
                            </Typography>

                            <Typography variant="p" color="blue-gray" className="modal__email_contact">
                                <EmailIcon className='modal__email' /> {toggle.profile.email}
                            </Typography>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default User