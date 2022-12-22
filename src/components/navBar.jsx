import {
    Box, 
    Image,
    HStack,
    Stack,
  } from "@chakra-ui/react";

import logo from "../images/logo.svg"
import bgImageMobile from "../images/image-hero-mobile.jpg"
import bgImageDkt from "../images/image-hero-desktop.jpg"
import MenuResponsive from "./menuResponsive";



const Navbar = () => {

  return (
    <Stack px={{md: 8, xl: 10}} height={300} bgImage={[bgImageMobile, bgImageDkt]} bgSize="cover">
      <HStack justify="space-between" p="4">
        <Box as="a" href="index.html">
          <Image src={logo} alt='logo' />
        </Box>
        <MenuResponsive/>
      </HStack>
    </Stack>
  )
}

export default Navbar;