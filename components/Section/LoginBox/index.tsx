import { Box, Button, Container, Image, Link, Text } from "@components/ui";
import image from '../../../assets/image.png';
import login from '../../../assets/login.png';
import { VscGithubInverted } from "react-icons/vsc";
import { useEffect } from "react";
import { api } from "pages/api/api";

type AuthResponse = {
  token: string,
  user: {
    id: string,
    avatar_url: string,
    name: string,
    login: string,
  }
}


export const LoginBox = () => {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=00d0f9d8650e08ae7ea6`;

  async function signIn(githubCode: string){
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode,
    })

    const { token, user } = response.data;

    localStorage.setItem('@doWhile:token', token)

    console.log(user)
  }


  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if(hasGithubCode){
      const [urlWithoutcode, githubCode] = url.split('?code=');
      
      window.history.pushState({},'', urlWithoutcode );

      signIn(githubCode);
    }
  }, [])

  return (
    <Box className={`flex-col h-full  mr-28 ml-20 bg-gradient-to-tl from-rose-900 to-orange-300  pt-6 justify-center `} >
        <Image src={image}  alt='Girl smiling' />
        <Text fontSize="2xl" className="text-slate-200 p-6 pb-14 text-center "> 
          Entre e compartilhe sua mensagem
        </Text>  
        <Container className='flex justify-center'>
          <Button size="lg" variant="secondary" href={signInUrl} className='  rounded-full ' >
            <VscGithubInverted size={'22'} className=' fixed mt-1' />
            <Text as="p" className="ml-7">Entrar com Github</Text> 
          </Button> 
        </Container>

    </Box>
  );
};