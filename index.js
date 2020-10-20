const querystring = require('querystring');
let stringify = querystring.stringify({
    name: 'ace',
    age: 18,
    course: ['js', 'java'],
    from: ''
});
// name=ace&age=18&course=js&course=java&from=
console.log(stringify);

let stringify2 = querystring.stringify({
    name: 'ace',
    age: 18,
    course: ['js', 'java'],
    from: ''
}, ',');
// name=ace,age=18,course=js,course=java,from=
console.log(stringify2);

let parse = querystring.parse('name=ace&age=18&course=js&course=java&from=')
console.log(parse);
// {
//     name: 'ace',
//     age: 18,
//     course: ['js', 'java'],
//     from: ''
// }

let parse2 = querystring.parse('name=ace,age=18,course=js,course=java,from=', ',', '=', 2)
console.log(parse2);
// {
//     name: 'ace',
//     age: 18,
//     course: ['js', 'java'],
//     from: ''
// }

let escape = querystring.escape('阿测');
console.log(escape);
// %E9%98%BF%E6%B5%8B

let unescape = querystring.unescape('%E9%98%BF%E6%B5%8B');
console.log(unescape);
// 阿测