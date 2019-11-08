
class FizzBuzz {
    
    convert(input) {
        let result = ''
        if (input === 0)
            return '0'
        if (isMultipleOf(input, 3))
            result += 'Fizz'
        if (isMultipleOf(input, 5))
            result += 'Buzz'
        if (result === '')
            return String(input)
        return result
    }
}

function isMultipleOf(input, divider) {
    return (input % divider === 0)
}

module.exports = { FizzBuzz }