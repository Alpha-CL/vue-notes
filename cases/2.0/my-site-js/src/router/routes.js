import Message from "@/views/Message";
import Project from "@/views/Project";
import About from "@/views/About";
import Article from "@/views/Article";
import Home from "@/views/Home";

export default [

	{
		name: "home",
		path: "/",
		component: Home,
	},
	{
		name: "article",
		path: "/article",
		component: Article,
	},
	{
		name: "about",
		path: "/about",
		component: About,
	},
	{
		name: "project",
		path: "/project",
		component: Project,
	},
	{
		name: "message",
		path: "/message",
		component: Message,
	},
];