import React from 'react'
import type { Metadata } from 'next'
import { Router } from 'next/router'
import DataList from '../components/DataList';
import { usertype } from '../types';
import { Flex } from '@chakra-ui/react';


export const metadata: Metadata = {
    title: 'users',
    description: 'something'
}

const Userspage = async() => {
  const datafetch = await fetch('https://jsonplaceholder.typicode.com/users')
  const data: usertype[] = await datafetch.json()
  return (
    <Flex flexWrap="wrap" justifyContent="center" gap="20px">
     {
      data.map(user => {
        return (
          <DataList item={user} key={user.id} />
        )
      })
     }
    </Flex>
  )
}

export default Userspage;