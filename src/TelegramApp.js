// src/TelegramApp.js
import React, { useEffect, useState } from 'react';

const TelegramApp = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Получаем данные пользователя из Telegram
    const params = new URLSearchParams(window.location.search);
    const tgUser = JSON.parse(atob(params.get('tgWebApp')));

    if (tgUser) {
      setUser(tgUser);
    }
  }, []);

  const handleButtonClick = () => {
    // Пример взаимодействия с Telegram API
    window.Telegram.WebApp.sendData("Hello from my mini app!");
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Привет, {user ? user.first_name : 'гость'}!</h1>
      <button onClick={handleButtonClick}>
        Отправить данные в Telegram
      </button>
    </div>
  );
};

export default TelegramApp;
