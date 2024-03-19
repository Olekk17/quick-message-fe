import { Header } from "../../Header/Header";
import { GreyButton } from "../../common/GreyButton/GreyButton";
import "./SignUpSuccessScreen.scss";
import { useNavigate } from "react-router-dom";

export const SignUpSuccessScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="signup-success-container">
        <h1>Your account has been created successfully!</h1>
        <h2>Please, check your inbox to confirm your email</h2>
        <h4>OR</h4>
        <GreyButton text="BACK TO HOMEPAGE" onClick={() => navigate("/")} />
      </div>
    </>
  );
};
