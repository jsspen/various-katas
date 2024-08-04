# Notes

a = top, b = bottom
outer loop for b is (let x = b.length-1; x >= 0; x--)
inner loop for a is (let y = a.length-1; y >= 0; b--)
each line of the results is stored in an array that should start over each time a cycle is complete
a new cycle begins each time x changes (and y is reset)

a = [1, 0, 0, 9] and b = [0, 3]

let x = (b.length-1) = (2 - 1) = 1 & 1 >= 0

let carried = 0; // should be reset each time a new cycle begins (x changes)
let remainder = 0; // should be reset each time a new cycle begins (x changes)
let results = [] // should be reset each time a new cycle begins (x changes)

let y = (a.length-1) = (4 - 1) = 3 & 3 >= 0
let result = (b[x] * a[y]) = (b[1] * a[3]) = (3 * 9) = 27
if (result > 10) = (27 > 10) then
    carried = (Math.floor(result / 10)) = 2
    remainder = result % 10 = 7
    line.unshift(remainder)
    line = [7]
y-- = (3-1) = 2
result = (b[x] * a[y]) = (b[1] * a[2]) = (3 * 0) = (0 + carried) = 0 + 2 = 2
if (result < 10) = (2 < 10) then
    line.unshift(result)
    line = [2, 7]
    reset carried = 0
y-- = (2-1) = 1
result = (b[x] * a[y]) = (b[1] * a[1]) = (3 * 0) = (0 + carried) = (0 + 0) = 0
if (result < 10) = (0 < 10) then
    line.unshift(result)
    line = [0, 2, 7]
y-- = (1-1) = 0
result = (b[x] * a[y]) = (b[1] * a[0]) = (3 * 1) = (3 + carried) = (3 + 0) = 3
if (result < 10) = (3 < 10) then
    line.unshift(result)
    line = [3, 0, 2, 7]
y-- = (0-1) = -1
the for loop for y is broken
results.unshift(line)
results = [[3,0,2,7]]

x = (x-1) = (1-1) = 0
