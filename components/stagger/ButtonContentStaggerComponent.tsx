import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Icon, IconButton } from 'native-base'
import { FC } from 'react'

interface IButtonStaggerComponentProps {
  handleSetCash: () => void
}

const IconComponent = () => (
  <Icon
    as={MaterialCommunityIcons}
    size='10'
    name='cash-plus'
    _dark={{
      color: 'white'
    }}
    color='white'
  />
)

const ButtonContentStaggerComponent: FC<IButtonStaggerComponentProps> = ({
  handleSetCash
}) => {
  return (
    <IconButton
      mb='4'
      variant='solid'
      size='lg'
      bg='secondary.500'
      colorScheme='red'
      borderRadius='full'
      onPress={handleSetCash}
      icon={<IconComponent />}
    />
  )
}

export default ButtonContentStaggerComponent
