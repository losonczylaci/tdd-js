Feature: FizzBuzz application
  
  Scenario Outline: Test FizzBuzz conversion
    When <input> is given to convert
    Then the should return <output>

    Examples:
      | input | output |
      | 0     | '0'    |
      | 1     | '1'    |
      | 2     | '2'    |
      | 3     | 'Fizz' |
      | 33    | 'Fizz' |
      | 5     | 'Buzz' |
      | 10    | 'Buzz' |