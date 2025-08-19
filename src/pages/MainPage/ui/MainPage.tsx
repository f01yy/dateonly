import { useEffect, useState } from 'react'

export const MainPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const tg = window.Telegram.WebApp
    tg.ready() // сообщает Telegram, что приложение готово
    setUser(tg.initDataUnsafe?.user)
  }, [])

  const sendDataToBot = () => {
    const tg = window.Telegram.WebApp
    // можно отправлять строку JSON с любыми данными
    tg.sendData(
      JSON.stringify({
        action: 'like',
        userId: user?.id,
      })
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-2xl font-bold mb-4">🚀 Telegram Dating Mini App</h1>

      {user ? (
        <div className="bg-white shadow p-4 rounded-xl w-full max-w-sm">
          <p className="text-lg">Привет, {user.first_name}!</p>
          <p className="text-sm text-gray-500 mb-4">
            Твой Telegram ID: {user.id}
          </p>

          <button
            onClick={sendDataToBot}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
          >
            Отправить данные боту
          </button>
        </div>
      ) : (
        <p>Загрузка данных пользователя...</p>
      )}
    </div>
  )
}
