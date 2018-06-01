[ThreeMap](api-readme.md) > [TileList](api-modules-tilelist.md) > [TileList](api-classes-tilelist.tilelist-1.md)



## Class: TileList


TileList - collection of tiles

## Type parameters
#### T 
#### T 
#### T 
#### T 
## Hierarchy


 `Array`

**↳ TileList**







## Indexable

\[n: `number`\]:&nbsp;`T`
TileList - collection of tiles


### Properties

* [Array](api-classes-tilelist.tilelist-1.md#array)
* [length](api-classes-tilelist.tilelist-1.md#length)


### Methods

* [containsTile](api-classes-tilelist.tilelist-1.md#containstile)
* [getTilesToRender](api-classes-tilelist.tilelist-1.md#gettilestorender)
* [__@iterator](api-classes-tilelist.tilelist-1.md#___iterator)
* [__@unscopables](api-classes-tilelist.tilelist-1.md#___unscopables)
* [concat](api-classes-tilelist.tilelist-1.md#concat)
* [copyWithin](api-classes-tilelist.tilelist-1.md#copywithin)
* [entries](api-classes-tilelist.tilelist-1.md#entries)
* [every](api-classes-tilelist.tilelist-1.md#every)
* [fill](api-classes-tilelist.tilelist-1.md#fill)
* [filter](api-classes-tilelist.tilelist-1.md#filter)
* [find](api-classes-tilelist.tilelist-1.md#find)
* [findIndex](api-classes-tilelist.tilelist-1.md#findindex)
* [forEach](api-classes-tilelist.tilelist-1.md#foreach)
* [indexOf](api-classes-tilelist.tilelist-1.md#indexof)
* [join](api-classes-tilelist.tilelist-1.md#join)
* [keys](api-classes-tilelist.tilelist-1.md#keys)
* [lastIndexOf](api-classes-tilelist.tilelist-1.md#lastindexof)
* [map](api-classes-tilelist.tilelist-1.md#map)
* [pop](api-classes-tilelist.tilelist-1.md#pop)
* [push](api-classes-tilelist.tilelist-1.md#push)
* [reduce](api-classes-tilelist.tilelist-1.md#reduce)
* [reduceRight](api-classes-tilelist.tilelist-1.md#reduceright)
* [reverse](api-classes-tilelist.tilelist-1.md#reverse)
* [shift](api-classes-tilelist.tilelist-1.md#shift)
* [slice](api-classes-tilelist.tilelist-1.md#slice)
* [some](api-classes-tilelist.tilelist-1.md#some)
* [sort](api-classes-tilelist.tilelist-1.md#sort)
* [splice](api-classes-tilelist.tilelist-1.md#splice)
* [toLocaleString](api-classes-tilelist.tilelist-1.md#tolocalestring)
* [toString](api-classes-tilelist.tilelist-1.md#tostring)
* [unshift](api-classes-tilelist.tilelist-1.md#unshift)
* [values](api-classes-tilelist.tilelist-1.md#values)



---
## Properties
<a id="array"></a>

### «Static» Array

**●  Array**:  *`ArrayConstructor`* 

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1280*





___

<a id="length"></a>

### «Static» length

**●  length**:  *`number`* 

*Inherited from Array.length*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1121*



Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.




___


## Methods
<a id="containstile"></a>

###  containsTile

► **containsTile**(quadkey: *`string`*): `boolean`



*Defined in [tilelist.ts:17](https://github.com/areknawo/ThreeMap/blob/master/src/tilelist.ts#L17)*



Checks if TileList contains specific Tile by Quadkey.
*__example__*: `TileList.containsTile("00003232");`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| quadkey | `string`   |  Tile's quadkey. |





**Returns:** `boolean`





___

<a id="gettilestorender"></a>

###  getTilesToRender

► **getTilesToRender**(previousTiles?: *[TileList](api-classes-tilelist.tilelist-1.md)*): [IView](api-interfaces-interfaces.iview.md)



*Defined in [tilelist.ts:33](https://github.com/areknawo/ThreeMap/blob/master/src/tilelist.ts#L33)*



Get tiles to remove (not seen in current view) and render (actually seen in view).
*__example__*: `TileList.getTilesToRender({...});`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| previousTiles | [TileList](api-classes-tilelist.tilelist-1.md)   |  Collection of currently-in-view tiles. |





**Returns:** [IView](api-interfaces-interfaces.iview.md)
View instance - tiles to be rendered & removed.





___

<a id="___iterator"></a>

### «Static» __@iterator

► **__@iterator**(): `IterableIterator`.<`T`>



*Inherited from Array.[Symbol.iterator]*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4813*



Iterator




**Returns:** `IterableIterator`.<`T`>





___

<a id="___unscopables"></a>

### «Static» __@unscopables

► **__@unscopables**(): `object`



*Inherited from Array.[Symbol.unscopables]*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:5612*



Returns an object whose properties have the value 'true' when they will be absent when used in a 'with' statement.




**Returns:** `object`





___

<a id="concat"></a>

### «Static» concat

► **concat**(...items: *`ConcatArray`.<`T`>[]*): `T`[]

► **concat**(...items: *(`T`⎮`ConcatArray`.<`T`>)[]*): `T`[]



*Inherited from Array.concat*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1143*



Combines two or more arrays.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | `ConcatArray`.<`T`>[]   |  Additional items to add to the end of array1. |





**Returns:** `T`[]



*Inherited from Array.concat*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1148*



Combines two or more arrays.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | (`T`⎮`ConcatArray`.<`T`>)[]   |  Additional items to add to the end of array1. |





**Returns:** `T`[]





___

<a id="copywithin"></a>

### «Static» copyWithin

► **copyWithin**(target: *`number`*, start: *`number`*, end?: *`number`*): `this`



*Inherited from Array.copyWithin*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4171*



Returns the this object after copying a section of the array identified by start and end to the same array starting at position target


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| target | `number`   |  If target is negative, it is treated as length+target where length is thelength of the array. |
| start | `number`   |  If start is negative, it is treated as length+start. If end is negative, itis treated as length+end. |
| end | `number`   |  If not specified, length of the this object is used as its default value. |





**Returns:** `this`





___

<a id="entries"></a>

### «Static» entries

► **entries**(): `IterableIterator`.<[`number`,`T`]>



*Inherited from Array.entries*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4818*



Returns an iterable of key, value pairs for every entry in the array




**Returns:** `IterableIterator`.<[`number`,`T`]>





___

<a id="every"></a>

### «Static» every

► **every**(callbackfn: *`function`*, thisArg?: *`any`*): `boolean`



*Inherited from Array.every*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1208*



Determines whether all the members of an array satisfy the specified example.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array. |
| thisArg | `any`   |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |





**Returns:** `boolean`





___

<a id="fill"></a>

### «Static» fill

► **fill**(value: *`T`*, start?: *`number`*, end?: *`number`*): `this`



*Inherited from Array.fill*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4160*



Returns the this object after filling the section identified by start and end with value


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `T`   |  value to fill array section with |
| start | `number`   |  index to start filling the array at. If start is negative, it is treated aslength+start where length is the length of the array. |
| end | `number`   |  index to stop filling the array at. If end is negative, it is treated aslength+end. |





**Returns:** `this`





___

<a id="filter"></a>

### «Static» filter

► **filter**S(callbackfn: *`function`*, thisArg?: *`any`*): `S`[]

► **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `T`[]



*Inherited from Array.filter*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1232*



Returns the elements of an array that meet the condition specified in a callback function.


**Type parameters:**

#### S :  `T`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| thisArg | `any`   |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |





**Returns:** `S`[]



*Inherited from Array.filter*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1238*



Returns the elements of an array that meet the condition specified in a callback function.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| thisArg | `any`   |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |





**Returns:** `T`[]





___

<a id="find"></a>

### «Static» find

► **find**S(predicate: *`function`*, thisArg?: *`any`*): `S`⎮`undefined`

► **find**(predicate: *`function`*, thisArg?: *`any`*): `T`⎮`undefined`



*Inherited from Array.find*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4138*



Returns the value of the first element in the array where predicate is true, and undefined otherwise.


**Type parameters:**

#### S :  `T`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| predicate | `function`   |  find calls predicate once for each element of the array, in ascendingorder, until it finds one where predicate returns true. If such an element is found, findimmediately returns that element value. Otherwise, find returns undefined. |
| thisArg | `any`   |  If provided, it will be used as the this value for each invocation ofpredicate. If it is not provided, undefined is used instead. |





**Returns:** `S`⎮`undefined`



*Inherited from Array.find*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4139*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| predicate | `function`   |  - |
| thisArg | `any`   |  - |





**Returns:** `T`⎮`undefined`





___

<a id="findindex"></a>

### «Static» findIndex

► **findIndex**(predicate: *`function`*, thisArg?: *`any`*): `number`



*Inherited from Array.findIndex*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4150*



Returns the index of the first element in the array where predicate is true, and -1 otherwise.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| predicate | `function`   |  find calls predicate once for each element of the array, in ascendingorder, until it finds one where predicate returns true. If such an element is found,findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| thisArg | `any`   |  If provided, it will be used as the this value for each invocation ofpredicate. If it is not provided, undefined is used instead. |





**Returns:** `number`





___

<a id="foreach"></a>

### «Static» forEach

► **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`



*Inherited from Array.forEach*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1220*



Performs the specified action for each element in an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| thisArg | `any`   |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |





**Returns:** `void`





___

<a id="indexof"></a>

### «Static» indexOf

► **indexOf**(searchElement: *`T`*, fromIndex?: *`number`*): `number`



*Inherited from Array.indexOf*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1196*



Returns the index of the first occurrence of a value in an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| searchElement | `T`   |  The value to locate in the array. |
| fromIndex | `number`   |  The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |





**Returns:** `number`





___

<a id="join"></a>

### «Static» join

► **join**(separator?: *`string`*): `string`



*Inherited from Array.join*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1153*



Adds all the elements of an array separated by the specified separator string.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| separator | `string`   |  A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |





**Returns:** `string`





___

<a id="keys"></a>

### «Static» keys

► **keys**(): `IterableIterator`.<`number`>



*Inherited from Array.keys*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4823*



Returns an iterable of keys in the array




**Returns:** `IterableIterator`.<`number`>





___

<a id="lastindexof"></a>

### «Static» lastIndexOf

► **lastIndexOf**(searchElement: *`T`*, fromIndex?: *`number`*): `number`



*Inherited from Array.lastIndexOf*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1202*



Returns the index of the last occurrence of a specified value in an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| searchElement | `T`   |  The value to locate in the array. |
| fromIndex | `number`   |  The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |





**Returns:** `number`





___

<a id="map"></a>

### «Static» map

► **map**U(callbackfn: *`function`*, thisArg?: *`any`*): `U`[]



*Inherited from Array.map*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1226*



Calls a defined callback function on each element of an array, and returns an array that contains the results.


**Type parameters:**

#### U 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| thisArg | `any`   |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |





**Returns:** `U`[]





___

<a id="pop"></a>

### «Static» pop

► **pop**(): `T`⎮`undefined`



*Inherited from Array.pop*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1138*



Removes the last element from an array and returns it.




**Returns:** `T`⎮`undefined`





___

<a id="push"></a>

### «Static» push

► **push**(...items: *`T`[]*): `number`



*Inherited from Array.push*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1134*



Appends new elements to an array, and returns the new length of the array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | `T`[]   |  New elements of the Array. |





**Returns:** `number`





___

<a id="reduce"></a>

### «Static» reduce

► **reduce**(callbackfn: *`function`*): `T`

► **reduce**(callbackfn: *`function`*, initialValue: *`T`*): `T`

► **reduce**U(callbackfn: *`function`*, initialValue: *`U`*): `U`



*Inherited from Array.reduce*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1244*



Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |





**Returns:** `T`



*Inherited from Array.reduce*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1245*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  - |
| initialValue | `T`   |  - |





**Returns:** `T`



*Inherited from Array.reduce*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1251*



Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.


**Type parameters:**

#### U 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| initialValue | `U`   |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |





**Returns:** `U`





___

<a id="reduceright"></a>

### «Static» reduceRight

► **reduceRight**(callbackfn: *`function`*): `T`

► **reduceRight**(callbackfn: *`function`*, initialValue: *`T`*): `T`

► **reduceRight**U(callbackfn: *`function`*, initialValue: *`U`*): `U`



*Inherited from Array.reduceRight*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1257*



Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |





**Returns:** `T`



*Inherited from Array.reduceRight*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1258*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  - |
| initialValue | `T`   |  - |





**Returns:** `T`



*Inherited from Array.reduceRight*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1264*



Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.


**Type parameters:**

#### U 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| initialValue | `U`   |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |





**Returns:** `U`





___

<a id="reverse"></a>

### «Static» reverse

► **reverse**(): `T`[]



*Inherited from Array.reverse*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1157*



Reverses the elements in an Array.




**Returns:** `T`[]





___

<a id="shift"></a>

### «Static» shift

► **shift**(): `T`⎮`undefined`



*Inherited from Array.shift*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1161*



Removes the first element from an array and returns it.




**Returns:** `T`⎮`undefined`





___

<a id="slice"></a>

### «Static» slice

► **slice**(start?: *`number`*, end?: *`number`*): `T`[]



*Inherited from Array.slice*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1167*



Returns a section of an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number`   |  The beginning of the specified portion of the array. |
| end | `number`   |  The end of the specified portion of the array. |





**Returns:** `T`[]





___

<a id="some"></a>

### «Static» some

► **some**(callbackfn: *`function`*, thisArg?: *`any`*): `boolean`



*Inherited from Array.some*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1214*



Determines whether the specified callback function returns true for any element of an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array. |
| thisArg | `any`   |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |





**Returns:** `boolean`





___

<a id="sort"></a>

### «Static» sort

► **sort**(compareFn?: *`function`*): `this`



*Inherited from Array.sort*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1172*



Sorts an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| compareFn | `function`   |  The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order. |





**Returns:** `this`





___

<a id="splice"></a>

### «Static» splice

► **splice**(start: *`number`*, deleteCount?: *`number`*): `T`[]

► **splice**(start: *`number`*, deleteCount: *`number`*, ...items: *`T`[]*): `T`[]



*Inherited from Array.splice*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1178*



Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number`   |  The zero-based location in the array from which to start removing elements. |
| deleteCount | `number`   |  The number of elements to remove. |





**Returns:** `T`[]



*Inherited from Array.splice*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1185*



Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number`   |  The zero-based location in the array from which to start removing elements. |
| deleteCount | `number`   |  The number of elements to remove. |
| items | `T`[]   |  Elements to insert into the array in place of the deleted elements. |





**Returns:** `T`[]





___

<a id="tolocalestring"></a>

### «Static» toLocaleString

► **toLocaleString**(): `string`



*Inherited from Array.toLocaleString*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1129*



Returns a string representation of an array. The elements are converted to string using thier toLocalString methods.




**Returns:** `string`





___

<a id="tostring"></a>

### «Static» toString

► **toString**(): `string`



*Inherited from Array.toString*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1125*



Returns a string representation of an array.




**Returns:** `string`





___

<a id="unshift"></a>

### «Static» unshift

► **unshift**(...items: *`T`[]*): `number`



*Inherited from Array.unshift*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1190*



Inserts new elements at the start of an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | `T`[]   |  Elements to insert at the start of the Array. |





**Returns:** `number`





___

<a id="values"></a>

### «Static» values

► **values**(): `IterableIterator`.<`T`>



*Inherited from Array.values*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4828*



Returns an iterable of values in the array




**Returns:** `IterableIterator`.<`T`>





___


