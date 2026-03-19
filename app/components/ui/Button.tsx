"use client";

interface ButtonProps {
  userId: number;
}
const Button: React.FC<ButtonProps> = ({userId}) => {
  const handleClick = () => {
    alert(`User id: ${userId}`);
  };
  return (
    <div>
      <button onClick={handleClick} className="border p-1 rounded-lg mx-2">
        Profile user
      </button>
    </div>
  );
};

export default Button;
