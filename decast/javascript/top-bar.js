function replacetopbar()
{
	var h3 = document.getElementsByTagName('h3');
	for (i= 0; i < h3.length; i++)
	{
		var innercontent = h3[i].innerHTML;
		document.getElementById('top-bar-text').innerHTML += innercontent+'&nbsp;&nbsp;&nbsp;&nbsp;';
	}
}

function topbarmouseover()
{
	document.getElementById('sidebar').style.display='inline';
	document.getElementById('top-bar-text').style.display='none';
}

function topbarmouseout()
{
	document.getElementById('sidebar').style.display='none';
	document.getElementById('top-bar-text').style.display='inline';
}