import './Button.css';

const Buttom = ({id, text, action}) => {
  const haldleAction = (e) => {
    action(e);
  }
  return (
    <button id={id} onClick={haldleAction}>{text}</button>
  )
}

export default Buttom