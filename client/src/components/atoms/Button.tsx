import React from 'react'
import { Button } from 'primereact/button';

interface ButtonProps {
    label: string;
    icon: string;
    className: string;
    onClick?: () => void;
    severity: 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'help' | 'contrast' | undefined;
  }
  
  const ButtonComponent: React.FC<ButtonProps> = ({ label, icon, className,onClick ,severity }) => {
    return (
        <Button
            label={label}
            icon={icon}
            className={` p-button-rounded${className}`}
            onClick={onClick}
            severity={severity} 
           
        />
    );
  };
  
  export default ButtonComponent;