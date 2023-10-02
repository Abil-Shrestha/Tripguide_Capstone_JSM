import { ReactNode } from 'react';

type CustomButtonProps ={
  styles?: string;
  children: ReactNode;
  handleClick: () => void;
}

const Button = ({ styles, children, handleClick }: CustomButtonProps) => (
  <button type='button' className={`flex px-4 py-2 text-base w-full justify-center items-center rounded-lg shadow-sm focus:outline-none border border-transparent text-white ${styles}`} onClick={handleClick}>
    {children}
  </button>
);

export default Button;
