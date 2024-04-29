function solution(k, dungeons) {
    let count = 0;
    let visited = new Array(dungeons.length).fill(false);
    
    function DFS(restK, left) {
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && dungeons[i][0] <= restK) {
                visited[i] = true;
                DFS(restK - dungeons[i][1], left + 1);
                visited[i] = false;
            }
        }
        count = Math.max(left, count);
    }
    
    DFS(k, 0)
    
    return count;
}