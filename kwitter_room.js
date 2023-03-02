const firebaseConfig = {
  apiKey: "AIzaSyATraR9E0CjGN6NKXVJnYZkFJBHNklr0n8",
  authDomain: "kwitter-29c5e.firebaseapp.com",
  databaseURL: "https://kwitter-29c5e-default-rtdb.firebaseio.com",
  projectId: "kwitter-29c5e",
  storageBucket: "kwitter-29c5e.appspot.com",
  messagingSenderId: "1076724121193",
  appId: "1:1076724121193:web:3335feaaddb668f6126cf8"
};


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

  const app = initializeApp(firebaseConfig);

  Username = localStorage.getItem("Username");

document.getElementById("Username").innerHTML = "Welcome " + Username + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
