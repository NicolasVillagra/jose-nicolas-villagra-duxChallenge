import React from 'react'
import Image from 'next/image'; // 

interface ImagesComponentProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  }
  
  const ImagesComponent: React.FC<ImagesComponentProps> = ({src,alt,width,height,className}) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`p-button-text p-button-rounded ${className}`}
        />
    );
  };
  
  export default ImagesComponent;