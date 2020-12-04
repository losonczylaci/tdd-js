class FlagArg {
    constructor(name) {
        this.name = name
    }

    obtainArgValue(userInput) {
        if (userInput.includes(`-${this.name}`))
            return { name: this.name, value: true }
        else
            return { name: this.name, value: false }
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
