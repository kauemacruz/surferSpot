//set a function on click of items(class menu_item)
var menu_item = document.getElementsByClassName("menu_item");
var a;
for(a = 0; a < menu_item.length; a++) {
    menu_item[a].addEventListener('click', function(e) {menu(e)});
}
//function to switch content without changing pages 
function menu(event){
    var eventId = event.target.id;
    var content = document.getElementsByClassName("article");
    var b;
    var elementId = "article" + eventId;
    for(b = 0; b < content.length; b++) {
        content[b].style.display = "none";

        if(elementId == "articleMainPage2"){
            document.getElementById("articleMainPage").style.display = "block"; 
            document.getElementById("articleHeader").style.display = "block";
            document.getElementById("chooseRegion").style.display = "block"; 
            //document.getElementById("articleBegginer").style.display = "none"; 
            document.getElementById("articleIntermediate").style.display = "none"; 
            //document.getElementById("articleAdvanced").style.display = "none"; 
            document.getElementById("articleComments").style.display = "none"; 
        }
        if(elementId == "articleMainPage3"){
            document.getElementById("articleMainPage").style.display = "block"; 
            document.getElementById("articleHeader").style.display = "block";
            document.getElementById("articleAdminPage").style.display = "none"; 
            document.getElementById("articleGoldCoast2").style.display = "block"; 
            document.getElementById("chooseRegion").style.display = "block"; 
        }
        if(elementId == "articleMainPage4"){
            document.getElementById("articleMainPage").style.display = "block"; 
            document.getElementById("articleHeader").style.display = "block"; 
            document.getElementById("chooseRegion").style.display = "block";
            //document.getElementById("articleBegginer").style.display = "none"; 
            document.getElementById("articleIntermediate").style.display = "none"; 
            //document.getElementById("articleAdvanced").style.display = "none"; 
            document.getElementById("articleUpdateProfile").style.display = "none"; 
        }
        if(elementId == "articleMainPage5"){
            document.getElementById("articleLogin").style.display = "block"; 
            document.getElementById("articleRegister").style.display = "none"; 
        }
        if(elementId == "articleCurrentCond"){
            document.getElementById("articleHeader").style.display = "block"; 
            document.getElementById("articleMainPage").style.display = "block"; 
            document.getElementById("articleCurrentCond").style.display = "block"; 
        }
        /*if(elementId == "articleBegginer"){
            document.getElementById("articleHeader").style.display = "block"; 
            document.getElementById("articleMainPage").style.display = "block"; 
            document.getElementById("articleBegginer").style.display = "block"; 
            document.getElementById("articleIntermediate").style.display = "none"; 
            document.getElementById("articleAdvanced").style.display = "none"; 
        }
        if(elementId == "articleIntermediate"){
            document.getElementById("articleHeader").style.display = "block"; 
            document.getElementById("articleMainPage").style.display = "block"; 
            //document.getElementById("articleBegginer").style.display = "none"; 
            //document.getElementById("articleIntermediate").style.display = "block"; 
            //document.getElementById("articleAdvanced").style.display = "none"; 
        }
        if(elementId == "articleAdvanced"){
            document.getElementById("articleHeader").style.display = "block"; 
            document.getElementById("articleMainPage").style.display = "block"; 
            document.getElementById("articleBegginer").style.display = "none"; 
            document.getElementById("articleIntermediate").style.display = "none"; 
            document.getElementById("articleAdvanced").style.display = "block"; 
        }*/
        if(elementId == "articleAdminPage"){
            document.getElementById("articleHeader").style.display = "block"; 
            document.getElementById("articleAdminPage").style.display = "block"; 
            document.getElementById("articleAdminComments").style.display = "none"; 
            document.getElementById("articleAdminCommentsResults").style.display = "none"; 
            document.getElementById("articleAdminRegister").style.display = "none"; 
            document.getElementById("articleManageSpots").style.display = "none"; 
            document.getElementById("articleAddSpots").style.display = "none"; 
            document.getElementById("articleGoldCoast2").style.display = "none";
        }
        if(elementId == "articleManageSpots"){
            document.getElementById("articleHeader").style.display = "block"; 
            document.getElementById("articleAdminComments").style.display = "none";
            document.getElementById("articleAdminPage").style.display = "block"; 
            document.getElementById("articleAdminCommentsResults").style.display = "none"; 
            document.getElementById("articleAdminRegister").style.display = "none"; 
            document.getElementById("articleManageSpots").style.display = "block";
            document.getElementById("articleGoldCoast").style.display = "none";
            document.getElementById("articleAddSpots").style.display = "block";
            document.getElementById("articleGoldCoast3").style.display = "none";

        }
        if(elementId == "articleGoldCoast3"){
            document.getElementById("articleHeader").style.display = "block"; 
            document.getElementById("articleAdminComments").style.display = "none";
            document.getElementById("articleAdminPage").style.display = "block"; 
            document.getElementById("articleAdminCommentsResults").style.display = "none"; 
            document.getElementById("articleAdminRegister").style.display = "none"; 
            document.getElementById("articleManageSpots").style.display = "block";
            document.getElementById("articleAddSpots").style.display = "block";
            document.getElementById("articleGoldCoast3").style.display = "block";
            document.getElementById("articleGoldCoast").style.display = "none";
            document.getElementById('spotName').value = "";
            document.getElementById('region').value = "";
            document.getElementById('windDir').value = "";
            document.getElementById('swellDir').value = "";
            document.getElementById('minSwell').value = "";
            document.getElementById('tide').value = "";
        }
        if(elementId == "articleAdminRegister"){
            document.getElementById("articleHeader").style.display = "block"; 
            document.getElementById("articleAdminComments").style.display = "none";
            document.getElementById("articleAdminPage").style.display = "block"; 
            document.getElementById("articleAdminCommentsResults").style.display = "none"; 
            document.getElementById("articleAdminRegister").style.display = "block"; 
            document.getElementById("articleManageSpots").style.display = "none";
            document.getElementById("articleGoldCoast").style.display = "none";
            document.getElementById("articleAddSpots").style.display = "none";
            document.getElementById('registerEmail').value = "";
            document.getElementById('registerName').value = "";
            document.getElementById('registerSurname').value = "";
            document.getElementById('registerPass').value = "";
            document.getElementById('registerConPass').value = "";
        }
        if(elementId == "articleAdminComments"){
            document.getElementById("articleHeader").style.display = "block"; 
            document.getElementById("articleAdminComments").style.display = "block";
            document.getElementById("articleAdminPage").style.display = "block"; 
            document.getElementById("articleAdminCommentsResults").style.display = "none"; 
            document.getElementById("articleAdminRegister").style.display = "none"; 
            document.getElementById("articleManageSpots").style.display = "none";
            document.getElementById("articleAddSpots").style.display = "none";
            document.getElementById("articleGoldCoast").style.display = "none";
            document.getElementById('reg_err').innerHTML = "";
        }
        if(elementId == "articleRegister"){
            document.getElementById("articleRegister").style.display = "block"; 
            document.getElementById('inp_email').value = "";
            document.getElementById('inp_name').value = "";
            document.getElementById('inp_surname').value = "";
            document.getElementById('inp_password').value = "";
            document.getElementById('inp_conPass').value = "";
            document.getElementById('email_err').innerHTML = "";
        }
        else{
            document.getElementById(elementId)
        }
    }
}
//function to fetch php file to register users
const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(e){
    move();
    e.preventDefault();

    const formData = new FormData(this);

    fetch('controller/php.php?req=register', {
        method: 'POST',
        body: formData
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        document.getElementById("email_err").style.display = "block";
        document.getElementById("email_err").innerHTML = myJSON.msg;
        if(myJSON.msg == "addOK" ){
            document.getElementById("articleLogin").style.display = "block";
            document.getElementById("articleRegister").style.display = "none";
            document.getElementById("email_err").innerHTML = "";
        }
    }).catch(function (error) {
        console.error(error);
    })
});
//function to fetch php file to login 
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(log){
    move();
    log.preventDefault();
    
    const formData = new FormData(this);

    fetch('controller/php.php?req=login', {
        method: 'POST',
        body: formData
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        document.getElementById("log_err").style.display = "block";
        document.getElementById("log_err").innerHTML = myJSON.msg;
        if(myJSON.msg == "logOK" ){        
            document.getElementById("articleMainPage").style.display = "block"; 
            document.getElementById("articleHeader").style.display = "block";
            document.getElementById("articleGoldCoast2").style.display = "block";
            document.getElementById("chooseRegion").style.display = "block";
            //document.getElementById("articleBegginer").style.display = "none"; 
            document.getElementById("articleIntermediate").style.display = "none"; 
            //document.getElementById("articleAdvanced").style.display = "none"; 
            document.getElementById("articleLogin").style.display = "none";
            document.getElementById("welcome").innerHTML= "Welcome" + " " + myJSON.msg2 + " " + myJSON.msg4;
        }
        if(myJSON.msg3 == "admin" ){  
            document.getElementById("UpdateProfile").style.display = "none";
            document.getElementById("commentsPage").style.display = "none";
            document.getElementById("AdminPage").style.display = "block";
        }
        if(myJSON.msg3 == "user" ){ 
            document.getElementById("AdminPage").style.display = "none";
            document.getElementById("UpdateProfile").style.display = "block";
            document.getElementById("commentsPage").style.display = "block";
        }
        var user = myJSON.msg2 + myJSON.msg4;
        if(localStorage.getItem(user) !== null){
            document.body.style.backgroundColor = localStorage.getItem(user);
            if(localStorage.getItem(user) == 'black'){
                document.getElementById('changecheck').checked = true;
            }
        }
    }).catch(function (error) {
        console.error(error);
    })
});
//function to fetch php file and logout
const logout = document.getElementById('Logout');
logout.addEventListener('click', function(e){
    move();
    e.preventDefault();

    fetch('controller/php.php?req=logout', {
        
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        if(myJSON.msg == "logout" ){
            document.getElementById("articleLogin").style.display = "block"; 
            document.getElementById("articleMainPage").style.display = "none"; 
            document.getElementById("articleComments").style.display = "none";
            document.getElementById("articleUpdateProfile").style.display = "none"; 
            document.getElementById("articleAdminPage").style.display = "none";
            document.getElementById("articleHeader").style.display = "none"; 
            document.getElementById("articleCurrentCond").style.display = "none"; 
            document.getElementById('log_email').value = "";
            document.getElementById('log_pass').value = "";
            document.getElementById('log_err').innerHTML = "";
            document.body.style.backgroundColor = 'black';
        }
    }).catch(function (error) {
        console.error(error);
    })
});
//fetch php file and populate form to update user details from database
const populateForm = document.getElementById('UpdateProfile');
populateForm.addEventListener('click', function(e){
    move();
    e.preventDefault();

    fetch('controller/php.php?req=populateForm', {

    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
    document.getElementById("upd_name").value = myJSON.name;
    document.getElementById("upd_surname").value = myJSON.surname;
    document.getElementById("upd_email").value = myJSON.email;
    document.getElementById("upd_mobile").value = myJSON.mobile;
    document.getElementById("articleHeader").style.display = "block"; 
    document.getElementById("articleUpdateProfile").style.display = "block"; 
    document.getElementById("articleMainPage").style.display = "none"; 
    document.getElementById("chooseRegion").style.display = "none";
    //document.getElementById("articleBegginer").style.display = "none"; 
    document.getElementById("articleIntermediate").style.display = "none"; 
    //document.getElementById("articleAdvanced").style.display = "none"; 
    document.getElementById("articleLogin").style.display = "none";
    }).catch(function (error) {
        console.error(error);
    })
});
//fetch php file to update user details database
const updateProfile = document.getElementById('updateProfileForm');
updateProfile.addEventListener('submit', function(e){
    move();
    e.preventDefault();

    const formData = new FormData(this);

    fetch('controller/php.php?req=update', {
        method: 'POST',
        body: formData
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        document.getElementById("update_err").style.display = "block";
        document.getElementById("update_err").innerHTML = myJSON.msg;
        if(myJSON.msg == "updOK" ){
            document.getElementById("articleLogin").style.display = "block"; 
            document.getElementById("articleMainPage").style.display = "none"; 
            document.getElementById("articleComments").style.display = "none";
            document.getElementById("articleUpdateProfile").style.display = "none"; 
            document.getElementById("articleAdminPage").style.display = "none";
            document.getElementById("articleHeader").style.display = "none"; 
            document.getElementById("articleCurrentCond").style.display = "none"; 
            document.getElementById('log_email').value = "";
            document.getElementById('log_pass').value = "";
            document.getElementById('log_err').innerHTML = "";
        }
    }).catch(function (error) {
        console.error(error);
    })
});
// fetch to populate previous comments of user from database
const populateComments = document.getElementById('commentsPage');
populateComments.addEventListener('click', function(){
    move();
    var HTMLCode = '';
    var HTMLTemplate = commentsTemp.innerHTML;

    fetch('controller/php.php?req=populateComments', {
        method: 'GET',
        credentials: 'include'
    }) 
    .then(
        function(response){
            if (response.status !== 200){
                console.log('looks like there was a problem. Status Code: ' + response.status);
            }
            response.json().then(function(myJSON){
                console.log(JSON.stringify(myJSON));
                document.getElementById("articleHeader").style.display = "block";
                document.getElementById("articleComments").style.display = "block";  
                document.getElementById("articleUpdateProfile").style.display = "none"; 
                document.getElementById("articleMainPage").style.display = "none"; 
                document.getElementById("chooseRegion").style.display = "none";
                //document.getElementById("articleBegginer").style.display = "none"; 
                document.getElementById("articleIntermediate").style.display = "none"; 
                //document.getElementById("articleAdvanced").style.display = "none"; 
                document.getElementById("articleLogin").style.display = "none";
                var loop;
                var data = myJSON.comment;
                for(loop = 0; loop<data.length;loop++){
                    HTMLCode += HTMLTemplate.replace(/{{comment}}/g, myJSON.comment[loop]).
                    replace(/{{replies}}/g, myJSON.reply[loop]);
                }
                document.getElementById("previousComments").innerHTML = HTMLCode;
            })
        }
    )
});
// fetch to send comment to database
const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', function(e){
    move();
    e.preventDefault();

    const formData = new FormData(this);

    fetch('controller/php.php?req=sendComment', {
        method: 'POST',
        body: formData
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        document.getElementById('sendComment').value = " ";
        document.getElementById("articleMainPage").style.display = "block"; 
        document.getElementById("articleHeader").style.display = "block"; 
        document.getElementById("chooseRegion").style.display = "block";
        //document.getElementById("articleBegginer").style.display = "none"; 
        document.getElementById("articleIntermediate").style.display = "none"; 
        //document.getElementById("articleAdvanced").style.display = "none"; 
        document.getElementById("articleComments").style.display = "none"; 
    }).catch(function (error) {
        console.error(error);
    })
});
// fetch to search in database for users comments and populate html
const searchForm = document.getElementById('articleAdminComments');
searchForm.addEventListener('submit', function(e){
    move();
    e.preventDefault();
    
    var HTMLCode = '';
    var HTMLTemplate = commentsTemp2.innerHTML;

    const formData = new FormData(this);

    fetch('controller/php.php?req=searchComments', {
        method: 'POST',
        body: formData
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        if(myJSON.msg == "enter username ID" ){        
            document.getElementById("search_err").style.display = "block";
            document.getElementById("search_err").innerHTML = myJSON.msg;
            document.getElementById("articleAdminCommentsResults").style.display = 'none';
        }
        if(myJSON.msg == "No messages"){
            document.getElementById("search_err").style.display = "block";
            document.getElementById("search_err").innerHTML = myJSON.msg;
            document.getElementById("articleAdminCommentsResults").style.display = 'none';
        }
        else{
            var loop;
            var data = myJSON.comment;
            for (loop = 0; loop<data.length;loop++){
                HTMLCode += HTMLTemplate.replace(/{{comment}}/g, myJSON.comment[loop]).
                replace(/{{replies}}/g, myJSON.reply[loop]).replace(/{{commentID}}/g,myJSON.commentID[loop]);
            }
            document.getElementById("articleAdminCommentsResults").innerHTML = HTMLCode;
            document.getElementById("articleAdminCommentsResults").style.display = 'block';
            document.getElementById("search_user").value = '';
            document.getElementById("search_err").innerHTML = ' ';
        }
    }).catch(function (error) {
        console.error(error);
    })
});
//add new user by admin
const adminRegister = document.getElementById('articleAdminRegister');
adminRegister.addEventListener('submit', function(e){
    move();
    e.preventDefault();

    const formData = new FormData(this);

    fetch('controller/php.php?req=adminRegister', {
        method: 'POST',
        body: formData
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        document.getElementById("reg_err").style.display = "block";
        document.getElementById("reg_err").innerHTML = myJSON.msg;
        if(myJSON.msg == "addOK" ){
            document.getElementById("articleAdminRegister").style.display = "none";
            document.getElementById("reg_err").innerHTML = "";
        }
    }).catch(function (error) {
        console.error(error);
    })
});
//function to encode variable to be fetched
function formEncode(obj) {
    var str = [];
    for(var p in obj)
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
}
//set a function to define and deleted item
function deleteCom(id){
    var r =  confirm("Do you want to delete it?");
    if (r == true) {
        move();
        var comID = {commentID: id};
        fetch('controller/php.php?req=deleteComment', {
            method: 'POST',
            headers: { "Content-type": "application/x-www-form-urlencoded"},
            body: formEncode(comID)
        }).then(function(response) {
            return response.json();
        }).then(function(myJSON) {
            console.log(JSON.stringify(myJSON));
            document.getElementById("search_err").style.display = "block";
            document.getElementById("search_err").innerHTML = myJSON.msg;
            document.getElementById("articleAdminCommentsResults").style.display = 'none';
        }).catch(function (error) {
            console.error(error);
        });
    } else {
    }
}
//set a function to define and deleted item
function replyCom(id, rep){
    move();
    var comID = {commentID: id, reply: rep};
    fetch('controller/php.php?req=replyComment', {
        method: 'POST',
        headers: { "Content-type": "application/x-www-form-urlencoded"},
        body: formEncode(comID)
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        document.getElementById("search_err").style.display = "block";
        document.getElementById("search_err").innerHTML = myJSON.msg;
        document.getElementById("articleAdminCommentsResults").style.display = 'none';
    }).catch(function (error) {
        console.error(error);
    });
}
function viewAll(){
    move();
    var HTMLCode = '';
    var HTMLTemplate = commentsTemp2.innerHTML;

    fetch('controller/php.php?req=viewAllComments', {
       
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        if(myJSON.msg == "No messages"){
            document.getElementById("search_err").style.display = "block";
            document.getElementById("search_err").innerHTML = myJSON.msg;
            document.getElementById("articleAdminCommentsResults").style.display = 'none';
        }
        else{
            var loop;
            var data = myJSON.comment;
            for (loop = 0; loop<data.length;loop++){
                HTMLCode += HTMLTemplate.replace(/{{comment}}/g, myJSON.comment[loop]).
                replace(/{{replies}}/g, myJSON.reply[loop]).replace(/{{commentID}}/g,myJSON.commentID[loop]);
            }
            document.getElementById("articleAdminCommentsResults").innerHTML = HTMLCode;
            document.getElementById("articleAdminCommentsResults").style.display = 'block';
            document.getElementById("search_user").value = '';
            document.getElementById("search_err").innerHTML = ' ';
        }
    }).catch(function (error) {
        console.error(error);
    });
}
//function to add new spoots
const registerSpots = document.getElementById('articleGoldCoast3');
registerSpots.addEventListener('submit', function(e){
    move();
    e.preventDefault();

    const formData = new FormData(this);

    fetch('controller/php.php?req=registerSpots', {
        method: 'POST',
        body: formData
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        document.getElementById("spot_err").style.display = "block";
        document.getElementById("spot_err").innerHTML = myJSON.msg;
        if(myJSON.msg == "addOK" ){
            document.getElementById("articleGoldCoast3").style.display = "none";
            document.getElementById("spot_err").innerHTML = "";
        }
    }).catch(function (error) {
        console.error(error);
    })
});
//populate form of all spots
function populateSpots(region){
    move();
    var HTMLCode = '';
    var HTMLTemplate = commentsTemp3.innerHTML;
    var regionID = {regionID: region};
    fetch('controller/php.php?req=populateSpots', {
        method: 'POST',
        headers: { "Content-type": "application/x-www-form-urlencoded"},
        body: formEncode(regionID)
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        document.getElementById("articleGoldCoast3").style.display = "none";
        document.getElementById("articleGoldCoast").style.display = "block";
        var loop;
        var data = myJSON.spotID;
        for(loop = 0; loop<data.length;loop++){
            HTMLCode += HTMLTemplate.replace(/{{spotID}}/g, myJSON.spotID[loop]).
            replace(/{{spotName}}/g, myJSON.spotName[loop]).
            replace(/{{wind}}/g, myJSON.wind[loop]).
            replace(/{{swellDir}}/g, myJSON.swellDir[loop]).
            replace(/{{swellSize}}/g, myJSON.swellSize[loop]).
            replace(/{{tide}}/g, myJSON.tide[loop]).
            replace(/{{createdBy}}/g, myJSON.createdBy[loop]).
            replace(/{{date}}/g, myJSON.date[loop]);
        }
        document.getElementById("articleGoldCoast").innerHTML = HTMLCode;
    }).catch(function (error) {
        console.error(error);
    });
}

function deleteSpot(id){
    var r =  confirm("Do you want to delete it?");
    if (r == true) {
        move();
        var spotID = {spotID: id};
        fetch('controller/php.php?req=deleteSpot', {
            method: 'POST',
            headers: { "Content-type": "application/x-www-form-urlencoded"},
            body: formEncode(spotID)
        }).then(function(response) {
            return response.json();
        }).then(function(myJSON) {
            console.log(JSON.stringify(myJSON));
            document.getElementById("spot_err2").style.display = "block";
            document.getElementById("spot_err2").innerHTML = myJSON.msg;
            document.getElementById("articleGoldCoast").style.display = 'none';
        }).catch(function (error) {
            console.error(error);
        });
    } else {
        document.getElementById("spot_err2").innerHTML = "not deleted";
    }
}

function updateSpot(id, name, wind, swellD, swellS, tide){
    move();
    var surfSpot = {spotID: id, name: name, wind: wind, swellD: swellD, swellS: swellS, tide: tide};
    fetch('controller/php.php?req=updateSpot', {
        method: 'POST',
        headers: { "Content-type": "application/x-www-form-urlencoded"},
        body: formEncode(surfSpot)
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        document.getElementById("spot_err2").style.display = "block";
        document.getElementById("spot_err2").innerHTML = myJSON.msg;
        if(myJSON.msg == "updOK" ){
            document.getElementById("articleGoldCoast").style.display = 'none';
        }
    }).catch(function (error) {
        console.error(error);
    });
}

const currentCondForm = document.getElementById('currentCondForm');
currentCondForm.addEventListener('submit', function(e){
    move();
    e.preventDefault();

    const formData = new FormData(this);
    var HTMLCode = '';
    var HTMLTemplate = commentsTemp4.innerHTML;

    fetch('controller/php.php?req=compareConditions', {
        method: 'POST',
        body: formData
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        var a = myJSON.average;
        for(var k = 0; k <= a.length; k++) {
            for(var j = k; j <= a.length; j++) {
                if(k != j && a[k] == a[j]) {
                    a[j] = a[j] +0.1;
                }
            }
        }
        arr1 = myJSON.spot;
        arr2 = a;
        arr3 = arr2.slice(0).sort(function(a, b){return b-a});
        sortedArray = [];
        for (i=0; i<arr3.length; i++) {
            sortedArray.push(arr1[arr2.indexOf(arr3[i])]);
            document.getElementById("articleIntermediate").style.display = "block"; 
            HTMLCode += HTMLTemplate.replace(/{{bestSpots}}/g, (i + 1) + " " + " - " + " " + sortedArray[i]);
        }
        document.getElementById("best").innerHTML = HTMLCode;
    }).catch(function (error) {
        console.error(error);
    })
});

function checkConditions(){
    move();
    fetch('controller/php.php?req=checkCond', {
        
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
    
        document.getElementById("articleHeader").style.display = "block"; 
        document.getElementById("articleMainPage").style.display = "block"; 
        document.getElementById("articleCurrentCond").style.display = "block"; 
        document.getElementById("chosenRegion").value = "goldCoast"; 

        if(myJSON.msg == "update database" ){
            document.getElementById('spinner').style.display = "block";
            getCurrentCond();
        }
        else{
            console.log(JSON.stringify(myJSON));
            swell = myJSON.swellHeight * 3.281;
            document.getElementById("currentSize").value = swell.toFixed(2);
            document.getElementById("currentDir").value = myJSON.swellDirection;
            document.getElementById("currentWindDir").value =myJSON.windDirection;
            document.getElementById("currentHeight").value = myJSON.seaLevel;
            document.getElementById("currentHeight2").value = myJSON.seaLevel + "m";
            if(swell<=1){
                document.getElementById("currentSize2").value = "0-1 ft";
            }
            if(swell>1 && swell<=2){
                document.getElementById("currentSize2").value = "1-2 ft";
            }
            if(swell>2 && swell<=3){
                document.getElementById("currentSize2").value = "2-3 ft";
            }
            if(swell>3 && swell<=4){
                document.getElementById("currentSize2").value = "3-4 ft";
            }
            if(swell>4 && swell<=5){
                document.getElementById("currentSize2").value = "4-5 ft";
            }
            if(swell>5 && swell<=6){
                document.getElementById("currentSize2").value = "5-6 ft";
            }
            if(swell>6 && swell<=7){
                document.getElementById("currentSize2").value = "6-7 ft";
            }
            if(swell>7 && swell<=8){
                document.getElementById("currentSize2").value = "7-8 ft";
            }
            if(swell>8 && swell<=9){
                document.getElementById("currentSize2").value = "8-9 ft";
            }
            if(swell>9 && swell<=11){
                document.getElementById("currentSize2").value = "9-11 ft";
            }
            if (swell >11) {
                document.getElementById("currentSize2").value = "11+ ft";
            }

            if(myJSON.swellDirection<11.25){
                document.getElementById("currentDir2").value = "N";
            }
            if(myJSON.swellDirection>=11.25 && myJSON.swellDirection<33.75){
                document.getElementById("currentDir2").value = "NNE";
            }
            if(myJSON.swellDirection>33.75 && myJSON.swellDirection<56.25){
                document.getElementById("currentDir2").value = "NE";
            }
            if(myJSON.swellDirection>=56.25 && myJSON.swellDirection<78.75){
                document.getElementById("currentDir2").value = "ENE";
            }
            if(myJSON.swellDirection>=78.75 && myJSON.swellDirection<101.25){
                document.getElementById("currentDir2").value = "E";
            }
            if(myJSON.swellDirection>=101.25 && myJSON.swellDirection<123.75){
                document.getElementById("currentDir2").value = "ESE";
            }
            if(myJSON.swellDirection>=123.75 && myJSON.swellDirection<146.25){
                document.getElementById("currentDir2").value = "SE";
            }
            if(myJSON.swellDirection>=146.25 && myJSON.swellDirection<168.25){
                document.getElementById("currentDir2").value = "SSE";
            }
            if(myJSON.swellDirection>=168.25 && myJSON.swellDirection<191.25){
                document.getElementById("currentDir2").value = "S";
            }
            if(myJSON.swellDirection>=191.25 && myJSON.swellDirection<213.75){
                document.getElementById("currentDir2").value = "SSW";
            }
            if(myJSON.swellDirection>=213.75 && myJSON.swellDirection<236.25){
                document.getElementById("currentDir2").value = "SW";
            }
            if(myJSON.swellDirection>=236.25 && myJSON.swellDirection<258.75){
                document.getElementById("currentDir2").value = "WSW";
            }
            if(myJSON.swellDirection>=258.75 && myJSON.swellDirection<281.25){
                document.getElementById("currentDir2").value = "W";
            }
            if(myJSON.swellDirection>=281.25 && myJSON.swellDirection<303.75){
                document.getElementById("currentDir2").value = "WNW";
            }
            if(myJSON.swellDirection>=301.75 && myJSON.swellDirection<316.25){
                document.getElementById("currentDir2").value = "NW";
            }
            if(myJSON.swellDirection>=316.25 && myJSON.swellDirection<348.75){
                document.getElementById("currentDir2").value = "NNW";
            }   
            if(myJSON.swellDirection>=348.75 && myJSON.swellDirection<360){
                document.getElementById("currentDir2").value = "N";
            }               
            
            if(myJSON.windDirection<11.25){
                document.getElementById("currentWindDir2").value = "N";
            }
            if(myJSON.windDirection>=11.25 && myJSON.windDirection<33.75){
                document.getElementById("currentWindDir2").value = "NNE";
            }
            if(myJSON.windDirection>33.75 && myJSON.windDirection<56.25){
                document.getElementById("currentWindDir2").value = "NE";
            }
            if(myJSON.windDirection>=56.25 && myJSON.windDirection<78.75){
                document.getElementById("currentWindDir2").value = "ENE";
            }
            if(myJSON.windDirection>=78.75 && myJSON.windDirection<101.25){
                document.getElementById("currentWindDir2").value = "E";
            }
            if(myJSON.windDirection>=101.25 && myJSON.windDirection<123.75){
                document.getElementById("currentWindDir2").value = "ESE";
            }
            if(myJSON.windDirection>=123.75 && myJSON.windDirection<146.25){
                document.getElementById("currentWindDir2").value = "SE";
            }
            if(myJSON.windDirection>=146.25 && myJSON.windDirection<168.25){
                document.getElementById("currentWindDir2").value = "SSE";
            }
            if(myJSON.windDirection>=168.25 && myJSON.windDirection<191.25){
                document.getElementById("currentWindDir2").value = "S";
            }
            if(myJSON.windDirection>=191.25 && myJSON.windDirection<213.75){
                document.getElementById("currentWindDir2").value = "SSW";
            }
            if(myJSON.windDirection>=213.75 && myJSON.windDirection<236.25){
                document.getElementById("currentWindDir2").value = "SW";
            }
            if(myJSON.windDirection>=236.25 && myJSON.windDirection<258.75){
                document.getElementById("currentWindDir2").value = "WSW";
            }
            if(myJSON.windDirection>=258.75 && myJSON.windDirection<281.25){
                document.getElementById("currentWindDir2").value = "W";
            }
            if(myJSON.windDirection>=281.25 && myJSON.windDirection<303.75){
                document.getElementById("currentWindDir2").value = "WNW";
            }
            if(myJSON.windDirection>=301.75 && myJSON.windDirection<316.25){
                document.getElementById("currentWindDir2").value = "NW";
            }
            if(myJSON.windDirection>=316.25 && myJSON.windDirection<348.75){
                document.getElementById("currentWindDir2").value = "NNW";
            }   
            if(myJSON.windDirection>=348.75 && myJSON.windDirection<360){
                document.getElementById("currentWindDir2").value = "N";
            }     
            document.getElementById('bestBeaches').style.display = "block";                
        }
    }).catch(function (error) {
        console.error(error);
    });
}

function getCurrentCond(){
    
    const lat = -28.014332;
    const lng = 153.646901;
    const now = Math.floor(new Date() / 1000);
    const params = 'seaLevel,swellDirection,swellHeight,windDirection';

    fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}&start=${now}&end=${now}&params=${params}`, {
      headers: {
        'Authorization': '56d681e0-b34a-11e9-afdd-0242ac130004-56d682da-b34a-11e9-afdd-0242ac130004'
      }
    }).then((response) => response.json()).then((jsonData) => {
      // Do something with response data.
        console.log(JSON.stringify(jsonData));
        var seaLevel = jsonData.hours[0].seaLevel[0].value;
        var swellDirection = jsonData.hours[0].swellDirection[0].value;
        var swellHeight = jsonData.hours[0].swellHeight[0].value;
        var windDirection = jsonData.hours[0].windDirection[0].value;
        
        document.getElementById('spinner').style.display = "none";
        
        swell = swellHeight * 3.281;
        document.getElementById("currentSize").value = swell.toFixed(2);
        document.getElementById("currentDir").value = swellDirection;
        document.getElementById("currentWindDir").value = windDirection;
        document.getElementById("currentHeight").value = seaLevel;
        document.getElementById("currentHeight2").value = seaLevel + "m";
        if(swell<=1){
            document.getElementById("currentSize2").value = "0-1 ft";
        }
        if(swell>1 && swell<=2){
            document.getElementById("currentSize2").value = "1-2 ft";
        }
        if(swell>2 && swell<=3){
            document.getElementById("currentSize2").value = "2-3 ft";
        }
        if(swell>3 && swell<=4){
            document.getElementById("currentSize2").value = "3-4 ft";
        }
        if(swell>4 && swell<=5){
            document.getElementById("currentSize2").value = "4-5 ft";
        }
        if(swell>5 && swell<=6){
            document.getElementById("currentSize2").value = "5-6 ft";
        }
        if(swell>6 && swell<=7){
            document.getElementById("currentSize2").value = "6-7 ft";
        }
        if(swell>7 && swell<=8){
            document.getElementById("currentSize2").value = "7-8 ft";
        }
        if(swell>8 && swell<=9){
            document.getElementById("currentSize2").value = "8-9 ft";
        }
        if(swell>9 && swell<=11){
            document.getElementById("currentSize2").value = "9-11 ft";
        }
        if (swell >11) {
            document.getElementById("currentSize2").value = "11+ ft";
        }

        if(swellDirection<11.25){
            document.getElementById("currentDir2").value = "N";
        }
        if(swellDirection>=11.25 && swellDirection<33.75){
            document.getElementById("currentDir2").value = "NNE";
        }
        if(swellDirection>33.75 && swellDirection<56.25){
            document.getElementById("currentDir2").value = "NE";
        }
        if(swellDirection>=56.25 && swellDirection<78.75){
            document.getElementById("currentDir2").value = "ENE";
        }
        if(swellDirection>=78.75 && swellDirection<101.25){
            document.getElementById("currentDir2").value = "E";
        }
        if(swellDirection>=101.25 && swellDirection<123.75){
            document.getElementById("currentDir2").value = "ESE";
        }
        if(swellDirection>=123.75 && swellDirection<146.25){
            document.getElementById("currentDir2").value = "SE";
        }
        if(swellDirection>=146.25 && swellDirection<168.25){
            document.getElementById("currentDir2").value = "SSE";
        }
        if(swellDirection>=168.25 && swellDirection<191.25){
            document.getElementById("currentDir2").value = "S";
        }
        if(swellDirection>=191.25 && swellDirection<213.75){
            document.getElementById("currentDir2").value = "SSW";
        }
        if(swellDirection>=213.75 && swellDirection<236.25){
            document.getElementById("currentDir2").value = "SW";
        }
        if(swellDirection>=236.25 && swellDirection<258.75){
            document.getElementById("currentDir2").value = "WSW";
        }
        if(swellDirection>=258.75 && swellDirection<281.25){
            document.getElementById("currentDir2").value = "W";
        }
        if(swellDirection>=281.25 && swellDirection<303.75){
            document.getElementById("currentDir2").value = "WNW";
        }
        if(swellDirection>=301.75 && swellDirection<316.25){
            document.getElementById("currentDir2").value = "NW";
        }
        if(swellDirection>=316.25 && swellDirection<348.75){
            document.getElementById("currentDir2").value = "NNW";
        }   
        if(swellDirection>=348.75 && swellDirection<360){
            document.getElementById("currentDir2").value = "N";
        }               
        
        if(windDirection<11.25){
            document.getElementById("currentWindDir2").value = "N";
        }
        if(windDirection>=11.25 && windDirection<33.75){
            document.getElementById("currentWindDir2").value = "NNE";
        }
        if(windDirection>33.75 && windDirection<56.25){
            document.getElementById("currentWindDir2").value = "NE";
        }
        if(windDirection>=56.25 && windDirection<78.75){
            document.getElementById("currentWindDir2").value = "ENE";
        }
        if(windDirection>=78.75 && windDirection<101.25){
            document.getElementById("currentWindDir2").value = "E";
        }
        if(windDirection>=101.25 && windDirection<123.75){
            document.getElementById("currentWindDir2").value = "ESE";
        }
        if(windDirection>=123.75 && windDirection<146.25){
            document.getElementById("currentWindDir2").value = "SE";
        }
        if(windDirection>=146.25 && windDirection<168.25){
            document.getElementById("currentWindDir2").value = "SSE";
        }
        if(windDirection>=168.25 && windDirection<191.25){
            document.getElementById("currentWindDir2").value = "S";
        }
        if(windDirection>=191.25 && windDirection<213.75){
            document.getElementById("currentWindDir2").value = "SSW";
        }
        if(windDirection>=213.75 && windDirection<236.25){
            document.getElementById("currentWindDir2").value = "SW";
        }
        if(windDirection>=236.25 && windDirection<258.75){
            document.getElementById("currentWindDir2").value = "WSW";
        }
        if(windDirection>=258.75 && windDirection<281.25){
            document.getElementById("currentWindDir2").value = "W";
        }
        if(windDirection>=281.25 && windDirection<303.75){
            document.getElementById("currentWindDir2").value = "WNW";
        }
        if(windDirection>=301.75 && windDirection<316.25){
            document.getElementById("currentWindDir2").value = "NW";
        }
        if(windDirection>=316.25 && windDirection<348.75){
            document.getElementById("currentWindDir2").value = "NNW";
        }   
        if(windDirection>=348.75 && windDirection<360){
            document.getElementById("currentWindDir2").value = "N";
        } 
        document.getElementById('bestBeaches').style.display = "block";
        setTimeout(addCurCond(seaLevel, swellDirection, swellHeight, windDirection), 1500)
       
    }).catch(function (error) {
    console.error(error);
    });
}

function addCurCond(seaLevel, swellDirection, swellHeight, windDirection){
    move();
    var curHour = {tide: seaLevel, swellDir: swellDirection, swellH: swellHeight, wind: windDirection};
        fetch('controller/php.php?req=addCurCondition', {
            method: 'POST',
            headers: { "Content-type": "application/x-www-form-urlencoded"},
            body: formEncode(curHour)
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
    }).catch(function (error) {
        console.error(error);
    });
}

function move() {
    var elem = document.getElementById("myBar");   
    elem.style.display = "block";
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            elem.style.display="none";
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

function doChangeBkgrnd(){
    move();
    fetch('controller/php.php?req=changeBkgrnd', {
        
    }).then(function(response) {
        return response.json();
    }).then(function(myJSON) {
        console.log(JSON.stringify(myJSON));
        var user = myJSON.name + myJSON.surname;
        if(document.getElementById("changecheck").checked){
            document.body.style.backgroundColor = 'black';
            localStorage.setItem(user, 'black');
        }else{
            document.body.style.backgroundColor = 'grey';
            localStorage.setItem(user, 'grey');
        }
    }).catch(function (error) {
        console.error(error);
    });
}