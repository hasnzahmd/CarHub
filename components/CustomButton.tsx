'use client';
import { CustomButtonProps } from '@/types';

const CustomButton = (props:CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${props.containerStyles}`}
        onClick={props.handleClick}
    >
    <span className={`flex-1`}>
        {props.title}
    </span>
    </button>
  )
}

export default CustomButton
