// import React, {useContext } from "react";
// import { GameContextProvider } from "../context/GlobalState";

// export const Game=() =>{

//   return (
//     <div className="wrapper">
//       <div className="game-wrapper">
//         <button className="button">Category</button>
//         <button className="button" data-toggle="modal">
//           Category
//         </button>
//         <button className="button" data-toggle="modal">
//           Category
//         </button>
//         <button className="button" data-toggle="modal">
//           Category
//         </button>

//         {questions.map(
//           ({ id, question, title, answers, answer, score }, index) => (
//             <button
//               key={id}
//               className="game-button"
//               data-toggle="modal"
//               data-target="#exampleModal"
//               // disabled={wasClicked}
//               onClick={() => {
//                 setTimeLeft(15);
//                 setTitle(title);
//                 setQuestion(question);
//                 setAnswers(answers);
//                 setCorrectAnswer(answer);
//                 setQuestionScore(score);
//               }}
//             >
//               {score}
//             </button>
//           )
//         )}
//       </div>

//       <div className="card-group">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">{playerName}</h5>
//             <p className="card-text">{score}</p>
//             <button type="button" className="btn btn-danger">
//               Give Up
//             </button>
//           </div>
//         </div>
//       </div>

//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalLabel"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 {timeLeft} {questiontitle}
//               </h5>
//             </div>
//             <div class="modal-body">{questiondata}</div>

//             {answers.map((answer) => (
//               <button
//                 key={answer}
//                 data-dismiss={
//                   answer === correctAnswer || answer !== correctAnswer
//                     ? "modal"
//                     : null
//                 }
//                 aria-label={
//                   answer === correctAnswer || answer !== correctAnswer
//                     ? "modal"
//                     : null
//                 }
//                 onClick={() => {
//                   if (answer === correctAnswer) {
//                     setScore(questionScore + score);
//                   } else if (answer !== correctAnswer) {
//                     setScore(score - questionScore);
//                   }
//                   // console.log(setScore(questionScore + score));
//                   setCount(questionCount + 1);
//                   if (questionCount === questions.length) {
//                     history.push("/highscores");
//                   }
//                 }}
//               >
//                 {answer}
//               </button>
//             ))}

//             <div class="modal-footer"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Game;
