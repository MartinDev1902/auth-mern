import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "../styles/modules/pages/Auth.module.scss"
import useValidation from "../hooks/useValidation";

const SetNewPassword = () => {

    const {values, errors, handleChange, handleSubmit} = useValidation(
        {password: '', passwordConfirm: ''},
        {
            password: [{required: true}, {minLength: 8}],
            passwordConfirm: [{required: true}, {minLength: 8}, {compareWith: 'password'}],
        }
    )
 
    const submitForm = data => console.log(data)
    
    return(
        <AuthLayout title={"Set new password"} description={"This is form for logining in our Service"}>
            <form onSubmit={e => handleSubmit(e, submitForm)} className={styles.form}>
                <Input placeholder={"*************"} label={"Password"} name={"password"} type={"password"} value={values.password} onChange={handleChange} errors={errors.password}/>
                <Input placeholder={"*************"} label={"Password Confirm"} name={"passwordConfirm"} type={"password"} value={values.passwordConfirm} onChange={handleChange} errors={errors.passwordConfirm}/>
                <Button>Send Link</Button>
            </form>
        </AuthLayout>
    )
}

export default SetNewPassword