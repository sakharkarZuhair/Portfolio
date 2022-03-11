import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ListItem,
  UnorderedList,
  Tooltip,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function PopUpScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="gray"
        pl="12"
        pr="12"
        onClick={onOpen}
        _hover={{ bg: "yellow.400" }}
      >
        <Tooltip label="tap" aria-label="A tooltip">
          Skills
        </Tooltip>
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My Skills</ModalHeader>
          <ModalCloseButton _focus={{ boxShadow: "none" }} />
          <ModalBody>
            <UnorderedList>
              <ListItem>JavaScript</ListItem>
              <ListItem>ReactJS</ListItem>
              <ListItem>Redux</ListItem>
              <ListItem>nodeJS</ListItem>
              <ListItem>ExpressJS</ListItem>
              <ListItem>MongoDB</ListItem>
            </UnorderedList>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              _focus={{ boxShadow: "none" }}
              colorScheme="gray"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PopUpScreen;
