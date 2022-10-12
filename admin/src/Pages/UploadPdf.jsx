import { Box, Button, Center, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const UploadPdf = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [url, setUrl] = useState("");

  // Instances
  const toast = useToast();

  // Uploading the pdf
  const handleUpload = async () => {
    setLoading(true);
    if (acceptedFiles.length !== 0) {
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);

      const response = await fetch(
        `${process.env.REACT_APP_RESOURCES_BASE_URL}/actions/add-pdf`,
        {
          method: "POST",
          body: formData,
        }
      );

      const json = await response.json();
      if (json.success) {
        setLoading(false);
        setUrl(json.data.url);
        setSuccess(true);
        toast({
          title: "Uploaded successfully!",
          status: "success",
          isClosable: true,
          position: "top",
          duration: 2000,
        });
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
    } else {
      toast({
        title: "Please select a file!",
        status: "error",
        isClosable: true,
        position: "top",
        duration: 2000,
      });
      setLoading(false);
    }
  };

  return (
    <Center marginTop="50px">
      <Box>
        <Box
          width="600px"
          height="300px"
          {...getRootProps()}
          border="dashed"
          borderColor={`${acceptedFiles.length !== 0 ? "#84904B" : "#604945"}`}
        >
          <Center height="90%">
            <Input {...getInputProps()} />
            <Box>
              {acceptedFiles.length !== 0 && (
                <Text
                  marginTop="20px"
                  fontWeight="bold"
                  color="#84904B"
                  textAlign="center"
                >
                  {acceptedFiles[0]?.name}
                </Text>
              )}
              {acceptedFiles.length === 0 && (
                <Text>Drag 'n' drop a pdf here, or click to select</Text>
              )}
            </Box>
          </Center>
        </Box>
        <Center marginTop="50px">
          {success && (
            <Box gap="50px" display="flex">
              <Button
                width="50%"
                background="#84904B"
                textColor="#fff"
                _hover={{
                  background: "#05040D",
                }}
                _active={{
                  bg: "#84904B",
                }}
                onClick={() => {
                  window.open(url, "_blank");
                }}
              >
                View PDF
              </Button>
              <Button
                width="50%"
                background="#84904B"
                textColor="#fff"
                _hover={{
                  background: "#05040D",
                }}
                _active={{
                  bg: "#84904B",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(url);
                  toast({
                    title: "Copied to clipboard!",
                    status: "success",
                    isClosable: true,
                    position: "top",
                    duration: 2000,
                  });
                }}
              >
                Copy Url
              </Button>
            </Box>
          )}

          {!success && (
            <Button
              width="50%"
              background="#604945"
              textColor="#fff"
              _hover={{
                background: "#05040D",
              }}
              _active={{
                bg: "#604945",
              }}
              isLoading={loading}
              loadingText="Uploading..."
              onClick={handleUpload}
            >
              Upload PDF
            </Button>
          )}
        </Center>
      </Box>
    </Center>
  );
};

export default UploadPdf;
