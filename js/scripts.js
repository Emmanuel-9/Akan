function getAkanName(){
    var days = ["Sunday", "Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"]
    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa", "Abenaa","Akua","Yaa","Afua", "Ama"]
    var dayOfBirth = document.getElementsByid("Day").value;
    var DD = parseInt(dayOfBirth);
    var myGender = document.getElementsByid("gender").value;
    var monthOfBirth = document.getElementsByid("month").value;
    var MM =parseInt(monthOfBirth);
    var yearOfBirth = document.getElementsByid("year").value;
    var YY = parseInt(yearOfBirth%100);
    var CC = parseInt(Math.round(YY/100+1));
    var dayCalculator = parseInt(((CC/4)-2*CC-1)+(5*YY/4)+(26*(MM/10))+DD)%7;
};


if(document.getElementsByid("gender").checked){
    var gender = male;
}else{
    var gender = female;
}
if (DD < 1 || DD > 31){
    alert("Please,take a look at your date!")
}else if (MM < 1 || MM > 12 && MM == 2 && DD > 29){
    alert("Check the month of birth")

}else if (Math.round(dayCalculator) == 0 && gender == "male"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[0] + " with an Akan name of " + maleAkanNames[0]);
}else if (Math.round(dayCalculator) == 1 && gender == "male"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[1] + " with an Akan name of " + maleAkanNames[1]);
}else if (Math.round(dayCalculator) == 2 && gender == "male"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[2] + " with an Akan name of " + maleAkanNames[2]);
}else if (Math.round(dayCalculator) == 3 && gender == "male"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[3] + " with an Akan name of " + maleAkanNames[3]);
}else if (Math.round(dayCalculator) == 4 && gender == "male"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[4] + " with an Akan name of " + maleAkanNames[4]);
}else if (Math.round(dayCalculator) == 0 && gender == "male"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[0] + " with an Akan name of " + maleAkanNames[5]);
}else if (Math.round(dayCalculator) == 0 && gender == "male"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[0] + " with an Akan name of " + maleAkanNames[6]);
}else if (Math.round(dayCalculator) == 0 && gender == "female"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[0] + " with an Akan name of " + femaleAkanNames[0]);
}else if (Math.round(dayCalculator) == 1 && gender == "female"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[1] + " with an Akan name of " + femaleAkanNames[1]);
}else if (Math.round(dayCalculator) == 2 && gender == "female"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[2] + " with an Akan name of " + femaleAkanNames[2]);
}else if (Math.round(dayCalculator) == 3 && gender == "female"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[3] + " with an Akan name of " + femaleAkanNames[3]);
}else if (Math.round(dayCalculator) == 4 && gender == "female"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[4] + " with an Akan name of " + femaleAkanNames[4]);
}else if (Math.round(dayCalculator) == 5 && gender == "female"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[5] + " with an Akan name of " + femaleAkanNames[5]);
}else if (Math.round(dayCalculator) == 6 && gender == "female"){
    document.getElementsByid("find").innerHTML =
    alert("Your day of birth is " + days[6] + " with an Akan name of " + femaleAkanNames[6]);
};

    
    

