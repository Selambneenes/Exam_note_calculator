import React from "react";

export enum InputType {
  text,
  numeric,
}

type InputFuncProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
  type: InputType;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

const InputFunc = ({ onChange, value, type, inputProps }: InputFuncProps) => {
  return (
    <input
      id="function-input"
      value={value}
      onChange={onChange}
      type={type === InputType.numeric ? "number" : "text"}
      pattern={type === InputType.numeric ? "[0-9]" : "[A-Za-z]+"}
      className={`border-none outline-none bg-transparent w-full`}
      {...inputProps}
    />
  );
};

export default InputFunc;
