import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Text, ModalFooter, useDisclosure, Box, Image } from "@chakra-ui/react";
import CheckIcon from "../images/icon-check.svg"

function ConfirmModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button px={8} py={6} borderRadius={30} ml={0} colorScheme='green' fontSize={"md"} onClick={onOpen}>Continue</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent py={4} mx={6}>
          <Box>
            <Image my={0} mx={"auto"} src={CheckIcon} alt='Dan Abramov' />
          </Box>
            <ModalHeader textAlign={"center"} fontWeight={"bold"}>Thanks for your support!</ModalHeader>
            <ModalBody>
              <Text textAlign={"center"} mb='1rem'>
              Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
              </Text>
            </ModalBody>
  
            <ModalFooter>
              <Button _hover={{bg:"green.600"}} px={8} py={6} borderRadius={30} my={0} mx={"auto"} colorScheme='green' fontSize={"md"} onClick={onClose}>
              Got it!
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ConfirmModal;