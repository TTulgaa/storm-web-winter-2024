const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    imageUrl: 'https://i.imgur.com/MK3eW3As.jpg'
    }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: '',
    imageUrl: 'https://i.imgur.com/mynHUSas.jpg'
    }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    imageUrl: 'https://i.imgur.com/bE7W1jis.jpg'
    }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    imageUrl: 'https://i.imgur.com/IOjWm71s.jpg'
    }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    imageUrl: 'https://i.imgur.com/lrWQx8ls.jpg'
    }
    ];
    console.log('Hello'.indexOf('He'))
   

    const Scientists= () => {
        return(
            <>
            <h1>Scientists</h1>
            <ul>
                {
                    people.map((person, index)=>(
                        <li key={index}>
                            <h3>{person.name}</h3>
                            <p>{person.profession}</p>
                            <img src={person.imageUrl} alt={person.name} />
                        </li>
                    ))
                }
            </ul> 
            </>
        )
    }
    const onlyMathematicians = people.filter((person) => person.profession === "mathematician")
    const Mathematician = () => {
        return(
            <>
            <h1>Mathematicians</h1>
            <ul>
                {
                    onlyMathematicians.map((m, index)=>(
                        <li key={index}>
                            <h3>{m.name}</h3>
                            <p>{m.profession}</p>
                            <img src={m.imageUrl} alt={m.name} />
                        </li>
                    ))
                }
            </ul> 
            </>
        )
    }
    const onlyChemist = people.filter((person) => person.profession === 'chemist')
    const Chemist= () => {
        return(
            <>
            <h1>Chemist</h1>
            <ul>
                {
                    onlyChemist.map((c, index)=>(
                        <li key={index}>
                            <h3>{c.name}</h3>
                            <p>{c.profession}</p>
                            <img src={c.imageUrl} alt={c.name} />
                        </li>
                    ))
                }
            </ul> 
            </>
        )
    }
    const onlyPhysicist = people.filter((person) => person.profession === 'physicist')
    const Physicist= () => {
        return(
            <>
            <h1>Physicist</h1>
            <ul>
                {
                    onlyPhysicist.map((c, index)=>(
                        <li key={index}>
                            <h3>{c.name}</h3>
                            <p>{c.profession}</p>
                            <img src={c.imageUrl} alt={c.name} />
                        </li>
                    ))
                }
            </ul> 
            </>
        )
    }
    const onlyAstrophysicists = people.filter((person) => person.profession === "astrophysicist")
    const Astrophysicist = () => {
        return(
            <>
            <h1>Astrophysicists</h1>
            <ul>
                {
                    onlyAstrophysicists.map((m, index)=>(
                        <li key={index}>
                            <h3>{m.name}</h3>
                            <p>{m.profession}</p>
                            <img src={m.imageUrl} alt={m.name} />
                        </li>
                    ))
                }
            </ul> 
            </>
        )
    }




    export {Scientists, Mathematician , Chemist, Physicist, Astrophysicist}