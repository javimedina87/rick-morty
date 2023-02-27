import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import classes from './RootLayout.module.css';

const RootLayout = () => {
  return (
    <div className={classes.layout}>
      <Navigation/>
      <Outlet/>
    </div>
  )
}

export default RootLayout;