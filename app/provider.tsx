import { ChakraProvider } from '@chakra-ui/react'
import React from "react";

export function ChakraComponentsProvider({children}: {children: React.ReactNode}) {
    return(
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}