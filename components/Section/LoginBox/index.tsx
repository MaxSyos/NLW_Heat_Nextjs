import { Box, Button, Container, Image, Link, Text } from "@components/ui";
import image from '../../../assets/image.png';
import login from '../../../assets/login.png';
import { VscGithubInverted } from "react-icons/vsc";
import { useContext, useEffect } from "react";
import { api } from "pages/api/api";
import { AuthContext } from "contexts/auth";

export const LoginBox = () => {
  const { signInUrl } = useContext(AuthContext);

  return (
    <Box className={`flex-col h-full  mr-28 ml-20 bg-gradient-to-tl from-rose-900 to-orange-300  pt-6 justify-center `} >
        <Image src={image}  alt='Girl smiling' />
        <Text fontSize="2xl" className="text-slate-200 p-6 pb-14 text-center "> 
          Entre e compartilhe sua mensagem
        </Text>  
        <Container className='flex justify-center'>
          <Button size="lg" variant="secondary" href={signInUrl} className='rounded-full ' >
            <VscGithubInverted size={'22'} className=' fixed mt-1' />
            <Text as="p" className="ml-7">Entrar com Github</Text> 
          </Button> 
        </Container>

    </Box>
  );
};