import { Box, Container, Image, Link, Text } from "@components/ui";
import { Logo } from "@components/ui/Logo/Logo";
import { useEffect, useState } from "react";
import { api } from '../../../pages/api/api'
import io from "socket.io-client"

type message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

const messagesQueue: message[] = []; 

const socket = io('https://4003-andbackup00-nlwheatnode-m28nv49avwq.ws-us75.gitpod.io/')

socket.on('new_message', (newMessage: message) => {
  messagesQueue.push(newMessage)
})

export const MessageList = () => {
  const [messages, setMessages] = useState<message[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if(messagesQueue.length > 0 ){
        setMessages(preveState => [
          messagesQueue[0],
          preveState[0],
          preveState[1],
        ].filter(Boolean))

        messagesQueue.shift();
      }
    }, 3000)
  }, [])

  useEffect(() => {
    //chamada pra api
    api.get<message[]>('messages/last3').then(response => {
      setMessages(response.data)
    })
  }, [])

  return (
    <Box className={`flex flex-col justify-between items-start ml-48 text-slate-200   `} >
      <Logo className="h-7 my-8 flex ml-32" />
      <ul className="list-none flex flex-col gap-10 flex-1 justify-center ">
        {messages.map(message => {
          return (
            <li key={message.id} className="even:ml-20">
              <Text as="p" className="">
                {message.text}
              </Text>
              <Container className="mt-2 ">
                <img src={message.user.avatar_url} className="h-8 w-8 rounded-full ring-2 ring-orange-500" alt={message.user.name} />
              </Container>
              <Text as="span" fontWeight="light" className="mt-1 flex items-center">
                {message.user.name}
              </Text>
            </li>
          )
        })}
      </ul>


    </Box>
  );
};