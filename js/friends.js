/*with arrow function*/

const friends = () => {
    fetch('https://randomuser.me/api/?results=1')
        .then(response => response.json())
        .then(data => displayFriends(data))
}
friends()
const displayFriends = (data) => {
    console.log(data);

    const friendsContainer = document.getElementById('friend-container')
    const friends = data.results;
    for (const friend of friends) {

        const p = document.createElement('p');
        p.innerText = `password:${friend.name.first}
          password:${friend.login.password} 

        `;
        friendsContainer.appendChild(p);
    }
}