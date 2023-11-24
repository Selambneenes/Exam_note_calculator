import { MouseEvent, Dispatch } from "react";
import InputFunc from "./InputFunc";

import { FaPlus, FaTrash } from "react-icons/fa6";
import { REDUCER_ACTION, REDUCER_ACTION_TYPES } from "../types";
import { SetupInitState } from "../states/SetupState";

type myPropsTypes = {
  examNumber: number;
  dispatch: Dispatch<REDUCER_ACTION>;
  state: SetupInitState;
};

const Exam = ({ examNumber, dispatch, state }: myPropsTypes) => {
  const whichOneExam = (examNumber: number): REDUCER_ACTION_TYPES => {
    switch (examNumber) {
      case 1:
        return REDUCER_ACTION_TYPES.ONEEXAM;
      case 2:
        return REDUCER_ACTION_TYPES.TWOEXAM;
      case 3:
        return REDUCER_ACTION_TYPES.THREEEXAM;
      default:
        throw new Error("Not find Exam");
    }
  };

  const handleTextInput = (value: number) => {
    dispatch({ type: whichOneExam(examNumber), payload: value });
  };

  const addQuestionHandler = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    
  };

  return (
    <div className="setup__section-exams-exam w-1/5">
      <div className="setup__section-exams-exam-questions bg-white rounded-[1.7rem] overflow-hidden">
        <div className="setup__section-exams-exam-questions-header__section flex flex-row w-full">
          <div className="setup__section-exams-exam-questions-header__section-title w-[calc(100%-100px)] flex justify-start items-center bg-[#C3A9D2]">
            <h3 className="text-4xl pl-8">Sınav {examNumber}</h3>
          </div>
          <div className="setup__section-exams-exam-questions-header__section-exam__percentage interactive__div flex w-[100px] h-[100px] flex-row text-[37px] justify-center items-center border-l border-b border-solid border-black">
            <InputFunc
              handleTextInput={handleTextInput}
              ExamNumber={examNumber}
              state={state}
            />
            <span>%</span>
          </div>
        </div>
        <div className="setup__section-exams-exam-questions-questions__section flex flex-col overflow-y-auto  scroll__style direction__rtl">
          <div className="direction__ltr max-h-[450px] h-auto">
            <div className="setup__section-exams-exam-questions-questions__section-question flex ">
              <div className="setup__section-exams-exam-questions-questions__section-question-content px-5 py-3 w-[calc(100%-100px)]">
                <h3 className="text-xl font-semibold">Soru 1</h3>
                <p className="text-xs max-h-[48px] overflow-auto">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  accusamus sit deleniti beatae fuga corrupti dolor atque!
                </p>
              </div>
              <div className="setup__section-exams-exam-questions-questions__section-question-operations interactive__div w-[100px] h-[100px] flex flex-col justify-center items-center gap-y-3 border-l border-b border-black">
                <div className="setup__section-exams-exam-questions-questions__section-question-operations__exam__percentage flex flex-row justify-center items-center text-3xl">
                  {/* <InputFunc /> */}

                  <span>p</span>
                </div>
                <button>
                  <FaTrash size={27} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <form className="setup__section-exams-exam-questions-add__question__section flex flex-row">
          <div className="setup__section-exams-exam-questions-add__question__section-information px-5 w-[calc(100%-100px)] flex flex-col gap-y-1 bg-[#C3A9D2]">
            <h4 className="text-xl font-semibold">Soru 1</h4>
            <textarea
              placeholder="Soru İçeriği giriniz..."
              className="h-[60px] bg-transparent text-sm w-[100%] resize-none border border-black rounded-lg px-1 placeholder:text-black outline-none"
              onChange={(e) => dispatch({type: REDUCER_ACTION_TYPES.QUESTION_CONTENT, payload: e.target.value})}
            />
          </div>
          <button
            className="setup__section-exams-exam-questions-add__question__section-send interactive__div w-[100px] h-[100px] flex justify-center items-center border-l border-black"
            onClick={addQuestionHandler}
          >
            <FaPlus size={40} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Exam;
