"use client"
import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";


export default function NotFound() {
    const router = useRouter()
    return (
      <>
        <Flex
        w="100%"
        height="70px"
        fontSize="3xl"
        fontWeight="500"
        bg="skyblue"
        color="black.400"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        top={0}
        zIndex={1}
      >
        Not Found
      </Flex>
      <Flex mt="5rem" justifyContent="center" alignItems="center" direction="column">
        404 - Not Found
        <Button bg="red" _hover={{bg:'red.200'}} onClick={() => router.push('/')}>Home</Button>
      </Flex>
      
      </>
    );
  }