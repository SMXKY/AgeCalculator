var btn = document.getElementById("btn") ;

function calc(){
    var day = parseInt(document.getElementById("in1").value) ;
    var month = parseInt(document.getElementById("in2").value) ;
    var year = parseInt(document.getElementById("in3").value) ;

    var fyear = document.getElementById("ed1") ;
    var fmonth = document.getElementById("ed2") ;
    var fday = document.getElementById("ed3") ;

    var standard = new Date() ;
    var currentYear = standard.getFullYear();
    var currentMonth = standard.getMonth() + 1;
    var currentDate = standard.getDate();

    if(isNaN(currentMonth - month) || day>31 || isNaN(currentYear - year) || isNaN(currentDate - day)){
        fday.innerText = "--" ;
        fmonth.innerText = "--" ;
        fyear.innerText = "--" ;
    }else if(currentDate<day){
        currentDate = currentDate + 31 ;
        currentMonth = currentMonth - 1 ;
        fday.innerText =  currentDate - day ;
    }
    else{
        fday.innerText =  currentDate - day ;
    }

    
    if(isNaN(currentMonth - month) || month>12 || isNaN(currentYear - year) || isNaN(currentDate - day)){
        fday.innerText = "--" ;
        fmonth.innerText = "--" ;
        fyear.innerText = "--" ;
    }else if(currentMonth<month){
        currentMonth = currentMonth + 12 ;
        currentYear = currentYear - 1 ;
        fmonth.innerText = currentMonth - month ;
    }else{
        fmonth.innerText = currentMonth - month ;
    }
        
    if(isNaN(currentMonth - month) || isNaN(currentYear - year) || isNaN(currentDate - day) || year>2023 || year<1980){
        fday.innerText = "--" ;
        fmonth.innerText = "--" ;
        fyear.innerText = "--" ;
    }else{
        fyear.innerText = currentYear - year ;
    }

}

btn.addEventListener("click", calc) 




