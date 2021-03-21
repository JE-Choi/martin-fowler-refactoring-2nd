{
    type People = {
        age: number;
        salary: number;
    }

    const totalSalary = () => {
        let totalSalary = 0;
        for (const p of people) {
            totalSalary += p.salary;
        }
        return totalSalary;
    }

    const youngestAge = () => {
        let youngest = people[0] ? people[0].age : Infinity;
        for (const p of people) {
            if (p.age < youngest) youngest = p.age;
        }
        return youngest;
    }

    const p1: People = {age: 20, salary: 3000};
    const p2: People = {age: 15, salary: 5000};
    const p3: People = {age: 25, salary: 4000};
    const people: People[] = [p1, p2, p3];

    console.log(`최연소: ${youngestAge()}, 총 급여: ${totalSalary()}`);
}