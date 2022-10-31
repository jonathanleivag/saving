import { ColorMode, extendTheme } from 'native-base'

interface ITheme {
  colorMode: ColorMode
}

export const customTheme = extendTheme({
  fonts: {
    header: 'Montserrat_700Bold',
    medium: 'Montserrat_500Medium',
    regular: 'Montserrat_400Regular',
    semibold: 'Montserrat_600SemiBold'
  },
  colors: {
    black: {
      100: '#C4C4C4',
      200: '#7C7C7C',
      300: '#292929',
      800: '#181725'
    },
    green: {
      300: '#53B175'
    },
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E'
    },
    amber: {
      400: '#d97706'
    }
  },
  components: {
    Divider: {
      baseStyle: ({ colorMode }) => {
        return {
          backgroundColor: colorMode === 'dark' ? 'black.100' : 'black.200'
        }
      }
    },
    Heading: {
      baseStyle: ({ colorMode }: ITheme) => {
        return {
          color: colorMode === 'dark' ? 'black.100' : 'primary.500'
        }
      },
      defaultProps: {
        size: 'xl',
        fontFamily: 'Montserrat_600SemiBold'
      }
    },
    Text: {
      baseStyle: ({ colorMode }: ITheme) => {
        return {
          color: colorMode === 'dark' ? 'black.100' : 'black.300'
        }
      },
      defaultProps: {
        size: 'md',
        fontFamily: 'Montserrat_400Regular'
      },
      sizes: {
        xl: {
          fontSize: '64px'
        },
        lg: {
          fontSize: '32px'
        },
        md: {
          fontSize: '16px'
        },
        sm: {
          fontSize: '12px'
        }
      }
    }
  }
})

export const bgColor = (colorMode: ColorMode) =>
  colorMode === 'dark' ? '#003F5E' : '#E3F2F9'

export const colorPie = ['#0b9ff4', '#06aebb', '#62d4b0']
