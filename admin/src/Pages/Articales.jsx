import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Articales = () => {
  const [articales, setArticales] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [slug, setSlug] = useState("");
  const [refetch, setRefetch] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  // Fetching articales
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/articales`)
      .then((response) => response.json())
      .then((data) => {
        setArticales(data.articales);
        setLoading(false);
      });
  }, [refetch]);

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
            All Articles
          </Heading>

          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color={"red.600"}>Delete Article</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                The article will be deleted permenantly.This action can't be
                reversed!
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="green" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  variant="ghost"
                  colorScheme={"red"}
                  onClick={async () => {
                    const response = await fetch(
                      `${process.env.REACT_APP_API_BASE_URL}/api/articale/delete/${slug}`
                    );

                    const responseData = await response.json();
                    if (responseData.success) {
                      toast({
                        title: "Deleted successfully!",
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
                  }}
                >
                  Proceed
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {articales.map((articale) => (
              <GridItem>
                <Box
                  maxW={"445px"}
                  w={"full"}
                  bg={"white"}
                  boxShadow={"md"}
                  rounded={"md"}
                  p={6}
                  overflow={"hidden"}
                  minHeight={"450px"}
                >
                  <Box
                    h={"210px"}
                    bg={"gray.100"}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={"relative"}
                  >
                    <Image
                      src={articale.banner_url}
                      layout={"fill"}
                      width="100%"
                      height="210px"
                      objectFit="cover"
                    />
                  </Box>
                  <Stack direction={"row"} gap="170px" marginY={"10px"}>
                    <Text
                      color={"green.500"}
                      textTransform={"uppercase"}
                      fontWeight={800}
                      fontSize={"sm"}
                      letterSpacing={1.1}
                    >
                      {articale.type === "Articale" ? "Article" : articale.type}
                    </Text>
                    <Text color={"green.500"} fontWeight="bold">
                      {format(new Date(articale.updatedAt), "MMMM dd, yyyy")}
                    </Text>
                  </Stack>
                  <Heading
                    color={"gray.700"}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                    marginBottom="15px"
                    textAlign={"center"}
                  >
                    {articale.title}
                  </Heading>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    gap={"10px"}
                  >
                    <Button
                      width="150px"
                      background="#604945"
                      textColor="#fff"
                      _hover={{
                        background: "#05040D",
                      }}
                      _active={{
                        bg: "#604945",
                      }}
                      onClick={() => {
                        navigate(`/edit-article/${articale.slug}`);
                      }}
                    >
                      Edit
                    </Button>
                    {articale.privacy === "Private" && (
                      <Button
                        width="150px"
                        background="#84904B"
                        textColor="#fff"
                        _hover={{
                          background: "#05040D",
                        }}
                        _active={{
                          bg: "#84904B",
                        }}
                        onClick={async () => {
                          const response = await fetch(
                            `${process.env.REACT_APP_API_BASE_URL}/api/articale/update/${articale.slug}`,
                            {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ privacy: "Public" }),
                            }
                          );

                          const responseData = await response.json();
                          if (responseData.success) {
                            toast({
                              title: "Published successfully!",
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
                        Publish
                      </Button>
                    )}
                    {articale.privacy === "Public" && (
                      <Button
                        width="150px"
                        background="#05040D"
                        textColor="#fff"
                        _hover={{
                          background: "#84904B",
                        }}
                        _active={{
                          bg: "#05040D",
                        }}
                        onClick={async () => {
                          const response = await fetch(
                            `${process.env.REACT_APP_API_BASE_URL}/api/articale/update/${articale.slug}`,
                            {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ privacy: "Private" }),
                            }
                          );

                          const responseData = await response.json();
                          if (responseData.success) {
                            toast({
                              title: "Hidden successfully!",
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
                        Hide
                      </Button>
                    )}
                    <Button
                      width="150px"
                      background="red.600"
                      textColor="#fff"
                      _hover={{
                        background: "red.700",
                      }}
                      _active={{
                        bg: "red.700",
                      }}
                      onClick={() => {
                        setSlug(articale.slug);
                        onOpen();
                      }}
                    >
                      Delete
                    </Button>
                  </Box>
                  <Button
                    width="100%"
                    marginTop={"10px"}
                    background="#05040D"
                    textColor="#fff"
                    _hover={{
                      background: "#84904B",
                    }}
                    _active={{
                      bg: "#05040D",
                    }}
                    onClick={() => {
                      navigator.clipboard.writeText(articale.slug);
                      toast({
                        title: "Copied to clipboard!",
                        status: "success",
                        isClosable: true,
                        position: "top",
                        duration: 2000,
                      });
                    }}
                  >
                    Copy Article Slug
                  </Button>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Articales;
