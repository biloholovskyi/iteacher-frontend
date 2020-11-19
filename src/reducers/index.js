const initialState = {
  lessons: [
    {
      id: 1,
      date: "Nov 19 2020 09:00",
      time: "9:00-10:00",
      title: "Hobbies",
      count: "Начнется через 8:32:47",
      hw: false,
      active: false,
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
      count: "",
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
  modal: {
    id: null,
    img: [],
    homeWork: [],
    video: "",
    description: "",
  },
  active: false,
  schedule: false,
  HW: false
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
        lessons: newArray,
        modal: newItem,
        active: activeNew
      };
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