import { useLocation, useNavigate } from "react-router-dom";
import styles from "./header.module.scss";

import Clock from "react-live-clock";
import "moment/locale/ko";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    if (location.pathname === "/lock" || location.pathname === "*") return null;

    const naviHome = () => {
        navigate("/");
    };

    const goGithub = () => {
        window.open("https://github.com/Banjae", "_blank");
    };

    return (
        <header>
            <div className={styles.headLeft}>
                <div onClick={naviHome}>
                    <FontAwesomeIcon icon={faHouse} />
                </div>
                <span>Banjae</span>
            </div>
            <div className={styles.headRight}>
                <div onClick={goGithub}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/gitW.png`}
                        alt="gitHub"
                    />
                </div>
                <Clock format="MM월 DD일 (dd) A hh:mm" ticking={true} />
            </div>
        </header>
    );
};

export default Header;
