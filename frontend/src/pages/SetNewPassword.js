import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "../styles/modules/pages/Auth.module.scss"

const SetNewPassword = () => {

    const onSubmit = e => {
        e.preventDefault();  
        console.log("Hello form")
    }

    return(
        <AuthLayout title={"Set new password"} description={"This is form for logining in our Service"}>
            <form onSubmit={onSubmit} className={styles.form}>
                <Input placeholder={"*************"} label={"Password"} name={"password"} type={"password"}/>
                <Input placeholder={"*************"} label={"Password"} name={"password"} type={"password"}/>
                <Button>Send Link</Button>
            </form>
        </AuthLayout>
    )
}

export default SetNewPassword