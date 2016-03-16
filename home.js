var titleTextColour = "black";

var totalTags = 6;

checkLastDateCompleted();
checkForUniqueID();
allScanned();
	

for (i = 1; i <= totalTags; i++) { 
	//checkTag(i);
}

function setupLocalStorageItem(key,value)
{
	localStorage.setItem(key,value);
}
function getLocalStorageItem(key)
{
	return localStorage.getItem(key);
}

//Working with cookies
function checkForUniqueID()
{
	if(getLocalStorageItem("uniqueID"))
	{
	}
	else
	{
		var now = new Date();
		var uniqueID = "" +now.getHours() + now.getMinutes() + now.getSeconds() + now.getMilliseconds();
		setupLocalStorageItem("uniqueID",uniqueID);
	}
} 
//If the user has completed the event today, they have to wait till tomorrow to redo
function checkLastDateCompleted()
{
	if(getLocalStorageItem("lastDateCompleted"))
	{
		var now = new Date();
		var fullDate = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate();
		if(getLocalStorageItem("lastDateCompleted").value == fullDate)
		{
				window.location.href = "gameover.html";
		}
		else
		{
			document.getElementById("tagID1").innerHTML = getLocalStorageItem("lastDateCompleted").value;
			document.getElementById("tagID2").innerHTML = fullDate;
		}
	}
} 
function allScanned()
{
	var allScannedFlag = "true";
	var i = 1;
	
	for (i = 1; i <= totalTags; i++) { 
		var tagID = "tagID"+i;
		if(!(getLocalStorageItem(tagID)))
		{
			allScannedFlag = "false";
		}
    }
    if(allScannedFlag == "true")
    {
    	document.getElementById("WelcomeMessage").innerHTML = "You found all the tags! Click below";
    	setInterval(function() { flashingText("WelcomeMessage",'yellow','gold') }, 1000);


    	var buttonnode= document.createElement('input');
		buttonnode.setAttribute('type','button');
		buttonnode.setAttribute('id','btn_Finish');
		buttonnode.setAttribute('value','Click Here to Complete');
		document.getElementById('MainContent').appendChild(buttonnode);
		document.getElementById("btn_Finish").onclick = function() 
		{
			setupLocalStorageItem("ls_completed","ls_completed");
        	location.href='http://nfctaghunt.github.io/complete.html';
    	} 
    	document.getElementById("btn_Finish").style.marginLeft = "46%";
    	document.getElementById("btn_Finish").style.marginBottom = "50px";
    	//var btn_complete = document.createElement("BUTTON"); 
		//var btn_txt_complete = document.createTextNode("Click Here to Complete!");
		//btn.appendChild(t);
		//document.getElementById('MainContent').appendChild(btn);      

	    
	}
}

function checkTag(TagNum)
{
	var tagID = "tagID"+TagNum;
	if(getLocalStorageItem(tagID))
	{
		document.getElementById(tagID).innerHTML += "Tag " + TagNum + " was found!";
		document.getElementById(tagID).style.backgroundColor='#00FF55';
		setInterval(function() { flashingText(tagID,'blue','navy') }, 1000);

	}
	else
	{
		document.getElementById(tagID).innerHTML += "Try to find tag " +TagNum+".";
		document.getElementById(tagID).style.backgroundColor='transparent';
		setInterval(function() { flashingText(tagID,'navy','blue') }, 1000);
	}

}

function flashingText(element,colour1,colour2)
{	
	    var text = document.getElementById(element);
	    text.style.color = (text.style.color==colour1) ? colour2:colour1;
}