import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Stay calm and Keep Coding",
    img: "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653825329/post-demo_c094ql.png",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
          firstName: "Peter",
          lastName: "Watson",
          username: "piet",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
          firstName: "Bruce",
          lastName: "Clarke",
          username: "clarky",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johnDoe",
    firstName: "John",
    lastName: "Doe",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718256/userTwo_zuhg40.jpg",
    createdAt: new Date("03/20/2020"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Let bygones be bygones.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
          firstName: "Guest",
          lastName: "User",
          username: "Guest123",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1454",
          firstName: "John",
          lastName: "Doe",
          username: "johnDoe",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718256/userTwo_zuhg40.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "clarky",
    firstName: "Bruce",
    lastName: "Clarke",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
    comments: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
        commentData: "Very True",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatarURL:
          "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
        commentData: "Loved It",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
      },
    ],
    createdAt: new Date("06/02/2021"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "I came, I saw, I conquered. – Julius Caesar",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
          firstName: "James",
          lastName: "Sheldon",
          username: "jamie",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718614/userFive_dp8dgl.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
          firstName: "Peter",
          lastName: "Watson",
          username: "piet",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Guest123",
    firstName: "Guest",
    lastName: "User",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
    comments: [],
    createdAt: new Date("04/22/2021"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Fortune favors the bold. – Virgil.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
          firstName: "Guest",
          lastName: "User",
          username: "Guest123",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "piet",
    firstName: "Peter",
    lastName: "Watson",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
    comments: [],
    createdAt: new Date("08/15/2018"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "If you want to be happy, be. – Leo Tolstoy.",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
        },

        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
          firstName: "Bruce",
          lastName: "Clarke",
          username: "clarky",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
          firstName: "Peter",
          lastName: "Watson",
          username: "piet",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
          firstName: "James",
          lastName: "Sheldon",
          username: "jamie",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718614/userFive_dp8dgl.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Guest123",
    firstName: "Guest",
    lastName: "User",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
    comments: [],
    createdAt: new Date("01/07/2016"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Time is money. – Benjamin Franklin.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
          firstName: "Peter",
          lastName: "Watson",
          username: "piet",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718600/userThree_qat0za.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
          firstName: "Bruce",
          lastName: "Clarke",
          username: "clarky",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "jamie",
    firstName: "James",
    lastName: "Sheldon",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718614/userFive_dp8dgl.jpg",
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
          firstName: "Bruce",
          lastName: "Clarke",
          username: "clarky",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
    comments: [],
    createdAt: new Date("02/08/2022"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
          firstName: "Bruce",
          lastName: "Clarke",
          username: "clarky",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718583/userSix_hjf46y.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
          firstName: "Johnson",
          lastName: "Charles",
          username: "johns24",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718283/profile_y24uvb.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
          firstName: "Guest",
          lastName: "User",
          username: "Guest123",
          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718247/userOne_xot5gc.jpg",
        },
        {
          _id: "1b288c33-ff6d-49c0-a8d3-58b297f1454",
          firstName: "John",
          lastName: "Doe",
          username: "johnDoe",

          avatarURL:
            "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718256/userTwo_zuhg40.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "johns24",
    firstName: "Johnson",
    lastName: "Charles",
    avatarURL:
      "https://res.cloudinary.com/abhijeetscloud/image/upload/v1653718578/userFour_zrkbid.jpg",
    comments: [],
    createdAt: new Date("10/12/2017"),
    updatedAt: formatDate(),
  },
];
