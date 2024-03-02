import { AlertButton } from "./Buttons";


export default function Toolbar (){
    return(
        <>
        <AlertButton message="loading">Play movie</AlertButton>
        <AlertButton message="Uploading">Upload Image</AlertButton>
        </>
    )
}