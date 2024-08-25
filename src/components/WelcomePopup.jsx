import React from 'react';
import styled from 'styled-components';


const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 500px;
  color: #948A76;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;

  span {
     font-style: italic;
  }
`;

const PopupHeader = styled.div`
  font-family: 'Mantinia';
  background-color: black;
`;

const OkButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #7F5915;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;

const WelcomePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <PopupOverlay>
      <PopupContent>
        <PopupHeader>
            <h3>Elden clicK</h3>
        </PopupHeader>
        <p>This web application is purely fan-made. The purpose of this silly game is for fun and to study programming, with no intention of making money. I do not own any of the assets, characters, names, or anything mentioned here. All rights belong to FromSoftware and Bandai.
        </p>
        <p>
        Please, keep in mind this is an unstable version. You may encounter some bugs.
        To learn more, click on the '?' icon at the top right.
        </p>
        <p>Made with lot of ☕ and ❤️ by @notsakku on Twitter.</p>
        <span>This website saves the stuff in local storage!</span>
        <OkButton onClick={onClose}>Shut up let me play</OkButton>
      </PopupContent>
    </PopupOverlay>
  );
};

export default WelcomePopup;