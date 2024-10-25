import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/main_logo.png'
import style from './Header.module.css'

const Header = (props) => {

  return (
    <header className={style.header}>
      <NavLink to="/profile"></NavLink>
      <img className={style.image}
        src={Logo}
        alt="Логотип социальной сети"
        width={64}
        height={64}
      ></img>
      {props.isAuth ? <div className={style.logged}>{props.login}</div> : <NavLink className={style.login} to="/login"> Log in </NavLink>}
    </header>
  );
};

export default Header;
