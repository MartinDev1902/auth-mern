import { useDispatch } from "react-redux";
import Button from "../components/Button";
import styles from "../styles/modules/pages/Home.module.scss"
import { logout } from "../store/reducers/auth";

const Home = () => {
    const dispatch = useDispatch()
    return (
        <div className={styles.home}>
            <h1>Hello, Aliaksandr Martsinets</h1>
            <ul>
                <li><b>Email: </b>martin.new1902@gmail.com</li>
            </ul>
            <Button onClick={() => dispatch(logout())}>Log out</Button>
        </div>
    )
}

export default Home;