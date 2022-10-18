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
  //fr
  const [popular_fr, setPopular_fr] = useState("");

  const [fb, setFb] = useState("");
  //fr
  const [fb_fr, setFb_fr] = useState("");

  const [fmone, setFmone] = useState("");
  //fr
  const [fmone_fr, setFmone_fr] = useState("");

  const [fmtwo, setFmtwo] = useState("");
  //fr
  const [fmtwo_fr, setFmtwo_fr] = useState("");

  const [fsone, setFsone] = useState("");
  //fr
  const [fsone_fr, setFsone_fr] = useState("");

  const [fstwo, setFstwo] = useState("");
  //fr
  const [fstwo_fr, setFstwo_fr] = useState("");

  const [fsthree, setFsthree] = useState("");
  //fr
  const [fsthree_fr, setFsthree_fr] = useState("");

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

    if (
      !popular ||
      !fb ||
      !fmone ||
      !fmtwo ||
      !fsone ||
      !fstwo ||
      !fsthree ||
      !popular_fr ||
      !fb_fr ||
      !fmone_fr ||
      !fmtwo_fr ||
      !fsone_fr ||
      !fstwo_fr ||
      !fsthree_fr
    ) {
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
          slug_one_fr: popular_fr,
          slug_two_fr: fb_fr,
          slug_three_fr: fmone_fr,
          slug_four_fr: fmtwo_fr,
          slug_five_fr: fsone_fr,
          slug_six_fr: fstwo_fr,
          slug_seven_fr: fsthree_fr,
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

    //fr
    if (popular_fr) {
      data.slug_one_fr = popular_fr;
    }

    if (fb) {
      data.slug_two = fb;
    }

    //fr
    if (fb_fr) {
      data.slug_two_fr = fb_fr;
    }

    if (fmone) {
      data.slug_three = fmone;
    }

    //fr
    if (fmone_fr) {
      data.slug_three_fr = fmone_fr;
    }

    if (fmtwo) {
      data.slug_four = fmtwo;
    }

    //fr
    if (fmtwo_fr) {
      data.slug_four_fr = fmtwo_fr;
    }

    if (fsone) {
      data.slug_five = fsone;
    }

    //fr
    if (fsone_fr) {
      data.slug_five_fr = fsone_fr;
    }

    if (fstwo) {
      data.slug_six = fstwo;
    }

    //fr
    if (fstwo_fr) {
      data.slug_six_fr = fstwo_fr;
    }

    if (fsthree) {
      data.slug_seven = fsthree;
    }

    //fr
    if (fsthree_fr) {
      data.slug_seven_fr = fsthree_fr;
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
            <Box
              display={"grid"}
              gridTemplateColumns={"1fr 1fr"}
              gridGap={"10px"}
            >
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
                      Showcase French Content Slugs
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
                        <Td>{showcase[0].popular_fr?.slug}</Td>
                      </Tr>
                      <Tr>
                        <Td>Large</Td>
                        <Td>{showcase[0].featured_big_fr?.slug}</Td>
                      </Tr>
                      <Tr>
                        <Td>Medium first</Td>
                        <Td>{showcase[0].featured_small_one_fr?.slug}</Td>
                      </Tr>
                      <Tr>
                        <Td>Medium second</Td>
                        <Td>{showcase[0].featured_small_two_fr?.slug}</Td>
                      </Tr>
                      <Tr>
                        <Td>Small first</Td>
                        <Td>{showcase[0].featured_smallest_one_fr?.slug}</Td>
                      </Tr>
                      <Tr>
                        <Td>Small second</Td>
                        <Td>{showcase[0].featured_smallest_two_fr?.slug}</Td>
                      </Tr>
                      <Tr>
                        <Td>Small third</Td>
                        <Td>{showcase[0].featured_smallest_three_fr?.slug}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>
              )}
            </Box>
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

              <Box
                display={"grid"}
                gridTemplateColumns={"1fr 1fr"}
                gridGap={"25px"}
              >
                <Box>
                  <Text
                    fontSize="2xl"
                    color="#604945"
                    marginY="10px"
                    fontWeight="bold"
                  >
                    Popular:
                  </Text>
                  <Input
                    placeholder="Insert popular article slug"
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
                    placeholder="Insert large article slug"
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
                    placeholder="Insert medium first article slug"
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
                    placeholder="Insert medium second article slug"
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
                    placeholder="Insert small first article slug"
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
                    placeholder="Insert small second article slug"
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
                    placeholder="Insert small third article slug"
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
                </Box>

                {/* frentch */}
                {/* frentch */}
                {/* frentch */}

                <Box>
                  <Text
                    fontSize="2xl"
                    color="#604945"
                    marginY="10px"
                    fontWeight="bold"
                  >
                    Popular French:
                  </Text>
                  <Input
                    placeholder="Insert french popular article slug"
                    textColor="#05040D"
                    focusBorderColor="#604945"
                    _placeholder={{
                      color: "#604945",
                      opacity: "0.5",
                    }}
                    value={popular_fr}
                    onChange={(e) => {
                      setPopular_fr(e.target.value.trim());
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
                    Large French:
                  </Text>
                  <Input
                    placeholder="Insert french large article slug"
                    textColor="#05040D"
                    focusBorderColor="#604945"
                    _placeholder={{
                      color: "#604945",
                      opacity: "0.5",
                    }}
                    value={fb_fr}
                    onChange={(e) => {
                      setFb_fr(e.target.value.trim());
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
                    Medium first French:
                  </Text>
                  <Input
                    placeholder="Insert french medium first article slug"
                    textColor="#05040D"
                    focusBorderColor="#604945"
                    _placeholder={{
                      color: "#604945",
                      opacity: "0.5",
                    }}
                    value={fmone_fr}
                    onChange={(e) => {
                      setFmone_fr(e.target.value.trim());
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
                    Medium second French:
                  </Text>
                  <Input
                    placeholder="Insert french medium second article slug"
                    textColor="#05040D"
                    focusBorderColor="#604945"
                    _placeholder={{
                      color: "#604945",
                      opacity: "0.5",
                    }}
                    value={fmtwo_fr}
                    onChange={(e) => {
                      setFmtwo_fr(e.target.value.trim());
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
                    Small first French:
                  </Text>
                  <Input
                    placeholder="Insert french small first article slug"
                    textColor="#05040D"
                    focusBorderColor="#604945"
                    _placeholder={{
                      color: "#604945",
                      opacity: "0.5",
                    }}
                    value={fsone_fr}
                    onChange={(e) => {
                      setFsone_fr(e.target.value.trim());
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
                    Small second French:
                  </Text>
                  <Input
                    placeholder="Insert french small second article slug"
                    textColor="#05040D"
                    focusBorderColor="#604945"
                    _placeholder={{
                      color: "#604945",
                      opacity: "0.5",
                    }}
                    value={fstwo_fr}
                    onChange={(e) => {
                      setFstwo_fr(e.target.value.trim());
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
                    Small third French:
                  </Text>
                  <Input
                    placeholder="Insert french small third article slug"
                    textColor="#05040D"
                    focusBorderColor="#604945"
                    _placeholder={{
                      color: "#604945",
                      opacity: "0.5",
                    }}
                    value={fsthree_fr}
                    onChange={(e) => {
                      setFsthree_fr(e.target.value.trim());
                    }}
                    borderRadius="0"
                    marginBottom="15px"
                    bg="white"
                  />
                </Box>
              </Box>

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
