import style from "./ProfileInfo.module.css";

const ProfileInfoContacts = (props) => {
    let contacts = Object.keys(props.contacts)

    return (
        <div className={style.container}>
            <h3 className={style.title}>Contacts</h3>
            <ul className={style.list}>
                {contacts.map((contact, id) => {
                    return <li key={id} className={style.item}>
                        <a className={style.link} href={props.contacts[contact]}>{contact}</a>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default ProfileInfoContacts;
