import { Text } from 'native-base'
import { FC } from 'react'
import { Platform } from 'react-native'

import {
  calculateBalance,
  formatMoney,
  formatMoneyAndroid
} from '../../../../../helpers'

interface ModalContentAllComponentProps {
  money: number
  percentage: number
}

export const ModalContentBillsComponent: FC<ModalContentAllComponentProps> = ({
  money,
  percentage
}) => {
  return (
    <>
      <Text fontSize='md' fontFamily='header' mb='5' textAlign='center'>
        El 50 % para cubrir las necesidades básicas
      </Text>
      <Text fontSize='sm' fontFamily='regular' mb='3'>
        A la hora de controlar los gastos y de ahorrar, es fundamental que no se
        destine nunca más del 50 % de los ingresos mensuales a cubrir las
        necesidades básicas de una persona. A pesar de ser la partida
        presupuestaria más amplia de esta regla de ahorro 50/30/20, a algunos
        puede no parecer suficiente para vivir el día a día. Pero esto sucede,
        sobre todo, cuando no se tiene claro qué es un bien de primera necesidad
        y qué es algo prescindible.
      </Text>
      <Text fontSize='sm' fontFamily='header' mb='5'>
        Así, el 50 % de lo que se gana debería gastarse en:
      </Text>
      <Text fontSize='sm' fontFamily='regular' mb='3'>
        ➼ El pago de la hipoteca o alquiler.
      </Text>
      <Text fontSize='sm' fontFamily='regular' mb='3'>
        ➼ Los gastos habituales de una vivienda, tales como la luz, el agua, la
        cuota de comunidad, la recogida de basura, etc.
      </Text>
      <Text fontSize='sm' fontFamily='regular' mb='3'>
        ➼ La comida del mes.
      </Text>
      <Text fontSize='sm' fontFamily='regular' mb='3'>
        ➼ El pago de escolaridad en caso de estar estudiando o tener hijos que
        lo hagan.
      </Text>
      <Text fontSize='sm' fontFamily='regular' mb='3'>
        ➼ Calzado y vestuario.
      </Text>
      <Text fontSize='sm' fontFamily='regular' mb='3'>
        ➼ Transporte al trabajo.
      </Text>
      <Text fontSize='sm' fontFamily='regular' mb='3'>
        Todos estos gastos tienen una cosa en común: son vitales en el día a día
        de la persona.
      </Text>
      <Text fontSize='sm' fontFamily='regular' my='3'>
        Aun asi, si quieres gastar mas o menos de lo que te recomienda el 50% de
        tus ingresos, puedes hacerlo aquí:
      </Text>

      <Text fontSize='sm' fontFamily='header'>
        {`Actualmente tienes un ${percentage}% de tus ingresos para gastos de un total ${
          Platform.OS === 'ios'
            ? formatMoney(calculateBalance(money, percentage))
            : formatMoneyAndroid(calculateBalance(money, percentage))
        }`}
      </Text>
    </>
  )
}

export const ModalContentLeisureComponent: FC<ModalContentAllComponentProps> = ({
  money,
  percentage
}) => {
  return (
    <>
      <Text fontSize='md' fontFamily='header' mb='5' textAlign='center'>
        El 30 % para el ocio.
      </Text>
      <Text fontSize='sm' fontFamily='regular' my='3'>
        El último grupo de la regla de ahorro 50/20/30 es, con toda seguridad,
        el que más va a gustar cumplir a pies de la letra. Consiste en destinar
        el 30% de los ingresos mensuales a aquellos gastos del día a día o
        puntuales que son prescindibles, pero que aumentan mucho la calidad de
        vida. Dentro de esta categoría se incluyen todas las actividades de ocio
        como ir al cine, salir a cenar algunos días fuera de casa o hacer un
        viaje por vacaciones.
      </Text>
      <Text fontSize='sm' fontFamily='regular' my='3'>
        Aun asi, si quieres gastar mas o menos de lo que te recomienda el 30% de
        tus ingresos, puedes modificarlo aquí:
      </Text>

      <Text fontSize='sm' fontFamily='header'>
        {`Actualmente tienes un ${percentage}% de tus ingresos para gastos de un total ${
          Platform.OS === 'ios'
            ? formatMoney(calculateBalance(money, percentage))
            : formatMoneyAndroid(calculateBalance(money, percentage))
        }`}
      </Text>
    </>
  )
}

export const ModalContentSavingComponent: FC<ModalContentAllComponentProps> = ({
  money,
  percentage
}) => {
  return (
    <>
      <Text fontSize='md' fontFamily='header' mb='5' textAlign='center'>
        El 20 % para el ahorro.
      </Text>
      <Text fontSize='sm' fontFamily='regular' my='3'>
        Esta parte de la regla de ahorro 50/30/20 es, seguramente, la más
        dolorosa ya que nada más aplicarla se ve que el dinero ha mermado un
        20%. Para paliar la sensación de perder poder adquisitivo es importante
        hacer dos cosas mes a mes. Lo primero es descontar el porcentaje de
        ahorro nada más recibir la nómina mensual. De esta forma, ya desde el
        primer día del mes, si se cobra.
      </Text>

      <Text fontSize='sm' fontFamily='regular' my='3'>
        Lo segundo que hay que hacer para ver la “pérdida” de dinero mes a mes
        con buenos ojos es, nada más descontar el 20 % de la nómina, ingresar el
        dinero correspondiente a ese porcentaje en una cuenta distinta a la
        cuenta corriente habitual. Por ejemplo, en una cuenta de ahorro con unos
        buenos intereses. Así se verá como, mes a mes, la cantidad de esa cuenta
        crece con el dinero ingresado más los intereses, lo cual hará más fácil
        separar a principio de mes el 20 % necesario para gastos futuros.
      </Text>

      <Text fontSize='sm' fontFamily='regular' my='3'>
        Aun asi, si quieres gastar mas o menos de lo que te recomienda el 30% de
        tus ingresos, puedes modificarlo aquí:
      </Text>

      <Text fontSize='sm' fontFamily='header'>
        {`Actualmente tienes un ${percentage}% de tus ingresos para gastos de un total ${
          Platform.OS === 'ios'
            ? formatMoney(calculateBalance(money, percentage))
            : formatMoneyAndroid(calculateBalance(money, percentage))
        }`}
      </Text>
    </>
  )
}
