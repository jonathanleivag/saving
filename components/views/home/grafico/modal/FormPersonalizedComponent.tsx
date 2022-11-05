import {
  Container,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack
} from 'native-base'
import { Dispatch, FC, MutableRefObject, SetStateAction } from 'react'

import { IInputs } from './ModalContentGraficoComponent'

interface IFormPersonalizedComponentProps {
  section: 'bills' | 'leisure' | 'saving'
  setInputs: Dispatch<SetStateAction<IInputs>>
  billsRef: MutableRefObject<any>
  leisureRef: MutableRefObject<any>
  savingRef: MutableRefObject<any>
}

const FormPersonalizedComponent: FC<IFormPersonalizedComponentProps> = ({
  section,
  setInputs,
  billsRef,
  leisureRef,
  savingRef
}) => {
  return (
    <FormControl>
      <Container>
        {section !== 'bills' && (
          <Stack alignItems='center' mb='5'>
            <InputGroup w='full'>
              <InputLeftAddon>%</InputLeftAddon>
              <Input
                ref={billsRef}
                w='full'
                type='text'
                placeholder='Gastos'
                keyboardType='number-pad'
                keyboardAppearance='dark'
                onChangeText={value =>
                  setInputs(inputs => ({ ...inputs, bills: Number(value) }))
                }
              />
            </InputGroup>
          </Stack>
        )}
        {section !== 'leisure' && (
          <Stack alignItems='center' mb='5'>
            <InputGroup w='full'>
              <InputLeftAddon>%</InputLeftAddon>
              <Input
                ref={leisureRef}
                w='full'
                type='text'
                placeholder='Ocio'
                keyboardType='number-pad'
                keyboardAppearance='dark'
                onChangeText={value =>
                  setInputs(inputs => ({ ...inputs, leisure: Number(value) }))
                }
              />
            </InputGroup>
          </Stack>
        )}
        {section !== 'saving' && (
          <Stack alignItems='center' mb='5'>
            <InputGroup w='full'>
              <InputLeftAddon>%</InputLeftAddon>
              <Input
                ref={savingRef}
                w='full'
                type='text'
                placeholder='Ahorro'
                keyboardType='number-pad'
                keyboardAppearance='dark'
                onChangeText={value =>
                  setInputs(inputs => ({ ...inputs, saving: Number(value) }))
                }
              />
            </InputGroup>
          </Stack>
        )}
      </Container>
    </FormControl>
  )
}

export default FormPersonalizedComponent
