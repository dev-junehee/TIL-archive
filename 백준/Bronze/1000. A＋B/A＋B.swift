import Foundation

var input = readLine()

if let input = input {
    let numArr = input.split(separator: " ").map { Int($0) ?? 0 }
    let sum = numArr.reduce(0, +)
    print(sum)
}