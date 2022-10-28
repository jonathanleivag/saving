import { Flex, Image, Text } from 'native-base'

const NavbarNavbarComponent = () => {
  return (
    <Flex direction='row' alignItems={'center'} w='full' h='16'>
      <Flex direction='row' alignItems='center' h='full'>
        <Image
          source={{
            uri:
              'https://www.jonathanleivag.cl/_next/image?url=%2Flogo%2FlogoColor.png&w=256&q=75'
          }}
          alt='Logo de jonathanleivag'
          size='sm'
        />
        <Text fontFamily='header' fontSize='2xl' marginLeft={2}>
          Saving
        </Text>
      </Flex>
    </Flex>
  )
}

export default NavbarNavbarComponent
