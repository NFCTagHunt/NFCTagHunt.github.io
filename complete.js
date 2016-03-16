function setupLocalStorageItem(key,value)
{
	localStorage.setItem(key,value);
}
function getLocalStorageItem(key)
{
	return localStorage.getItem(key);
}
function setupSessionStorageItem(key,value)
{
	sessionStorage.setItem(key,value);
}
function getSessionStorageItem(key)
{
	return sessionStorage.getItem(key);
}

var totalTags = 6;


if(getLocalStorageItem("ls_completed") || getSessionStorageItem("ss_completed"))
{
	for (i = 1; i <= totalTags; i++) { 
		var tagID = "tagID" + i;
		localStorage.removeItem(tagID);
    }
	localStorage.removeItem("ls_completed");
	setupSessionStorageItem("ss_completed","ss_completed");
	var now = new Date();
	var fullDate = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate();
	setupLocalStorageItem("lastDateCompleted",fullDate)
	document.getElementById("WelcomeMessage").innerHTML = "Well Done on completing the Scavenger Hunt! <br /> Retreive a prize at the reception and please fill out a questionaire. Thanks for playing!";	

	var img = document.createElement("img");
	img.src = "images/CongratulationsImage.gif";
	img.style = "width:512px;height:256px;"
	var src = document.getElementById("pic");
	src.appendChild(img);
}
else
{
	document.getElementById("WelcomeMessage").innerHTML = "The completion page detects you haven't won. Causes could be refreshing/closing this page, or still needing to collect some of the items.";
}

