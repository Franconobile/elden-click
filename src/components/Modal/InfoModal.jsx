import React from 'react';
import styled from 'styled-components';


const InfoOverlay = styled.div`
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

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 500px;
  max-height: 80vh; 
  overflow-y: auto; 
  color: #948A76;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;

  span {
     font-style: italic;
  }
`;

const InfoHeader = styled.div`
  font-family: 'Mantinia';
  background-color: black;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #7F5915;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;

const InfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <InfoOverlay>
      <InfoContent>
        <InfoHeader>
            <h3>Elden clicK</h3>
        </InfoHeader>
        <p>This is a release version, which means you might encounter bugs. "I HIGHLY RECOMMEND use this website on a desktop mode. I'll make it responsive in a future update; for now I'm feeling lazy! Also, you may or may not agree with the rating I've given to some of the characters you can obtain. If you have any suggestions, feel free to send me a DM on my <a href="https://x.com/notsakku" target="_blank" rel="noopener noreferrer">Twitter</a>.
        </p>
        <p>
        This site doesn't collect any information or data; it simply saves your progress in your localStorage. If you want to start from scratch, you can do so from the options.
        </p>
        <p>There are still characters,  items, and possibly a system for upgrades and more items in the shop that need to be added.</p>
        <p>This project started as a future original gacha minigame with characters drawn by me, but I canceled it due to a lack of time and dedication. Now, I've resumed it by turning it into an Elden Ring gacha clicker.</p>
        <h3>How to play?</h3>
        <p>Totally inspired by the game Cookie Clicker (all credits to its creators), it's simple—click on the rune to get runes! You can buy miners in the shop, they will automatically grind runes (+1), with a maximum of 25 miners.</p>
        <p>Price for wishing: 500 runes.</p>
        <p>I'll show the obtain rates here:</p>
        <p>5-star character: 2% </p>
        <p>4-star character: 4.7% </p>
        <p>3-star character: 100%</p>
        <p>Once you've reached 50 rolls, a 5-star character is guaranteed at 100%, and the count will reset. 
        <h3>Why only Elden Ring and not all FromSoft games?</h3>
        <p>I love Elden Ring! But also, I don't have time to dedicate to this project, given the overwhelming amount of content that could be added. However, the idea isn't completely off the table.</p>
        <h3>Will there be more updates?</h3>
        <p>It's possible that I won't enthusiastically update this project :( because it started as a study project for the web development bootcamp course I'm taking. I'll provide minor updates, but I can't promise much since I'd rather focus on other projects and my art/commissions for now. Besides, I'm not a good programmer, and this project made my brain bleed. If you know about coding and check the source code, you'll notice it's a mess! lmao</p>
        <h3>Why using default pics for the chrs? Will you change it?</h3>
        <p>OFC I will, I've put in-game screenshots and official concept art from the game as placeholder at least for now. I’m aware that some images are even in poor resolution. I would love to use fan art for the important characters! At the moment, I haven’t done this because I’d like to get permission from the artists if that's okay. If you want your artwork to appear here, feel free to send me a DM on Twitter. In a future update, I plan to implement a gallery system for the characters and more</p>
Have fun clicking, and good luck! ૮ ˶ᵔ ᵕ ᵔ˶ ა</p>
        <CloseButton onClick={onClose}>Got it</CloseButton>
      </InfoContent>
    </InfoOverlay>
  );
};

export default InfoModal;