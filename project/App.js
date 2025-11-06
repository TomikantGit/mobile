import { useState } from 'react';
import { View, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AdotarScreen from './screens/AdotarScreen';
import PublicarScreen from './screens/PublicarScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [pets, setPets] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // navegacao entre telas
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#FF8C42" />
      {screen === 'login' && (
        <LoginScreen setScreen={setScreen} setIsLoggedIn={setIsLoggedIn} />
      )}
      {screen === 'register' && (
        <RegisterScreen setScreen={setScreen} setIsLoggedIn={setIsLoggedIn} />
      )}
      {screen === 'home' && (
        <HomeScreen setScreen={setScreen} isLoggedIn={isLoggedIn} />
      )}
      {screen === 'adotar' && (
        <AdotarScreen 
          pets={pets} 
          setPets={setPets} 
          setScreen={setScreen}
          isLoggedIn={isLoggedIn}
        />
      )}
      {screen === 'publicar' && (
        <PublicarScreen 
          pets={pets} 
          setPets={setPets} 
          setScreen={setScreen}
          isLoggedIn={isLoggedIn}
        />
      )}
    </View>
  );
}
