import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import exportFromJSON from "export-from-json";

const GuideList = () => {
  const [loading, setLoading] = useState(true);
  const [newWaitings, setNewWaitings] = useState([]);
  const [archivedWaitings, setArchivedWaitings] = useState([]);
  const [waitings, setWaitings] = useState([]);
  const [refetch, setRefetch] = useState(false);

  const toast = useToast();

  // Fetching waitings
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/downloads`)
      .then((response) => response.json())
      .then((data) => {
        setWaitings(data.downloads);
      });
  }, [refetch]);

  // Fetching new waitings
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/new-downloads`)
      .then((response) => response.json())
      .then((data) => {
        setNewWaitings(data.newdownloads);
      });
  }, [refetch]);

  // Fetching archived waitings
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/archived-downloads`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setArchivedWaitings(data.downloads);
      });
  }, [refetch]);

  const handleArchiveAll = async () => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/downloads/archive-all`)
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
        console.log(data);
        setRefetch((prev) => !prev);
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
          <Heading
            as="h1"
            size="xl"
            textAlign="center"
            mt="20px"
            mb="30px"
            color="#604945"
          >
            WAITING LIST
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
                      fileName: "waiting_list",
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
                      fileName: "new_waiting_list",
                      exportType: exportFromJSON.types.xls,
                    });
                  }}
                >
                  Export New Records
                </Button>
                <Button variant={"outline"} colorScheme={"red"}>
                  Delete All
                </Button>
              </Box>
            </Box>
            <Tabs variant="enclosed" marginTop={"50px"} padding="15px">
              <TabList>
                <Tab fontWeight={"bold"} fontSize={"18px"}>
                  All
                </Tab>
                <Tab fontWeight={"bold"} fontSize={"18px"}>
                  New
                </Tab>
                <Tab fontWeight={"bold"} fontSize={"18px"}>
                  Archived
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {waitings.map((waiting) => (
                    <Box
                      boxShadow={"sm"}
                      py={"15px"}
                      px="20px"
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
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
                        Downloads: <br />
                        <span
                          style={{
                            color: "black",
                            fontWeight: "500",
                          }}
                        >
                          {waiting.downloaded_resources.map((down) => (
                            <Text>{down}</Text>
                          ))}
                        </span>
                      </Text>
                      <Box
                        display={"flex"}
                        width={"350px"}
                        justifyContent={"center"}
                        gap={"30px"}
                        alignItems="center"
                      >
                        <Text color={"#84904B"} fontWeight="bold">
                          Email: <br />
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
                              `${process.env.REACT_APP_API_BASE_URL}/api/downloads/edit-downloads`,
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
                          onClick={async () => {
                            setLoading(true);
                            const response = await fetch(
                              `${process.env.REACT_APP_API_BASE_URL}/api/downloads/remove-downloads`,
                              {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  id: waiting._id,
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
                          }}
                        >
                          Delete
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </TabPanel>
                <TabPanel>
                  {newWaitings.map((waiting) => (
                    <Box
                      boxShadow={"sm"}
                      py={"15px"}
                      px="20px"
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
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
                              `${process.env.REACT_APP_API_BASE_URL}/api/downloads/edit-downloads`,
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
                          onClick={async () => {
                            setLoading(true);
                            const response = await fetch(
                              `${process.env.REACT_APP_API_BASE_URL}/api/downloads/remove-downloads`,
                              {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  id: waiting._id,
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
                          onClick={async () => {
                            setLoading(true);
                            const response = await fetch(
                              `${process.env.REACT_APP_API_BASE_URL}/api/downloads/remove-downloads`,
                              {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  id: waiting._id,
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

export default GuideList;
