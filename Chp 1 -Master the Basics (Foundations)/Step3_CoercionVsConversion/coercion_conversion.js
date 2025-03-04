// 🥇 Step 3: Type Coercion vs. Conversion


// Coercion: JS automatically changes types.

console.log('5' + 5); // '55' (string)
console.log('5' - 2); // 3 (number)


// Conversion: You manually change types.
console.log(Number('5'), "| type:", typeof Number('5')); 
// 5 | type: number

console.log(String(5), "| type:", typeof String(5)); 
// '5' | type: string

console.log(Boolean(1), "| type:", typeof Boolean(1)); 
// true | type: boolean