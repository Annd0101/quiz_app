import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";
import { useNavigate } from "react-router-dom";
import "../styles/Main.css";
import { getServerData } from "../helper/helper";
export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    getServerData(" https://quiz-app-71pc.onrender.com/api/result", (res) => {
      setData(res);
    });
  }, []);
  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
    const check = data.some((item) => item.username === inputRef.current.value);
    if (check) {
      setChecked(true);
      console.log(checked);
      alert("Your username has already existed!");
    } else {
      navigate("/quiz");
    }
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <ol>
        <li>You will be asked 5 questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>
          Each question has three options. You can choose only one options.
        </li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form id='form'>
        <input
          ref={inputRef}
          className='userid'
          type='text'
          placeholder='Username*'
        />
      </form>

      <div className='start'>
        <button className='btn' onClick={startQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}
