'use client';

import Image from "next/image";
import Card from "./components/card"
import React, { useState } from "react"

const quiz = {
  questions: [
    {
      id: 1,
      question: "Which AWS service facilitates serverless functions?",
      answers: ["AWS S3", "AWS Fargate", "AWS EC2", "AWS Lambda"],
      correct: "AWS Lambda" 
    },
    {
      id: 2,
      question: "Which AWS service means Simple Storage Service?",
      answers: ["AWS S3", "AWS Fargate", "AWS EC2", "AWS Lambda"],
      correct: "AWS S3" 
    },
    {
      id: 3,
      question: "Which AWS service can use Spot Instances?",
      answers: ["AWS S3", "AWS Fargate", "AWS EC2", "AWS Lambda"],
      correct: "AWS EC2" 
    },
  ]
}

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [activeAnswer, setSelectedAnswer] = useState("")
  const [checked, setChecked] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState(
    {
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0
    }
  )

  const {questions} = quiz
  const {question, answers, correctAnswer} = questions[activeQuestion]

  const onAnswerSelected = (answer, idx) => {
    setChecked(true)
    setSelectedAnswerIndex(idx)

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello Quizzes
      This is question {activeQuestion + 1}/{questions.length}
      <Card>
        
      </Card>
    </main>
  );
}
