import {useEffect, useState} from "react";
import {ContactForm} from "./ContactForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./ContactFormWithBlur.module.scss";

export const ContactFormWithBlur = () => {

const [contact, setContact] = useState([false]);

useEffect(() => {
    showContact();
}, [])

const noAction = (e)=> {
 e.stopPropagation()
}

const showContact = () => {
    setContact(!contact);
}

    return(
        <div>
        <FontAwesomeIcon className={styles.message} icon="comment" onClick={showContact}/>
        {contact && 
        <div className={styles.blurContainer} onClick={showContact}>
            <div className={styles.form}>
        <ContactForm onClick={noAction} children={<FontAwesomeIcon className={styles.exit} icon="times" onClick={showContact} /> }/>
        </div>
        </div>}
        </div>
    )
}