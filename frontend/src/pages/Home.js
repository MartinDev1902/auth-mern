import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import styles from "../styles/modules/pages/Home.module.scss"
import { getUser, logout, refresh } from "../store/reducers/auth";
import { useEffect } from "react";
import jwt_decode from 'jwt-decode'

const Home = () => {
    const dispatch = useDispatch()
    const {fullName, email, token} = useSelector(state => state.auth)
    const userId = jwt_decode(token).id

    useEffect(() => {
        dispatch(getUser(userId))
    }, [])

    return (
        <div className={styles.home}>
            <h1>Hello, {fullName}</h1>
            <ul><li><b>Email: </b>{email}</li></ul>
            <Button onClick={() => dispatch(logout())}>Log out</Button>
        </div>
    )
}

export default Home;