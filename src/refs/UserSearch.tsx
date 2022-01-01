import { useState, useRef, useEffect } from "react";

const USERS = [
  {
    name: "sarah",
    age: 20,
  },
  {
    name: "mike",
    age: 20,
  },
  {
    name: "joe",
    age: 20,
  },
];

interface IUser {
  name: string;
  age: number;
}

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<IUser | undefined>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onClick = () => {
    const user = USERS.find((user: IUser) => user.name === name);
    setUser(user);
    setName("");
  };

  return (
    <div>
      <h2>Search User</h2>

      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={onClick}> Find User</button>

      {user ? (
        <div>
          <h3>Found user</h3>
          <p>Name: {user.name}</p>
        </div>
      ) : null}
    </div>
  );
};

export default UserSearch;
