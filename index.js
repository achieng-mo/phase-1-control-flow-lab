function scuberGreetingForFeet(feetLength){
let result
if(feetLength<=400){
  result='This one is on me!'
}
else if(feetLength >2000){
  result='I will gladly take your thirty bucks.'
}
if (feetLength>2500){
  result='No can do.'
}
return result;
}

function ternaryCheckCity(city){
  return city ==='NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(){}
let result;
	switch (generousTip){
	case "generousTip":
		result = "Thank you so much.";
		break;
	case "not as generous":
		result = "Thank you.";
		break;
	default:
		result = "Bye.";
		break;
	}
