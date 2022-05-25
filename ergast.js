
submitButton()

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log(document.getElementsByName("year")[0].value)
    console.log(document.getElementsByName("round")[0].value)
    doAPICall(document.getElementsByName("year")[0].value,document.getElementsByName("round")[0].value)
}

function submitButton(){
    let button = document.getElementById('button');
    button.addEventListener('click', (e)=>handleSubmit(e) )
}

async function doAPICall(year, round){
    let result = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    console.log(result)
    data = result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    console.log(data)

    let drivers = []
    for (driver of data){
        let racerdict = {}
        racerdict = {
            "lastname": driver.Driver.familyName,
            "firstname": driver.Driver.givenName,
            "position": driver.position,
            "wins": driver.wins,
            "dob": driver.Driver.dateOfBirth,
            "nation": driver.Driver.nationality,
            "constructor": driver.Constructors[0].name
        }
        drivers.push(racerdict)

    }
    console.log(drivers)
    for( driver of drivers){
        let tbody=document.getElementsByTagName('tbody')[0];
        tr = document.createElement('tr');
        tbody.appendChild(tr);

        th=document.createElement('th');
        th.scope="row";
        th.innerHTML=driver.firstname
        tr.appendChild(th);

        td=document.createElement('td');
        td.innerText=driver.lastname;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=driver.position;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=driver.wins;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=driver.dob;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=driver.nation;
        tr.appendChild(td);

        td=document.createElement('td');
        td.innerText=driver.constructor;
        tr.appendChild(td);

       
    }
    
}


