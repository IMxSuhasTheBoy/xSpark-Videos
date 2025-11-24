"use client";

import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  ValidationRule,
} from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string; // input field type
  disabled?: boolean; // disabled while loading data
  required?: boolean;
  register: UseFormRegister<FieldValues>; // react hook form
  errors: FieldErrors;
  pattern?: ValidationRule<RegExp>; // for live user input validation
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
  pattern,
  className,
}) => {
  return (
    <div>
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required, pattern })}
        type={type}
        placeholder=" "
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
