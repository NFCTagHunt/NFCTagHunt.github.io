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
	document.getElementById("WelcomeMessage").innerHTML = "Well Done on completing the Scavenger Hunt! <br /> Retreive a prize at the reception and please fill out a questionaire. Thanks for playing!";	

	var congratsImage = document.createElement("img");
	var body = document.getElementById("body");
	image.src = "images/CongratulationsImage.gif";
	congratsImage.alt = "Congratulations Image";
	congratsImage.style = "width:512;height:256;";
	
	body.appendChild(congratsImage);
}
else
{
	document.getElementById("WelcomeMessage").innerHTML = "The completion page detects you haven't won. Causes could be refreshing/closing this page, or still needing to collect some of the items.";
}

