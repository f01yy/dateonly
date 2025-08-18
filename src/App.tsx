import { useEffect, useState } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Telegram: any;
  }
}

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready(); // сообщает Telegram, что приложение готово
    setUser(tg.initDataUnsafe?.user);
  }, []);

  return (
      <div>
        {user ? (
          <div>
            <p>Привет, {user.first_name}!</p>
            <p>Твой Telegram ID: {user.id}</p>
          </div>
        ) : (
          <p>Загрузка данных пользователя...</p>
        )}
      </div>
  );
}

export default App;