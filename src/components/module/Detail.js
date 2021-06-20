import react from "react"
import DetailForm from "components/forms/DetailForm"
import styles from "assets/css/Cat.module.css"

const Detail = () =>{
    return(
        <div className={styles.first_list}>
        <div className = {styles.first_wrap}>
            <p className={styles.first_title}>First</p>
            <img className={styles.mod_button} src="images/mod_button.png" alt="modify"></img>
        </div>
        <DetailForm />
    </div>
    );
}

export default Detail;