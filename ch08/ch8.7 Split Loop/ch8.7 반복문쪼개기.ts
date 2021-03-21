{
    type People = {
        age: number;
        salary: number;
    }

    const totalSalary = () => {
        return people.reduce((total, p) => total+ p.salary, 0);
    }

    const youngestAge = () => {
        // people의 모든 age를 펼쳐서 배열로 만들고 그걸 Math.min 돌림
        return Math.min(...people.map(p => p.age));
    }

    const p1: People = {age: 20, salary: 3000};
    const p2: People = {age: 15, salary: 5000};
    const p3: People = {age: 25, salary: 4000};
    const people: People[] = [p1, p2, p3];

    console.log(`최연소: ${youngestAge()}, 총 급여: ${totalSalary()}`);
}