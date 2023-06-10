import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "../styles/modules/pages/Auth.module.scss"
import useValidation from "../hooks/useValidation";

const RecoveryPassword = () => {

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
        <AuthLayout title={"Recovery password"} description={"This is form for logining in our Service"}>
            <form onSubmit={e => handleSubmit(e, submitForm)} className={styles.form}>
                <Input placeholder={"example@gmail.com"} label={"Email"} name={"email"} type={"email"} value={values.email} onChange={handleChange} errors={errors.email}/>
                <Button>Send Link</Button>
            </form>
        </AuthLayout>
    )
}

export default RecoveryPassword