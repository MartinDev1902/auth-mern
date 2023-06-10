import styles from '../styles/modules/components/Input.module.scss'

const Input = props => {

    const {name, label, errors, type, placeholder, value, onChange} = props

    return (
        <div className={styles.input}>
            <div>
                <label htmlFor={name}>{label}</label>
                <span className="error">{errors ? errors : null}</span>
            </div>
            <input id={name} type={type || "text"} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
        </div>
    )
}

export default Input