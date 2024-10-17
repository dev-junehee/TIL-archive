let N = Int(readLine()!)!
var cards: [Int] = []
var front = 0

for i in 1...N {
    cards.append(i)
}

while cards.count - front > 1 {
    front += 1
    cards.append(cards[front])
    front += 1
}

print(cards[front])
