import style from "./Friend.module.css";

const Friend = (props) => {
  return (
    <li className={style.item}>
      <a href="#" className={style.link}>
        <img
          className={style.avatar}
          src={props.avatarUrl}
          alt=""
        />
        <span className={style.name}>{props.name}</span>
      </a>
    </li>
  );
};

export default Friend;
