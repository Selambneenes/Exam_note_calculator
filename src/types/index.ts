export type ExamPercentageValue = {
  percentileValue1?: number;
  percentileValue2?: number;
  percentileValue3?: number;
  questionContentValue?: string;
};

export const enum REDUCER_ACTION_TYPES {
  ONEEXAM,
  TWOEXAM,
  THREEEXAM,
  QUESTION_CONTENT,
}

export type REDUCER_ACTION = {
  type: REDUCER_ACTION_TYPES;
  payload?: any;
};
