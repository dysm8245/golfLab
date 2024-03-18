
interface modalProps{
  element: JSX.Element,
  open: () => void
}

const Modal = (props: modalProps) => {

  return (
    <>
      <div className="flex grow justify-center">
        <div className="absolute z-10 mt-48 bg-green-500 rounded-xl">
          <button className="p-2 hover:text-white" onClick={props.open}>X</button>
          {props.element}
        </div>
      </div>
    </>
  )
}

export default Modal