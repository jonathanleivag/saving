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
      <Text fontSize='md' fontFamily='header' mb='5'>
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
      <Text fontSize='sm' fontFamily='regular'>
        Así, el 50 % de lo que se gana debería gastarse en:
      </Text>
      <Text fontSize='sm' fontFamily='regular'>
        Así, el 50 % de lo que se gana debería gastarse en:El pago de la
        hipoteca o alquiler.
      </Text>
      <Text fontSize='sm' fontFamily='regular'>
        Los gastos habituales de una vivienda, tales como la luz, el agua, la
        cuota de comunidad, la recogida de basura, etc.
      </Text>
      <Text fontSize='sm' fontFamily='regular'>
        La comida del mes.
      </Text>
      <Text fontSize='sm' fontFamily='regular'>
        El pago de escolaridad en caso de estar estudiando o tener hijos que lo
        hagan.
      </Text>
      <Text fontSize='sm' fontFamily='regular'>
        Calzado y vestuario.
      </Text>
      <Text fontSize='sm' fontFamily='regular'>
        Transporte al trabajo.
      </Text>
      <Text fontSize='sm' fontFamily='regular'>
        Todos estos gastos tienen una cosa en común: son vitales en el día a día
        de la persona.
      </Text>
      <Text fontSize='sm' fontFamily='regular'>
        Aun asi, si quieres gastar mas o menos de lo que te recomienda el 50% de
        tus ingresos, puedes hacerlo aquí:
      </Text>

      <Text fontSize='sm' fontFamily='regular'>
        {`Actualmente tienes un ${percentage}% de tus ingresos para gastos que es de ${
          Platform.OS === 'ios'
            ? formatMoney(calculateBalance(money, percentage))
            : formatMoneyAndroid(calculateBalance(money, percentage))
        }`}
      </Text>
    </>
  )
}
