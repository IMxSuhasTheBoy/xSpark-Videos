"use client";

interface IconButtonProps {
  attributes?: React.ButtonHTMLAttributes<HTMLDivElement>;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const IconButton: React.FC<React.PropsWithChildren<IconButtonProps>> = ({
  attributes,
  children,
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`cursor-pointer rounded-full p-2 dark:hover:bg-red-950 hover:bg-slate-200 ${className}`}
      onClick={onClick}
      {...attributes}
    >
      {children}
    </div>
  );
};

export default IconButton;
