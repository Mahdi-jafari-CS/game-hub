import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/react.svg'
import React from 'react'
import { MdRoundedCorner } from 'react-icons/md'

export const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text>Nav bar</Text>
    </HStack>
  )
}
export default NavBar
