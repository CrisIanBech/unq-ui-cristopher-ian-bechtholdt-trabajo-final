import AnswerButton from '../AnswerButton/AnswerButton'
import Question from '../Question/Question'
import './QuestionRound.css'

const QuestionRound = ({question, answers, onAnswer, isLoading }) => {
  return (
    <section className='question-round-container'>
        <Question question={question.value} showLoading={isLoading} />
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: "16px", marginTop: '32px'}}>
            {answers.map(answer => <AnswerButton key={answer.id} onPress={onAnswer} answer={answer} />)}
        </div>
    </section>
  )
}

export default QuestionRound