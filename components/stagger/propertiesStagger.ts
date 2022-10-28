import { IStaggerStyleProps } from 'native-base/lib/typescript/components/composites/Transitions/Stagger'
import { ISupportedTransitions } from 'native-base/lib/typescript/components/composites/Transitions/types'

export const animate: IStaggerStyleProps = {
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
}

export const initial: ISupportedTransitions = {
  opacity: 0,
  scale: 0,
  translateY: 34
}

export const exit: IStaggerStyleProps = {
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
}
