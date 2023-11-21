
interface modalProps{
  element: JSX.Element
}

const Modal = (props: modalProps) => {

  return (
    <div className="flex grow justify-center">
        <div className="absolute z-10">
          {props.element}
        </div>
    </div>
  )
}

export default Modal