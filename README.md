<img src="http://i.imgur.com/CuMbiu7.png"></img>
> A library for math, conversion and other miscellaneous functions/uses.

### Installation
[ Content ]

### Documentation & Content
All functions and methods
- [sqrd](#sqrd) 
- [pwr](#pwr)
- [toNotationStr](#tonotationstr)
- [toNotation](#tonotation)
- [fromNotation](#fromnotation)
- [cm2ft](#cm2ft)
- [ft2cm](#ft2cm)
- [gall2litre](#gall2litre)
- [litre2gall](#litre2gall)
- [radians](#radians)
- [degrees](#degrees)
- [PI](#pi)
- [isPwrTwo](#ispwrtwo)
- [decimalToBin](#decimaltobin)
- [txtToAsc](#txttoasc)
- [ascToTxt](#asctotxt)
- [logBase](#logbase)
- [E](#e)
- [toFahrenheit](#tofahrenheit)
- [toKelvin](#tokelvin)
- [random](#random)
- [seed](#seed)
- [parityArray](#parityarray)
- [median](#median)
- [range](#range)
- [mean](#mean)
- [parity](#parity)
- [toJSON](#tojson)
- [add](#add) 
- [multiply](#multiply)
- [expand](#expand)
- [aprox](#aprox)
- [arrClampValue](#arrclampvalue)
- [arrLock](#arrlock)
- [toObject](#toobject)
- [flatten](#flatten)
- [lose](#lose)


### Usage and Information
Mathf has no dependency's. It can be used by calling the object Mathf with your desired function and parameter. Here are some 
examples of each of the different methods...

### ```sqrd```
Squares the parameter.
```javascript
Mathf.sqrd(8) // 64
Mathf.sqrd(2) // 4
Mathf.sqrd(100) // 10000
```

### ```pwr```
First parameter to the power of the second.
```javascript
Mathf.pwr(2, 9) // 512
Mathf.pwr(7, 2) // 49
Mathf.pwr(13, 8) // 815730721
```

### ```toNotationStr```
##### [ STILL UNDER DEVELOPMENT ]
Will turn your given parameter into a scientific notation but will be in the form of a string.
Note: The number between the parentheses is the power of the number beside it, for example 10(7) 
would be 10 to the power of 7.

**Your parameter must be surrounded with quotes for this to work properly.**
```javascript
Mathf.toNotationStr("71312321") // 7.1312321 * 10(7)
Mathf.toNotationStr("0000973621") // 9.73621 * 10(-4)
Mathf.toNotationStr("888888") // 8.88888 * 10(5)

/* Known Issues */
Mathf.toNotationStr("10000") // will return incorrect value.
Mathf.toNotationStr("100001") // will also return incorrect value.
```

### ```toNotation```
This will only return the float of the parameter in scientific notation form, without including the tenth power required to revert it back to its original self. 

**Again, your parameter must be surrounded with quotes for this to work properly.**
```javascript
Mathf.toNotation("0000973621") // 9.73621
Mathf.toNotation("34324343223545645") // 3.4324343223545646
Mathf.toNotation("888888") // 8.88888
```

### ```fromNotation```
##### [ COMING SOON || FIXING BUGS ]

### ```cm2ft```
Converts parameter (cm) into (ft)
```javascript
Mathf.cm2ft(10) // 0.32808400000000004
Mathf.cm2ft(30.48) // 1.000000032
Mathf.cm2ft(999) // 32.7755916
```

### ```ft2cm```
Converts parameter (ft) into (cm)
```javascript
Mathf.ft2cm(10) // 304.8
Mathf.ft2cm(30.48) // 929.0304
Mathf.ft2cm(999) // 30449.52
```

### ```gall2litre```
Converts parameter (gallon) into (litre)
```javascript
Mathf.gall2litre(10) // 37.8541
Mathf.gall2litre(30.48) // 115.3792968
Mathf.gall2litre(999) // 3781.6245900000004
```

### ```litre2gall```
Converts parameter (litre) into (gallon)
```javascript
Mathf.litre2gall(10) // 2.6417200000000003
Mathf.litre2gall(30.48) // 8.051962560000002
Mathf.litre2gall(999) // 263.907828
```

### ```radians```
Converts parameter (degree) into (radian)
```javascript
Mathf.radians(10) // 0.17453300000000002
Mathf.radians(30.48) // 0.531976584
Mathf.radians(90) // 1.5707970000000002
```

### ```degree```
Converts parameter (radian) into (degree)
```javascript
Mathf.degree(10) // 572.958
Mathf.degree(30.48) // 1746.375984
Mathf.degree(90) // 5156.622
```

### ```PI```
Value of PI
```javascript
Mathf.PI // 3.14159265359
```


### ```clamp```
Clamps a given parameter between a minimum and maximum int.
```javascript
Mathf.clamp(8, 1, 5) // 5
Mathf.clamp(3, 1, 5) // 3
Mathf.clamp(-10, 1, 5) // 1
```

### ```isPwrTwo```
Checks if a parameter is a power of two, if it is, it will return ```true```.
```javascript
Mathf.isPwrTwo(2) // true
Mathf.isPwrTwo(16) // true
Mathf.isPwrTwo(1) // false
```

### ```decimalToBin```
Converts decimal to binary.
```javascript
Mathf.decimalToBin(99) // 1100011
Mathf.decimalToBin(4543) // 1000110111111
Mathf.decimalToBin(19) // 10011
```

### ```txtToAsc```
Converts text to ascii.
__This will only convert letters, using numbers or symbols will not work.__
```javascript
Mathf.txtToAsc("Hello") // 72,101,108,108,111
Mathf.txtToAsc("Mathf is the best") // 77,97,116,104,102,32,105,115,32,116,104,101,32,98,101,115,116
Mathf.txtToAsc("dutyasvdtagwb") // 100,117,116,121,97,115,118,100,116,97,103,119,98
```

### ```ascToTxt```
Converts ascii to text.
```javascript
Mathf.ascToTxt([72,101,108,108,111]) // Hello
Mathf.ascToTxt([77,97,116,104,102,32,105,115,32,116,104,101,32,98,101,115,116]) // Mathf is the best
Mathf.ascToTxt([100,117,116,121,97,115,118,100,116,97,103,119,98]) // dutyasvdtagwb
```

### ```logBase```
Get base (parameter) logarithm of (parameter).
__Logarithms in javascript arent always perfectly accurate but are only usually slightly off.__
```javascript
Mathf.logBase(10, 1000) // 2.9999999999999996 (Note: Would be 3 if js Logarithms were perfect)
Mathf.logBase(8, 3) //  0.5283208335737187
Mathf.logBase(9, 4) //  0.6309297535714574
```

### ```E```
The value of E.
```javascript
Mathf.E // 2.7182818284590452353602875
```

### ```toFahrenheit```
Converts Celsius to Fahrenheit
```javascript
Mathf.toFahrenheit(100) // 212
Mathf.toFahrenheit(70) // 158
Mathf.toFahrenheit(30) // 86
```

### ```toKelvin```
Converts Celsius to Kelvin
```javascript
Mathf.toKelvin(100) // 373
Mathf.toKelvin(70) // 343
Mathf.toKelvin(30) // 303
```

### ```random```
Chooses a random number between parameter one and parameter two.
```javascript
Mathf.random(1, 20) // 3
Mathf.random(1, 20) // 10
Mathf.random(10, 40) // 33
```

### ```seed```
Generates random seed of numbers with length set to given parameter.
```javascript
Mathf.seed(2) // 74
Mathf.seed(10) // 4828821837
Mathf.seed(30) // 818258243146673822531264199559
```

### ```parityArray```
Returns ```true``` if the amount of items in an array is an equal number.
```javascript
Mathf.parityArray([1,2,3) // false
Mathf.parityArray(["a","b") // true
Mathf.parityArray([1,2,3,4,5,6,7,8]) // true
```

### ```median```
Calculates the median of a numerical array.
```javascript
Mathf.median([1,2,3,4,5]) // 3
Mathf.median([1,2,3,4,5,6]) // 3.5
Mathf.median([1,2,3]) // 2
```

### ```range```
Calculates the range of a numerical array.
```javascript
Mathf.range([3,5,9,8,4]) // 5
Mathf.range([80,1,6,9,45,2,3]) // 79
Mathf.range([-80,3000,2,3,8,8343]) // 8423
```

### ```avg```
Calculates the arithmetic mean/average of a numerical array.
```javascript
Mathf.avg([3,5,9,8,4]) // 5.8
Mathf.avg([100,-99,-3,2,4,8]) // 2
Mathf.avg([1,3,7,9,2,88]) // 18.333333333333332
```

### ```parity```
Returns ```true``` if a number is even and ```false``` if it isn't.
```javascript
Mathf.parity(2) // true
Mathf.parity(7) // false
Mathf.parity(14) // true
```

### ```toJSON```
Converts array or object to JSON standards.
```javascript
Mathf.toJSON({one: "two"}) // {"one":"two"}
Mathf.toJSON(['hello', 'hi']) // ["hello","hi"]
Mathf.toJSON(['1','2','3']) // ["1","2","3"]
```

### ```add```
Adds all numerical values in an array together.
```javascript
Mathf.add([1,2,3]) // 6
Mathf.add([3,3,3]) // 9
Mathf.add([8,8,8,8]) // 32
```


### ```multiply```
Multiplies all numerical values in an array by each other.
```javascript
Mathf.multiply([3,3,3]) // 27
Mathf.multiply([7,7]) // 49
Mathf.multiply([1,2,3,54,9]) // 2916
```

### ```expand```
Converts given integer into an array of 1's.
```javascript
Mathf.expand(10) // [1,1,1,1,1,1,1,1,1,1]
Mathf.expand(5) // [1,1,1,1,1]
Mathf.expand(3) // [1,1,1]
```

### ```aprox```
Compares two numerical values to see if they are similar. 
```javascript
Mathf.aprox(1.9,1.2) // true
Mathf.aprox(2.9,1.2) // false
Mathf.aprox(2.111111,2.999999) // true
```

### ```arrClampValue```
Clamps the values of each numerical value in an array between (min) and (max).
```javascript
Mathf.arrClampValue([1,2,3,4,5,6,7,8],3,6) // [3,3,3,4,5,6,6,6]
Mathf.arrClampValue([2,999,1001,1000,-30],0,999) // [2,999,999,999,0]
Mathf.arrClampValue([1,2,3,4,5],1,5) // [1,2,3,4,5]
```

### ```arrLock```
Returns all array items within the maximum limit given.
```javascript
Mathf.arrLock([1,2,3,4,5,6,7,8],3) // [1,2,3]
Mathf.arrLock([99,88,342,-234,99,1,2,3,4,5], 4) // [99,88,342,-234]
Mathf.arrLock([9387432,78324893274,2398473298,234823732], 0) // []
```

### ```toObject```
Converts every two array items into an objects key and value. If the array is not equal 
there will not be a value for one of the keys so it will return ```null```.
```javascript
const newObj = Mathf.toObject(["Key0","Val0","Key1","Val1","Key2","Val2"]);

return newObj.Key0 // { Val0 }
```
```javascript
const newObj = Mathf.toObject(["Hello","Bye"]);

return newObj.Hello // { Bye }
```
```javascript
const newObj = Mathf.toObject(["Key0"]) // null
```

### ```flatten```
This will conjoin mulitple arrays within an array.
__current issue: doesn't work if objects are included in array just yet__
```javascript
Mathf.flatten([[1,2,3,4],["one","two",3]]) // [1,2,3,4,"one","two",3]
Mathf.flatten([["hello"],[38127649]]) // ["hello",38127649]
Mathf.flatten([[10,11],[12,13],[19,20]]) // [10,11,12,13,19,20]
```

### ```lose```
This will remove the given key/s from an object.
```javascript
/* We will create an object template to demonstrate use. */
function Employee(name, age, department) {
  this.name = name,
  this.age = age,
  this.department = department
};
```

```javascript
/* We'll create default object... */
const original = new Employee("John",21,"Software Engineer");
/* and our object with our key/s removed.. */
const flitered = Mathf.lose(new Employee("John",21,"Software Engineer"), "age", "name");
```

```javascript
// original
return `${original.age} | ${original.name} | {original.department}` 
// 21 | John | Software Engineer

return `${flitered.age} | ${flitered.name} | {flitered.department}` 
// undefined | undefined | Software Engineer
```
