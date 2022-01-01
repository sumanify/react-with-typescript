import { useState } from "react";

const GuestList: React.FC = () => {
  const [value, setValue] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setValue("");
    setGuests([...guests, value]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((name) => (
          <li>{name}</li>
        ))}
      </ul>

      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
