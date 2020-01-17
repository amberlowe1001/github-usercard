/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const followersArray = ['jvillalp', 'mrzacsmith', 'caw44200'];

function createCard(imgUrl) {
  const newCard = document.createElement('div'),
    newImage = document.createElement('img'),
    newUserName = document.createElement('h3'),
    newCardInfo = document.createElement('div'),
    newLocation = document.createElement('p'),
    newProfile = document.createElement('p'),
    newAddress = document.createElement('a'),
    newUserFollowers = document.createElement('p'),
    newUserFollowing = document.createElement('p'),
    newBioUsers = document.createElement('p')

  newCard.append(newImage);

  const card = document.querySelector('.cards');


  newUserName.textContent = 'name: Username';
  newLocation.textContent = 'user: location';
  newProfile.textContent = 'user: profile';
  newAddress.textContent = 'user: address';
  newUsersFollowers = 'user: following';
  newUsersFollowers = 'users:followers';
  newBioUsers = 'users:bio';

  newImage.src = imgUrl;
  newImage.classList.add('card');
  newCard.classlist.add('card');
  newCardInfo.classlist.add('card-info')
  newUserName.classlist.add('card-info');
  newProfile.classList.add('card-info')
  return newCard;

}


axios.get('https://api.github.com/users/' + user)
  .then(response => {
    console.log(response);

  })