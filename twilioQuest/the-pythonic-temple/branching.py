import sys

s = int(sys.argv[1]) + int(sys.argv[2])

if s <= 0:
    print('You have chosen the path of destitution.')
elif s <= 100:
    print('You have chosen the path of plenty.')
else:
    print('You have chosen the path of excess.')
