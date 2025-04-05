function ShowMonsters({monsterForChild}){
    console.log(monsterForChild)
    return(
        <div>
            <h1> Cats are the real monsters.</h1>

            {monsterForChild.map(monster=>  (
                <div key={monster.id} style={{ display: "flex", padding:"20px"}}>                  
                     <img alt={`Monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set4&size=180x180`} />
                     <h2 style={{padding:"30px"}}> {monster.name} </h2>                  
                </div>
            ))}
        </div>
    )
}

export default ShowMonsters;