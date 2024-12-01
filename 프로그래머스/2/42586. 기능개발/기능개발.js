function solution(progresses, speeds) {
    // 남은 개발 진행도
    const tasks = []
    
    for (let i = 0; i < speeds.length; i++) {
        let task = Math.ceil((100 - progresses[i]) / speeds[i]);    // 속도로 나눠서 얼마나 남았는지 계산 + 나머지 추가
        tasks.push(task)
    }
    
    let deploy = []         // 각 배포마다 완성될 기능
    let count = 1           // 완성될 기능 수
    let preTask = tasks[0]   // 가장 많이 걸리는 날 =

    // 남은 개발 진행도를 순회
    for (let i = 1; i < tasks.length; i++) {
        // 앞에 작업이 더 오래 걸리면 그 작업이 끝난 후 같이 배포되므로 +1
        if (tasks[i] <= preTask) {
            count++;
        } else {
            preTask = tasks[i]   // maxDay를 지금 순회 중인 요소로 변경
            deploy.push(count);
            count = 1;  // 배포 후에는 다시 완성될 기능을 1로 수정
        }
    }
    deploy.push(count); // 앞에꺼랑 누적되는 경우에는 여기서 push
    return deploy;
}