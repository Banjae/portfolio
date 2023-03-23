import { useNavigate } from "react-router-dom";
import styles from "./notFound.module.scss";

const NotFound = () => {
    const navigate = useNavigate();
    const naviHome = () => {
        navigate("/");
    };
    return (
        <div className={styles.NotFound}>
            <p>404 ERROR</p>
            <p className={styles.mainText}>존재하지 않는 페이지입니다.</p>
            <div onClick={naviHome}>
                <p>Home </p>
            </div>
        </div>
    );
};

export default NotFound;
