const initialState = {
  lessons: [ // список уроков (активных)
    {
      id: 1, // н/п
      date: "Nov 19 2020 09:00", //дата проведения, так же до этого времени идет отсчет с настоящего времени
      time: "9:00-10:00", // время проведения
      title: "Hobbies", // названия
      hw: false, // флаг об отрисовки выполнения дом задания
      active: false, // флаг кокой выбран урок по списку
      video: "cannibalholocaust.mkv",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
    },
    {
      id: 2,
      video: "cannibalholocaust.mkv",
      date: "Nov 20 2020 10:00",
      time: "9:00-10:00",
      title: "Time",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        // {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false,
    },
    {
      id: 3,
      video: "cannibalholocaust.mkv",
      date: "Nov 21 2020 09:00",
      time: "9:00-10:00",
      title: "Sleep",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 4,
      video: "cannibalholocaust.mkv",
      date: "Nov 22 2020 09:00",
      time: "9:00-10:00",
      title: "Music",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 5,
      video: "cannibalholocaust.mkv",
      date: "Nov 22 2020 09:00",
      time: "9:00-10:00",
      title: "First Dates",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 6,
      video: "cannibalholocaust.mkv",
      date: "Nov 23 2020 09:00",
      time: "9:00-10:00",
      title: "Work",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 7,
      video: "cannibalholocaust.mkv",
      date: "Nov 24 2020 09:00",
      time: "9:00-10:00",
      title: "Risk",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 8,
      video: "cannibalholocaust.mkv",
      date: "Nov 25 2020 09:00",
      time: "9:00-10:00",
      title: "Food",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 9,
      video: "cannibalholocaust.mkv",
      date: "Nov 26 2020 09:00",
      time: "9:00-10:00",
      title: "Work",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 10,
      video: "cannibalholocaust.mkv",
      date: "Nov 27 2020 09:00",
      time: "9:00-10:00",
      title: "Risk",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 11,
      video: "cannibalholocaust.mkv",
      date: "Nov 28 2020 09:00",
      time: "9:00-10:00",
      title: "Food",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 12,
      video: "cannibalholocaust.mkv",
      date: "Nov 29 2020 09:00",
      time: "9:00-10:00",
      title: "Food",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 13,
      video: "cannibalholocaust.mkv",
      date: "Nov 30 2020 09:00",
      time: "9:00-10:00",
      title: "Food",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 14,
      video: "cannibalholocaust.mkv",
      date: "Dec 01 2020 09:00",
      time: "9:00-10:00",
      title: "Food",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 15,
      video: "cannibalholocaust.mkv",
      date: "Dec 02 2020 09:00",
      time: "9:00-10:00",
      title: "Food",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 16,
      video: "cannibalholocaust.mkv",
      date: "Dec 03 2020 09:00",
      time: "9:00-10:00",
      title: "Food",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 17,
      video: "cannibalholocaust.mkv",
      date: "Dec 03 2020 09:00",
      time: "9:00-10:00",
      title: "Food",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
    {
      id: 18,
      video: "cannibalholocaust.mkv",
      date: "Dec 04 2020 09:00",
      time: "9:00-10:00",
      title: "Food",
      img: [
        {src: "img/111.png"},
        {src: "img/222.jpg"},
        {src: "img/333.jpg"},
      ],
      homeWork: [
        {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
        {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...",
      hw: true,
      active: false
    },
  ],
  modal: { // модальное окно
    id: null, // какое из уроков по номеру открыт ну и соответственно его картинки, кол-во домашек, видео и описание
    img: [],
    homeWork: [],
    video: "",
    description: "",
  },
  itemsHomeWork: [
    {
      id: 1,
      title: "Lesson name",
      date: "Nov 25 2020 09:00",//Дата сдачи ДЗ(пока так). нужно найти как правильно выводить дату сдачи ДЗ????
      action: true, // приступали ли вообще к ДЗ, надо переименновать переменную!!!!!!
      runNow: false,
    },
    {
      id: 2,
      title: "Lesson name",
      date: "Nov 25 2020 09:00",
      action: true,
      runNow: true,
    },
    {
      id: 3,
      title: "Lesson name",
      date: "Nov 26 2020 09:00",
      action: false,
      runNow: false,
    },
  ],
  itemsDictionary: [
    {id:1,img: "img/icon222.png",wordEN: "home",wordRU: "дом"},
    {id:2,img: "img/icon222.png",wordEN: "apple",wordRU: "яблоко"},
    {id:3,img: "img/icon222.png",wordEN: "mouse",wordRU: "мышь"}
  ], 
  itemsUseFull: [
    {
      id: 1,
      img: "img/use-full/img1.jpg",
      like: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend ornare metus",
      date: "Вчера, 21:01"
    },
    {
      id: 2,
      img: "img/use-full/img2.jpg",
      like: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend ornare metus",
      date: "Вчера, 21:01"
    },
    {
      id: 3,
      img: "img/use-full/img3.jpg",
      like: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend ornare metus",
      date: "Вчера, 21:01"
    },
    {
      id: 4,
      img: "img/use-full/img4.jpg",
      like: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend ornare metus",
      date: "Вчера, 21:01"
    },
    {
      id: 5,
      img: "img/use-full/img5.jpg",
      like: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend ornare metus",
      date: "Вчера, 21:01"
    },
    {
      id: 6,
      img: "img/use-full/img6.jpg",
      like: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend ornare metus",
      date: "Вчера, 21:01"
    },
  ],
  active: false, // флаг открыт или нет модальное окно?
  schedule: true, // флаг есть ли расписание или нет?
  HW: true, // флаг есть ли домашняя работа?
  dictionary: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HENDLE_ITEM_LESSON':
      const idLesson = action.payload;
      const activeNew = !state.active;
      const lesson = state.lessons.find((item) => item.id === idLesson);
      const idx = state.lessons.findIndex((el) => el.id === idLesson);
      const oldItemLesson = state.lessons[idx];
      const newItemLesson = { ...oldItemLesson, active: !oldItemLesson.active };
      const newArray = [ 
        ...state.lessons.slice(0, idx),
        newItemLesson,
        ...state.lessons.slice(idx + 1)
      ];
      const newItem = {
        id: lesson.id,
        video: lesson.video,
        homeWork: lesson.homeWork,
        description: lesson.description,
        img: lesson.img
      }
      return {
        ...state,
        lessons: newArray,
        modal: newItem,
        active: activeNew
      };

    case 'HENDLE_MODAL_GREY':
      const activeZonaNew = !state.active;
      state.lessons.forEach((i)=>i.active = false);
      return {
        ...state,
        active: activeZonaNew
      }

    case 'HENDLE_ITEM_HW':
      const idHW = action.payload;
      const idxHW = state.modal.homeWork.findIndex((el) => el.id === idHW);
      const oldItemHW = state.modal.homeWork[idxHW];
      const newItemHW = { ...oldItemHW, active: !oldItemHW.active };
      const newArrayHW = [ 
        ...state.modal.homeWork.slice(0, idxHW),
        newItemHW,
        ...state.modal.homeWork.slice(idxHW + 1)
      ];
      return {
        ...state,
        modal: {
          ...state.modal,
          homeWork: newArrayHW
        }
      }
    default:
      return state;
  }
}

export default reducer;