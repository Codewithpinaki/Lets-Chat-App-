var firebaseConfig = {
    apiKey: "AIzaSyD86O9iolSE0frqdY5y2X8QPh0JlVGmN8k",
    authDomain: "kwitter-20500.firebaseapp.com",
    databaseURL: "https://kwitter-20500-default-rtdb.firebaseio.com",
    projectId: "kwitter-20500",
    storageBucket: "kwitter-20500.appspot.com",
    messagingSenderId: "217344832662",
    appId: "1:217344832662:web:bc4e7c168adf8ea228feb7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
    
  }

  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  }