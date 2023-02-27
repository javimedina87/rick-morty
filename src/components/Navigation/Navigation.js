import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={classes['navigation-header']}>
      <nav>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) =>
              isActive ? classes['active-link'] : undefined}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/characters' className={({ isActive }) =>
              isActive ? classes['active-link'] : undefined}>Characters</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation;