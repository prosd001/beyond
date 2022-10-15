import { useRef, useState } from "react";
import {
  Box,
  Button,
  Center,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { adminAuthState } from "../atoms/authAtom";
import logo from "../assets/logo.png";

const Settings = () => {
  // Global states
  const [adminToken, setAdminToken] = useRecoilState(adminAuthState);

  // Local states
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  // Instances
  const toast = useToast();

  // Refs
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  // Signin/Signup user
  const handleSigninClick = async () => {
    setLoading(true);
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!username || !password) {
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

    if (password.length < 6) {
      toast({
        title: "Password must be at least 6 characters!",
        status: "error",
        isClosable: true,
        position: "top",
        duration: 2000,
      });
      setLoading(false);
      return;
    }

    // Update admin user
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/api/auth/admin/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({ username, password }),
      }
    );

    const responseData = await response.json();

    if (responseData.success) {
      setLoading(false);
      localStorage.removeItem("ADT__BEYOND__WORLDZ");
      setAdminToken(null);
    } else {
      toast({
        title: "Something went wrong!",
        status: "error",
        isClosable: true,
        position: "top",
        duration: 2000,
      });
      setLoading(false);
    }
  };

  return (
    <Center w="100vw" h="100vh">
      <Box
        bg="#fff"
        width="500px"
        height="450px"
        textAlign="center"
        padding="30px"
        boxShadow="lg"
      >
        <Image src={logo} alt="" margin="auto" marginBottom="30px" />
        <Text marginY={"20px"} fontSize={"20px"} fontWeight="bold">
          UPDATE ADMIN PROFILE
        </Text>
        <VStack spacing={4}>
          <Input
            placeholder="Enter username"
            textColor="#05040D"
            focusBorderColor="#604945"
            _placeholder={{
              color: "#604945",
              opacity: "0.5",
              fontFamily: "cursive",
            }}
            borderRadius="0"
            ref={usernameInputRef}
          />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              textColor="#05040D"
              focusBorderColor="#604945"
              _placeholder={{
                color: "#604945",
                opacity: "0.5",
                fontFamily: "cursive",
              }}
              borderRadius="0"
              ref={passwordInputRef}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => setShow(!show)}
                background="#604945"
                textColor="#fff"
                _hover={{
                  background: "#05040D",
                }}
                _active={{
                  bg: "#604945",
                }}
                fontFamily="cursive"
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
        <Button
          width="60%"
          marginTop="50px"
          background="#604945"
          textColor="#fff"
          _hover={{
            background: "#05040D",
          }}
          _active={{
            bg: "#604945",
          }}
          fontFamily="cursive"
          isLoading={loading}
          loadingText="Verifying..."
          onClick={handleSigninClick}
        >
          Update Profile
        </Button>
      </Box>
    </Center>
  );
};

export default Settings;
