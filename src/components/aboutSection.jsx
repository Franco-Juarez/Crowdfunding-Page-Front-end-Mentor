import { Card, Button, CardHeader, Heading, CardBody, Text, Stat, StatNumber, StatHelpText, Flex, VStack } from "@chakra-ui/react";

const AboutCard = ( {heading, descriptionHeading, text, statNumber, statHelp, btnText, stock} ) => {
  return (
    <Card margin={4} opacity={ stock ? 1 : .5}>
      <CardHeader pb={0} display={"flex"} flexDirection={{
        base:"column",
        md:"row"
      }}
      alignItems={{
        base: "start",
        md: "center"
      }}
      justifyContent={{
        base:"start",
        md: "space-between"
      }}>
        <Heading fontSize={"md"}>{heading}</Heading>
        <Text fontWeight={"bold"} color="green.400" fontSize={"md"}>
          {descriptionHeading}
        </Text>
      </CardHeader>
      <CardBody p={4}>
        <Text fontSize={"sm"}>{text}</Text>
        <Flex py={4}
        alignItems={{
          base:"start",
          md:"center"
        }}
        flexDirection={{
          base:"column",
          md: "row"
          }}>
          <Stat>
            <Flex display={"flex"} alignItems={"center"}>
              <StatNumber px={0} py={2}>
                {statNumber}
              </StatNumber>
              <StatHelpText p={2} m={0}>
                {statHelp}
              </StatHelpText>
            </Flex>
          </Stat>
          <Button _hover={{bg:"green.600"}} bg={"green.400"} color={"white"} borderRadius={20}>{btnText}</Button>
        </Flex>
      </CardBody>
    </Card>
  )
}

const AboutSection = () => {
  return (
  <VStack mx={4}>
    <Card m={4}
    width={{
      base: "100%",
      md: "50%"
    }}>
      <CardHeader>
        <Heading pt={4} fontSize="lg">About this proyect</Heading>
      <CardBody p={0}>
        <Text py={4}>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </Text>
        <Text py={4}>
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
          to allow notepads, pens, and USB sticks to be stored under the stand.
        </Text>
      </CardBody>
      </CardHeader>
      <AboutCard
      heading="Bamboo Stand"
      descriptionHeading="Pledge $25 or more"
      text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
      you’ll be added to a special Backer member list.
      101 left"
      statNumber="101"
      statHelp="left"
      btnText="Select Reward"
      stock={true}
      />
      <AboutCard
      heading="Black Edition Stand"
      descriptionHeading="Pledge $75 or more"
      text="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
      member list. Shipping is included."
      statNumber="64"
      statHelp="left"
      btnText="Select Reward"
      stock={true}
      />
      <AboutCard
      heading="Mahogany Special Edition"
      descriptionHeading="Pledge $200 more"
      text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
      to our Backer member list. Shipping is included."
      statNumber="0"
      statHelp="left"
      btnText="Out of Stock"
      stock={false}
      />
    </Card>
  </VStack>   
  )
}

export default AboutSection;
