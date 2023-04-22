import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function SearchRoomPage() {
  const [roomNumber, setRoomNumber] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/chat?roomNumber=${roomNumber}`);
  }

  return (
    <div className='flex justify-center place-items-center h-screen w-screen'>
      <div
        className='flex flex-col place-items-center justify-center rounded-[35px]
        w-1/2 h-2/3 p-16 bg-gradient-to-r from-teal-500 to-blue-500'
      >
        <p className='text-5xl text-gray-200 font-sans pb-6'>Найти комнату</p>
        <form className="w-1/2" onSubmit={handleSubmit}>
          <div className="relative z-0 flex flex-col place-content-center w-full mb-6 group">
            <div className="pb-6">
              <input
                type="number" name="roomNumber" id="roomNumber"
                onChange={e => setRoomNumber(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-600
                bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                dark:text-white dark:border-gray-600 dark:focus:border-gray-300
                focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="roomNumber"
                className="peer-focus:font-medium absolute text-sm text-gray-500
                dark:text-gray-700 duration-300 transform -translate-y-6 scale-75
                top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                peer-focus:-translate-y-6 pb-10"
              >
                Номер комнаты
              </label>
            </div>
            <button
              type="submit" className="text-black bg-blue-700 hover:bg-blue-800
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
              w-full sm:w-auto px-5 py-2.5 text-center dark:bg-white
              dark:hover:bg-gray-200 dark:focus:bg-gray-300"
            >
              Присоединиться
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
