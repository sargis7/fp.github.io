let users = [
    {
        name:"Lionel Messi",
        country:"Argentina",
        age:36,
        club:"PSG"
        
    },
    {
        name:"Cristiano Ronaldo",
        country:"Portugalia",
        age:37,
        club:"Manchester United"
    },
    {
        name:"Luca Modrich",
        country:"Croatia",
        age:37,
        club:"Real Matrid"
    },
    {
        name:"Erling Haaland",
        country:"Norway",
        age:22,
        club:"Manchester Citi"
        
    },
    {
        name:"Kiliano Mbape",
        country:"Franch",
        age:24,
        club:"PSG"
        
    },
    {
        name:"Neymar",
        country:"Brazliia",
        age:30,
        club:"PSG"
        
    }
];

let usersBox = document.querySelector("#users-box");
let searchButton = document.querySelector("#search-button");
let searchText= document.querySelector("#search-text");


searchButton.addEventListener("click",function(){
    let filteredUsers = users.filter(function(user){
        return user.name.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase());
    })
    usersBox.innerHTML = "";
    for (user of filteredUsers){
        let userElement = document.createElement("DIV");
        userElement.classList.add("userclass");
        userElement.innerHTML = `
        <h2>${user.name}</h2>
        <p>Country: ${user.country}</p>
        <p>Age: ${user.age}</p>
        <p>Club: ${user.club}</p>
        `;

        usersBox.appendChild(userElement);
    }

});

for (user of users)
{
    let userElement = document.createElement("DIV");
    userElement.classList.add("userclass");
    userElement.innerHTML = `
    <h2>${user.name}</h2>
    <p>Country: ${user.country}</p>
    <p>Age: ${user.age}</p>
    <p>Club: ${user.club}</p>
   
    `;

    usersBox.appendChild(userElement);
}