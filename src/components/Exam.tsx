import { ChangeEvent, useReducer } from "react";
import InputFunc from "./InputFunc";


import {  FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const initState = {
  examValue1: 0,
  examValue2: 0,
  examValue3: 0,
}

const enum REDUCER_ACTİON_TYPE {
  ONEEXAM,
  TWOEXAM,
  THREEEXAM,
}

type ReducerAction = {
  type: REDUCER_ACTİON_TYPE,
  payload?: number,
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
  switch(action.type) {
    case REDUCER_ACTİON_TYPE.ONEEXAM:
      return {
        ...state,
        examValue1: action.payload ?? ''
      }
    case REDUCER_ACTİON_TYPE.TWOEXAM: 
    return {
      ...state,
      examValue2: action.payload ?? ''
    }

    case REDUCER_ACTİON_TYPE.THREEEXAM: 
    return {
      ...state,
      examValue3: action.payload ?? ''
    }
    default: 
    throw new Error()
  }
}

const Exam = () => {
const [state, dispatch] = useReducer(reducer, initState)

const handleTextInput = ( value: number) => {

  dispatch({type: REDUCER_ACTİON_TYPE.ONEEXAM, payload: value})
}

  return (
    <div className="setup__section-exams-exam w-1/5">
      <div className="setup__section-exams-exam-questions bg-white rounded-[1.7rem] overflow-hidden">
        <div className="setup__section-exams-exam-questions-header__section flex flex-row w-full">
          <div className="setup__section-exams-exam-questions-header__section-title w-[calc(100%-100px)] flex justify-start items-center bg-[#C3A9D2]">
            <h3 className="text-4xl pl-8">Sınav 1</h3>
          </div>
          <div className="setup__section-exams-exam-questions-header__section-exam__percentage interactive__div flex w-[100px] h-[100px] flex-row text-[37px] justify-center items-center border-l border-b border-solid border-black">
            <InputFunc handleTextInput={handleTextInput}/>
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
                <InputFunc className="w-[33px]" />
            
                 <span>p</span>
                </div>
                <button>
                  <FaTrash size={27}/>
                </button>
              </div>
            </div>
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
                <InputFunc className="w-[33px]"/>
            
                 <span>p</span>
                </div>
                <button>
                  <FaTrash size={27}/>
                </button>
              </div>
            </div>
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
                <InputFunc className="w-[33px]"/>
            
                 <span>p</span>
                </div>
                <button>
                  <FaTrash size={27}/>
                </button>
              </div>
            </div>
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
                <InputFunc className="w-[33px]"/>
            
                 <span>p</span>
                </div>
                <button>
                  <FaTrash size={27}/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <form className="setup__section-exams-exam-questions-add__question__section flex flex-row">
          <div className="setup__section-exams-exam-questions-add__question__section-information px-5 w-[calc(100%-100px)] flex flex-col gap-y-1 bg-[#C3A9D2]">
            <h4 className="text-xl font-semibold">Soru 1</h4>
            <textarea placeholder="Soru İçeriği giriniz..." className="h-[60px] bg-transparent text-sm w-[100%] resize-none border border-black rounded-lg px-1 placeholder:text-black outline-none"/>
          </div>
          <button className="setup__section-exams-exam-questions-add__question__section-send interactive__div w-[100px] h-[100px] flex justify-center items-center border-l border-black">
            <FaPlus size={40}/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Exam;
