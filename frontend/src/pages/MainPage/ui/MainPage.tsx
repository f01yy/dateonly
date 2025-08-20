import { retrieveLaunchParams } from '@telegram-apps/sdk-react'

export const MainPage = () => {
  const params = retrieveLaunchParams()
  console.log(params)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-2xl font-bold mb-4">🚀 Telegram Dating Mini App</h1>

      {params.tgWebAppData?.user ? (
        <div className="bg-white shadow p-4 rounded-xl w-full max-w-sm">
          <p className="text-lg">
            Привет, {params.tgWebAppData?.user.first_name}!
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Твой Telegram ID: {params.tgWebAppData?.user.id}
          </p>
        </div>
      ) : (
        <p>Загрузка данных пользователя...</p>
      )}
    </div>
  )
}
