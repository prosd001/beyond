import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Input,
  Spinner,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Showcase = () => {
  const [showcase, setShowcase] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popular, setPopular] = useState("");
  const [fb, setFb] = useState("");
  const [fmone, setFmone] = useState("");
  const [fmtwo, setFmtwo] = useState("");
  const [fsone, setFsone] = useState("");
  const [fstwo, setFstwo] = useState("");
  const [fsthree, setFsthree] = useState("");

  const toast = useToast();

  // Fetching showcase
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/showcase`)
      .then((response) => response.json())
      .then((data) => {
        setShowcase(data.showcase);
        setLoading(false);
      });
  }, []);

  const handleAddShocase = async () => {
    setLoading(true);

    if (!popular || !fb || !fmone || !fmtwo || !fsone || !fstwo || !fsthree) {
      toast({
        title: "All fields are required!",
        status: "error",
        isClosable: true,
        position: "top",
        duration: 2000,
      });
      setLoading(false);
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/api/add-showcase`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug_one: popular,
          slug_two: fb,
          slug_three: fmone,
          slug_four: fmtwo,
          slug_five: fsone,
          slug_six: fstwo,
          slug_seven: fsthree,
        }),
      }
    );

    const responseData = await response.json();
    if (responseData.success) {
      setLoading(false);
      toast({
        title: "Created successfully!",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 2000,
      });
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
  };

  const handleEditShocase = async () => {
    setLoading(true);

    let data = {};

    data.id = showcase._id;

    if (popular) {
      data.slug_one = popular;
    }

    if (fb) {
      data.slug_two = fb;
    }

    if (fmone) {
      data.slug_three = fmone;
    }

    if (fmtwo) {
      data.slug_four = fmtwo;
    }

    if (fsone) {
      data.slug_five = fsone;
    }

    if (fstwo) {
      data.slug_six = fstwo;
    }

    if (fsthree) {
      data.slug_seven = fsthree;
    }

    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/api/update-showcase`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();
    if (responseData.success) {
      setLoading(false);
      toast({
        title: "Saved successfully!",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 2000,
      });
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
  };

  return (
    <Container width="100vw" maxWidth="1500px">
      <Center>
        {loading && (
          <Box>
            <Spinner size="xl" marginTop="100px" />
          </Box>
        )}
        {!loading && (
          <Box>
            {showcase.length !== 0 && (
              <Box
                bg="white"
                p="20px"
                width="full"
                minWidth="700px"
                marginY="50px"
              >
                <Table
                  variant="striped"
                  colorScheme="gray"
                  width="full"
                  fontSize="18px"
                >
                  <TableCaption fontSize="20px" color="#84904B">
                    Showcase Content Slugs
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th fontSize="20px" color="#84904B">
                        Type
                      </Th>
                      <Th fontSize="20px" color="#84904B">
                        Slug
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Popular</Td>
                      <Td>{showcase[0].popular.slug}</Td>
                    </Tr>
                    <Tr>
                      <Td>Large</Td>
                      <Td>{showcase[0].featured_big.slug}</Td>
                    </Tr>
                    <Tr>
                      <Td>Medium first</Td>
                      <Td>{showcase[0].featured_small_one.slug}</Td>
                    </Tr>
                    <Tr>
                      <Td>Medium second</Td>
                      <Td>{showcase[0].featured_small_two.slug}</Td>
                    </Tr>
                    <Tr>
                      <Td>Small first</Td>
                      <Td>{showcase[0].featured_smallest_one.slug}</Td>
                    </Tr>
                    <Tr>
                      <Td>Small second</Td>
                      <Td>{showcase[0].featured_smallest_two.slug}</Td>
                    </Tr>
                    <Tr>
                      <Td>Small third</Td>
                      <Td>{showcase[0].featured_smallest_three.slug}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            )}
            <Box>
              <Heading
                as="h1"
                size="xl"
                textAlign="center"
                mt="20px"
                mb="30px"
                color="#604945"
              >
                {showcase.length === 0 ? "ADD SHOWCASE" : "EDIT SHOWCASE"}
              </Heading>

              <Text
                fontSize="2xl"
                color="#604945"
                marginY="10px"
                fontWeight="bold"
              >
                Popular:
              </Text>
              <Input
                placeholder="Insert popular articale slug"
                textColor="#05040D"
                focusBorderColor="#604945"
                _placeholder={{
                  color: "#604945",
                  opacity: "0.5",
                }}
                value={popular}
                onChange={(e) => {
                  setPopular(e.target.value.trim());
                }}
                borderRadius="0"
                marginBottom="15px"
                bg="white"
              />

              <Text
                fontSize="2xl"
                color="#604945"
                marginY="10px"
                fontWeight="bold"
              >
                Large:
              </Text>
              <Input
                placeholder="Insert large articale slug"
                textColor="#05040D"
                focusBorderColor="#604945"
                _placeholder={{
                  color: "#604945",
                  opacity: "0.5",
                }}
                value={fb}
                onChange={(e) => {
                  setFb(e.target.value.trim());
                }}
                borderRadius="0"
                marginBottom="15px"
                bg="white"
              />

              <Text
                fontSize="2xl"
                color="#604945"
                marginY="10px"
                fontWeight="bold"
              >
                Medium first:
              </Text>
              <Input
                placeholder="Insert medium first articale slug"
                textColor="#05040D"
                focusBorderColor="#604945"
                _placeholder={{
                  color: "#604945",
                  opacity: "0.5",
                }}
                value={fmone}
                onChange={(e) => {
                  setFmone(e.target.value.trim());
                }}
                borderRadius="0"
                marginBottom="15px"
                bg="white"
              />

              <Text
                fontSize="2xl"
                color="#604945"
                marginY="10px"
                fontWeight="bold"
              >
                Medium second:
              </Text>
              <Input
                placeholder="Insert medium second articale slug"
                textColor="#05040D"
                focusBorderColor="#604945"
                _placeholder={{
                  color: "#604945",
                  opacity: "0.5",
                }}
                value={fmtwo}
                onChange={(e) => {
                  setFmtwo(e.target.value.trim());
                }}
                borderRadius="0"
                marginBottom="15px"
                bg="white"
              />

              <Text
                fontSize="2xl"
                color="#604945"
                marginY="10px"
                fontWeight="bold"
              >
                Small first:
              </Text>
              <Input
                placeholder="Insert small first articale slug"
                textColor="#05040D"
                focusBorderColor="#604945"
                _placeholder={{
                  color: "#604945",
                  opacity: "0.5",
                }}
                value={fsone}
                onChange={(e) => {
                  setFsone(e.target.value.trim());
                }}
                borderRadius="0"
                marginBottom="15px"
                bg="white"
              />

              <Text
                fontSize="2xl"
                color="#604945"
                marginY="10px"
                fontWeight="bold"
              >
                Small second:
              </Text>
              <Input
                placeholder="Insert small second articale slug"
                textColor="#05040D"
                focusBorderColor="#604945"
                _placeholder={{
                  color: "#604945",
                  opacity: "0.5",
                }}
                value={fstwo}
                onChange={(e) => {
                  setFstwo(e.target.value.trim());
                }}
                borderRadius="0"
                marginBottom="15px"
                bg="white"
              />

              <Text
                fontSize="2xl"
                color="#604945"
                marginY="10px"
                fontWeight="bold"
              >
                Small third:
              </Text>
              <Input
                placeholder="Insert small third articale slug"
                textColor="#05040D"
                focusBorderColor="#604945"
                _placeholder={{
                  color: "#604945",
                  opacity: "0.5",
                }}
                value={fsthree}
                onChange={(e) => {
                  setFsthree(e.target.value.trim());
                }}
                borderRadius="0"
                marginBottom="15px"
                bg="white"
              />

              {showcase.length === 0 && (
                <Button
                  paddingY="25px"
                  width="60%"
                  margin="auto"
                  textAlign="center"
                  marginLeft="20%"
                  marginTop="50px"
                  marginBottom="100px"
                  background="#604945"
                  textColor="#fff"
                  _hover={{
                    background: "#05040D",
                  }}
                  _active={{
                    bg: "#604945",
                  }}
                  isLoading={loading}
                  onClick={handleAddShocase}
                  loadingText="Adding..."
                >
                  Add
                </Button>
              )}
              {showcase.length !== 0 && (
                <Button
                  paddingY="25px"
                  width="60%"
                  margin="auto"
                  textAlign="center"
                  marginLeft="20%"
                  marginTop="50px"
                  marginBottom="100px"
                  background="#604945"
                  textColor="#fff"
                  _hover={{
                    background: "#05040D",
                  }}
                  _active={{
                    bg: "#604945",
                  }}
                  isLoading={loading}
                  onClick={handleEditShocase}
                  loadingText="Saving..."
                >
                  Edit
                </Button>
              )}
            </Box>
          </Box>
        )}
      </Center>
    </Container>
  );
};

export default Showcase;
