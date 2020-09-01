import { TOGGLE_FAVORITE } from "../actions";

/* 
  src/reducers/posts.js
*/
const initialState = {
    posts: { 
        // this data object being an object will make lookups faster if there were a lot of posts
        // on the other hand, looping over it will require it to be an array but this could be cached for faster looping
        // this is not the best example of this but if the data was enormous (like thousands of entries, the look up on an object would be O(1) vs O(n))
        // if there was a backend, this could be pushed onto the server but then you would need to make requests to the server each time, which could/would be pretty slow since, ideally, HTTP requests should be reduced
        '001': {
            id: '001',
            title: "Programing LOGIC",
            timeToRead: 5,
            created: 1553486400,
            videoId: "",
            thumbnail: "",
            favorite: false,
            body: '<p>Programing LOGIC</p>',
        },
        '002': {
            id: '002',
            title: "JavaScript Class 173",
            timeToRead: 15,
            created: 925963200,
            videoId: "",
            thumbnail: "",
            favorite: false,
            body: '<p>JavaScript Class 173</p>',
        },
        '003': {
            id: '003',
            title: "System Design and Analysis",
            timeToRead: 10,
            created: 1554523200,
            videoId: "",
            thumbnail: "",
            favorite: false,
            body: '<p>System Design and Analysis</p>',
        },
        '004': {
            id: '004',
            title: "Public Speaking",
            timeToRead: 25,
            created: 1526097600,
            videoId: "",
            thumbnail: "",
            favorite: false,
            body: '<p><h1>Public Speaking COM101</h1></p><p>Beginning course in public speaking dealing with the application of basic principles and practices of effective speaking. Coursework includes oral presentations and practical applications of speech communication theory. Communication: Express ideas both verbally and in writing; demonstrate the ability to understand written, visual, and spoken communication; convey purpose, meaning and main ideas effectively to individuals and groups. Critical Thinking: Identify central issues and assumptions in an argument, recognize important relationships, locate additional information sources, make reasonable “I” references from data, deduce conclusions from data or information, interpret whether conclusions are warranted on the basis of the data analyzed and evaluate evidence and authority. Technology: Demonstrate the ability to use computers and related technology to manage and access information. <h2>Goals/Objectives/Expected Student Outcomes</h2> <p>As a result of completing COM 101, the learner: Appreciates the value of effective public speaking Interrelates academic, professional, social and personal benefits to studying public discourse. Correlates benefits of course to personal/professional goals. Categorizes various types of public speeches. Integrates types of speeches with corresponding functions. Gains confidence when dealing with large groups of people.</p>',
        },
        '005': {
            id: '005',
            title: "Piano 1 & 2",
            timeToRead: 25,
            created: 1526097600,
            videoId: "",
            thumbnail: "",
            favorite: false,
            body: '<h1>Piano 1 & 2 </p>',
        },

        '006': {
            id: '006',
            title: "Web Page Coding CIS170",
            timeToRead: 25,
            created: 1526097600,
            videoId: "",
            thumbnail: "",
            favorite: false,
            body: '<p><h1>Web Page Coding CIS170</h1></p> <p>This course is designed to prepare the students for creating and updating web pages using only a text editor and browser. The sharing of information through the use of text, graphics, sound, video, buttons, and linking to other web pages will be explored. Students will design, create, and publish a web site using the skills learned in this course.</p>',
            },

        '007': {
            id: '007',
            title: "Music Appreciation MUS101",
            timeToRead: 25,
            created: 1526097600,
            videoId: "",
            thumbnail: "",
            favorite: false,
            body: '<h1>Music Appreciation MUS101</p>',
        },
        
        '008': {
            id: '008',
            title: "DataBase/SQL CIS175",
            timeToRead: 25,
            created: 1526097600,
            videoId: "",
            thumbnail: "",
            favorite: false,
            body: '<p><h1>DataBase/SQL CIS175</h1></p><p>In this course, students will learn how to design and create a database using MS Access along withusing SQL to access and query data within a database along with writingprograms that access and maintain databases. Included will also be an introduction of data structures, data dictionaries, datasecurity, and database components. Discussions will include the current and future database environmental concerns.</p>',
        },
    },
}
export default (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_FAVORITE:
            return {
                ...state,
                posts: { ...state.posts, [action.id]: { ...state.posts[action.id], favorite: !state.posts[action.id].favorite }},
            }


        default:
            return state
    }
}
