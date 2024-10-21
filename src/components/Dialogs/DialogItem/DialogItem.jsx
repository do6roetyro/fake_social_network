import { NavLink } from "react-router-dom";
import style from './DialogItem.module.css'

const DialogItem = (props) => {

  let path = `/dialogs/${props.id}`;

  return (
    <li className={style.dialog_item}>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  )
}

export default DialogItem;

