const People = () => {
    const people = [
        "Creola Katherine Johnson: mathematician",
        "Mario José Molina-Pasquel Henríquez: chemist",
        "Mohammad Abdus Salam: physicist",
        "Percy Lavon Julian: chemist",
        "Subrahmanyan Chandrasekhar: astrophysicist",    
    ]
    return (
<>
<h2>People</h2>
<ul>
    {
        people.map((person, index)=>(
            <li key= {index}>{person}</li>
        ))
    }
</ul>
</>

    )
}
export default People