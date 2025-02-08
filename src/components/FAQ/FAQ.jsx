import { useState } from "react";
import questions from "../../../faq.json";
import Title from "../Title/Title";

import css from "./FAQ.module.css";

function FAQ({ title }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={css.container}>
      <Title title="FAQ" />
      <div className={css.list}>
        {questions.map((q, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className={css.item}>
              <h4 className={css.question}>{q.question}
                <button className={css.toggle} onClick={() => toggle(index)}>
                          {isOpen
                              ? <img src='arrow_icon.png' className={css.toggleDown}></img>
                              : <img src='arrow_icon.png' className={css.toggleUp}></img>
                          }
                  </button>
                </h4>
              {isOpen && <p className={css.answer}>{q.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
