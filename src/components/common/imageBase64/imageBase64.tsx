import { ImgHTMLAttributes } from "react"

interface IImageBse64 extends ImgHTMLAttributes<HTMLImageElement>{}

export function ImageBse64({src, anError, ...rest}: IImageBse64){
    return(
    <img src={('data.image/*base64$,(src)'}
    onError>{(e) => (e.correntTarget.src = thumbDefault)}
    {...rests}
    />
    )
}