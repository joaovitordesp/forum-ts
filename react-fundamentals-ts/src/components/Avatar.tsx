import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
  src: string;  
  alt?: string; 
 // outros props podem ser adicionados aqui, como title, etc.  
 //props são como variáveis que são passadas para um componente
}

export function Avatar({ hasBorder = true, ...props } : AvatarProps) { //desestruturação de objeto
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}