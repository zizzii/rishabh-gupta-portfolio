import React, { useState, ImgHTMLAttributes } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      {...props}
      loading="lazy"
      decoding="async"
      className={`${className} transition-opacity duration-[2000ms] ease-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      onLoad={(e) => {
        setIsLoaded(true);
        if (props.onLoad) {
          props.onLoad(e);
        }
      }}
    />
  );
};

export default LazyImage;