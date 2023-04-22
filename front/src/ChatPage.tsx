import { useState } from "react";
import { useSearchParams } from "react-router-dom"
import { BsArrowUpCircle } from 'react-icons/bs';
import * as io from 'socket.io-client';
const socket = io.connect('http://localhost:4000')

export default function ChatPage() {
  const [searchParams] = useSearchParams();
  const [myText, setMyText] = useState('');
  const initialArray: JSX.Element[] = []
  const [messages, setMessages] = useState(initialArray);
  const roomNumber = Object.fromEntries(searchParams)['roomNumber'];
  socket.emit('join_room', roomNumber);
  socket.on('receive_message', data => {
    setMessages([...messages,
    <li
      className="mb-3 py-3 px-4 bg-teal-400 self-start rounded-br-3xl
      rounded-tr-3xl rounded-tl-xl text-white"
    >
      {data.message}
    </li>
    ]);
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMessages([...messages,
      <div
        className="mb-3 py-3 px-4 bg-blue-400 self-end rounded-bl-3xl
        rounded-tl-3xl rounded-tr-xl text-white"
      >
        {myText}
      </div>
    ])
    socket.emit('send_message', { message: myText, room: roomNumber });
    e.target[0].value = '';
  }
  return (
    <div className='flex flex-row justify-center place-items-center h-screen w-screen'>
      <div
        className='flex flex-col justify-end rounded-[35px]
        w-1/2 h-4/5 bg-gradient-to-r from-teal-500 to-blue-500'
      >
        <div className='flex flex-col justify-end mx-10 mt-10 h-full overflow-auto'>
          {messages}
        </div>
        <div
          className="justify-end rounded-b-[35px] bg-transparent w-full h-1/4"
        >
          <form
            className='flex flex-row h-full w-full px-8 py-6 place-items-center'
            onSubmit={handleSubmit}
          >
            <input
              type="text" name='msg' id="msg" autoComplete='off'
              onChange={e => setMyText(e.target.value)}
              className="rounded-3xl w-full py-3 pl-4 mr-4 bg-gray-700
              placeholder-teal-400 text-white focus:outline-none"
              placeholder="Сообщение"
              required
            />
            <button
              type='submit' className="flex justify-center h-11 w-12 rounded-full
              bg-transparent hover:bg-blue-400">
              <BsArrowUpCircle className="text-6xl text-gray-700 self-center" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
