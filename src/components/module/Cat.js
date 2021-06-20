import react from "react"
import ListForm from "components/forms/ListForm"
import styles from "assets/css/Cat.module.css"

const Cat = () => {
    return (
        <div className={styles.first_list}>
            <div className = {styles.first_wrap}>
                <p className={styles.first_title}>First</p>
                <img className={styles.mod_button} src="images/mod_button.png" alt="modify"></img>
            </div>
            <ListForm />
        </div>
    );
}
export default Cat;