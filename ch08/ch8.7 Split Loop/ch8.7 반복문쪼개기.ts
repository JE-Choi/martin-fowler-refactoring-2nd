{
    type People = {
        age: number;
        salary: number;
    }
    const p1: People = {age: 20, salary: 3000};
    const p2: People = {age: 15, salary: 5000};
    const p3: People = {age: 25, salary: 4000};
    const people: People[] = [p1, p2, p3];

    let youngest = people[0] ? people[0].age : Infinity;
    let totalSalary = 0;

    // 관련없는 두가지 계산을 수행중
    for (const p of people) {
        if (p.age < youngest) youngest = p.age;
        totalSalary += p.salary;
    }

    console.log(`최연소: ${youngest}, 총 급여: ${totalSalary}`);
}