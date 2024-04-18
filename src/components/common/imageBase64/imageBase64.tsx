import { ImgHTMLAttributes } from "react"
import thumbDefaut from '../../../assets/thumb-default.jpg'

interface IImageBse64 extends ImgHTMLAttributes<HTMLImageElement>{}

export function ImageBse64({src, onError, ...rest}: IImageBse64){
    return(  <img 
    {...rest}
    src={`data:image/*;base64,${src}`}
    onError={(e) => {onError && onError(e)
    e.currentTarget.src = thumbDefaut}}
  
    />
    )
}