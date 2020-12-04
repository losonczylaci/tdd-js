# Todo

[ ] Parse `-l -p 8080 -d /usr/logs`
[x] ArgsSchema class
[x] Args class
[x] `args.parser(schema, args)`
[x] `args.getValue('l')`

[x] handle flags `schema.addFlag('l')`
    [x] true if present
    [x] false if not

[x] handle int values
    [x] if present use the parsed value
    [x] if not, use 0 as default
[ ] handle string values
    [ ] if present use the parsed value
    [ ] if not, use "" as default

[ ] argument mismatch should throw an error
[ ] order independent parsing
[ ] easy to add new arguments

Extra:
[ ] support lists `-g this,is,a,list` or `-d 1,2,-3,5`
[ ] handle negative integers `-d -3`
