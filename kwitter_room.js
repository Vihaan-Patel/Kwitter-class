
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAHTNtCakWD04DJtFvygZ9cbRQoEWqvkqk",
      authDomain: "kwitter-dc68a.firebaseapp.com",
      databaseURL: "https://kwitter-dc68a-default-rtdb.firebaseio.com",
      projectId: "kwitter-dc68a",
      storageBucket: "kwitter-dc68a.appspot.com",
      messagingSenderId: "295286954100",
      appId: "1:295286954100:web:2dc330e8a3639295d35921",
      measurementId: "G-C5G8BRY98Z"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

function addRoom()
{
 room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
 purpose : "adding Room Name"     
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Roomname-" + Room_names);
row = "<div class= 'room_name' id= "+Room_names+" onclick='RedirectToRoomName(this.id)'>#" + Room_names +  "</div> <hr>";
document.getElementById("output").innerHTML += row;     
//End code
      });});}
getData();
function RedirectToRoomName()
{
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location="kwitter_page.html"

}

function logOut()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location= "index.html";     
}