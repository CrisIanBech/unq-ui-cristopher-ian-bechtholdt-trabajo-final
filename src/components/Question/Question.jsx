import './Question.css'

const Question = ({ question }) => {
  return (
    <h2 className="question">
        {question}
    </h2>
  )
}

export default Question