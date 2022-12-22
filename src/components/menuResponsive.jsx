import { Menu, 
    MenuButton, 
    MenuList, 
    MenuItem,
    IconButton, 
    Divider,
    useBreakpointValue,
    UnorderedList,
    ListItem,
    Link
  } from "@chakra-ui/react";

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const MenuResponsive = () => {

  const breakpoint = useBreakpointValue(
    {
      base: 'base',
      md: 'solid',
    },
    {
      fallback: 'md',
    },
  )

  if (breakpoint == "base") {
      return (
          <Menu>
            { ( {isOpen} ) => (
            <>
              <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={ isOpen ? <CloseIcon  bg={"transparent"} /> : <HamburgerIcon /> }
              bg={"transparent"}
              _hover={{bg:"transparent"}}
              _active={{bg:"transparent"}}
              border={"none"}
              color={"white"}
              />
              <MenuList zIndex={100}>
                <MenuItem fontWeight={"bold"}>
                  About
                </MenuItem>
                <Divider/>
                <MenuItem fontWeight={"bold"}>
                  Discover
                </MenuItem>
                <Divider/>
                <MenuItem fontWeight={"bold"}>
                  Get Started
                </MenuItem>
              </MenuList>
            </>
            )}
          </Menu>
    )
  } return (
      <UnorderedList fontWeight={"bold"} color={"white"} display={"flex"} justifyContent="center" alignItems={"center"} >
        <ListItem pl={4} listStyleType={"none"} ><Link _hover={{textDecoration:"none"}}>About</Link></ListItem>
        <ListItem pl={4} listStyleType={"none"} ><Link _hover={{textDecoration:"none"}}>Discover</Link></ListItem>
        <ListItem pl={4} listStyleType={"none"} ><Link _hover={{textDecoration:"none"}}>Get Started</Link></ListItem>
      </UnorderedList>
    )
  }

export default MenuResponsive;