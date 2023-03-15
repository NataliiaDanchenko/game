let questions = [
    {
        questionText: "1. Какой газ преобладает в атмосфере Земли?",
        answerA: "A: Кислород",
        answerB: "B: Азот",
        answerC: "C: Водород",
        answerD: "D: Гелий",
        answerRight: "b",
        sum: 500
    },
    {
        questionText: "2. Какой флаг развевается над пиратским судном?",
        answerA: "A: Весёлый Роджер",
        answerB: "B: Грязный Гарри",
        answerC: "C: Бедный Йорик",
        answerD: "D: Лимонадный Джо",
        answerRight: "a",
        sum: 1000
    },
    {
        questionText: "3.  Морской путь в какую страну искала экспедиция Колумба, доплыв вместо этого до Америки?",
        answerA: "A: Эфиопия",
        answerB: "B: Япония",
        answerC: "C: Индия",
        answerD: "D: Китай",
        answerRight: "c",
        sum: 2000
    },
    {
        questionText: "4. Как называется единственное в Европе герцогство?",
        answerA: "A: Монако",
        answerB: "B: Андорра",
        answerC: "C: Люксембург",
        answerD: "D: Лихтенштейн",
        answerRight: "c",
        sum: 3000
    },
    {
        questionText: "5. На территории какой современной страны находился Карфаген?",
        answerA: "A: Тунис",
        answerB: "B: Египет",
        answerC: "C: Судан",
        answerD: "D: Израиль",
        answerRight: "a",
        sum: 5000
    },
    {
        questionText: "6. Из какого меха сделаны шапки королевских гвардейцев Великобритании?",
        answerA: "A: Овечий",
        answerB: "B: Волчий",
        answerC: "C: Соболиный",
        answerD: "D: Медвежий",
        answerRight: "d",
        sum: 8000
    },
    {
        questionText: "7. Какой город считается родиной джаза?",
        answerA: "A: Чикаго",
        answerB: "B: Нью-Йорк",
        answerC: "C: Новый Орлеан",
        answerD: "D: Сан-Франциско",
        answerRight: "c",
        sum: 10000
    },
    {
        questionText: "8. Что держит в руке американская статуя Свободы?",
        answerA: "A: Меч",
        answerB: "B: Знамя",
        answerC: "C: Факел",
        answerD: "D: Щит",
        answerRight: "c",
        sum: 13000
    },
    {
        questionText: "9. На какой из планет Солнечной системы самая высокая температура?",
        answerA: "A: Земля",
        answerB: "B: Венера",
        answerC: "C: Марс",
        answerD: "D: Юпитер",
        answerRight: "b",
        sum: 15000
    },
    {
        questionText: "10. Название какого алкогольного напитка переводится с немецкого как «полынь»?",
        answerA: "A: Вермут",
        answerB: "B: Джин",
        answerC: "C: Текила",
        answerD: "D: Виски",
        answerRight: "a",
        sum: 25000
    },
    {
        questionText: "11. Какой европейский город прославился модой «от кутюр»?",
        answerA: "A: Рим",
        answerB: "B: Лондон",
        answerC: "C: Бухарест",
        answerD: "D: Париж",
        answerRight: "d",
        sum: 50000
    },
    {
        questionText: "12. Что измеряет прибор «одометр»?",
        answerA: "A: Артериальное давление",
        answerB: "B: Количество оборотов колеса",
        answerC: "C: Силу тока",
        answerD: "D: Плотность атмосферы",
        answerRight: "b",
        sum: 100000
    },
    {
        questionText: "13. Как звали мать Гамлета?",
        answerA: "A: Гертруда",
        answerB: "B: Вильгельмина",
        answerC: "C: Клементина",
        answerD: "D: Грета",
        answerRight: "a",
        sum: 250000
    },
    {
        questionText: "14. Как в цирке называют торжественный выход на арену всех артистов представления?",
        answerA: "A: Парад-алле",
        answerB: "B: Антре",
        answerC: "C: Интермедия",
        answerD: "D: Интродукция",
        answerRight: "a",
        sum: 500000
    },
    {
        questionText: "15. Как называется невысокий барьер, проходящий вдоль авансцены и скрывающий от зрителей театра световые приборы?",
        answerA: "A: Эстакада",
        answerB: "B: Румба",
        answerC: "C: Бельэтаж",
        answerD: "D: Рампа",
        answerRight: "d",
        sum: 1000000
    }
]

let answerUser;
let score = 0;
let lastScore = 0;
let nextQuestion;

for(let i = 0; i < questions.length; i++) {
    answerUser = prompt(`${questions[i].questionText}\n${questions[i].answerA}\n${questions[i].answerB}\n${questions[i].answerC}\n${questions[i].answerD}`);

    if(answerUser == questions[i].answerRight) {
        score++;
        if(i == questions.length -1) {
            !nextQuestion;
            alert("Игра окончена. Поздравляем! Вы выиграли 1000000$");
            break;
        };
        nextQuestion = confirm("Хотите продолжать игру?");
        if(nextQuestion == true) {
            continue;
        }
        if (nextQuestion == false) {
            alert("Вы выиграли " + questions[i].sum);
            break;
        } 
    }


    if(i >= 5 && i < 10 && answerUser !== questions[i].answerRight) {
        alert("Спасибо з игру. Вы выиграли несгораемую сумму 5000$");
        break;    
    }

    if(i >= 10 && i < 15 && answerUser !== questions[i].answerRight) {
        alert("Спасибо з игру. Вы выиграли несгораемую сумму 25000$");
        break;    
    }

    if(answerUser !== questions[i].answerRight) {
        alert("Ответ неверный. Игра окончена");
        break;    
    }
}