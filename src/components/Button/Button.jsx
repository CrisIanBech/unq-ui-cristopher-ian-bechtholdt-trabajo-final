import './Button.css'

const variants = {
  normal: "",
  validation: "validation"
}

const Button = ({ content, onClick, variant = variants.normal }) => {
  return (
    <button className={'button ' + variant} onClick={onClick}>{content}</button>
  )
}

export default Button
export { variants }

