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
  Image,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function ResumeScreen({ images }) {
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
          Download CV
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
          <ModalHeader>Resumé</ModalHeader>
          <ModalCloseButton _focus={{ boxShadow: "none" }} />
          <ModalBody>
            <Image src="/images/resume.png" />
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

export default ResumeScreen;
