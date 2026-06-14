function MyButton({count, onClick, className}) {
  return (
    <button className={className} onClick={onClick}>
      Clicked {count} times
    </button>
  );
};

export default MyButton;