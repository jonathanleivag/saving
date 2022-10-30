import { HStack, Stagger, useDisclose, View } from 'native-base'
import { Dispatch, FC, SetStateAction } from 'react'
import { StyleSheet } from 'react-native'

import ButtonContentStaggerComponent from './ButtonContentStaggerComponent'
import ButtonStaggerComponent from './ButtonStaggerComponent'
import { animate, exit, initial } from './propertiesStagger'

interface IStaggerComponentProps {
  setCash: Dispatch<SetStateAction<boolean>>
}

const StaggerStaggerComponent: FC<IStaggerComponentProps> = ({ setCash }) => {
  const { isOpen, onToggle } = useDisclose()

  const handleSetCash = () => {
    setCash(true)
    onToggle()
  }

  return (
    <View style={styles.container}>
      <Stagger visible={isOpen} initial={initial} animate={animate} exit={exit}>
        <ButtonContentStaggerComponent handleSetCash={handleSetCash} />
      </Stagger>
      <HStack>
        <ButtonStaggerComponent onToggle={onToggle} />
      </HStack>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 70,
    right: 40,
    zIndex: 1
  }
})

export default StaggerStaggerComponent
