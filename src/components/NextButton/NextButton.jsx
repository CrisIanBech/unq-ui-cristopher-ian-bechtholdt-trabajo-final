import RightIcon from "../../assets/right.svg";
import RoundButton from "../RoundButton/RoundButton";
import "./NextButton.css";

const NextButton = ({ onClick }) => {
  return (
    <RoundButton onClick={onClick} className="carrousel-button right">
      <RightIcon className={"next-button"} width={98} height={98} />
    </RoundButton>
  );
};

export default NextButton;
