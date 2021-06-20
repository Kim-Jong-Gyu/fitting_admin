import react from 'react'
import styles from 'assets/css/DetailForm.module.css'
import ListForm from 'components/forms/ListForm';

const DetailForm = () => {
    return (
        <div className = {styles.Detail_wrap}>
            <ListForm/>
            <ListForm/>
            <ListForm/>
            <ListForm/>
        </div>
    );
}

export default DetailForm;