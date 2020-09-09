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
            thumbnail: "",
            favorite: false,
            body: '<p><h1>Programing LOGIC</h1></p><p><a href="https://github.com/rigoalc">Click here to Visit My Git Hub Repositories</a></p><p> This course introduces students to the essential programming knowledge for advancing to a programming language course. Learning will include the fundamentals of structured program design, including standard business programming algorithms and documentation practices. It familiarizes the student with the flow of program logic, flowcharting, use of the three necessary control structures of programming, an introductory structured programming language and design methodologies. Concepts such as multiple level accumulation and array processing are included. </p>',
        },
        '002': {
            id: '002',
            title: "JavaScript Class 173",
            videoId: "",
            thumbnail: "",
            favorite: false,
            body: '<p><h1>JavaScript Class</h1></p><p> In this course students will learn how to use client-side scripting with JavaScript to meet unique project requirements and creative goals. Students will use text editors and WYSIWYG applications to write scripts that trigger programs with web-based events and add interactivity to existing web pages. </p>',
        },
        '003': {
            id: '003',
            title: "System Design and Analysis",
            videoId: "",
            thumbnail: "",
            favorite: false,
            body: '<p><h1>System Design and Analysis</h1></p><p>Students in this course learn common systems development methods of analysis, modeling, development and implementation of a business system placing emphasis on the tools and practices currently used by systems analysts for a new business system. Various methodologies will be learned; SSDLC (Structured Systems Analysis and Design - the waterfall method) to JAD and RAD (Joint and Rapid Application Development) and the use of UML (Unified Modeling Language) and Object Oriented tools. Finally, this course will explain how IT supports business requirements in today’s competitive environment and describe major IT developments and trends.<p/>',
        },
        '004': {
            id: '004',
            title: "Public Speaking",
            videoId: "Zu_zT_90VEE       ",
            thumbnail: "",
            favorite: false,
            body: '<p><h1>Public Speaking</h1></p><p>Beginning course in public speaking dealing with the application of basic principles and practices of effective speaking. Coursework includes oral presentations and practical applications of speech communication theory. Communication: Express ideas both verbally and in writing; demonstrate the ability to understand written, visual, and spoken communication; convey purpose, meaning and main ideas effectively to individuals and groups. Critical Thinking: Identify central issues and assumptions in an argument, recognize important relationships, locate additional information sources, make reasonable “I” references from data, deduce conclusions from data or information, interpret whether conclusions are warranted on the basis of the data analyzed and evaluate evidence and authority. Technology: Demonstrate the ability to use computers and related technology to manage and access information. <h2>Goals/Objectives/Expected Student Outcomes</h2> <p>As a result of completing COM 101, the learner: Appreciates the value of effective public speaking Interrelates academic, professional, social and personal benefits to studying public discourse. Correlates benefits of course to personal/professional goals. Categorizes various types of public speeches. Integrates types of speeches with corresponding functions. Gains confidence when dealing with large groups of people.</p>',
        },
        '005': {
            id: '005',
            title: "Piano 1 & 2",
            videoId: "lpoOlBDIdxE",
            thumbnail: "",
            favorite: false,
            body: '<p><h1>Piano 1 & 2</h1><p> This introductory course in piano covers the first two levels of elementary studies. It is appropriate for both beginners and individuals who may have discontinued their early studies and need to review fundamental keyboard skills. General course objectives At the successful completion of the course a student will:</p><p> 1. Apply common terms and notation used in performing piano music.</p><p>2. Demonstrate fundamental piano technique.</p><p>3. Appreciate the value of music through the medium of piano.</p> ',
        },

        '006': {
            id: '006',
            title: "Web Page Coding CIS170",
            videoId: "",
            thumbnail: "",
            favorite: false,
            body: '<p><h1>Web Page Coding CIS170</h1></p> <p>This course is designed to prepare the students for creating and updating web pages using only a text editor and browser. The sharing of information through the use of text, graphics, sound, video, buttons, and linking to other web pages will be explored. Students will design, create, and publish a web site using the skills learned in this course.</p>',
            },

        '007': {
            id: '007',
            title: "Music Appreciation MUS101",
            videoId: "",
            thumbnail: "",
            favorite: false,
            body: '<p>  <h1>Music Appreciation MUS101</p><p>This is a study of the substance of music of various styles, including jazz, pop and classical. The course examines such musical elements as melody, harmony, rhythm, and the make-up of performing ensembles, with an emphasis on the development of basic listening skills. It is appropriate for students who are new to the study of music and those wishing to pursue the literature and history of music in greater depth. Minimum benchmarks will be enforced.</p>',
        },
        
        '008': {
            id: '008',
            title: "DataBase/SQL CIS175",
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
