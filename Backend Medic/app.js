const data = [
  {
    _id: "63ecf1b1004cf4aec50010ef",
    username: "Dr Sbhranshu Sekhar Choudhury",
    messages: [
      {
        sender: "P: Anshuman Panda",
        message: "Hey this is a test message",
        timestamp: "6:50 PM",
        isdoctor: false,
        _id: "63ee2dc48125dd6861c88409",
      },
      {
        sender: "P: Anshuman Panda",
        message: "I have headach.",
        timestamp: "7:00 PM",
        isdoctor: false,
        _id: "63ee30308125dd6861c8840d",
      },
      {
        sender: "P: Anurag",
        message: "I have headach.",
        timestamp: "7:00 PM",
        isdoctor: false,
        _id: "63ee3554347ba3f11173bb41",
      },
    ],
    videos: [],
    meets: [],
    reviews: [],
    __v: 0,
  },
  {
    _id: "63ecf254a27ec071cf93abcb",
    username: "Chinmay Sa",
    messages: [],
    videos: [],
    meets: [],
    reviews: [],
    __v: 0,
  },
  {
    _id: "63ee27697ee83ad26ca26881",
    username: "P: Anshuman Panda",
    messages: [],
    videos: [],
    meets: [],
    reviews: [],
    __v: 0,
    experience: "0",
    isdoctor: false,
    name: "Anshuman",
    phone: "8975654343",
    specialist: "none",
    symptom: "Headach",
  },
];

// console.log(data[0].messages);

// const patient_name = new Set();

// data[0].messages.forEach((user, index) => {
//   //   console.log(user.sender);
//   patient_name.add(user.sender);
// });

// patient_name.forEach((name, index) => {
//   console.log(name);
// });

const patient_name = "P: Anshuman Panda";

const filterMessage = data[0].messages.filter((m) => {
  return m.sender.includes(patient_name);
});

console.log(filterMessage);
