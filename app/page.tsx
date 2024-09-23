import Info from "@/components/info";
import Landing from "@/components/landing";
import Navbar1 from '@/components/navbar1';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from "@/components/footer";



export default function Home() {
  return (
    <>
    <head>
      <title> divdevs </title>
    </head>
    <ChakraProvider>
    <Navbar1 />
      <Landing />
      <Info />
      <Footer />
    </ChakraProvider>
    </>
  )
}