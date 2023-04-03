<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
            class WorkerTypeOne {
            name;
            surname;
            rate;
            days;
            constructor(name, surname, rate, days) {
                this.name = name;
                this.surname = surname;
                this.rate = rate;
                this.days = days;
            }
            getSalary(rate, days) {
                let salary = this.rate * this.days;
                return salary;
            }
        }
        let workeOne = new WorkerTypeOne('Иван', 'Иванов', 10, 31);
        console.log(workeOne.name);
        console.log(workeOne.surname);
        console.log(workeOne.rate);
        console.log(workeOne.days);
        console.log(workeOne.getSalary());
        let workeTwo = new WorkerTypeOne('Мария', 'Иванова', 20, 41);
        console.log(workeTwo.name);
        console.log(workeTwo.surname);
        console.log(workeTwo.rate);
        console.log(workeTwo.days);
        console.log(workeTwo.getSalary());
    </script>
</body>
</html>
