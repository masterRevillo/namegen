import sys
import random

print 'Argument List:', str(sys.argv)

if (len(sys.argv) != 5):
    print("Usage:")
    print("python namegen.py <maximum syllables> <minimum syllables> <number of names> <syllables source file>")
    exit()

maxSyllables = int(sys.argv[1])
minSyllables = int(sys.argv[2])
numNames = int(sys.argv[3])
sourceFile = sys.argv[4]

f = open('dwarf.txt', 'r')
contents = f.read()

sourceSylables = contents.split("\n")

names = []

for i in range(0,numNames):
    name = ""
    numSyllables = random.randint(minSyllables,maxSyllables)
    for j in range(0,numSyllables):
        sy = sourceSylables[random.randint(0,len(sourceSylables))]
        name += sy
        # print 'my random sylable:',sourceSylables[random.randint(0,len(sourceSylables))]
    names.append(name)

print("Generated names:")
for i in names:
    print(i)