import { useState } from "react";
import { GreyButton } from "../../common/GreyButton/GreyButton";
import "./HomeScreen.scss";
import { SignUpForm } from "../../SignUpForm/SignUpForm";

export const HomeScreen: React.FC = () => {
  const [alreadySignedUp, setAlreadySignedUp] = useState(false);

  const toggleAlreadySignedUp = () => {
    setAlreadySignedUp((prev) => !prev);
  };

  const renderButton = () => {
    if (alreadySignedUp) {
      return <GreyButton text="LOG IN" onClick={toggleAlreadySignedUp} />;
    }

    return <GreyButton text="SIGN UP" onClick={toggleAlreadySignedUp} />;
  };

  return (
    <div className="home-screen">
      <h1>Welcome to Quick Message</h1>
      {renderButton()}
      <SignUpForm />
    </div>
  );
};
