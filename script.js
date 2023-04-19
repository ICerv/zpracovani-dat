console.log('funguju!');
const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = [
  'Petr',
  'Jana',
  'Pavel',
  'Zuzana',
  'Eva',
  'Adam',
  'Onyx',
  'Alex',
];
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 22, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
  { name: 'Alex', age: 29, gender: 'androgyne' },
];

//VYHLEDAVANI, DOTAZOVANI
// Pomocí funkce forEach vypište do konzole postupně věk každé osoby z pole persons.
persons.forEach((person) => {
  console.log(person.age)
})

// Pomocí metody forEach napište cyklus, který vypíše do konzole první písmeno z každého jména v poli names.
names.forEach((name) => {
  console.log(name[0])
})
// Pomocí metody find najděte v poli persons osobu se jménem "Adam" a vypište ji do konzole.
persons.find((person) => {
  console.log(person.name === 'Adam')
})
// Vypište do konzole gender osoby se jménem "Onyx".
console.log(persons.find(person => person.name === 'Onyx').gender);

// Pomocí metody findIndex najděte v poli persons index osoby s věkem 22 a mužským pohlavím.
const index = persons.findIndex(person =>
  person.age === 22 && person.gender === 'male')

console.log(index)
// Pomocí metody some zjistěte, jestli jsou v poli numbers nějaká čísla dělitelná 11.
const result = numbers.some(
  (number) => { return number % 11 === 0 })
console.log(result) //true
if (result) {
  console.log('Ano')
} else {
  console.log('Ne')
}
// Pomocí metody some zjistěte, jestli jsou v poli persons nějaké osoby nebinárního pohlaví, tedy nejsou ani male, ani female.
const result1 = persons.some((person) => {
  !person.gender === 'male' && !person.gender === 'female'
})
console.log(result1)
// Pomocí metody every zjistěte, jestli v poli persons platí, že je každá osoba starší 18 let.
const age = persons.every((person) => {
  person.age >= 18
})
console.log(age)

//TRANSFORMACE

// Pomocí metody filter získejte z pole numbers pouze ta čísla, která jsou sudá, a uložte je do proměnné evenNumbers. Vypište toto nové pole do konzole.
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0
})
console.log(evenNumbers)
// Pomocí metody filter získejte z pole persons pouze dospělé lidi a uložte je do proměnné adults. Vypište toto nové pole do konzole.
const adults = persons.filter((person) => {
  return person.age >= 18
})
console.log(adults)

// Pomocí metody map vydělte všecha čísla v poli numbers třemi a uložte je do proměnné dividedByThree. Vypište toto nové pole do konzole.
const dividedByThree = numbers.map((number) => {
  return number / 3
})
console.log(dividedByThree)

// Pomocí metody map převeďte všechna čísla z pole numbers na řetězce. Výsledek vypište do konzole.
const string = numbers.map((number) => {
  return String(number)
})
console.log(string)

// Z pole persons pomocí metody map vytvořte pro každou osobu e-mail ve formátu petr@gmail.com a výsledek uložte do proměnné emails. Vypište toto nové pole do konzole.

const email = persons.map((person) => {
  return person.name.toLowerCase() + '@gmail.com'
})
console.log(email)

// Z pole persons pomocí metody map vytvořte pro každou osobu položku HTML seznamu ve formátu <li>Petr (16)</li> a výsledek uložte do proměnné list. Vypište toto nové pole do konzole.

const seznam = persons.map((person) => {
  return `
  <li>${person.name} (${person.age})</li>
  `
})
console.log(seznam)

//AGREGACE
// Pomocí metod map a join vytvořte z pole persons HTML seznam v následujícím formátu:

// <ul>
//   <li>Petr (16)</li>
//   <li>Jana (8)</li>
//   <!-- a tak dále... -->
// </ul>
const seznam1 = persons.map((person) => {
  return `
<li>${person.name} (${person.age})</li>
`
}).join('')
console.log(seznam1)

// Pomocí innerHTML vložte tento seznam do stránky.
document.body.innerHTML += seznam1
// Proveďte totéž jako v předchozím bodě, zobrazte však v seznamu pouze zletilé osoby.
const adultPersons = persons.filter((person) => {
  return person.age >= 18
})
console.log(adultPersons)

// Proveďte totéž jako v předchozím bodě, přidejte však do položky seznamu CSS třídu dle pohlaví dané osoby.
// <li class="male">Petr (16)</li>
// U nebinárních osob použijte CSS třídu nonbinary.

const personsWithGenderClass = persons.map(person => ({
  name: person.name,
  age: person.age,
  gender: person.gender,
  class: person.gender === 'male' ? 'person-male' :
    person.gender === 'female' ? 'person-female' :
      person.gender === 'intersex' ? 'person-nonbinary' :
        person.gender === 'androgyne' ? 'person-nonbinary' :
          ''
}));
console.log(personsWithGenderClass)


