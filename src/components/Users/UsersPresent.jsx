import style from "./Users.module.css";
import User from "./User/User";
import preloader from "../../assets/common/preloader.svg"

const UsersPresent = (props) => {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize)
  let pagesNumbers = []
  for (let i = 1; i <= pagesCount; i++) {
    pagesNumbers.push(i)
  }
  let usersElements = props.users.map((user) => (
    <User
      fullName={user.name}
      avatar={user.photos.small}
      location={user.location || { country: 'Unknown', city: 'Unknown' }}
      status={user.status || "No status"}
      isFollowed={user.followed}
      key={user.id}
      id={user.id}
      onFollow={props.onFollow}
      onUnfollow={props.onUnfollow}
    />
  ))

  return (
    <div className={style.main_container}>
      <h2 className={style.title}>Users</h2>
      {props.isFetching ? <div className={style.preloader}>
        <img src={preloader} alt="loading" width={56} height={56}/>
      </div>: null}
      <ol className={style.pagination_list}>
        {pagesNumbers.map((pageNumber) => {
          return <li
            key={pageNumber}
            onClick={(event) => { props.onPageChanged(pageNumber) }}
            className={`${style.pagination} ${pageNumber === props.currentPage ? style.pagination_current : ''}`}>
            {pageNumber}
          </li>
        })}
      </ol>
      <div className={style.container}>
        {props.users.length > 0 ? usersElements : <p>No users to display</p>}
      </div>
      <button className={style.button}>Show more</button>
    </div>
  )
}

export default UsersPresent