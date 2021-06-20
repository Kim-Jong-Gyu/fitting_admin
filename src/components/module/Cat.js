import react from "react"
import ListForm from "components/forms/ListForm"

const Cat = () => {
    return(
        <div className = 'first_class'>
            <p className = "first_article">
                <dl className = "first_list">
                </dl>
                <dt>
                    first Category
                </dt>
                <dd>
                    <ListForm />
                </dd>
            </p>
        </div>
    );
}
export default Cat;