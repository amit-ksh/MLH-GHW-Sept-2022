import sys

inputs = sys.argv
inputs.pop(0)

for n in inputs:
    out = ''
    n = int(n)
    if n % 3 == 0:
        out += 'fizz'
    if n % 5 == 0:
        out += 'buzz'
    if n % 3 != 0 and n % 5 != 0:
        out = n

    print(out)
