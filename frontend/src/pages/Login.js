import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "../styles/modules/pages/Auth.module.scss";
import { Link } from "react-router-dom";

const Login = () => {

    const onSubmit = e => {
        e.preventDefault();  
        console.log("Hello form")
    }

    return(
        <AuthLayout title={"Login"} description={"This is form for logining in our Service"}>
            <form onSubmit={onSubmit} className={styles.form}>
                <Input placeholder={"example@gmail.com"} label={"Email"} name={"email"} type={"email"}/>
                <Input placeholder={"*************"} label={"Password"} name={"password"} type={"password"}/>
                <div className={styles.recoveryLink}>Forgot password? <Link to="/recovery">Recovery</Link></div>
                <Button>Login</Button>
            </form>

            <div>
                Don't have an account? <Link to="/register">Register</Link>
            </div>
        </AuthLayout>
    )
}

export default Login