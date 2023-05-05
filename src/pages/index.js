import { Button, Flex } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Debug</title>
      </Head>
      <Flex flexDir='row' alignItems={"center"} h='100vh'>
        <Button size='lg' mx='auto' colorScheme='teal'>
          Botão de teste
        </Button>
      </Flex>
    </>
  );
}
