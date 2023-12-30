import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Skeleton from '../components/Skeleton';
import './Dashboard.css';
import User from '../components/User';
import Typography from '@mui/material/Typography';
import Search from '../components/Search';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  const { user, isLoading, isError, message } = useSelector((state) => state.user)

  useEffect(() => {
    const filteredResults = user.filter((item) =>
      item.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredData(filteredResults);
  }, [searchQuery, user]);

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
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery}  />
      <User users={filteredData} />
    </div>
  )
}

export default Dashboard