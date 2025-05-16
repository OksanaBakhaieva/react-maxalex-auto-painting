import { useState } from "react";
import questions from "../../../faq.json";
import Title from "../Title/Title";
import css from "./FAQ.module.css";
import { SlArrowUpCircle, SlArrowDownCircle} from "react-icons/sl";


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={css.container} id='faq'>
      <Title variant="light" title="Frequently Asked Questions" />
      <div className={css.list}>
        {questions.map(({ id, question, answer }, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={id} className={css.item}>
              <div className={css.question_wrapper}>
                <h4 className={css.question}>{question}</h4>
                <button className={css.toggle} onClick={() => setOpenIndex(isOpen ? null : index)}>
                  {isOpen ? (
                    <SlArrowUpCircle size={24} color="white"/>
                  ) : (<SlArrowDownCircle size={24} color="white" />)}
                </button>
              </div>
              {isOpen && <p className={css.answer}>{answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
