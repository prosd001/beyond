import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Input,
  Select,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RichEditor from "../Components/RichEditorMod";

const EditArticale = () => {
  // Editor content
  const [content, setContent] = useState("");
  // Local states
  const [lang, setLang] = useState("FR");
  const [type, setType] = useState("Articale");
  const [privacy, setPrivacy] = useState("Private");
  const [bannerUrl, setBannerUrl] = useState("");
  const [guideUrl, setGuideUrl] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  // Instances
  const navigate = useNavigate();
  const params = useParams();
  const toast = useToast();

  // Fetching articales
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/articale/${params.slug}`)
      .then((response) => response.json())
      .then((data) => {
        setContent(data.content[0].content);
        setTitle(data.articale[0].title);
        setSlug(data.articale[0].slug);
        setBannerUrl(data.articale[0].banner_url);
        setType(data.articale[0].type);
        setGuideUrl(data.articale[0].guide_url);
        setPrivacy(data.articale[0].privacy);
        setLang(data.articale[0].lang);
        setPageLoading(false);
      });
  }, [params.slug]);

  // Savung the articale
  const handleCreateArticale = async () => {
    setLoading(true);
    toast({
      title: "Please wait.It may take a while!",
      status: "info",
      isClosable: true,
      position: "top",
      duration: 2000,
    });

    const articale = {
      slug,
      title,
      banner_url: bannerUrl,
      type,
      guide_url: guideUrl,
      privacy,
      content,
      lang,
    };

    // if (title) {
    //   articale.title = title;
    // }
    // if (bannerUrl) {
    //   articale.banner_url = bannerUrl;
    // }
    // if (type) {
    //   articale.type = type;
    // }
    // if (guideUrl) {
    //   articale.guide_url = guideUrl;
    // }
    // if (privacy) {
    //   articale.privacy = privacy;
    // }

    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/api/articale/update/${params.slug}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(articale),
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
      {pageLoading && (
        <Center>
          <Box>
            <Spinner size="xl" marginTop="100px" />
          </Box>
        </Center>
      )}

      {!pageLoading && (
        <>
          <Heading
            as="h1"
            size="xl"
            textAlign="center"
            mt="20px"
            mb="30px"
            color="#604945"
          >
            EDIT ARTICLE
          </Heading>
          <Text fontSize="2xl" color="#604945" marginY="10px" fontWeight="bold">
            Slug:
          </Text>
          <Input
            placeholder="Insert slug( unique, content relevent & '-' separated words for SEO )"
            textColor="#05040D"
            focusBorderColor="#604945"
            _placeholder={{
              color: "#604945",
              opacity: "0.5",
            }}
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value.trim());
            }}
            borderRadius="0"
            marginBottom="25px"
            bg="white"
          />
          <Text fontSize="2xl" color="#604945" marginY="10px" fontWeight="bold">
            Title:
          </Text>
          <Input
            placeholder="Insert title"
            textColor="#05040D"
            focusBorderColor="#604945"
            _placeholder={{
              color: "#604945",
              opacity: "0.5",
            }}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            borderRadius="0"
            marginBottom="25px"
            bg="white"
          />
          <Text fontSize="2xl" color="#604945" marginY="10px" fontWeight="bold">
            Banner URL:
          </Text>
          <Input
            placeholder="Insert banner URL"
            textColor="#05040D"
            focusBorderColor="#604945"
            _placeholder={{
              color: "#604945",
              opacity: "0.5",
            }}
            value={bannerUrl}
            onChange={(e) => {
              setBannerUrl(e.target.value.trim());
            }}
            borderRadius="0"
            marginBottom="25px"
            bg="white"
          />
          <Box display="flex" gap="30px">
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
              onClick={() => {
                navigator.clipboard.readText().then((text) => {
                  setBannerUrl(text.trim());
                });
              }}
            >
              Paste
            </Button>
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
              onClick={() => {
                navigate("/upload-image");
              }}
            >
              Upload Image
            </Button>
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
              onClick={() => {
                navigate("/upload-video");
              }}
            >
              Upload Video
            </Button>
          </Box>
          <Text
            fontSize="2xl"
            color="#604945"
            marginY="10px"
            marginTop="20px"
            fontWeight="bold"
          >
            Type:
          </Text>
          <Select
            variant="filled"
            bgColor="#fff"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="Articale">Article</option>
            <option value="Resource">Resource</option>
          </Select>

          <Text
            fontSize="2xl"
            color="#604945"
            marginY="10px"
            marginTop="20px"
            fontWeight="bold"
          >
            Language:
          </Text>
          <Select
            variant="filled"
            bgColor="#fff"
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
            }}
          >
            <option value="FR">FR</option>
            <option value="EN">EN</option>
            <option value="BOTH">Both</option>
          </Select>

          {type === "Resource" && (
            <>
              <Text
                fontSize="2xl"
                color="#604945"
                marginY="10px"
                marginTop="20px"
                fontWeight="bold"
              >
                Guide Url:
              </Text>
              <Input
                placeholder="Insert guide URL"
                textColor="#05040D"
                focusBorderColor="#604945"
                _placeholder={{
                  color: "#604945",
                  opacity: "0.5",
                }}
                value={guideUrl}
                onChange={(e) => {
                  setGuideUrl(e.target.value.trim());
                }}
                borderRadius="0"
                marginBottom="25px"
                bg="white"
              />
              <Box display="flex" gap="30px">
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
                  onClick={() => {
                    navigator.clipboard.readText().then((text) => {
                      setGuideUrl(text.trim());
                    });
                  }}
                >
                  Paste
                </Button>
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
                  onClick={() => {
                    navigate("/upload-pdf");
                  }}
                >
                  Upload PDF
                </Button>
              </Box>
            </>
          )}
          <Text
            fontSize="2xl"
            color="#604945"
            marginY="10px"
            marginTop="20px"
            fontWeight="bold"
          >
            Privacy:
          </Text>
          <Select
            variant="filled"
            bgColor="#fff"
            value={privacy}
            onChange={(e) => {
              setPrivacy(e.target.value);
            }}
          >
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </Select>
          <Text
            fontSize="2xl"
            color="#604945"
            marginY="10px"
            marginTop="20px"
            fontWeight="bold"
          >
            Content:
          </Text>
          <RichEditor content={content} setContent={setContent} />

          <Box textAlign="center">
            <Button
              paddingY="25px"
              width="60%"
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
              onClick={handleCreateArticale}
              loadingText="Saving..."
            >
              Save Article
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default EditArticale;
