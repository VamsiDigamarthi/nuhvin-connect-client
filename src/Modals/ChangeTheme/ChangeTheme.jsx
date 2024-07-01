import React from "react";
import "./ChangeTheme.css";

import { TemplateModal } from "../TemplateModal/TemplateModal";

export const ChangeTheme = ({ closeModal }) => {
  // const themeMode = useSelector((state) => state.theme.theme);
  return (
    <TemplateModal
      title="Change Theme"
      closeModal={closeModal}
      className="custom-logout-modal-width"
    >
      <div></div>
    </TemplateModal>
  );
};
