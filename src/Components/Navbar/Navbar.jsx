import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import addclass from "../../images/addclass.svg";
import logo from "../../images/logo.svg";
import cultIcon from "../../images/cult-icon.svg";
import liveFit from "../../images/Livefit.svg";
import eatIcon from "../../images/eat-icon.svg";
import mindIcon from "../../images/mind-icon.svg";
import carefit from "../../images/carefit-blk.svg";
import storeIcon from "../../images/store-icon.svg";
import userImg from "../../images/user-image.svg";
import cart from "../../images/cart-image.svg";

import { Login } from "../Login/Login";
import { useContext, useState } from "react";
import { AppContext } from "../../Contextxts/AppContext";

export const Navbar = () => {
  const [hide, setHide] = useState(true);
  const { isLoggedIn, userData, handleLogout } = useContext(AppContext);
  const handleHide = () => {
    setHide(true);
  };

  return (
    <>
      <header className={styles.nav_section}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className={styles.right_section}>
          <Link to="/">San Jose</Link>
          {isLoggedIn ? (
            <>
              {/* <img src={userImg} alt="" /> */}
              {/* {console.log(userData.picture)} */}
              <div style={{ cursor: "pointer" }} onClick={handleLogout}>
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "15px",
                  }}
                  src={userData.picture}
                  alt=""
                />
                {userData.given_name}
              </div>
            </>
          ) : (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setHide(false);
              }}
            >
              <img src={userImg} alt="" height="30px" width="40px" />
            </div>
          )}

          <Link to="/ViewClasses">
            <img src={addclass} alt="Cart" height="30px" width="40px" />
            Classes
          </Link>
        </div>
      </header>
      <Login hide={hide} handleHide={handleHide} />
    </>
  );
};
