function solution(cacheSize, cities) {
    // 캐시가 0이하면 캐시할 수 없음 -> 모든 도시를 순회하여 런타임이 5씩 증가
    if (cacheSize < 1) return cities.length * 5;
    
    // 대소문자 구분이 없으므로 소문자 처리하여 재할당
    cities = cities.map(el => el.toLowerCase());
    
    let runtime = 0;
    const cache = [];
    
    for (let i = 0; i < cities.length; i++) {
        const city = cities[i];
        const idx = cache.indexOf(city); // 없으면 -1 반화
        
        // 0 이하라는 것은 캐시에 없다는 뜻
        // 캐시가 가득차거나 초과됐을 때 가장 오래 전에 캐싱된 제일 앞 요소를 삭제
        if (idx < 0) {
            if (cache.length >= cacheSize) cache.shift();
            runtime += 5;
        } else {
            cache.splice(idx, 1);   // 캐시에 있을 때는 해당 도시를 가장 최근 저장된 위치로 옮겨야하기 때문에 배열에서 삭제
            runtime += 1;
        }
        
        cache.push(city)    // 캐시에 해당 도시 추가
    }
    
    return runtime;
}
