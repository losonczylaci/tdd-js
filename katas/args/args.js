class BaseArg {
    constructor(name) {
        this.name = name
    }
}
class FlagArg extends BaseArg {

    obtainArgValue(userInput) {
        if (userInput.includes(`-${this.name}`))
            return new Arg(this.name, true)
        else
            return new Arg(this.name, false)
    }
}

class IntArg extends BaseArg {

    obtainArgValue(userInput) {
        const onArgNameMatch = arg => arg === `-${this.name}`
        const argIndex = userInput.findIndex(onArgNameMatch)
        if (argIndex === -1) {
            return new Arg(this.name, 0)
        }
        const valueIndex = argIndex + 1
        const value = Number(userInput[valueIndex])
        return new Arg(this.name, value)
    }
}

class StringArg extends BaseArg {

    obtainArgValue(userInput) {
        const onArgNameMatch = arg => arg === `-${this.name}`
        const argIndex = userInput.findIndex(onArgNameMatch)
        if (argIndex === -1) {
            return new Arg(this.name, '')
        }
        const value = userInput[argIndex + 1]
        return new Arg(this.name, value)
    }
}

class Arg {
    constructor(name, value) {
        this.name = name
        this.value = value
    }
}
class ArgsSchema {
    constructor() {
        this.args = []
    }

    addFlag(name) {
        this.args.push(new FlagArg(name))
    }

    addInt(name) {
        this.args.push(new IntArg(name))
    }

    addString(name) {
        this.args.push(new StringArg(name))
    }
}

class Args {
    constructor() {
        this.result = []
    }

    parse(schema, userInput) {
        schema.args.forEach(arg => {
            let value = arg.obtainArgValue(userInput)
            this.result.push(value)
        })
    }

    getValue(argName) {
        return this.result.find((name) => (name.name == argName)).value
    }
}

module.exports = { ArgsSchema, Args }
