import React, { useState } from "react";

type MyProps = {
  defaultValue: number;
  handleTextInput: (value: number) => void;
  className: string;
}

const InputFunc = ({ defaultValue, className, handleTextInput}: MyProps) => {
  const [v  alue, setValue] = useState<number | undefined>(undefined);
  if (value == 0) {
    setValue(undefined)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Sadece sayıları kabul et ve min-max sınırlarını kontrol et
    let newValue: number  = Number(event.target.value); // Sadece sayılar
    if (value !== undefined || (Number(newValue) >= 0 && Number(newValue) <= 99)) {
      setValue(newValue);
      handleTextInput(newValue)
    } 

  };

  

  const handleFocus = () => {
    // Inputa odaklandığında içeriği sıfırla
    setValue(undefined);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      placeholder="..."
      className={`${className} border-none outline-none bg-transparent text-right w-[40px] placeholder:text-black`}
      maxLength={2}
    />
  );
};

export default InputFunc