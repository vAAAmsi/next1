import type { Metadata } from "next";
import React from 'react'
import { usertype } from "@/app/types";
import { Flex, Text } from "@chakra-ui/react";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({params} : Props): Promise<Metadata>{
    const datafetch = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: usertype[] = await datafetch.json()
    
    const result = data.filter(item => item.id == Number(params.id))

    return {
      title: `${result[0].username}`
    }
}


const page = async ({params}: Props) => {

  const datafetch = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: usertype[] = await datafetch.json()   
    const result = data.filter(item => item.id == Number(params.id))
   
  return (
    <Flex direction="column">
       <Text >{result[0].name}</Text>
       <Text >{result[0].username}</Text>
       <Text >{result[0].email}</Text>
    </Flex>
  )
}

export default page;