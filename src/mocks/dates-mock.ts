export type DatesData = Period[];

export interface Period {
    start: number;
    end: number;
    theme: Theme;
    years: Years;
}

export type Theme = "Технологии" | "Кино" | "Литература" | "Музыка" | "Спорт" | "Наука";

export interface Years {
    [key: number]: string;
}

export const datesData: DatesData = [
    {
        start: 1995,
        end: 1999,
        theme: "Технологии",
        years: {
            1995: "JavaScript был изобретен Брэнданом Эйхом в Netscape",
            1996: "DVD был представлен компанией Toshiba",
            1997: "Wi-Fi был впервые стандартизирован как 802.11",
            1998: "Google был основан Ларри Пейджем и Сергеем Брином",
            1999: "Bluetooth был впервые выпущен SIG (Special Interest Group)"
        }
    },
    {
        start: 2000,
        end: 2004,
        theme: "Кино",
        years: {
            2000: "\"Брат 2\" / \"Brother 2\", Россия (Алексей Балабанов)",
            2001: "\"Мулен Руж!\" / \"Moulin Rouge!\", США (Баз Лурман)",
            2002: "\"Пианист\" / \"The Pianist\", Франция (Роман Полански)",
            2003: "\"Властелин колец: Возвращение короля\" / \"The Lord of the Rings: The Return of the King\", Новая Зеландия (Питер Джексон)",
            2004: "\"Вечное сияние чистого разума\" / \"Eternal Sunshine of the Spotless Mind\", США (Мишель Гондри)"
        }
    },
    {
        start: 2005,
        end: 2009,
        theme: "Литература",
        years: {
            2005: "\"Гарри Поттер и Принц-полукровка\" / \"Harry Potter and the Half-Blood Prince\", Великобритания (J.K. Rowling)",
            2006: "\"Тайный круг\" / \"The Secret Circle\", США (L.J. Smith)",
            2007: "\"Море и я\" / \"The Sea and I\", Япония (Haruki Murakami)",
            2008: "\"Сумерки\" / \"Twilight\", США (Stephenie Meyer)",
            2009: "\"Голодные игры\" / \"The Hunger Games\", США (Suzanne Collins)"
        }
    },
    {
        start: 2010,
        end: 2014,
        theme: "Музыка",
        years: {
            2010: "\"Love the Way You Lie\", США (Eminem, Rihanna)",
            2011: "\"Rolling in the Deep\", Великобритания (Adele)",
            2012: "\"Gangnam Style\", Южная Корея (PSY)",
            2013: "\"Summertime Sadness\", США (Lana Del Rey)",
            2014: "\"Shake It Off\", США (Taylor Swift)"
        }
    },
    {
        start: 2015,
        end: 2019,
        theme: "Спорт",
        years: {
            2015: "В 2015 году в США, американский боец ММА Ронда Роузи защитила свой титул чемпиона UFC в наилегчайшем весе",
            2016: "В 2016 году на Олимпиаде в Рио, пловец Майкл Фелпс стал самым титулованным олимпийцем, завоевав 23-е золото",
            2017: "В 2017 году, футбольная команда Реал Мадрид из Испании выиграла Лигу чемпионов УЕФА, победив Ювентус со счетом 4-1 в финале",
            2018: "В 2018 году в России прошел чемпионат мира по футболу, где сборная Франции победила Хорватию со счетом 4-2 и стала чемпионом мира",
            2019: "В 2019 году канадская баскетбольная команда Торонто Рэпторс выиграла свой первый чемпионат НБА, победив Голден Стэйт Уорриорз в финальной серии"
        }
    },
    {
        start: 2020,
        end: 2024,
        theme: "Наука",
        years: {
            2020: "В 2020 году американские ученые Дженнифер Дудна и Эммануэль Шарпантье получили Нобелевскую премию по химии за CRISPR-Cas9",
            2021: "В 2021 году, в США, компания Pfizer совместно с BioNTech разработали и выпустили первую вакцину против COVID-19, основанную на мРНК технологии",
            2022: "В 2022 году, в Швейцарии, ученые из ЦЕРН подтвердили существование новой частицы в рамках экспериментов на Большом адронном коллайдере",
            2023: "В 2023 году японский центр RIKEN создал первый квантовый компьютер, выполняющий вычисления быстрее суперкомпьютеров",
            2024: "В 2024 году, китайские ученые из университета Цинхуа создали ИИ для точного прогнозирования климатических изменений"
        }
    }
];


