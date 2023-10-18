function solution(phone_book) {
    let hash = {};
    
    // { '12': true, '88': true, '123': true, '567': true, '1235': true }
    for (let i = 0; i < phone_book.length; i++) {
        hash[phone_book[i]] = true;    
    }
    
    //'12', '123', '1235', '567', '88'
    for (let number in hash) {
        for (let j = 0; j < number.length; j++) {
            let prefix = number.slice(0, j) // '1', '12', '1', '12', '123'...
            if (hash[prefix]) {
                return false
            }
        }
    }
    
    return true
    
}
