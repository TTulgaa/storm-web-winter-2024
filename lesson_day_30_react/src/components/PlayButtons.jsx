const Button = ({onClick, children}) => {
    return <button onClick={onClick}>{children}</button>
}
const PlayButton = ({movieName})=>{
    function handlePlayClick(){
        alert(`Playing ${movieName}!`)
    }
    return <Button onClick={handlePlayClick}>Play</Button>
}
export default PlayButton