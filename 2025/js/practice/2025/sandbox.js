// 🧠 1. Что вернёт indexOf и lastIndexOf в этом примере?
// const str = "hello world hello";
// console.log(str.indexOf("hello"));
// console.log(str.lastIndexOf("hello"));
// indexOf возвращает индекс первого вхождение поэтому 0
// lastIndexOf возвращает индекс последнего вхождение поэтому 12

// 💥 2. Что выведет код? Объясни почему
// if (~"JavaScript".indexOf("Script")) {
// 	console.log("Найдено!");
// }
//"JavaScript".indexOf("Script") вернет 4
// далее выполняется побитовая операция НЕ ~4
// превращаем 4 в двуичную систему: 0100 а НЕ => 1011 => 11
// получается если indexOf нашел индекс он вернет 4 => т.е найдено
// если же IndexOf не нашел вернет ~ -1 => 0 т.е false
// ответ console.log("Найдено!");

// 🔍 3. Напиши функцию contains(str, substr),
// которая возвращает true, если substr найден в str, и false — иначе.
// Нельзя использовать includes — только indexOf или ~indexOf.
// const contains = (str, substr) => {
// 	if (~str.indexOf(substr))
// 		return true;
// 	return false;
// };
// console.log(contains("hello world hello", "hello")); // true
// console.log(contains("lol kek world", "hello")); // true

// ✂️ 4. В чём разница между slice(), substring() и substr()?
// Выбери правильные утверждения (можно несколько):
// а) slice() поддерживает отрицательные индексы
// б) substring() обрабатывает отрицательные индексы как 0
// в) substr() принимает вторым параметром длину, а не конечную позицию
// г) substr() и substring() — это одно и то же
// А Г В

// 🧪 5. Что вернёт String.raw в примере:
// console.log(String.raw`line 1\nline 2`);
// вернет строку как есть line 1\nline 2

// 📐 6. Что делает str.codePointAt(i) и когда он полезен? Приведи пример.
// Возвращает код символа из таблицы вроде ASCII
// не знаю когда полезен ну думаю для сортировки или сравнения

// 🔢 7. Напиши функцию charCode(str),
// которая принимает строку и возвращает массив всех её codePoint значений.
// charCode("AB") // [65, 66]

//variant 1 (быстро придуманный)
// const charCode = (str) => {
// 	const charsCode = [];
// 	for(let idx = 0; idx < str.length; idx++){
// 		charsCode.push(str[idx].codePointAt(0));
// 	}
// 	return charsCode;
// }

// variant 2
// const charCode = (str) => {
// 	return [...str].map((char) => char.codePointAt(0));
// };

// console.log(charCode("AB"));

// 🔤 8. Что вернёт localeCompare в следующих случаях?
// console.log("a".localeCompare("b")); // тут будет -1 т.к как a находится до b
// console.log("b".localeCompare("a")); // тут будет  1 т.к как b находится после a
// console.log("a".localeCompare("a")); // тут будет 0 т.к как они равны

// 🏷 9. Что делает Object.entries() и когда удобно его использовать? Пример.
// const x = {
// 	id: 1,
// 	name: "rest",
// };
// console.log(Object.entries(x)); //Object.entries() работает с объектами и возвращает массив в виде [[key,value]]
// //[ [ 'id', 1 ], [ 'name', 'rest' ] ]

// 💸 10. Реализуй функцию extractCurrencyValue(str),
// которая возвращает число из строки с символом валюты:
// extractCurrencyValue('$120') // 120
// extractCurrencyValue('€99') // 99

// const extractCurrencyValue = (str) => {
// 	console.log(+str.slice(1)); //насколько я помню унарные операторы максимально стараются строку к числу аналог parseInt
// };
// extractCurrencyValue("$120"); // 120
// extractCurrencyValue("€99"); // 99

// 🎁 Бонус: маленький кодовый челендж (по желанию)
// 🔄 Найди все вхождения подстроки в строке.
// Напиши функцию:
// function findAllOccurrences(str, subStr) {
//   // возвращает массив индексов, где встречается subStr в str
// }
// Пример:
// findAllOccurrences("banana", "na") // [2, 4]

// function findAllOccurrences(str, subStr) {
// 	return [...str].reduce((acc, _, idx) => {
// 		if (str.indexOf(subStr, idx) === idx)
// 			acc.push(idx);
// 		return acc;
// 	}, []);
// }

// console.log(findAllOccurrences("banana", "na")); // [2, 4]
