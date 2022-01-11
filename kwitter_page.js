
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
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message= message_data['message'];
like= message_data['like'];
name_with_tag=  "<h4>"+ name + "<img class='user_tick' src= 'tick.png'>  </h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thmubs-up'> like: " + like + "</span> </button> <hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send()
{
 msg= document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
  name: user_name,
  message: msg,
  like:0     
 });     
}

function updateLike(message_id)
{
console.log("clicked on like button- " + message_id);
button_id = message_id;
likes=document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
like : updated_likes      
});
}
function logOut()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location.replace("index.html");     
}