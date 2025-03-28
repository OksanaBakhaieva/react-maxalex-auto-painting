import { useState } from "react";
import questions from "../../../faq.json";
import Title from "../Title/Title";
import css from "./FAQ.module.css";
import sprite from "/sprite.svg";

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
                  <svg
                    width="24"
                    height="24"
                    className={isOpen ? css.toggleDown : css.toggleUp}
                  >
                    <use
                      href={`${sprite}#${isOpen ? "icon-circle-up" : "icon-circle-down"}`}
                    />
                  </svg>
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
