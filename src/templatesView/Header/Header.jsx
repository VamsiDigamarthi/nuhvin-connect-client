import React, { useState } from "react";
import "./Header.css";
import { IoIosSearch } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FiMoon, FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { lightMode, darkMode } from "../../redux/features/colorChange";
import { ChangeTheme } from "../../Modals/ChangeTheme/ChangeTheme";
import Logout from "../../Modals/Logout/Logout";
import { useLocation } from "react-router-dom";
export const Header = () => {
  const location = useLocation();
  const pathValue = location.pathname;
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.theme);
  const themeClass = themeMode ? "lightMode" : "darkMode";

  // theme logout modal opens when settings icon click
  const [openThemeModal, setOpenThemeModal] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const closeChangeThemeModal = (change) => setOpenThemeModal(change);
  const closeLogoutModal = (change) => setOpenLogoutModal(change);

  return (
    <>
      {pathValue !== "/register" && (
        <header className={`header ${themeClass}`}>
          <h3>Nuhvin Connect</h3>
          <div className="header-second-card">
            <div className="header-search-card">
              <input type="text" placeholder="Search here..!" />
              <IoIosSearch size={20} color="lightgray" />
            </div>

            <div className="dark-and-light-mode-card">
              <div
                className={`dark-light-background-color-card  ${
                  themeMode ? "activeDark" : "deactiveDark"
                }`}
              ></div>
              <FiSun
                onClick={() => dispatch(lightMode())}
                className="dart-icons"
                size={20}
              />
              <FiMoon
                className="dart-icons"
                onClick={() => dispatch(darkMode())}
                size={20}
              />
            </div>

            <FaCalendarAlt className="cursor" size={22} />
            <IoSettings
              onClick={() => setOpenThemeModal(true)}
              className="cursor"
              size={25}
            />
            <IoIosLogOut
              onClick={() => setOpenLogoutModal(true)}
              className="cursor"
              size={25}
            />
          </div>
          {openThemeModal && <ChangeTheme closeModal={closeChangeThemeModal} />}
          {openLogoutModal && <Logout closeModal={closeLogoutModal} />}
        </header>
      )}
    </>
  );
};
