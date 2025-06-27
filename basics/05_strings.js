const name="pratiksha"
const repo = 10

// console.log(name+repo+"value"); //outed


console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String('pratiksha')
console.log(gameName[0])

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const string = gameName.substring(0,6)   //(inclusive, exclusive)
console.log(string)

const string2 = gameName.slice(-4,9)   
console.log(string2)

let str='diksha'
console.log(str.substring(0,4))
console.log(str.toUpperCase())

const s= new String('pratiksha-anil-katkade');
console.log(s)
console.log(s.slice(0,9))
console.log(s.charAt(8))
console.log(s.toUpperCase())
console.log(s.concat(gameName))
console.log(s.split('-'))
console.log(s.replace('anil','Anil'))
console.log(s.trim())
console.log(s.indexOf('a'))
console.log(s.includes('anil'))
console.log(s.length)
console.log(s.replaceAll('pratiksha chavan'))