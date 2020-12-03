# Todos

[ ] Parse `-l -p 8080 -d /usr/logs`
[ ] ArgsSchema class
[ ] `args.parser(schema, args)`
[ ] `args.getValue('l')`
    [ ] handle flags
    [ ] true if present
    [ ] false if not

[ ] handle int values
    [ ] if present use the parsed value
    [ ] if not, use 0 as default
[ ] handle string values
    [ ] if present use the parsed value
    [ ] if not, use "" as default

[ ] argument mismatch should throw an error
[ ] order independent parsing
[ ] easy to add new arguments

Extra:
[ ] support lists `-g this,is,a,list` or `-d 1,2,-3,5`
[ ] handle negative integers `-d -3`
