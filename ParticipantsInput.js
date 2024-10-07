import React, { useState } from "react";

function ParticipantsInput({ setParticipants }) {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    setList([...list, name]);
    setName("");
    setParticipants([...list, name]);
  };

  return (
    <div>
      <h2>Agregar Participantes</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Agregar</button>
      <ul>
        {list.map((participant, index) => (
          <li key={index}>{participant}</li>
        ))}
      </ul>
    </div>
  );
}

export default ParticipantsInput;
