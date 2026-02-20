import { useState } from "react";

export default function WombatToday() {
  const [choice, setChoice] = useState<"Y" | "N">("Y");

  return (
    <div>
      <h2>Wombats or no?: {choice === "Y" ? "Wombats" : "noWombats"}</h2>

      <button onClick={() => setChoice(choice === "Y" ? "N" : "Y")}>
        Switch to {choice === "Y" ? "Wombats" : "noWombats"}
      </button>
    </div>
  );
}