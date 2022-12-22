import { Card, CardHeader, CardBody, Text, CardFooter, Heading, Box, Image, Progress, Stat, StatNumber, StatHelpText, VStack, Flex} from "@chakra-ui/react";
import ProyectModal from "./proyectModal";
import logoMastercraft from "../images/logo-mastercraft.svg"
import Bookmark from "./bookmark";
import { useState } from "react";

const FrontCard = () => {

  const [state, setState] = useState(false);

  return (
    <VStack mx={4}>
      <Card align='center' mt="-12" zIndex={50} bg="white" 
      width={{
        base: "100%",
        md: "50%"
      }}
      >
        <Box mt={-6}>
          <Image src={logoMastercraft} alt='Mastercraft icon' />
        </Box>
        <CardHeader pb={0}>
          <Heading textAlign={"center"} size='md'>Mastercraft Bamboo Monitor Riser</Heading>
        </CardHeader>
        <CardBody>
          <Text textAlign={"center"}>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</Text>
        </CardBody>
        <CardFooter width={"full"} alignItems={"center"} justifyContent="space-between">
          <ProyectModal />
          <Box as="button" onClick={() => setState(!state)} cursor={"pointer"} display={"flex"} alignItems={"center"}>
            <Bookmark  circleFill={state===false ? "#2F2F2F" : "#137A73"} pathFill={state===false ? "#B1B1B1" : "#FFFFFF"} />
            <Text color={state===false ? "blackAlpha" : "#137A73"} display={{base: "none", xl:"block"}} borderRadius={30} py={4} pr={6} pl={12} zIndex={-10} position={"relative"} left={-10} backgroundColor={"blackAlpha.200"} fontWeight={"bold"}>Bookmark</Text>
          </Box>
        </CardFooter>
      </Card>
    </VStack>
  )
}


const CountCard = () => {
  return (
    <VStack mt={4} mx={4}>
        <Card p={8}
        w={{
          base:"100%",
          md:"50%"
        }}>
          <Flex
          flexDirection={{
          base: "column",
          md:"row"
          }}
          justifyContent={{
            base:"center",
            md:"space-between"
          }}>
            <Stat my={4} borderRight={{base:"0", md:"1px"}} borderBottom={{base:"1px", md:"0"}} borderColor={{base: "blackAlpha.400", md:"blackAlpha.400"}}>
                <StatNumber fontWeight={"bold"} textAlign={"center"}>$89,914</StatNumber>
                <StatHelpText textAlign={"center"}>of $100.000 backed</StatHelpText>
            </Stat>
            <Stat my={4} borderRight={{base:"0", md:"1px"}} borderBottom={{base:"1px", md:"0"}} borderColor={{base: "blackAlpha.400", md:"blackAlpha.400"}}>
              <StatNumber fontWeight={"bold"} textAlign={"center"}>$5,007</StatNumber>
              <StatHelpText textAlign={"center"}>total backers</StatHelpText>
            </Stat>
            <Stat my={4}>
              <StatNumber fontWeight={"bold"} textAlign={"center"}>56</StatNumber>
              <StatHelpText textAlign={"center"}>days left</StatHelpText>
            </Stat>
          </Flex>
          <Progress colorScheme='green' borderRadius={10} value={80} />
        </Card>
    </VStack>
  )
}

export {FrontCard, CountCard};