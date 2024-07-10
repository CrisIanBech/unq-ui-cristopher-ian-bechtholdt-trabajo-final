import FloatingLoading from '../FloatingLoading/FloatingLoading'
import './Question.css'

const Question = ({ question, showLoading }) => {
  return (
    <h2 className="question">
        {question}
        {showLoading && <FloatingLoading />}
    </h2>
  )
}

export default Question