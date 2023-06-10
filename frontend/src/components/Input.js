import styles from '../styles/modules/components/Input.module.scss'

const Input = props => {

    const {name, label, errors, register, type, placeholder} = props

    return (
        <div className={styles.input}>
            <div>
                <label htmlFor={name}>{label}</label>
                <span className="error">{errors ? errors.message : null}</span>
            </div>
            <input {...register} id={name} type={type || "text"} placeholder={placeholder} name={name}/>
        </div>
    )
}

export default Input