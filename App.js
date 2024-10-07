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
<div>
  <label>
    Tiempo para presentación (min):
    <input
      type="number"
      value={timeForPresentation / 60}
      onChange={(e) => setTimeForPresentation(e.target.value * 60)}
    />
  </label>

  <label>
    Tiempo para preguntas (min):
    <input
      type="number"
      value={timeForQuestions / 60}
      onChange={(e) => setTimeForQuestions(e.target.value * 60)}
    />
  </label>
</div>
export default App;
