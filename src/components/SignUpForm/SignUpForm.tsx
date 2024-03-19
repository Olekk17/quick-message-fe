import { useState } from "react";
import { GreyButton } from "../common/GreyButton/GreyButton";
import "./SignUpForm.scss";
import { verifyEmail, verifyPassword } from "../../helper";
import { notification } from "antd";

export const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "email" | "pass" | "confPass" | "username"
  ) => {
    if (key === "email") {
      setEmail(e.target.value);
    }
    if (key === "pass") {
      setPassword(e.target.value);
    }
    if (key === "confPass") {
      setConfirmPassword(e.target.value);
    }
    if (key === "username") {
      setUsername(e.target.value);
    }
  };

  const onSubmit = () => {
    if (!verifyEmail(email)) {
      notification.error({
        message: "Invalid email",
        placement: "bottomRight",
      });
      return;
    }
    if (!password || !confirmPassword) {
      notification.error({
        message: "Password cannot be empty",
        placement: "bottomRight",
      });
      return;
    }
    if (password !== confirmPassword) {
      notification.error({
        message: "Password does not match",
        placement: "bottomRight",
      });
      return;
    }
    if (!verifyPassword(password)) {
      notification.error({
        message: "Password is not strong enough",
        placement: "bottomRight",
      });
      return;
    }

  };

  return (
    <div className="sign-up-form">
      <h1>Sign Up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="input-container">
          <label htmlFor="email">Username:</label>
          <input
            placeholder="veryCoolGuy2010"
            type="username"
            id="username"
            value={username}
            onChange={(e) => handleChange(e, "username")}
            autoComplete="new-username"
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="example@example.com"
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleChange(e, "email")}
            autoComplete="new-email"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password: </label>
          <input
            placeholder="vErYuNiQuE!@#99"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleChange(e, "pass")}
            autoComplete="new-password"
          />
        </div>
        <div className="input-container">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            placeholder="vErYuNiQuE!@#99"
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => handleChange(e, "confPass")}
            autoComplete="new-password"
          />
        </div>
        <div className="button-container">
          <GreyButton text="SIGN UP" />
        </div>
      </form>
    </div>
  );
};
