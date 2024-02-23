
const TitleLabel = ({className, title, ...props}) => {
    return (
      <>
          <p className={className} {...props} >{title}</p>
      </>
    )
  }
  
  export default TitleLabel