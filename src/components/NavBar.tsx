import { HStack, Image, Text } from '@chakra-ui/react'
import { Switch } from '@/components/ui/switch'
import logo from '../assets/logo.webp'
import { useColorMode } from './ui/color-mode'

export default function NavBar() {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <>
      <HStack bgColor="red.200">
        <Image src={logo} boxSize="50px" />
        <Switch onChange={toggleColorMode}>{colorMode}</Switch>
        <Text>NavBar</Text>
      </HStack>
    </>
  )
}
