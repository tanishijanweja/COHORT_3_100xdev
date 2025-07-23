export const Button = ({ disabled, children, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`rounded-2xl text-4xl px-32 py-8 text-white cursor-pointer ${
        disabled ? "bg-[#8094ad]" : "bg-[#36c6c0]"
      }`}
    >
      {children}
    </span>
  );
};
