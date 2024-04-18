import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import react-loading-skeleton/dist/Skeleton.css";

export function skeleton(props:SkeletonProps){
    return<skeletonLib{...props}/>
}
