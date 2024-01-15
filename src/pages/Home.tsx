import React from "react";
import { useAppDispatch } from "../state/store";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="bg">
      <p>Hoşgeldiniz!</p>
    </div>
  );
};

export default Home;
