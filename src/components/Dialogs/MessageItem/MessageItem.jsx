import style from './MessageItem.module.css'

const MessageItem = (props) => {
  return (
    <li className={style.message} id={props.id}>{props.message}</li>
  )
}

export default MessageItem;
