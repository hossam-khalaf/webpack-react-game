// const validator = require('validator')
import isEmail from 'validator/lib/isEmail'
import triplMe from './tripleMe'

console.log(isEmail('john@test.com'))

console.log(triplMe(5))
