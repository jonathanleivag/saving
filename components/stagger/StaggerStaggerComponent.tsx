import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import {
  Box,
  HStack,
  Icon,
  IconButton,
  Stagger,
  useDisclose,
  View
} from 'native-base'
import { Dispatch, FC, SetStateAction } from 'react'
import { StyleSheet } from 'react-native'

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
      <Box>
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true
              }
            }
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true
              }
            }
          }}
        >
          <IconButton
            mb='4'
            variant='solid'
            size='lg'
            bg='secondary.500'
            colorScheme='red'
            borderRadius='full'
            onPress={handleSetCash}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                size='10'
                name='cash-plus'
                _dark={{
                  color: 'white'
                }}
                color='white'
              />
            }
          />
        </Stagger>
        <HStack>
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
        </HStack>
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 70,
    right: 40
  }
})

export default StaggerStaggerComponent
