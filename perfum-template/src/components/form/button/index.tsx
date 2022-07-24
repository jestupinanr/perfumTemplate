export const Button = ({
  type = 'button',
  className,
  onClick,
  children,
  rounded,
  padding
}: ButtonProps) => (
    <button
      type={type}
      onClick={onClick}
      className={`
        flex items-center justify-center 
        ${padding ? padding : 'px-5 py-2.5'} cursor-pointer
        focus:outline-none
       ${className} ${rounded ? 'rounded-full' : 'rounded-xl'}
      `}
    >
      {children}
    </button>
);

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  rounded?: boolean;
  onClick?: () => void;
  className?: string;
  padding? : string;
}

export default Button;
