import React from 'react'
import './styles.scss'
import Timer from '../Timer'

const InstructionsList = (props) => {
  return (
    <section className="instructions-list">
      <ol>
        {props.props.map((instruction, i) => {
          return (
            <li className="instruction-item" key={"instruction_" + i}>
              <span>{instruction.text}</span> {instruction.timer ? <br /> : ''}
              {instruction.timer ? <Timer time={instruction.timer} /> : ''}
            </li>)
        })}
      </ol>
    </section>
  )
}

export default InstructionsList