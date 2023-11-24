import Exam from "../components/Exam";
import { useReducer, Dispatch } from "react";
import "../App.css";
/* Import Types */
import {
  REDUCER_ACTION,
  REDUCER_ACTION_TYPES,
  ExamPercentageValue,
} from "../types/index";
import { initialSetupState, SetupInitState } from "../states/SetupState";

/* needs to be returned For Exams */

const Exams: ExamPercentageValue[] = [
  {
    percentileValue1: 45,
  },
  {
    percentileValue2: 20,
  },
  {
    percentileValue3: 15,
  },
];

/* USEREDUCER */

const reducer = (
  state: SetupInitState,
  action: REDUCER_ACTION
): SetupInitState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPES.ONEEXAM:
      return {
        ...state,
        percentileValue1: action.payload,
      };
    case REDUCER_ACTION_TYPES.TWOEXAM:
      return {
        ...state,
        percentileValue2: action.payload,
      };
    case REDUCER_ACTION_TYPES.THREEEXAM:
      return {
        ...state,
        percentileValue3: action.payload,
      };

    case REDUCER_ACTION_TYPES.QUESTION_CONTENT:
      return {
        ...state,
        questionContentValue: String(action.payload),
      };
    default:
      return state;
  }
};

const Setup = () => {
  const [state, dispatch] = useReducer(reducer, initialSetupState);

  const percentageCalculation = (
    state: SetupInitState,
    dispatch: Dispatch<REDUCER_ACTION>
  ) => {
    const percentTotal = (state.percentileValue1 || 0) + (state.percentileValue2 || 0) + (state.percentileValue3 || 0);
    if (percentTotal > 100) {
      dispatch({ type: REDUCER_ACTION_TYPES.ONEEXAM, payload: '' });
      dispatch({ type: REDUCER_ACTION_TYPES.TWOEXAM, payload: '' });
      dispatch({ type: REDUCER_ACTION_TYPES.THREEEXAM, payload: '' });
      alert("Lütfen Sınav Yüzdeliklerini Kontrol Ediniz Bir Sorun Olmalı");
    }
  };
  percentageCalculation(state, dispatch);

  return (
    <div className="setup__section flex flex-col w-screen h-screen gradient__bg">
      <h1 className="setup__section-main__title text-5xl text-center tracking-wide gradient__text">
        Yeni Nesil Not Hesaplama
      </h1>
      <div className="setup__section-exams flex justify-center flex-row gap-x-20">
        {Exams.map((_, index) => {
          index = index + 1;

          return (
            <Exam
              examNumber={index}
              dispatch={dispatch}
              key={index}
              state={state}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Setup;
