class FlagArg {
    constructor(name) {
        this.name = name
    }

    obtainArgValue(userInput) {
        if (userInput.includes(`-${this.name}`))
            return new Arg(this.name, true)
        else
            return new Arg(this.name, false)
    }
}

class IntArg {
    constructor(name) {
        this.name = name
    }

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
        const f = new FlagArg(name)
        this.args.push(f)
    }

    addInt(name) {
        const i = new IntArg(name)
        this.args.push(i)
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
