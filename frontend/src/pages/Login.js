import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "../styles/modules/pages/Auth.module.scss";
import { Link } from "react-router-dom";
import useValidation from "../hooks/useValidation";

const Login = () => {

    const {values, errors, handleChange, handleSubmit} = useValidation(
        { email: '', password: ''},
        {
            email: [{required: true}],
            password: [{required: true}, {minLength: 8}]
        }
        )


        const submitForm = data => {
            console.log(data)
        }
    return(
        <AuthLayout title={"Login"} description={"This is form for logining in our Service"}>
            <form onSubmit={e => handleSubmit(e, submitForm)} className={styles.form}>
            <Input placeholder={"example@gmail.com"} label={"Email"} name={"email"} type={"email"} value={values.email} onChange={handleChange} errors={errors.email}/>
                <Input placeholder={"*************"} label={"Password"} name={"password"} type={"password"} value={values.password} onChange={handleChange} errors={errors.password}/>
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