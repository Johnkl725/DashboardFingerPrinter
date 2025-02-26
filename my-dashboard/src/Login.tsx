import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './Dashboard'; // Asegúrate de tener un componente Dashboard creado

const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);  // Estado para saber si el usuario está logueado

  // Función para manejar el login exitoso
  const handleLogin = () => {
    setIsLoggedIn(true);  // Cuando el login es exitoso, cambiamos el estado a 'true'
  };

  return (
    <div className="App bg-gray-50 min-h-screen">
      {/* Si el usuario no está logueado, mostramos el formulario de login */}
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        // Si está logueado, mostramos el Dashboard
        <Dashboard />
      )}
    </div>
  );
};

export default Login;
