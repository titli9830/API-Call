//call API and fetch data using FETCH & use GET method to use data. use RESPONSE to use fetched data.
//covert fetched data to json using json(). use DATA keyword to use converted data.

fetch(' https://reqres.in/api/users?page=1', {
    method: 'GET'
})

    .then(Response => {
        return Response.json()
    })
    .then(data => {
        let fetchedData = data.data;
        console.log(fetchedData);
        fetchedData.forEach((value, index) => {
            //console.log(value);
            onPageLoad(value, index);

        });


    })
//.catch(error => console.log('Error'))
let text = '';
function onPageLoad(fetchedDataObj, index) {

    text += "<div id='mainDiv-" + index + "' class='data'>";
    text += "<div class='name' id='dataName-" + index + "'>" + fetchedDataObj.first_name + " " + fetchedDataObj.last_name + "</div>";
    text += "<div class='email' id='dataEmail-" + index + "'>" + fetchedDataObj.email + "</div>";
    text += "<img class='photo' id='dataAvatar-" + index + "' src='" + fetchedDataObj.avatar + "'></img>";
    text += "</div>";
    //text += "<br>";
    document.getElementById("d1").innerHTML = text;
}

