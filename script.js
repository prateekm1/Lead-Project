let captchaChecked = false;
function beforeSubmit(event){
    if(captchaChecked){
        let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");

    console.log("input Date: ", inputdate.value); // string to date type conversion needed

    let formatedDate = new Date(inputdate.value).toLocaleDateString("en-IN");

    outputdate.value = formatedDate;
    }
    else{
        alert("Please check the reCaptcha box to submit the lead");
        event.preventDefault();
    }
}
function timestamp() { 
        var response = document.getElementById("g-recaptcha-response"); 
        if (response == null || response.value.trim() == "") 
            {
                var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
                elems["ts"] = JSON.stringify(new Date().getTime());
                document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
            } 
} setInterval(timestamp, 500);

function captchaSuccess(){
            this.captchaChecked = true;
}

