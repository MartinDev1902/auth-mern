import styles from '../styles/modules/components/Button.module.scss'

const Button = ({children, onClick}) => <button onClick={onClick} type="submit" className={styles.button}>{children}</button>;

export default Button