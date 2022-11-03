import { Box, Container, Text, Input, Button } from "@components/ui";

export const Login = () => {

    const textButton = [    
        {
          label: 'Github',
          href: '/#subscribe',
        },
        {
          label: 'Google',
          href: '/',
        },
        {
          label: 'Gmail',
          href: '/',
        }
    ];


    return (
        <Box className="w-full ">
            <Container className="h-full flex flex-col justify-center sm:py-12">
                <Box className="p-10  xs:p-0 mx-auto md:w-full md:max-w-md">
                    <Text as="h1" fontSize="3xl" className="font-bold text-center text-2xl mb-5">{'<Your Logo/>'}</Text>  
                    <Container className="bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg shadow  rounded-lg divide-y divide-gray-200">
                        <Container className="p-5 py-10 ">                    
                            <Input 
                                className="w-full" 
                                placeholder='you@example.com'
                                name='email'
                                type='email'
                                label='Email *'
                                required
                            />
                            <Input
                                className="w-full"
                                placeholder='........'
                                type='password'
                                name='Password'
                                label='Password *'
                                required
                            />
                            <Button variant='quaternary' className=" transition duration-200 w-full rounded-lg text-sm  font-semibold ">
                                <Text className="inline-block mr-2">Login</Text>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Button>
                        </Container>
                        <Box className="p-5 grid grid-cols-3 gap-3">
                            {textButton.map(({ label, href }, idx) => (
                                <Button 
                                    variant='quaternary' 
                                    className="rounded-lg text-lg sm:text-xs font-semibold"
                                >
                                    {label}
                                </Button>
                            ))}
                        </Box>
                        <div className="py-5">
                            <div className="grid grid-cols-2 gap-1">
                                <div className="text-center sm:text-left whitespace-nowrap">
                                    <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                        </svg>
                                        <span className="inline-block ml-1">Forgot Password</span>
                                    </button>
                                </div>
                                <div className="text-center sm:text-right whitespace-nowrap">
                                    <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-bottom	">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <span className="inline-block ml-1">Help</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    <span className="inline-block ml-1">Back to your-app.com</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Container>
        </Box>
    );
}