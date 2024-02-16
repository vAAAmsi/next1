"use client"
import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { UIEvent, useRef, useState } from 'react'


const imgaddress = 'https://w0.peakpx.com/wallpaper/466/859/HD-wallpaper-allu-arjun-a-a-actor-hero-smile-stylish-star-tollywood-thumbnail.jpg'

const Scroller = () => {

    const ref = useRef(null);

    const scrollleft = () => {
        const container = ref.current as HTMLDivElement | null
        if(container){
            container.scrollBy({
                top: 0,
                left: -400,
                behavior: 'smooth',
            })
        }
    }
    const scrollRight = () => {
        const container = ref.current as HTMLDivElement | null
        if(container){
            container.scrollBy({
                top: 0,
                left: 500,
                behavior: 'smooth',
            })
        }
    }


  return (
    <Flex gap='30px' justifyContent="center" alignItems='center' flexDir="column">
      <Flex w="50%" bg="white" overflowX="hidden" ref={ref}>
      <Flex  gap="30px">
      {
        [1,2,3,4,5,6,7,8,9,10].map((item) => 
            <Image boxSize={400} src={imgaddress} key={item} alt=''/>
        )
      }
      </Flex>
      </Flex>
      <Flex gap="20px" mb="20px">
        <Button onClick={scrollleft} >{'<'}</Button>
        <Button onClick={scrollRight}>{'>'}</Button>
      </Flex>
    </Flex>
  )
}

export default Scroller;