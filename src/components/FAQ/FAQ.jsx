import { useState } from "react";
import questions from "../../../faq.json";
import Title from "../Title/Title";

import css from "./FAQ.module.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={css.container}>
      <Title title="Frequently Asked Questions" />
      <div className={css.list}>
        {questions.map((q, index) => {
          const isOpen = openIndex === index;

          return (
              <div key={index} className={css.item}>
                  <div className={css.question_wrapper}>
                     <h4 className={css.question}>{q.question}</h4>
                  <button className={css.toggle} onClick={() => toggle(index)}>
                          {isOpen
                              ? <img src="/sprite.svg#icon-circle-down" className={css.toggleDown}></img>
                              : <img src="/sprite.svg#icon-circle-up" className={css.toggleUp}></img>
                          }
                  </button> 
                  </div>
                  
              {isOpen && <p className={css.answer}>{q.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
