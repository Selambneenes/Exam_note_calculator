import React, { useState } from "react";
import { SetupInitState } from "../states/SetupState";

type MyProps = {
  handleTextInput: (value: number) => void;
  className?: string;
  ExamNumber: number;
  state: SetupInitState;
};

const InputFunc = ({
  className,
  handleTextInput,
  ExamNumber,
  state,
}: MyProps) => {
  const [value, setValue] = useState<number | "">("");
  if (value === 0) {
    setValue("");
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Sadece sayıları kabul et ve min-max sınırlarını kontrol et
    let newValue: number = Number(event.target.value); // Sadece sayılar
    if (
      value !== "" ||
      (Number(newValue) >= 0 && Number(newValue) <= 99 && !isNaN(newValue))
    ) {
      setValue(newValue);
      handleTextInput(newValue);
    }
  };

  const handleFocus = () => {
    // Inputa odaklandığında içeriği sıfırla
    setValue("");
  };

  const whichOneInitState = (examNumber: number) => {
    switch (examNumber) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      default:
        throw new Error("Not find InitState");
    }
  };


  return (
    <input
      type="text"
      value={state[`percentileValue${whichOneInitState(ExamNumber)}`]}
      onChange={(event) => handleChange(event)}
      onFocus={handleFocus}
      placeholder="..."
      className={`${className} border-none outline-none bg-transparent text-right w-[40px] placeholder:text-black`}
      maxLength={2}
    />
  );
};

export default InputFunc;
