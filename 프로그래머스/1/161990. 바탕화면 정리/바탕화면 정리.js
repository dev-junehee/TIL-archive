function solution(wallpaper) {
    let row = wallpaper[0].length;
    let col = wallpaper.length;
    
    const X = [];
    const Y = [];
    
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (wallpaper[i][j] === "#") {
                X.push(j);
                Y.push(i);
                
            }
        }
    }
    
    let top = Math.min(...Y);
    let bottom = Math.min(...X);
    let left = Math.max(...Y) + 1;
    let right = Math.max(...X) + 1;
    
    return [top, bottom, left, right];
}