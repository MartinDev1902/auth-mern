import Input from "../components/Input"
import Button from "../components/Button"
import AuthLayout from "../layouts/AuthLayout"
import styles from "../styles/modules/pages/Auth.module.scss"
import { Link } from "react-router-dom"
import useValidation from "../hooks/useValidation"

const Register = () => {

    const {values, errors, handleChange, handleSubmit} = useValidation(
        {fullName: '', email: '', password: ''},
        {
            fullName: [{required: true}],
            email: [{required: true}],
            password: [{required: true}, {minLength: 8}]
        }
        )

        
    const submitForm = data => {
        console.log(data)
    }

    return(
        <AuthLayout title={"Register"} description={"This is form for registration on our Service"}>
            <form onSubmit={e => handleSubmit(e, submitForm)} className={styles.form}>
                <Input placeholder={"John Doe"} label={"Full Name"} name={"fullName"} value={values.fullName} onChange={handleChange} errors={errors.fullName}/>
                <Input placeholder={"example@gmail.com"} label={"Email"} name={"email"} type={"email"} value={values.email} onChange={handleChange} errors={errors.email}/>
                <Input placeholder={"*************"} label={"Password"} name={"password"} type={"password"} value={values.password} onChange={handleChange} errors={errors.password}/>
                <Button>Register</Button>
            </form>

            <div>Don't have an account? <Link to="/login">Login</Link></div>
        </AuthLayout>
    )
}

export default Register