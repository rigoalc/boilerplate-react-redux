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
            title: "Kalamazoo Class #1",
            timeToRead: 5,
            created: 1553486400,
            videoId: "vJBCwNSUQ0s",
            thumbnail: "",
            favorite: true,
            body: '<p>Kalamazoo Class #1</p>',
        },
        '002': {
            id: '002',
            title: "JavaScript Class 173",
            timeToRead: 15,
            created: 925963200,
            videoId: "5yvHqXhMPss",
            thumbnail: "",
            favorite: false,
            body: '<p>Mountains are best climbed with teams of people.  Together you can climb to the top.  It can be much more difficult climbing solo. Mountains are best climbed with teams of people.  Together you can climb to the top.  It can be much more difficult climbing solo. Mountains are best climbed with teams of people.  Together you can climb to the top.  It can be much more difficult climbing solo. Mountains are best climbed with teams of people.  Together you can climb to the top.  It can be much more difficult climbing solo.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },
        '003': {
            id: '003',
            title: "System Design and Analysis",
            timeToRead: 10,
            created: 1554523200,
            videoId: "NhBzhi9jPFs",
            thumbnail: "",
            favorite: false,
            body: '<p>Mountains are formed when tectonic plates converge.  Where one plate impacts another one, forcing either to go upward or downward. Mountains are formed when tectonic plates converge.  Where one plate impacts another one, forcing either to go upward or downward. Mountains are formed when tectonic plates converge.  Where one plate impacts another one, forcing either to go upward or downward. Mountains are formed when tectonic plates converge.  Where one plate impacts another one, forcing either to go upward or downward.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
        },
        '004': {
            id: '004',
            title: "Public Speaking",
            timeToRead: 25,
            created: 1526097600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "",
            favorite: false,
            body: '<h1>Public Speaking was one of my favorite courses.</h1><p>When climbing it is always a good idea to bring a flashlight and wear hiking shoes.  Sometimes it can be useful to bring a rope and a harness. When climbing it is always a good idea to bring a flashlight and wear hiking shoes.  Sometimes it can be useful to bring a rope and a harness. When climbing it is always a good idea to bring a flashlight and wear hiking shoes.  Sometimes it can be useful to bring a rope and a harness. When climbing it is always a good idea to bring a flashlight and wear hiking shoes.  Sometimes it can be useful to bring a rope and a harness.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Pretium aenean pharetra magna ac placerat vestibulum lectus. Purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet. Purus non enim praesent elementum facilisis leo vel. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Augue mauris augue neque gravida in fermentum. Turpis egestas sed tempus urna. Nibh praesent tristique magna sit amet purus gravida quis. Amet tellus cras adipiscing enim. Vivamus at augue eget arcu dictum.</p><p>Ut ornare lectus sit amet est placerat in egestas. Dolor purus non enim praesent. Lacus vel facilisis volutpat est velit egestas. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis ut diam quam. Maecenas pharetra convallis posuere morbi leo urna. Viverra aliquet eget sit amet tellus cras. Nisi vitae suscipit tellus mauris a diam maecenas sed. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Massa tempor nec feugiat nisl pretium fusce. Condimentum mattis pellentesque id nibh tortor. Urna porttitor rhoncus dolor purus non enim praesent elementum.</p>',
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
