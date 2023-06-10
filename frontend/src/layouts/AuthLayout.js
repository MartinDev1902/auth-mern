import styles from '../styles/modules/layouts/AuthLayout.module.scss'

const AuthLayout = ({children, title, description}) => {
    return(
        <div className={styles.authLayout}>
            <div className={styles.authLayoutFormBlock}>
                <h1 className={styles.authLayoutFormBlock__title}>{title}</h1>
                <p className={styles.authLayoutFormBlock__description}>{description}</p>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout