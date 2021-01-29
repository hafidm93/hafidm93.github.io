// Greeting
let hour = new Date().getHours(); 
let greeting;
    if (hour < 10) {
    greeting = "🌅 Selamat Pagi";
    } else if (hour < 14){
    greeting = "🌤️ Selamat Siang";
    
    }
    else if (hour < 18) { 
        greeting = "🌇 Selamat Sore";
    }
    else {
        greeting = "🌙 Selamat Malam"
    }
    console.log(greeting)

    // toggle menu
    function toggleMenu() {
        let nav = document.getElementById("navigasi");
        if (nav.className === "topmenu") {
        nav.className += " navmob";
        } else {
        nav.className = "topmenu";
    }