import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [getQuestions , setQuestions] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(response => response.json())
    .then(getData => setQuestions(getData))

  },[])
  //console.log(getQuestions)
  
  function handleDelete(id){
    fetch(`http://localhost:4000/questions/${id}`,{
      method:"DELETE"
    })
    .then(response => response.json())
    .then(()=> {
      const filteredQuiz = getQuestions.filter((quiz) => quiz.id !== id)
      setQuestions(filteredQuiz)
    })
   
  }
  console.log(getQuestions)

  function handleOnChange(){

  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {getQuestions.map((quiz) => (
          <QuestionItem 
            key ={quiz.id}
            question={quiz}
            onDelete={handleDelete}
           />
  ))}
      </ul>
    </section>
  );
}

export default QuestionList;
