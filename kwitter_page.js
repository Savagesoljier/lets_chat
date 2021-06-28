var firebaseConfig = {
      apiKey: "AIzaSyBTO0Qdk3Z46q2QlNfPXjLUfPfcYFIZhas",
      authDomain: "kwitterwastaken.firebaseapp.com",
      databaseURL: "https://kwitterwastaken-default-rtdb.firebaseio.com",
      projectId: "kwitterwastaken",
      storageBucket: "kwitterwastaken.appspot.com",
      messagingSenderId: "305436925308",
      appId: "1:305436925308:web:254d4a2d265b11c956d8f9",
      measurementId: "G-4JTJ1KY1MF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("usernam3");
room_name = localStorage.getItem("roomnam3");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
