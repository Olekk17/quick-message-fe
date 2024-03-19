import { HomeOutlined } from "@ant-design/icons";
import "./Header.scss";
import { useNavigate } from "react-router";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="header">
      <HomeOutlined onClick={() => navigate('/')}/>
    </div>
  );
};
