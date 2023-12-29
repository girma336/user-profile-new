import React from 'react'
import { useSelector } from 'react-redux';
import Skeleton from '../components/Skeleton';
import './Dashboard.css';
import User from '../components/User';
import Typography from '@mui/material/Typography';

const Dashboard = () => {

  const { user, isLoading, isError, message } = useSelector((state) => state.user)
  if (isLoading) {
    return (
      <Skeleton times={10} className="skeleton" />
    )
  }

  if (isError) {
    return (
      <div className='error_message'>
        <Typography variant="h5" sx={{ marginTop: '10px'}} color='text.secondary'>
          404!!! Not Found
        </Typography>
        <Typography variant="h5" sx={{ margin: '10px'}} color='error'>
          {message}
        </Typography>
      </div>
    )
  }

  return (
    <div className='container__dashboard'>
      <User users={user} />
    </div>
  )
}

export default Dashboard