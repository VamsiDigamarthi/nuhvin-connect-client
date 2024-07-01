import React from "react";
import "./TemplateModal.css";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { openModalVarient } from "../../data/animation";
import { useSelector } from "react-redux";
export const TemplateModal = ({ title, closeModal, children, className }) => {
  const themeMode = useSelector((state) => state.theme.theme);
  const themeClass = themeMode
    ? "light-mode-modal-back"
    : "dark-mode-modal-back";

  const crossIcon = !themeMode && "darkmode-close-icons";

  return (
    <div className="all-modal-main-card">
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={openModalVarient}
        className={`all-modal-inside-section custom-changetheme-modal-width ${className} ${themeClass}`}
      >
        <div className={`all-modal-closing-card ${crossIcon}`}>
          <h3>{title}</h3>
          <RxCross1 size={22} onClick={() => closeModal(false)} />
        </div>
        <div>{children}</div>
      </motion.div>
    </div>
  );
};
