"use client";
import React, { useState, createContext, useContext } from "react";

const PopupsContext = createContext();

export const PopupsProvider = ({ children }) => {
  const [requestPopupDisplay, setRequestPopupDisplay] = useState(false);
  const [orderPopupDisplay, setOrderPopupDisplay] = useState(false);
  const [thanksPopupDisplay, setThanksPopupDisplay] = useState(false);
  const [serviceValue, setServiceValue] = useState(false);
  const [popupTitle, setPopupTitle] = useState(false);
  const [popupSubtitle, setPopupSubtitle] = useState(false);

  return (
    <PopupsContext.Provider
      value={{
        thanksPopupDisplay,
        setThanksPopupDisplay,
      }}
    >
      {children}
    </PopupsContext.Provider>
  );
};

export const usePopup = () => useContext(PopupsContext);
