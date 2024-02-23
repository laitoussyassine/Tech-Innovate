

const SubmitButton = ({title, className, type, ...props}) => {
  return (
    <>
        <button type={type} {...props} className={`${className}  bg-mainColor text-black font-bold hover:text-black`} variant="secondary">{title}</button>
    </>
  )
}

export default SubmitButton