import React from 'react'
import { usertype } from '../types'
import Link from 'next/link'
import { Flex, Image, Text } from '@chakra-ui/react'

type prop = {
    item : usertype
}
const DataList:React.FC<prop> = ({item}) => {
  return (
    <Flex flexDir="column" >
    <Link href={`/user/${item.id}`}>
      <Text >{item.name}</Text>
    </Link>
   </Flex>
  )
}

export default DataList;


// mamillapallivamsi11 QpQpg9hV1yAk0V1G
