import React from 'react'
import Exam from '../components/Exam'
import '../App.css'

const Setup = () => {
  return (
    <div className="setup__section flex flex-col w-screen h-screen gradient__bg">
      <h1 className="setup__section-main__title text-5xl text-center tracking-wide gradient__text">Yeni Nesil Not Hesaplama</h1>
      <div className="setup__section-exams flex justify-center flex-row gap-x-20">
        <Exam />
        <Exam />
        <Exam />
      </div>
    </div>
  )
}

export default Setup
