import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import styles from "../styles/modules/pages/Home.module.scss"
import { logout } from "../store/reducers/auth";
import { getUser } from "../store/reducers/users";
import { useEffect } from "react";
import jwt_decode from 'jwt-decode'

const Home = () => {
    const dispatch = useDispatch()
    const {auth, users} = useSelector(state => state)
    const userId = jwt_decode(auth.token).id

    useEffect(() => {
        dispatch(getUser(userId))
    }, [])

    return (
        <div className={styles.home}>
            <h1>Hello, {users.fullName}</h1>
            <ul><li><b>Email: </b>{users.email}</li></ul>
            <Button onClick={() => dispatch(logout())}>Log out</Button>
        </div>
    )
}

export default Home;