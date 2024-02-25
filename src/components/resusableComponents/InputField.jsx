
const InputField = ({placeholder , className, type,  ...props}) => {
  return (
    <>
        <input className={`${className} w-full py-3 px-4 bg-inputBg rounded-xl border border-gray-700 focus:border-mainColor focus:outline-none focus:bg-inputbgFocus`} placeholder={placeholder} type={type} 
        {...props} />
    </>
  )
}

export default InputField