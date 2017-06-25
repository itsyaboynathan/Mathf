Mathf = {
	sqrd(int) {
		return int * int;
	},
	pwr(int, power) {
		return int ** power;
	},
	toNotationStr(largeInt) {
		 found = false;
		 negs = 0;
		 newUnit = 1;
		 const arr = largeInt.toString().split("");
		 const callback = (currentValue, element, index, array) => {
			 if( currentValue == 0) {
				if ( found ) {
					return;
				} else {
					arr[element] = "";
					return negs++;
				}
			 }
			 if( currentValue > 0 ) {
				if ( !found ) {
					arr.splice(element + 1, 0 , ".");
					return found = true;
				}
				if ( found ) {
					newUnit++;
					return;
				}
			 }
		 };
		 arr.forEach(callback);
		 if( negs > 0 ) {
			 return `${parseFloat(arr.join(""))} * 10(-${negs})`;
		 }
		 else{
			 return `${parseFloat(arr.join(""))} * 10(${newUnit})`;
		 }
	},
	toNotation(largeInt) {
		 found = false;
		 negs = 0;
		 newUnit = 1;
		 var arr = largeInt.toString().split("");
		 var callback = function(currentValue, element, index, array) {
			 if( currentValue == 0) {
				if ( found ) {
					return;
				} else {
					arr[element] = "";
					return negs++;
				}
			 }
			 if( currentValue > 0 ) {
				if ( !found ) {
					arr.splice(element + 1, 0 , ".");
					return found = true;
				}
				if ( found ) {
					newUnit++;
					return;
				}
			 }
		 }
		 arr.forEach(callback);
		 if( negs > 0 ) {
			 return parseFloat(arr.join(""));
		 }
		 else{
			 return parseFloat(arr.join(""));
		 }
	},
	fromNotation(smallInt) {
		arr = smallInt.split("");
		var Tenthpower = arr.length - 2;
		return parseFloat(smallInt) * Mathf.pwr(10, Tenthpower);
	},

	cm2ft(cm) {
		return 0.0328084 * cm;
	},

	ft2cm(ft) {
		return 30.48 * ft;
	},

	gall2litre(gall) {
		return 3.78541 * gall;
	},

	litre2gall(litre) {
		return 0.264172 * litre;
	},

	radians(deg) {
		return 0.0174533 * deg;
	},

	degrees(rad) {
		return 57.2958 * rad;
	},

	PI: 3.14159265359,

	clamp(int, min, max) {
		if( int >= max ) {
			return max;
		}
		if( int <= min ) {
			return min;
		}
		else{
			return int;
		}
	},

	isPwrTwo(int) {
		var is = false;
	 	const maxPower = 2147483648;
		for ( x = 2; x < 2147483648 ; x *= 2 ) {
			if( x == int ) {
			 	is = true;
			}
			if ( x != int ) {
				continue;
			}
		}
		return is;
	},

	decimalToBin(int) {
		if( int % 2 >= 1 ) {
			var binary = ["1"];
		}
		if ( int % 2 == 0 ) {
			var binary = ["0"];
		}
		for ( int = int; int > 1; int /= 2 ){
			var hlv = Math.floor( int / 2 );
			if ( hlv % 2 >= 1 ) {
				binary.push("1");
			}
			if ( hlv % 2 == 0 ) {
				binary.push("0");
			}
		}
		binary.pop();
		return binary.reverse().join("");
	},

	txtToAsc(txt) {
		var arr = txt.split("");
		asciiCodes = {
			a:"97", b:"98", c:"99", d:"100", e:"101", f:"102", g:"103", h:"104", i:"105", j:"106",
			k:"107", l:"108", m:"109", n:"110", o:"111", p:"112", q:"113", r:"114", s:"115",
			t:"116", u:"117", v:"118", w:"119", x:"120", y:"121", z:"122", A:"65", B:"66",
			C:"67", D:"68", E:"69", F:"70", G:"71", H:"72", I:"73", J:"74", K:"75",
			L:"76", M:"77", N:"78", O:"79", P:"80", Q:"81", R:"82", S:"83", T:"84",
			U:"85", V:"86", W:"87", X:"88", Y:"89", Z:"90"
		};

		for( i = 0 ; i < arr.length; i++) {
			if( arr[i] == 0 ) {
				arr[i] = "32";
			}
			else{
				arr[i] = asciiCodes[arr[i]];
			}
		}
		return arr;
	},

	ascToTxt(arr) {
		asciiCodes = {
			97:"a", 98:"b", 99:"c", 100:"d", 101:"e", 102:"f", 103:"g", 104:"h", 105:"i", 106:"j",
			107:"k", 108:"l", 109:"m", 110:"n", 111:"o", 112:"p", 113:"q", 114:"r", 115:"s",
			116:"t", 117:"u", 118:"v", 119:"w", 120:"x", 121:"y", 122:"z", 65:"A", 66:"B",
			67:"C", 68:"D", 69:"E", 70:"F", 71:"G", 72:"H", 73:"I", 74:"J", 75:"K",
			76:"L", 77:"M", 78:"N", 79:"O", 80:"P", 81:"Q", 82:"R", 83:"S", 84:"T",
			85:"U", 86:"V", 87:"W", 88:"X", 89:"Y", 90:"Z"
		};

		for( i = 0 ; i < arr.length; i++) {
			if( arr[i] == 32 ) {
				arr[i] = " ";
			}
			else{
				arr[i] = asciiCodes[arr[i]];
			}
		}
		return arr.join("");
	},

	logBase(base, x) {
		return Math.log(x) / Math.log(base);
	},

	E: 2.7182818284590452353602875,

	toFahrenheit(c){
		return c * 9 / 5 + 32
	},

	toKelvin(c){
		return c + 273;
	},

	random: function(x, y) {return Math.floor((Math.random() * y) + x) },

	seed: function(x) {
		var c = "";
		for(i=0; i < x; i++) {
			  c += (Math.floor((Math.random() * 9) + 1))
		}
		return c;
	},

	parityArray: function(x) {
		if( x.length % 2 >= 1 ) {
			return false;
		} if( x.length % 2 <= 0 ){
			return true;
		}
	},

	median: function(k) {
		var x = k.sort(function(a, b){return a-b});
		if( x.length % 2 >= 1 ) {
		 	var m = x.length / 2,
		 	i = Math.ceil(m) - 1;
			return x[i];
		}
		if( x.length % 2 <= 0 ){
			var m = x.length / 2,
			o = x.length / 2 + 1,
			t = x[m - 1] + x[o - 1];
			return t / 2;
		}
	},

	range: function(n) {
		var j = n.sort(function(a, b){return a-b});
		var i = j.length - 1;
		var k = j[i] - j[0];
		return k;
	},

	avg: function(z) {
		var v = 0;
		for(i=0; i < z.length; i++ ) {
			v += z[i];
		}
		var u = v / z.length;
		return u;
	},

	parity: function(x) {
		if( x % 2 >= 1 ) {
			return false;
		} if( x % 2 <= 0 ){
			return true;
		}
	},

	toJSON: arr => {
		return JSON.stringify(arr);
	},

	add: arr => {
		let sum = 0;
		arr.forEach((currentValue, element, index, array) => {
			sum += currentValue;
		});
		return sum;
	},

	multiply: arr => {
		let sum = 1;
		arr.forEach((currentValue, element, index, array) => {
			sum *= currentValue;
		});
		return sum;
	},

	expand: int => {
		let arr = [];
		for(x = 0; x < int; x++) {
			arr.push(1)
		}
		return arr;
	},

	aprox: (a, b) => {
		let c = Math.ceil(a),
			d = Math.ceil(b),
			m = Math.floor(a),
			k = Math.floor(b);
		const x = c == d || m == k ? true : false;
		return x
	},

	arrClampValue: (arr, min, max) => {
		arr.forEach((currentValue, element, index, array) => {
			if(currentValue > max) {
				arr[element] = max;
			}
			if(currentValue < min) {
				arr[element] = min;
			}
			else{
				return;
			}
		});
		return arr;
	},

	arrLock: (arr, max) => {
		arr.forEach((currentValue, index, array) => {
			if ( index > max - 1) {
				arr.splice(index, Number.MAX_SAFE_INTEGER );
			}
		});
		return arr;
	},

	toObject: (arr) => {
		var obj = {};
		if( Mathf.parityArray(arr) == true ) {
			for(i = 0; i < arr.length + 1; i += 2) {
				if( i == 0 ) {
					let x = i + 1
					obj[arr[i]] = arr[x]
				}
				else{
					let x = i + 1
					obj[arr[i]] = arr[x]
				}
			}
		return obj;
		}
		else{
			return null;
		}
	},

	flatten: (arr) => {
		const x = arr.reduce(
			(acc, cur) => acc.concat(cur),
			[]
		);
		return x;
	},

	lose: (obj, ...keys) => {
		keys.map((element) => {
			delete obj[element];
		});
		return obj;
	},

	break: (arr, int) => {
		var output = [];
		while(arr.length) {
			output.push(arr.splice(0, int));
		}
		return output;
	},

	isVacant: arr => {
		return arr.length > 0 ? false : true;
	},

	isOccupied: arr => {
		return arr.length > 0 ? true : false;
	},

	isolate: (arr) => {
		return [...new Set(arr)];
	},

	v: obj => {
		return Object.values(obj);
	},

	k: obj => {
		return Object.keys(obj);
	},

	holdsKey: (obj, key) => {
		return key in obj ? true : false;
	},

	holdsVal: (obj, val) => {
		isFound = false;
		Object.values(obj).forEach((index, element, array) => {
			if ( index == val ) {
			 	isFound = true
			}
			else{
				return;
			}
		});
		return isFound;
	},

	tally: (arr) => {
		return arr.length;
	},

	flip: (arr) => {
		return arr.reverse();
	},

	randomArr: (arr) => {
		const x = Mathf.random(0, arr.length);
		return arr[x];
	},

	insert: (arr, pos, item) => {
		arr.splice(pos, 0, item);
		return arr;
	},

	init: (arr) => {
		return arr[0];
	},

	// stands for append
	app: (arr, appendee) => {
	 	arr.push(appendee);
		return arr;
	},

	grabVal: (obj, key) => {
		return obj[key];
	},

	grabKey: (obj, val) => {
		var key = null;
		Object.values(obj).forEach((index, element) => {
			if( index == val ) {
			 	key = Object.keys(obj).find(key => (
					obj[key] === val)
				);
			}
			else{
				return;
			}
		});
		return key;
	},

	exists: (item) => {
		const nonExists = undefined || null;
		return variable == nonExists ? false : true;
	},

	isEmpty: (item) => {
		const nonExists = "";
		return item == nonExists ? true : false;
	},

	cloneArr: (arr) => {
		let x = arr.slice(0, arr.length);
		return x;
	},

}
