import { Box, Button, Container, Image, Input, Text } from "@components/ui";
import { AuthContext, AuthProvider } from "contexts/auth";
import { api } from "pages/api/api";
import { FormEvent, useContext, useState } from "react";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";


export function SendMessageForm(){
    const { user, signOut } = useContext(AuthContext);
    const [ message, setMessage ] = useState('');

    async function handleSendMessage(event: FormEvent){
        event.preventDefault();
        
        if (!message.trim()){
            return;
        }

        await api.post('messages', {message})

        setMessage('');    
    }

    return (
        <Box className="bg-zinc-900 p-24 items-center flex flex-col self-center text-center relative">
            <Button onClick={signOut} className=" bg-transparent absolute cursor-pointer left-6 top-6 rounded-t-full ">
                <VscSignOut className="hover:scale-95" size={32}/>
            </Button>

            <header className="flex flex-col items-center p-1 ">
                <Container className="">
                    <img src={user?.avatar_url} alt={user?.name} className='h-36 w-36 rounded-full ring-2 ring-orange-500'/>
                </Container>
                <Text as="h5"  align="center" className="mt-4">
                    <Text as="span"fontSize="3xl" className="flex items-center mt-2 text-slate-200">
                        <VscGithubInverted className='flex mr-2' size={16}/>
                        {user?.login}
                    </Text>
                </Text>
            </header>

            <form onSubmit={handleSendMessage} className="flex flex-col self-stretch mt-5">
                <label htmlFor="message" className="pt-5 pr-6 text-2xl bg-zinc-800 text-slate-200 font-bold border-b-2 border-zinc-900 rounded-t-xl" >
                    Menssagem
                </label>
                <textarea 
                    name="message" 
                    id="message" 
                    placeholder="Digite sua Menssagem" 
                    className="p-7 h-40 resize-none bg-transparent bg-zinc-800 text-slate-200 focus:outline-0 rounded-b-xl " 
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                />
                <Button   variant="secondary" size="md"  type="submit" className="rounded-lg mt-3 ml-44" >
                    Enviar Mensagem
                </Button>
            </form>
        </Box>
    )
}