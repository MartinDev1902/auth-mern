import Input from "../components/Input"
import Button from "../components/Button"
import AuthLayout from "../layouts/AuthLayout"
import styles from "../styles/modules/pages/Auth.module.scss"
import { Link } from "react-router-dom"

const Register = () => {

    const onSubmit = e => {
        e.preventDefault();  
        console.log("Hello form")
    }

    return(
        <AuthLayout title={"Register"} description={"This is form for registration on our Service"}>
            <form onSubmit={onSubmit} className={styles.form}>
                <Input placeholder={"John Doe"} label={"Full Name"} name={"fullName"}/>
                <Input placeholder={"example@gmail.com"} label={"Email"} name={"email"} type={"email"}/>
                <Input placeholder={"*************"} label={"Password"} name={"password"} type={"password"}/>
                <Button>Register</Button>
            </form>

            <div>Don't have an account? <Link to="/login">Login</Link></div>
        </AuthLayout>
    )
}

export default Register