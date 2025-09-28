export function udateGreeting(){
    const now = new Date();
    const hours = now.getHours();
    let greetings = "";
  if (hours >= 5 && hours < 12) {
    greetings = "morning friend!,meet";
  } else if (hours >= 12 && hours < 17) {
    greetings = "afternoon friend!,meet";
  } else if(hours >=17 && hours <22) {
    greetings = "evening friend!,meet";
  }else{
    greetings="nights friend!,meet"
  }
  document.getElementById('greetings').innerHTML=greetings;
  }