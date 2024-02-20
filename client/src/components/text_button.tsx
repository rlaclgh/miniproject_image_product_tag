interface TextButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

const TextButton = (props: TextButtonProps) => {
  const { text, onClick, disabled } = props;
  return (
    <>
      <button
        className={`h-12 rounded-lg flex justify-center items-center w-full ${
          disabled ? "bg-slate-300" : "bg-blue"
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        <div className="text-white text-sm">{text}</div>
      </button>
    </>
  );
};

export default TextButton;
