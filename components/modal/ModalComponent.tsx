import { Button, Modal } from 'native-base'
import { ColorSchemeType } from 'native-base/lib/typescript/components/types'
import { Dispatch, FC, ReactElement, SetStateAction } from 'react'

interface IModalComponentProps {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  children: ReactElement
  buttonCancel?: boolean
  textButtonCancel?: string
  colorButtonCancel?: ColorSchemeType
  variantButtonCancel?: TVariantButton
  buttonOk?: boolean
  textButtonOk?: string
  colorButtonOk?: ColorSchemeType
  variantButtonOk?: TVariantButton
  onPresButtonOk?: () => void
  title?: string
}

type TVariantButton = 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled'

const ModalComponent: FC<IModalComponentProps> = ({
  showModal,
  setShowModal,
  children,
  buttonCancel = false,
  textButtonCancel = 'Cancel',
  colorButtonCancel = 'primary',
  variantButtonCancel = 'ghost',
  buttonOk = true,
  textButtonOk = 'Ok',
  colorButtonOk = 'primary',
  variantButtonOk = 'solid',
  onPresButtonOk = () => {},
  title = 'Modal'
}) => {
  const handleOnPressButtonOk = () => {
    onPresButtonOk()
    setShowModal(false)
  }
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth='400px'>
        <Modal.CloseButton />
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          {buttonCancel && buttonOk && (
            <Button.Group space={2}>
              <Button
                variant={variantButtonCancel}
                colorScheme={colorButtonCancel}
                onPress={() => {
                  setShowModal(false)
                }}
              >
                {textButtonCancel}
              </Button>
              <Button
                colorScheme={colorButtonOk}
                variant={variantButtonOk}
                onPress={handleOnPressButtonOk}
              >
                {textButtonOk}
              </Button>
            </Button.Group>
          )}

          {buttonCancel && !buttonOk && (
            <Button
              variant={variantButtonCancel}
              colorScheme={colorButtonCancel}
              onPress={() => {
                setShowModal(false)
              }}
            >
              {textButtonCancel}
            </Button>
          )}

          {!buttonCancel && buttonOk && (
            <Button
              colorScheme={colorButtonOk}
              variant={variantButtonOk}
              onPress={handleOnPressButtonOk}
            >
              {textButtonOk}
            </Button>
          )}
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default ModalComponent
