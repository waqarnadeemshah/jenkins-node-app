
const greet = require('./app');

const result = greet('Waqar');

if (result !== 'Hello Waqar, welcome to Jenkins CI/CD!') {
    throw new Error('Test Failed!');
}

console.log('All tests passed!');