import Card from "./card/Card"



export default function LifeStyle(){
    return(
        <div>
            <h1>LIFESTYLE</h1>
            <div className="flex gap-2 items-center">
               <Card/>
               <Card/>
               <Card/>
            </div>
        </div>
    )
}