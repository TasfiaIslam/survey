import React, { useState } from "react";

const data = [
  { question_id: 1, question: "test ques" },
  { question_id: 2, question: "test ques" },
  { question_id: 3, question: "test ques" },
  { question_id: 4, question: "test ques" },
  { question_id: 5, question: "test ques" },
  { question_id: 6, question: "test ques" },
  { question_id: 7, question: "test ques" },
];

const answeredQuestions = [
  { question_id: 1, answer_value: "test ques" },
  { question_id: 2, answer_value: "test ques" },
  { question_id: 3, answer_value: "test ques" },
  { question_id: 4, answer_value: "test ques" },
  { question_id: 5, answer_value: "test ques" },
  { question_id: 6, answer_value: "test ques" },
  { question_id: 7, answer_value: "test ques" },
];

const Questions = (): JSX.Element => {
  const [answers, setAnswers] = useState([...answeredQuestions]);

  console.log("answers--->", answers);

  const handleAnswer = (item: any, value: string) => {
    if (value !== "") {
      if (answeredQuestions) {
        const response = {
          ...answers.find((q: any) => q.question_id === item.question_id),
        };

        // update answer
        if (Object.keys(response).length !== 0) {
          response.question_id = item.question_id;
          response.answer_value = value;

          setAnswers((prevState: any[]) => [
            ...prevState.filter((i: any) => i.question_id != item.question_id),
            response,
          ]);
        } else {
          // set new answer
          setAnswers([
            ...answers,
            { question_id: item.id, answer_value: value },
          ]);
        }
      } else {
        // no question answered
        const firstAnswer = {
          question_id: item.id,
          answer_value: value,
        };
        setAnswers([firstAnswer]);
      }
    } else {
      if (answers) {
        setAnswers((answers: any) =>
          answers.filter((ans: any) => {
            return ans.question_id !== item.id;
          })
        );
      }
    }
  };
  return (
    <form className="text-slate-600 my-8 pt-4 pb-6 px-4 w-1/2 mx-auto bg-lime-200 rounded-md border-gray-500">
      <>
        {data?.map((item, index: number) => (
          <div key={item.question_id} className="">
            <div className="flex gap-1 items-center">
              <span className="text-xs">{index + 1}.</span>
              <p className="text-sm my-2">{item.question}</p>
            </div>
            <input
              type="text"
              placeholder="your answer here"
              className="bg-orange-100 text-sm w-full p-2 rounded-xs focus:outline-none"
              onChange={(e) => handleAnswer(item, e.target.value)}
            />
          </div>
        ))}
      </>
      <button
        type="submit"
        className="text-sm bg-violet-600 hover:bg-violet-400 hover:text-gray-800 transition ease-out duration-200 mt-4 px-2 py-1 rounded-md text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default Questions;
