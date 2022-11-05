import { Radio, Stack } from 'native-base'
import { Dispatch, FC, SetStateAction } from 'react'

import { TNumberRadio } from './ModalContentGraficoComponent'

interface IRedioButtonComponentProps {
  section: 'bills' | 'leisure' | 'saving'
  setSelectorRadio: Dispatch<SetStateAction<TNumberRadio>>
}

const RedioButtonComponent: FC<IRedioButtonComponentProps> = ({
  section,
  setSelectorRadio
}) => {
  return (
    <Radio.Group
      name='exampleGroup'
      defaultValue='1'
      accessibilityLabel='pick a size'
      my='5'
      onChange={value => setSelectorRadio(Number(value) as TNumberRadio)}
    >
      <Stack
        direction={{
          base: 'column',
          md: 'row'
        }}
        alignItems={{
          base: 'flex-start',
          md: 'center'
        }}
        space={4}
        w='75%'
        maxW='300px'
      >
        {section !== 'bills' && (
          <Radio value='1' colorScheme='cyan' size='md' my={1}>
            Gastos
          </Radio>
        )}
        {section !== 'leisure' && (
          <Radio value='2' colorScheme='cyan' size='md' my={1}>
            Ocio
          </Radio>
        )}
        {section !== 'saving' && (
          <Radio value='3' colorScheme='cyan' size='md' my={1}>
            Ahorro
          </Radio>
        )}
        <Radio value='5' colorScheme='cyan' size='md' my={1}>
          Ambos (50% / 50%)
        </Radio>
        <Radio value='4' colorScheme='cyan' size='md' my={1}>
          Personalizado
        </Radio>
      </Stack>
    </Radio.Group>
  )
}

export default RedioButtonComponent
