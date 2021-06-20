import React from "react";
import Cat from "components/module/Cat"
import Styles from "assets/css/Admin.module.css"
import Detail from "components/module/Detail"

const Admin = () => {
    return (
        <div className={Styles.admin_content}>
            <Cat />
            <Cat />
            <Cat />
            <Detail />
        </div>
    );
}

export default Admin;