import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IconBaseProps } from "react-icons";

const selector = {
  EyeOpen: IoEyeOffOutline,
  EyeClose: IoEyeOutline,
  QuestionMark: AiFillQuestionCircle,
};

interface Props extends IconBaseProps {
  iconType: keyof typeof selector;
}

const IconSelector = ({ iconType, ...props }: Props) => {
  const IconToRender = selector[iconType];
  return <IconToRender {...props} />;
};

export default IconSelector;
