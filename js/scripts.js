function getAkanName(){
    var days = ["Sunday", "Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"]
    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa", "Abenaa","Akua","Yaa","Afua", "Ama"]
    var dayOfBirth = document.getElementById("D.O.B").value;
    var myGender = document.getElementById("Gender").value;
    var birthday = new Date(D.O.B);
    var dayOfTheWeek = birthday.getDay();
    var CC,MM,YY;
    if(!!document.valueOf()) {
        YY = d.getFullYear();
        MM = d.getMonth();
        CC = d.getDate ();    
    }else {    
    var daycalculate = parseInt(((CC/4)-2*CC-1)+(5*YY/4)+(26*(MM/10))+DD)%7;
    console.log(daycalculate);
    }
    if(document.getElementById('maleAkanNames').checked){
        myGender = document.getElementById('maleAkanNames').value;
        alert("You were born on"+ dayOfTheWeek[daycalculate]+ "Your name is"+ maleAkanNames[daycalculate])
    }
    else{
    (myGender = document.getElementById('femaleAkanNames').value;
        alert("You were born on"+ dayOfTheWeek[daycalculate]+ "Your name is"+ femaleAkanNames[daycalculate])
    }
    document.getElementById('Findings').innerHTML = dayOfTheWeek[daycalculate];
}

