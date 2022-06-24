//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyDfu23HVYzcR79-r6ChBV93be1C2-E4Y_A",
    authDomain: "kwitter-d5284.firebaseapp.com",
    databaseURL: "https://kwitter-d5284-default-rtdb.firebaseio.com",
    projectId: "kwitter-d5284",
    storageBucket: "kwitter-d5284.appspot.com",
    messagingSenderId: "342164991252",
    appId: "1:342164991252:web:a3dc9043ccd3659d4be601"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}