import React, { useState } from "react";
import { FaArrowRight, FaTrash } from "react-icons/fa";
import { InputType } from "./InputFunc";
import InputFunc from "./InputFunc";

const Exam = () => {
  return (
    <div className="setup__section-exams-exam w-1/5">
      <div className="setup__section-exams-exam-questions bg-white rounded-[1.7rem] pl-6">
        <div className="setup__section-exams-exam-questions-header__section flex flex-row w-full">
          <div className="setup__section-exams-exam-questions-header__section-title w-full">
            <h3>Sınav 1</h3>
          </div>
          <div className="setup__section-exams-exam-questions-header__section-exam__percentage w-[6rem] h-[6rem] flex flex-row text-[40px] flex justify-center items-center ">
            <InputFunc
              type={InputType.numeric}
              value={75}
              onChange={(event) => {
                let value = Number(event.target.value);
              }}
            />{" "}
            <span>%</span>
          </div>
        </div>
        <div className="setup__section-exams-exam-questions-questions__section">
          <div className="setup__section-exams-exam-questions-questions__section-question">
            <div className="setup__section-exams-exam-questions-questions__section-question-content">
              <h3>Soru 1</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                accusamus sit deleniti beatae fuga corrupti dolor atque!
              </p>
            </div>
            <div className="setup__section-exams-exam-questions-questions__section-question-operations">
              <div className="setup__section-exams-exam-questions-questions__section-question-operations__exam__percentage">
                <input type="number" max="100" min="1" /> <span>%</span>
              </div>
              <FaTrash />
            </div>
          </div>
        </div>
        <form className="setup__section-exams-exam-questions-add__question__section">
          <div className="setup__section-exams-exam-questions-add__question__section-information">
            <input type="text" placeholder="Soru 1" />
            <input type="text" placeholder="Soru İçeriği giriniz..." />
          </div>
          <button className="setup__section-exams-exam-questions-add__question__section-send">
            <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Exam;
