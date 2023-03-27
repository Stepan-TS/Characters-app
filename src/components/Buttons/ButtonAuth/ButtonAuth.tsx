import './ButtonAuth.scss';

type Props = {
  ButtonAuthText: string;
  authing?: boolean;
}

const ButtonAuth: React.FC<Props> = (props) => {
  const {
    ButtonAuthText,
    authing,
  } = props;
    
  return (
    <button 
      className='button-auth'
      disabled={authing}
    >
      {ButtonAuthText}
    </button>
  );
};

export default ButtonAuth;