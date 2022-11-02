import { Foundation } from '@expo/vector-icons'
import { FormControl, Icon, Input } from 'native-base'
import { Dispatch, FC, SetStateAction } from 'react'

interface ModalHomeContentComponentProps {
  setMoney: Dispatch<SetStateAction<number>>
  money: number
}

const ModalHomeContentComponent: FC<ModalHomeContentComponentProps> = ({
  setMoney,
  money
}) => {
  return (
    <FormControl>
      <FormControl.Label>Sueldo</FormControl.Label>
      <Input
        onChangeText={text => setMoney(Number(text))}
        keyboardAppearance='dark'
        keyboardType='numeric'
        InputLeftElement={
          <Icon
            as={<Foundation name='dollar' />}
            size={5}
            ml='2'
            color='muted.400'
          />
        }
      />
    </FormControl>
  )
}

export default ModalHomeContentComponent
