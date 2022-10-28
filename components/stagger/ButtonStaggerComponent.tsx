import { Entypo } from '@expo/vector-icons'
import { Icon, IconButton } from 'native-base'
import { FC } from 'react'

interface IButtonStaggerComponentProps {
  onToggle: () => void
}

const ButtonStaggerComponent: FC<IButtonStaggerComponentProps> = ({
  onToggle
}) => {
  return (
    <IconButton
      variant='solid'
      borderRadius='full'
      size='lg'
      onPress={onToggle}
      bg='cyan.400'
      icon={
        <Icon
          as={Entypo}
          size='10'
          name='plus'
          color='white'
          _dark={{
            color: 'warmGray.50'
          }}
        />
      }
    />
  )
}

export default ButtonStaggerComponent
