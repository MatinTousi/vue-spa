import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";


import UserTemplate from "./pages/users/Template.vue";
import IndexUser from "./pages/users/Index.vue";
import ShowUser from "./pages/users/Show.vue";


import PostTemplate from "./pages/posts/Template.vue";
import IndexPost from "./pages/posts/Index.vue";
import ShowPost from "./pages/posts/Show.vue";
import CreatePost from "./pages/posts/Create.vue";
import EditPost from "./pages/posts/Edit.vue";

const routes = [
    { path: '/', name: 'home', component: Home },
    {
        path: '/users', name: 'users', component: UserTemplate, children: [

            { path: '', name: 'usersIndex', component: IndexUser },
            { path: ':id', name: 'userId', component: ShowUser },
        ]
    },

    {
        path: '/posts', name: 'posts', component: PostTemplate, children: [

            { path: '', name: 'postsIndex', component: IndexPost },
            { path: ':id', name: 'postId', component: ShowPost },
            { path: 'create', name: 'postCreate', component: CreatePost },
            { path: 'edit/:id', name: 'postEdit', component: EditPost },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;