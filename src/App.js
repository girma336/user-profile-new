import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import './App.css';
import { getUser } from './features/user/userSlice';
import Dashboard from './pages/Dashboard';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser());
  })

  return (
    <div className='bg-[#fff] w-full App'>
      <Dashboard />
    </div>
  );
}

export default App;
