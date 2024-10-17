var N = Int(readLine()!)!
var cards = QueuePointer<Int>()

for i in 1...N {
    cards.enqueue(with: i)   // [6, 5, 4, 3, 2, 1]
}

while cards.count > 1 {
    cards.dequeue()
    cards.enqueue(with: cards.dequeue()!)
}

print(cards.dequeue()!)

struct QueuePointer<T> {
  private var elements: [T] = []
  private var front = 0

  var isEmpty: Bool {
    elements.count < front + 1
  }

  var count: Int {
    elements.count - front
  }

  func peek() -> T? {
    front < elements.count ? elements[front] : nil
  }

  mutating func enqueue(with element: T) {
    elements.append(element)
  }

  @discardableResult
  mutating func dequeue() -> T? {
    if !isEmpty {
      defer { front += 1 }
      return elements[front]
    } else {
      return nil
    }
  }
}

