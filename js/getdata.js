function loadDoc(dest, noOfPeople) 
{
 
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() 
  {
    if (this.readyState == 4 && this.status == 200) 
    {
        var rate = readXML(this, dest);
        var price = parseInt(rate) * parseInt(noOfPeople);
        var addition = "";
        if(noOfPeople==5)
          addition = "+";
        $("#myprice").html("&#x20B9;"+price+addition);
    }
  };
  xhttp.open("GET", "trip.xml", true);
  xhttp.send();
  
}

function readXML(xml, dest) 
{
  var i;
  var xmlDoc = xml.responseXML;
  var destination = xmlDoc.getElementsByTagName("destination");
  for (i = 0; i <destination.length; i++) 
  { 
      var name = destination[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
      if(name==dest)
        return destination[i].getElementsByTagName("price")[0].childNodes[0].nodeValue;
  }
}

$(document).ready(function()
{
    $("#destination").change(function()
    {
        var selectedDest = $("#destination").children("option:selected").val();
        var selectedNoOfPeople = $("#persons").children("option:selected").val();
        loadDoc(selectedDest, selectedNoOfPeople);
    });

    $("#persons").change(function()
    {
        var selectedDest = $("#destination").children("option:selected").val();
        var selectedNoOfPeople = $("#persons").children("option:selected").val();
        loadDoc(selectedDest, selectedNoOfPeople);
    });
});