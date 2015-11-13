// given data type //

function dType() {
var inputP= prompt("Type something Nice and Ill tell you something useful:");


if (inputP === ""){
 	alert('At least give me something...');
 	return;
} else if (inputP != "") && (isNaN(inputP)) && inputP.match(^((?!true| false).)*$){
	alert('String');
	return;
}
}


//var inputO= inputP.match(/^([Tt][Rr][Uu][Ee]|[Ff][Aa][Ll][Ss][Ee])$/);
//var inputN= inputP.match(/\d+/g);
//var inputO = inputP.match(/['true','false']/i)


// given datatype ends //



