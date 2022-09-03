import React from "react";

const data = [
  { question_id: 1, question: "test ques" },
  { question_id: 2, question: "test ques" },
  { question_id: 3, question: "test ques" },
  { question_id: 4, question: "test ques" },
  { question_id: 5, question: "test ques" },
  { question_id: 6, question: "test ques" },
  { question_id: 7, question: "test ques" },
];

const Questions = (): JSX.Element => {
  return (
    <div className="my-8 pt-4 pb-6 px-4 w-1/2 mx-auto bg-slate-100 rounded-md border-gray-500">
      {data.map((item) => (
        <div key={item.question_id} className="">
          <p className="text-sm my-2">{item.question}</p>
          <input
            type="text"
            placeholder="your answer here"
            className="text-sm w-full p-2 rounded-xs focus:outline-none"
          />
        </div>
      ))}
    </div>
  );
};

export default Questions;
