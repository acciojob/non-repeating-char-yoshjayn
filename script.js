function firstNonRepeatedChar(str) {
    str = [...str];

    let count = str.map(char => getCount(char, str)).find(char => char !== null);
	return count || null
	
   }

function getCount(char, str) {
    return str.filter(c => c === char).length === 1 ? char : null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
