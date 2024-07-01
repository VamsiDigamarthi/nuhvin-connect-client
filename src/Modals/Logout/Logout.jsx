import React from "react";
import "./Logout.css";

import { TemplateModal } from "../TemplateModal/TemplateModal";
import { useSelector } from "react-redux";
const Logout = ({ closeModal }) => {
  const themeMode = useSelector((state) => state.theme.theme);

  const textColor = !themeMode && "darkmode-close-icons";

  return (
    <TemplateModal
      title="Logout"
      closeModal={closeModal}
      className="logout-adjust-width"
    >
      <div className="logout-card">
        <img src="/images/log-out.png" alt="log-out" />
        <h3 className={`${textColor}`}>Are you sure you want to logout?</h3>
        <div className="log-out-btn-card">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            Logout
          </button>
          <button onClick={() => closeModal(false)}>Cancel</button>
        </div>
      </div>
    </TemplateModal>
  );
};

export default Logout;
