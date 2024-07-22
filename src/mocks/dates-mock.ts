export type DatesData = Period[];

export interface Period {
  startDate: number;
  endDate: number;
  periodTheme: Theme;
  eventsSet: Years;
}

export type Theme =
  | "Технологии"
  | "Кино"
  | "Литература"
  | "Музыка"
  | "Спорт"
  | "Наука";

export interface Years {
  [key: number]: string;
}

export const dates: DatesData = [
  {
    startDate: 1995,
    endDate: 1999,
    periodTheme: "Технологии",
    eventsSet: {
      1995: "JavaScript был изобретен Брэнданом Эйхом в Netscape",
      1996: "DVD был представлен компанией Toshiba",
      1997: "Wi-Fi был впервые стандартизирован как 802.11",
      1998: "Google был основан Ларри Пейджем и Сергеем Брином",
      1999: "Bluetooth был впервые выпущен SIG (Special Interest Group)",
    },
  },
  {
    startDate: 2000,
    endDate: 2004,
    periodTheme: "Кино",
    eventsSet: {
      2000: '"Брат 2" / "Brother 2", Россия (Алексей Балабанов)',
      2001: '"Мулен Руж!" / "Moulin Rouge!", США (Баз Лурман)',
      2002: '"Пианист" / "The Pianist", Франция (Роман Полански)',
      2003:
        '"Властелин колец: Возвращение короля" / "The Lord of the Rings: ' +
        'The Return of the King", Новая Зеландия (Питер Джексон)',
      2004: '"Вечное сияние чистого разума" / "Eternal Sunshine of the Spotless Mind", США (Мишель Гондри)',
    },
  },
  {
    startDate: 2005,
    endDate: 2009,
    periodTheme: "Литература",
    eventsSet: {
      2005:
        '"Гарри Поттер и Принц-полукровка" / "Harry Potter and the Half-Blood Prince", ' +
        "Великобритания (J.K. Rowling)",
      2006: '"Тайный круг" / "The Secret Circle", США (L.J. Smith)',
      2007: '"Море и я" / "The Sea and I", Япония (Haruki Murakami)',
      2008: '"Сумерки" / "Twilight", США (Stephenie Meyer)',
      2009: '"Голодные игры" / "The Hunger Games", США (Suzanne Collins)',
    },
  },
  {
    startDate: 2010,
    endDate: 2014,
    periodTheme: "Музыка",
    eventsSet: {
      2010: '"Love the Way You Lie", США (Eminem, Rihanna)',
      2011: '"Rolling in the Deep", Великобритания (Adele)',
      2012: '"Gangnam Style", Южная Корея (PSY)',
      2013: '"Summertime Sadness", США (Lana Del Rey)',
      2014: '"Shake It Off", США (Taylor Swift)',
    },
  },
  {
    startDate: 2015,
    endDate: 2019,
    periodTheme: "Спорт",
    eventsSet: {
      2015:
        "В 2015 году в США, американский боец ММА Ронда Роузи защитила свой " +
        "титул чемпиона UFC в наилегчайшем весе",
      2016:
        "В 2016 году на Олимпиаде в Рио, пловец Майкл Фелпс стал самым титулованным " +
        "олимпийцем, завоевав 23-е золото",
      2017:
        "В 2017 году, футбольная команда Реал Мадрид из Испании выиграла Лигу " +
        "чемпионов УЕФА, победив Ювентус со счетом 4-1 в финале",
      2018:
        "В 2018 году в России прошел чемпионат мира по футболу, где сборная " +
        "Франции победила Хорватию со счетом 4-2 и стала чемпионом мира",
      2019:
        "В 2019 году канадская баскетбольная команда Торонто Рэпторс выиграла " +
        "свой первый чемпионат НБА, победив Голден Стэйт Уорриорз в финальной серии",
    },
  },
  {
    startDate: 2020,
    endDate: 2024,
    periodTheme: "Наука",
    eventsSet: {
      2020:
        "В 2020 году американские ученые Дженнифер Дудна и Эммануэль Шарпантье " +
        "получили Нобелевскую премию по химии за CRISPR-Cas9",
      2021:
        "В 2021 году, в США, компания Pfizer совместно с BioNTech разработали " +
        "и выпустили первую вакцину против COVID-19, основанную на мРНК технологии",
      2022:
        "В 2022 году, в Швейцарии, ученые из ЦЕРН подтвердили существование " +
        "новой частицы в рамках экспериментов на Большом адронном коллайдере",
      2023:
        "В 2023 году японский центр RIKEN создал первый квантовый компьютер, " +
        "выполняющий вычисления быстрее суперкомпьютеров",
      2024:
        "В 2024 году, китайские ученые из университета Цинхуа создали ИИ для " +
        "точного прогнозирования климатических изменений",
    },
  },
];
