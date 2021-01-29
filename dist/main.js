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

    function toggleSocial() {
        const toggle = document.getElementById("socialMedia");
        if (toggle.className === "hidden") {
            toggle.className += "navmob";
            } else {
                toggle.className = "hidden";
            }
        }