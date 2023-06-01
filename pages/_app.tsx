import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import Aos from "aos"
import { useEffect } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ChakraProvider } from '@chakra-ui/react'

import 'swiper/css';


export default function App({ Component, pageProps }: AppProps) {

  useEffect(()=> {
    // Initialize Animate OnScroll lib
    Aos.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easi
    })
  },[])

  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  )
}
