function solution(cacheSize, cities) {
    if (cacheSize < 1) return cities.length * 5;
    
    let runtime = 0;
    const cache = [];
    
    for (let i = 0; i < cities.length; i++) {
        const city = cities[i].toLowerCase();
        const idx = cache.indexOf(city);
        
        if (idx < 0) {
            if (cache.length > cacheSize - 1) cache.shift();
            runtime += 5;
        } else {
            cache.splice(idx, 1);
            runtime += 1;
        }
        
        cache.push(city)
    }
    
    return runtime;
}