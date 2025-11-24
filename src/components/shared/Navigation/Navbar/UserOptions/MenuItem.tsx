interface MenuItemProps {
  logo: React.ReactNode;
  label: string;
  onClick?: () => void;
  round?: boolean;
  attributes?: React.ButtonHTMLAttributes<HTMLDivElement>;
}

const MenuItem: React.FC<MenuItemProps> = ({
  logo,
  label,
  onClick,
  round = false,
  attributes,
}) => {
  return (
    <div
      className={`flex items-center hover:bg-slate-200 dark:hover:bg-red-950 p-3 cursor-pointer ${
        round && "rounded-lg"
      }`}
      onClick={onClick}
      {...attributes}
    >
      {logo}
      {label}
    </div>
  );
};

export default MenuItem;
