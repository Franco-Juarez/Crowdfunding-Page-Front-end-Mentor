import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Text, useDisclosure, Card, Heading, CardBody, Radio, RadioGroup, CardFooter, CardHeader, Flex, Stat, StatNumber, StatHelpText, Divider, ModalCloseButton } from "@chakra-ui/react";
import ConfirmModal from "./confirmModal";
import PriceInput from "./priceInput";

function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button _hover={{bg:"green.600"}} px={8} py={6} borderRadius={30} ml={0} colorScheme='green' fontSize={"md"}  onClick={onOpen}>Back this proyect</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent py={4} mx={6}>
            <ModalHeader>Back this project</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text pb={4}>
                Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
              </Text>
              <RadioGroup>
                <Card cursor={"pointer"} mb={2} border={2} borderStyle={"solid"} borderColor={"transparent"} _hover={{ borderColor: "green.400"}}>
                  <CardHeader display={"flex"} alignItems={"center"}>
                    <Radio colorScheme={"green"} mr={4} value={"1"}/>
                    <Heading fontWeight={"bold"} fontSize={"md"}>Pledge with no reward</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      Choose to support us without a reward if you simply believe in our project. As a backer, 
                      you will be signed up to receive product updates via email.
                    </Text>
                  </CardBody>
                </Card>
                <Card cursor={"pointer"} mb={2} border={2} borderStyle={"solid"} borderColor={"transparent"} _hover={{ borderColor: "green.400"}}>
                  <CardHeader display={"flex"} alignItems={"center"}>
                    <Radio colorScheme={"green"} mr={4} value={"2"} />
                    <Flex flexDirection={"column"}>
                      <Heading fontWeight={"bold"} fontSize={"md"}>Bamboo Stand</Heading>
                      <Text fontWeight={"bold"} color={"green.400"}>Pledge $25 or more</Text>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                      you’ll be added to a special Backer member list.
                    </Text>
                    <Stat> 
                      <Flex display={"flex"} alignItems={"center"}>
                        <StatNumber px={0} py={2}>
                          101
                        </StatNumber>
                        <StatHelpText p={2} m={0}>
                          left
                        </StatHelpText>
                      </Flex>
                    </Stat>
                  </CardBody>
                  <Divider borderColor={"black"} opacity={.2} mb={4} />
                  <Flex flexDirection={"column"}>
                    <Heading opacity={.5} textAlign={"center"} fontWeight={"normal"} fontSize={"md"}>Enter your pledge</Heading>
                    <CardFooter alignItems={"center"}>
                      <PriceInput/>
                      <ConfirmModal/>
                    </CardFooter>
                  </Flex>
                </Card>
                <Card cursor={"pointer"} mb={2} border={2} borderStyle={"solid"} borderColor={"transparent"} _hover={{ borderColor: "green.400"}}>
                  <CardHeader display={"flex"} alignItems={"center"}>
                    <Radio colorScheme={"green"} mr={4} value={"3"}/>
                    <Flex flexDirection={"column"}>
                      <Heading fontWeight={"bold"} fontSize={"md"}>Black Edition Stand</Heading>
                      <Text fontWeight={"bold"} color={"green.400"}>Pledge $75 or more</Text>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                      member list. Shipping is included.
                    </Text>
                    <Stat> 
                      <Flex display={"flex"} alignItems={"center"}>
                        <StatNumber px={0} py={2}>
                          64
                        </StatNumber>
                        <StatHelpText p={2} m={0}>
                          left
                        </StatHelpText>
                      </Flex>
                    </Stat>
                  </CardBody>
                    <CardFooter>
                      <ConfirmModal />
                    </CardFooter>
                </Card>
                <Card opacity={.5} mb={2} border={2} borderStyle={"solid"} borderColor={"transparent"} _hover={{ borderColor: "green.400"}}>
                  <CardHeader display={"flex"} alignItems={"center"}>
                    <Radio isDisabled={true} mr={4} value={"4"}/>
                    <Flex flexDirection={"column"}>
                      <Heading fontWeight={"bold"} fontSize={"md"}>Mahogany Special Edition</Heading>
                      <Text fontWeight={"bold"} color={"green.400"}>Pledge $200 or more</Text>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                      to our Backer member list. Shipping is included.
                    </Text>
                    <Stat> 
                      <Flex display={"flex"} alignItems={"center"}>
                        <StatNumber px={0} py={2}>
                          0
                        </StatNumber>
                        <StatHelpText p={2} m={0}>
                          left
                        </StatHelpText>
                      </Flex>
                    </Stat>
                  </CardBody>
                    <CardFooter>
                      <ConfirmModal />
                    </CardFooter>
                </Card>
              </RadioGroup>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default BasicUsage;