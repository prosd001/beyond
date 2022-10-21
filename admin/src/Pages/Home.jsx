import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import exportFromJSON from "export-from-json";
import { format } from "date-fns";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [newWaitings, setNewWaitings] = useState([]);
  const [archivedWaitings, setArchivedWaitings] = useState([]);
  const [waitings, setWaitings] = useState([]);
  const [refetch, setRefetch] = useState(false);

  // Delete modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deletableId, setDeletableId] = useState("");
  const [deleteA, setDeleteA] = useState(false);

  const toast = useToast();

  // Fetching waitings
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/contacts`)
      .then((response) => response.json())
      .then((data) => {
        setWaitings(data.contacts);
      });
  }, [refetch]);

  // Fetching new waitings
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/new-contacts`)
      .then((response) => response.json())
      .then((data) => {
        setNewWaitings(data.newContacts);
      });
  }, [refetch]);

  // Fetching archived waitings
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/archived-contacts`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setArchivedWaitings(data.contacts);
      });
  }, [refetch]);

  const handleArchiveAll = async () => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/contacts/archive-all`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        toast({
          title: "All records archived!",
          status: "success",
          isClosable: true,
          position: "top",
          duration: 2000,
        });
        setRefetch((prev) => !prev);
      });
  };

  const handleDeleteAll = async () => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/contacts/remove-all`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        toast({
          title: "All records deleted!",
          status: "success",
          isClosable: true,
          position: "top",
          duration: 2000,
        });
        setRefetch((prev) => !prev);
        onClose();
      });
  };

  return (
    <Container width="100vw" maxWidth="1500px">
      {loading && (
        <Center>
          <Box>
            <Spinner size="xl" marginTop="100px" />
          </Box>
        </Center>
      )}

      {!loading && (
        <>
          {/* Individual delete */}
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color={"red.600"}>
                {deleteA ? "Delete All Records" : "Delete Record"}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {deleteA
                  ? "All the records will be deleted permenantly.This action can't be reversed!"
                  : "The record will be deleted permenantly.This action can't be reversed!"}
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="green" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  variant="ghost"
                  colorScheme={"red"}
                  onClick={async () => {
                    if (!deleteA) {
                      setLoading(true);
                      const response = await fetch(
                        `${process.env.REACT_APP_API_BASE_URL}/api/contacts/remove-contact`,
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            id: deletableId,
                          }),
                        }
                      );

                      const responseData = await response.json();
                      if (responseData.success) {
                        setLoading(false);
                        toast({
                          title: "Removed successfully!",
                          status: "success",
                          isClosable: true,
                          position: "top",
                          duration: 2000,
                        });
                        setRefetch((prev) => !prev);
                      } else {
                        setLoading(false);
                        toast({
                          title: "Something went wrong!",
                          status: "error",
                          isClosable: true,
                          position: "top",
                          duration: 2000,
                        });
                      }

                      onClose();
                    } else {
                      handleDeleteAll();
                    }
                  }}
                >
                  Proceed
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* Individual delete */}

          <Heading
            as="h1"
            size="xl"
            textAlign="center"
            mt="20px"
            mb="30px"
            color="#604945"
          >
            CONTACT LIST
          </Heading>
          <Box bgColor={"white"} py={"15px"}>
            <Box>
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                marginTop={"20px"}
              >
                <Button
                  variant={"outline"}
                  colorScheme={"yellow"}
                  onClick={handleArchiveAll}
                >
                  Archive All
                </Button>
                <Button
                  variant={"outline"}
                  colorScheme={"green"}
                  onClick={() => {
                    exportFromJSON({
                      data: waitings,
                      fileName: "list",
                      exportType: exportFromJSON.types.xls,
                    });
                  }}
                >
                  Export All Records
                </Button>
                <Button
                  variant={"outline"}
                  colorScheme={"green"}
                  onClick={() => {
                    exportFromJSON({
                      data: newWaitings,
                      fileName: "new_list",
                      exportType: exportFromJSON.types.xls,
                    });
                  }}
                >
                  Export New Records
                </Button>
                <Button
                  variant={"outline"}
                  colorScheme={"red"}
                  onClick={() => {
                    setDeletableId("");
                    setDeleteA(true);
                    onOpen();
                  }}
                >
                  Delete All
                </Button>
              </Box>
            </Box>

            <Tabs variant="enclosed" marginTop={"50px"} padding="15px">
              <TabList>
                <Tab fontWeight={"bold"} fontSize={"18px"}>
                  New
                </Tab>
                <Tab fontWeight={"bold"} fontSize={"18px"}>
                  All
                </Tab>
                <Tab fontWeight={"bold"} fontSize={"18px"}>
                  Archived
                </Tab>
              </TabList>

              <TabPanels>
                {/* New tab */}
                <TabPanel>
                  {newWaitings.map((waiting) => (
                    <Box
                      boxShadow={"sm"}
                      py={"15px"}
                      px="20px"
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Box>
                        <Text color={"#84904B"} fontWeight="bold">
                          Name: <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {waiting.name}
                            {waiting.repeat && (
                              <Badge colorScheme="green" marginLeft={"5px"}>
                                Repeat
                              </Badge>
                            )}
                          </span>
                        </Text>
                        <Text color={"#84904B"} fontWeight="bold">
                          Subject: <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {waiting.subject}
                          </span>
                        </Text>
                        <Text color={"#84904B"} fontWeight="bold">
                          Message: <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {waiting.message}
                          </span>
                        </Text>
                      </Box>

                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems="center"
                      >
                        <Text color={"#84904B"} fontWeight="bold">
                          Date: <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {format(
                              new Date(waiting.updatedAt),
                              "MMMM dd, yyyy"
                            )}
                          </span>
                        </Text>
                      </Box>

                      <Box
                        display={"flex"}
                        width={"350px"}
                        justifyContent={"center"}
                        gap={"30px"}
                        alignItems="center"
                      >
                        <Text color={"#84904B"} fontWeight="bold">
                          Email:
                          <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {waiting.email}
                          </span>
                        </Text>
                        <Button
                          variant={"outline"}
                          onClick={() => {
                            navigator.clipboard.writeText(waiting.email);
                            toast({
                              title: "Copied to clipboard!",
                              status: "success",
                              isClosable: true,
                              position: "top",
                              duration: 2000,
                            });
                          }}
                        >
                          Copy
                        </Button>
                      </Box>

                      <Box display={"flex"} gap={"30px"}>
                        <Button
                          variant={"outline"}
                          colorScheme={"yellow"}
                          onClick={async () => {
                            setLoading(true);
                            const response = await fetch(
                              `${process.env.REACT_APP_API_BASE_URL}/api/contacts/edit-contact`,
                              {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  id: waiting._id,
                                  data: { archived: true },
                                }),
                              }
                            );

                            const responseData = await response.json();
                            if (responseData.success) {
                              setLoading(false);
                              toast({
                                title: "Updated successfully!",
                                status: "success",
                                isClosable: true,
                                position: "top",
                                duration: 2000,
                              });
                              setRefetch((prev) => !prev);
                            } else {
                              setLoading(false);
                              toast({
                                title: "Something went wrong!",
                                status: "error",
                                isClosable: true,
                                position: "top",
                                duration: 2000,
                              });
                            }
                          }}
                        >
                          Archive
                        </Button>
                        <Button
                          variant={"outline"}
                          colorScheme={"red"}
                          onClick={() => {
                            setDeletableId(waiting._id);
                            setDeleteA(false);
                            onOpen();
                          }}
                        >
                          Delete
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </TabPanel>

                {/* All tab */}
                <TabPanel>
                  {waitings.map((waiting) => (
                    <Box
                      boxShadow={"sm"}
                      py={"15px"}
                      px="20px"
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Box>
                        <Text color={"#84904B"} fontWeight="bold">
                          Name: <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {waiting.name}
                            {waiting.repeat && (
                              <Badge colorScheme="green" marginLeft={"5px"}>
                                Repeat
                              </Badge>
                            )}
                          </span>
                        </Text>
                        <Text color={"#84904B"} fontWeight="bold">
                          Subject: <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {waiting.subject}
                          </span>
                        </Text>
                        <Text color={"#84904B"} fontWeight="bold">
                          Message: <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {waiting.message}
                          </span>
                        </Text>
                      </Box>

                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems="center"
                      >
                        <Text color={"#84904B"} fontWeight="bold">
                          Date: <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {format(
                              new Date(waiting.updatedAt),
                              "MMMM dd, yyyy"
                            )}
                          </span>
                        </Text>
                      </Box>

                      <Box
                        display={"flex"}
                        width={"350px"}
                        justifyContent={"center"}
                        gap={"30px"}
                        alignItems="center"
                      >
                        <Text color={"#84904B"} fontWeight="bold">
                          Email:
                          <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {waiting.email}
                          </span>
                        </Text>
                        <Button
                          variant={"outline"}
                          onClick={() => {
                            navigator.clipboard.writeText(waiting.email);
                            toast({
                              title: "Copied to clipboard!",
                              status: "success",
                              isClosable: true,
                              position: "top",
                              duration: 2000,
                            });
                          }}
                        >
                          Copy
                        </Button>
                      </Box>

                      <Box display={"flex"} gap={"30px"}>
                        <Button
                          variant={"outline"}
                          colorScheme={"yellow"}
                          onClick={async () => {
                            setLoading(true);
                            const response = await fetch(
                              `${process.env.REACT_APP_API_BASE_URL}/api/contacts/edit-contact`,
                              {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  id: waiting._id,
                                  data: { archived: true },
                                }),
                              }
                            );

                            const responseData = await response.json();
                            if (responseData.success) {
                              setLoading(false);
                              toast({
                                title: "Updated successfully!",
                                status: "success",
                                isClosable: true,
                                position: "top",
                                duration: 2000,
                              });
                              setRefetch((prev) => !prev);
                            } else {
                              setLoading(false);
                              toast({
                                title: "Something went wrong!",
                                status: "error",
                                isClosable: true,
                                position: "top",
                                duration: 2000,
                              });
                            }
                          }}
                        >
                          Archive
                        </Button>
                        <Button
                          variant={"outline"}
                          colorScheme={"red"}
                          onClick={() => {
                            setDeletableId(waiting._id);
                            setDeleteA(false);
                            onOpen();
                          }}
                        >
                          Delete
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </TabPanel>

                <TabPanel>
                  {archivedWaitings.map((waiting) => (
                    <Box
                      boxShadow={"sm"}
                      py={"15px"}
                      px="20px"
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Box>
                        <Text color={"#84904B"} fontWeight="bold">
                          Name: <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {waiting.name}
                          </span>
                        </Text>
                        <Text color={"#84904B"} fontWeight="bold">
                          Subject: <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {waiting.subject}
                          </span>
                        </Text>
                        <Text color={"#84904B"} fontWeight="bold">
                          Message: <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {waiting.message}
                          </span>
                        </Text>
                      </Box>

                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems="center"
                      >
                        <Text color={"#84904B"} fontWeight="bold">
                          Date: <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {format(
                              new Date(waiting.updatedAt),
                              "MMMM dd, yyyy"
                            )}
                          </span>
                        </Text>
                      </Box>

                      <Box
                        display={"flex"}
                        width={"350px"}
                        justifyContent={"center"}
                        gap={"30px"}
                        alignItems="center"
                      >
                        <Text color={"#84904B"} fontWeight="bold">
                          Email:
                          <br />
                          <span
                            style={{
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            {waiting.email}
                          </span>
                        </Text>
                        <Button
                          variant={"outline"}
                          onClick={() => {
                            navigator.clipboard.writeText(waiting.email);
                            toast({
                              title: "Copied to clipboard!",
                              status: "success",
                              isClosable: true,
                              position: "top",
                              duration: 2000,
                            });
                          }}
                        >
                          Copy
                        </Button>
                      </Box>
                      <Box display={"flex"} gap={"30px"}>
                        <Button
                          variant={"outline"}
                          colorScheme={"red"}
                          onClick={() => {
                            setDeletableId(waiting._id);
                            setDeleteA(false);
                            onOpen();
                          }}
                        >
                          Delete
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Home;
