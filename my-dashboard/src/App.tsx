import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './Dashboard';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);  // Estado para saber si el usuario está logueado

  // Función para manejar el login exitoso
  const handleLogin = () => {
    setIsLoggedIn(true); // Cambiar el estado a true cuando el login sea exitoso
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} /> // Muestra el formulario de login
      ) : (
        <Dashboard /> // Muestra el dashboard si el usuario está logueado
      )}
    </div>
  );
};

export default App;
