import React, { useState } from "react";
import ParticipantsInput from "./ParticipantsInput";
import Timer from "./Timer";
import ParticipantDisplay from "./ParticipantDisplay";
import ControlButtons from "./ControlButtons";

function App() {
  const [participants, setParticipants] = useState([]);
  const [currentParticipant, setCurrentParticipant] = useState(null);
  const [timeForPresentation, setTimeForPresentation] = useState(5 * 60); // 5 minutes
  const [timeForQuestions, setTimeForQuestions] = useState(3 * 60); // 3 minutes

  const shuffleParticipants = () => {
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    setParticipants(shuffled);
  };

  const nextParticipant = () => {
    if (participants.length === 0) {
      setCurrentParticipant(null);
      alert("Reunión terminada");
    } else {
      setCurrentParticipant(participants.shift());
    }
  };

  return (
    <div className="App">
      <h1>Reunión Semanal</h1>
      <ParticipantsInput setParticipants={setParticipants} />
      {currentParticipant && (
        <>
          <ParticipantDisplay participant={currentParticipant} />
          <Timer time={timeForPresentation} />
          <ControlButtons onNext={nextParticipant} />
        </>
      )}
    </div>
  );
}

export default App;
