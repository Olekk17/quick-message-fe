import "./GreyButton.scss";

type Props = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export const GreyButton: React.FC<Props> = ({
  disabled,
  text,
  onClick,
  className,
}) => {
  return (
    <button
      disabled={!!disabled}
      onClick={onClick}
      className={"grey-button custom-button" + (className ? ` ${className}` : "")}
    >
      {text}
    </button>
  );
};
