import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "../styles/modules/pages/Auth.module.scss"

const RecoveryPassword = () => {

    const onSubmit = e => {
        e.preventDefault();  
        console.log("Hello form")
    }

    return(
        <AuthLayout title={"Recovery password"} description={"This is form for logining in our Service"}>
            <form onSubmit={onSubmit} className={styles.form}>
                <Input placeholder={"example@gmail.com"} label={"Email"} name={"email"} type={"email"}/>
                <Button>Send Link</Button>
            </form>
        </AuthLayout>
    )
}

export default RecoveryPassword