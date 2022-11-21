import { MaterialIcons } from '@expo/vector-icons'
import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Flex, Image, Text } from 'native-base'
import { FC } from 'react'

interface INavbarNavbarComponentProps {
  goBack?: boolean
  navigateInfo?: NativeStackNavigationProp<ParamListBase, 'info', undefined>
}

const NavbarNavbarComponent: FC<INavbarNavbarComponentProps> = ({
  goBack = false,
  navigateInfo = undefined
}) => {
  const handleHome = () => {
    if (navigateInfo) navigateInfo.navigate('Home')
  }
  return (
    <Flex paddingX={2} direction='row' alignItems={'center'} w='full' h='16'>
      <Flex direction='row' pl='1' alignItems='center' h='full'>
        {goBack && (
          <MaterialIcons
            onPress={handleHome}
            name='arrow-back-ios'
            size={40}
            color='white'
          />
        )}
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
