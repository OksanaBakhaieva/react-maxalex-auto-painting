import { useState } from "react";
import faqData from "../../../faq.json";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">{section.category}</h2>
          <div className="space-y-2">
            {section.questions.map((q, qIndex) => {
              const isOpen = openQuestion === `${sectionIndex}-${qIndex}`;
              return (
                <div
                  key={qIndex}
                  className="border border-gray-300 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(`${sectionIndex}-${qIndex}`)}
                    className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition-all flex justify-between items-center"
                  >
                    <span className="text-lg">{q.question}</span>
                    <span className="text-gray-600">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div
                    className={`p-4 bg-white text-gray-700 transition-all ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    {q.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
