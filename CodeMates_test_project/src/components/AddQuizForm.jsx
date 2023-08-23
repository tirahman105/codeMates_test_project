import React, { useState } from 'react';
import axios from 'axios';

const AddQuizForm = () => {
  const [question, setQuestion] = useState('What is the capital of France?');
  const [choices, setChoices] = useState(['London', 'Berlin', 'Paris', 'Madrid']);
  const [correctAnswer, setCorrectAnswer] = useState('Paris');
  
  const handleChoiceChange = (index, value) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    setChoices(updatedChoices);
  };

  const handleAddQuiz = async () => {
    try {
      const quizData = {
        question,
        choices,
        correctAnswer,
      };

      // Send the quiz data to the backend API for storage
      const response = await axios.post('/api/add-quiz', quizData);
      console.log(response.data); // Assuming the API returns a response

      // Clear the form after successful submission
      setQuestion('');
      setChoices(['', '', '', '']);
      setCorrectAnswer('');
    } catch (error) {
      console.error('Error adding quiz:', error);
    }
  };

  return (
    <div>
      <h2>Add Quiz</h2>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      {choices.map((choice, index) => (
        <div key={index}>
          <label>Choice {index + 1}:</label>
          <input
            type="text"
            value={choice}
            onChange={(e) => handleChoiceChange(index, e.target.value)}
          />
        </div>
      ))}
      <div>
        <label>Correct Answer:</label>
        <select value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)}>
          <option value="">Select Correct Answer</option>
          {choices.map((choice, index) => (
            <option key={index} value={choice}>
              {choice}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleAddQuiz}>Add Quiz</button>
    </div>
  );
};

export default AddQuizForm;
