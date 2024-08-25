import { useEffect, useState } from 'react';
import styled from 'styled-components';

import WelcomePopup from './components/WelcomePopup';
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './GlobalStyles';
import './App.css';
import MainSection from './components/CentralSection/MainSection';
import FooterComponent from './components/Footer/Footer';
import OptsModal from './components/Modal/Options';
import ShopModal from './components/Modal/ShopModal';
import Inventory from './components/Modal/InventoryModal';
import InfoModal from './components/Modal/InfoModal';

// JSON

import characters from './data/characters.json';



const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  // Popup de bienvenida
    const [showWelcomePopup, setShowWelcomePopup] = useState(true);

    const closeWelcomePopup = () => {
      setShowWelcomePopup(false);
      localStorage.setItem('localStoragePopupShown', 'true');
    };

  // Checkea si el popup se mostro antes
  useEffect(() => {
    const popupShown = localStorage.getItem('localStoragePopupShown');
    if (popupShown) {
      setShowWelcomePopup(false);
    }
  }, []);


  //Sistema de wisheo
  const [isWishing, setIsWishing] = useState(false);
  const [isWishInProgress, setIsWishInProgress] = useState(false);

  //Sistema de PITY

  const [pityCounter, setPityCounter] = useState(0);
  const [pullHistory, setPullHistory] = useState([]);



  // Inicializa el estado con el valor de localStorage o con 0 si no existe
  const [clickCount, setClickCount] = useState(() => {
    const savedCount = localStorage.getItem('clickCount');
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  const handleWishClick = () => {
    if (!isWishInProgress && clickCount >= 500) {
      setClickCount(prevCount => prevCount - 500);
      setIsWishing(true);
      setIsWishInProgress(true);
      setPityCounter(prevCounter => prevCounter + 1);
    } else if (!isWishInProgress && clickCount < 500) {
      setIsWishing('not-enough-runes');
    }
  };

  //Manejo de los modals.

  const [isInfoOpen, setInfoOpen] = useState(false); //Info
  const [isModalOpen, setModalOpen] = useState(false); //Opciones
  const [isShopModalOpen, setShopModalOpen] = useState(false); //Shop
  const [isInvModalOpen, setInvModalOpen] = useState(false); //Inventory



  // Guardar el contador en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('clickCount', clickCount);
  }, [clickCount]);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  // Guardar workers en el localstorage

  const [workersCount, setWorkersCount] = useState(() => {
    const savedWorkers = localStorage.getItem('workersCount');
    return savedWorkers !== null ? parseInt(savedWorkers, 10) : 0;
  });
  
  useEffect(() => {
    localStorage.setItem('workersCount', workersCount);
  }, [workersCount]);


  // Config modals

  const handleReset = () => {
    setClickCount(0);
    setWorkersCount(0);
    setInventory({});
    localStorage.removeItem('clickCount');
    localStorage.removeItem('inventory');
    localStorage.removeItem('workersCount');
    localStorage.removeItem('localStoragePopupShown');
    setModalOpen(false);
  };


  //Modal Opciones
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleInfoModal = () => {
    setInfoOpen(!isInfoOpen);
  };

  //Modal shop

  const toggleShopModal = () => {
    setShopModalOpen(!isShopModalOpen);
  };

  //Modal Inv

  const [inventory, setInventory] = useState(() => {
    const savedInventory = localStorage.getItem('inventory');
    return savedInventory ? JSON.parse(savedInventory) : {};
  });

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);


  
  const addToInventory = (character) => {
    setInventory(prevInventory => {
      const newInventory = { ...prevInventory };
      if (character.id in newInventory) {
        newInventory[character.id].count += 1;
      } else {
        newInventory[character.id] = { ...character, count: 0 };
      }
      console.log(`Count for ${character.name}: ${newInventory[character.id].count}`);
      return newInventory;
    });
  };


  const toggleInvModal = () => {
    setInvModalOpen(!isInvModalOpen);
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar 
      clickCount={clickCount} 
      onInfoClick={toggleInfoModal} 
      ></Navbar>
      <MainSection 
        clickCount={clickCount} 
        setClickCount={setClickCount} 
        workersCount={workersCount}
        isWishing={isWishing}
        setIsWishing={setIsWishing}
        onWishClick={handleWishClick}
        setIsWishInProgress={setIsWishInProgress}
        showNotEnoughRunesModal={clickCount < 1000 && isWishing === false}
        setPullHistory={setPullHistory}
        addToInventory={addToInventory}
        >
      </MainSection>  
      <FooterComponent 
        onClick={handleClick} 
        onOptionsClick={toggleModal} 
        onShopClick={toggleShopModal}
        onInvClick={toggleInvModal}
        onWishClick={handleWishClick}
        isWishInProgress={isWishInProgress}
        >
      </FooterComponent>
      <OptsModal isOpen={isModalOpen} onClose={toggleModal} onReset={handleReset} />
      <ShopModal 
        isOpen={isShopModalOpen} 
        onClose={toggleShopModal} 
        clickCount={clickCount} 
        setClickCount={setClickCount} 
        workersCount={workersCount}
        setWorkersCount={setWorkersCount}
      />
      <Inventory
      isOpen={isInvModalOpen}
      onClose={toggleInvModal}
      inventory={inventory}
      />
      <WelcomePopup isOpen={showWelcomePopup} onClose={closeWelcomePopup} />
      <InfoModal
      isOpen={isInfoOpen}
       onInfoClick={isInfoOpen} 
       onClose={toggleInfoModal}/>
    </AppContainer>

  );
};

export default App;
