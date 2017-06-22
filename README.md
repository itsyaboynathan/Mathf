# Mathf
> A library for math, conversion and other miscellaneous functions/uses.

### Installation
[ Content ]

### Documentation & Content
All functions and methods
- sqrd 
- pwr
- toNotationStr
- toNotation
- fromNotation
- cm2ft
- ft2cm
- gall2litre
- litre2gall
- radians
- degrees
- PI
- isPwrTwo
- decimalToBin
- txtToAsc
- ascToTxt
- logBase
- E
- toFahrenheit
- toKelvin
- random
- seed
- parityArray
- median
- range
- mean
- parity
- toJSON

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

### ```toNotationStr ``` 
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
Mathf.toNotationStr("10000") will return incorrect value.
Mathf.toNotationStr("100001") will also return incorrect value.
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

