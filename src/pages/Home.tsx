import React from "react";
import { useAppDispatch } from "../state/store";
import { appLogout } from "../state/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { AuthRoute } from "../constants/Routes";
const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      Home
      <p>Hoşgeldiniz!</p>
    </div>
  );
};

export default Home;
