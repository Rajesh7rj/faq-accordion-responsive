import React, { useState } from "react";
import "../App.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Faq() {
  const data = [
    {
      q: "Can I cancel my subscription at anytime?",
      a: "Sure. Your paid subscription can be cancelled anytime by shifting to Lite plan.",
    },
    {
      q: "Can I cancel my subscription at anytime?",
      a: "Sure. Your paid subscription can be cancelled anytime by shifting to Lite plan.",
    },
  ];

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [id, setId] = useState(-1);
  const [newData, setNewData] = useState(Array.from([...data]));

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!question || !answer) {
      return alert("Please fill the blank fields");
    }

    setNewData([
      ...newData,
      {
        q: question,
        a: answer,
      },
    ]);

    setAnswer("");
    setQuestion("");

    // newData.push({
    //   q: question,
    //   a: answer,

    // });
    // setNewData(newData.slice());
  };
  return (
    <div id="faq">
      <form action="" onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="questionInput">
            <label htmlFor="question" className="addQ">
              Question :
            </label>
            <input
              value={question}
              className="question"
              type="text"
              placeholder="Write your question here"
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="answerInput">
            <label htmlFor="answer" className="addA">
              Answer :
            </label>
            <textarea
              value={answer}
              className="answer"
              rows="4"
              cols="50"
              placeholder="Write your answer here"
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <button className="Add" type="submit">
            Add
          </button>
        </div>
      </form>

      <div className="faqBox">
        {newData &&
          newData.map(({ q, a }, index) => (
            <div
              className="divMain"
              key={index}
              onClick={() => {
                if (id === index) {
                  setId(-1);
                } else {
                  setId(index);
                }
              }}
            >
              <div className="qnaDiv">
                <div className="quesA">
                  <p>{q}</p>
                  <div className="symbol">
                    <IoIosArrowDown
                      className={"arrowSym " + (id === index && "rotate")}
                      size={20}
                    />
                  </div>
                </div>
                <p className={"ansA " + (id === index ? "show" : "ansA")}>
                  {a}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
