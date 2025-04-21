function beforeSubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");

    console.log("input Date: ", inputdate.value); // string to date type conversion needed

    let formatedDate = new Date(inputdate.value).toLocaleDateString("en-IN");

    outputdate.value = formatedDate;
}