/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/landing-tesla.png',
		title: 'Landing Tesla',
		skills: ['Astro', 'Tailwind', 'JavaScript'],
		descripcion:
			'Réplica de la landing page de Testa, desarrollada con Astro, HTML y CSS. Enfocada en diseño responsivo, ofrece una experiencia de usuario moderna y fluida.',
		demoURL: 'https://testa-clone.netlify.app/',
		repoURL: 'https://github.com/CinLo82/tesla-landing',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/dashboard-react.png',
		title: 'Dashboard Statistics',
		skills: ['React', 'JavaScript'],
		descripcion:
			' Aplicación creada con React para visualizar estadísticas. Ofrece un diseño limpio y funcional con interacción dinámica en tiempo real.',
		demoURL: 'https://dashboard-statistics-react.netlify.app/',
		repoURL: 'https://github.com/CinLo82/reactDashboardApp',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/react-router.png',
		title: 'CinLo Router - NPM Package ',
		skills: ['React', 'CSS'],
		descripcion:
			'Un ligero enrutador para aplicaciones web en JavaScript, diseñado para facilitar la navegación SPA con una configuración simple y eficiente',
		demoURL: 'https://www.npmjs.com/package/cinlo-router?activeTab=readme',
		repoURL: 'https://github.com/CinLo82/react-midu/tree/main/projects/07-cinlo-router',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/movies.png',
		title: 'Coffe Store',
		skills: ['JavaScript', 'CSS'],
		descripcion:
			'Proyecto práctico que consume una API REST de películas utilizando JavaScript. Muestra datos en tiempo real con un diseño simple y responsivo',
		demoURL: 'https://cinlo82.github.io/api-rest-js-practico/',
		repoURL: 'https://github.com/CinLo82/api-rest-js-practico',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/lista-tareas.png',
		title: 'ToDo App - React',
		skills: ['React', 'CSS'],
		descripcion:
			'Aplicación de lista de tareas creada con React. Presenta un diseño simple y funcional, permitiendo añadir, editar y eliminar tareas de forma dinámica',
		demoURL: 'https://cinlo82.github.io/todo-react/#/',
		repoURL: 'https://github.com/CinLo82/todo-react',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/cinlo-blog.png',
		title: 'CinLo Blog',
		skills: ['TypeScript', 'Tailwind', 'Astro'],
		descripcion:
			'Blog desarrollado con Astro, optimizado para velocidad y diseño minimalista. Ofrece una experiencia de usuario clara y ágil.',
		demoURL: 'https://cinlo-blog.netlify.app/',
		repoURL: 'https://github.com/CinLo82/blog-astro',
		anim: 'fade-right',
	},
    {
		imgSrc: '/img/videojuego.png',
		title: 'Videojuego-basico',
		skills: ['HTML', 'CSS', 'JavaScript'],
		descripcion:
			'Blog desarrollado con Astro, optimizado para velocidad y diseño minimalista. Ofrece una experiencia de usuario clara y ágil.',
		demoURL: 'https://cinlo82.github.io/tallerPractJSVideogames/',
		repoURL: 'https://github.com/CinLo82/tallerPractJSVideogames',
		anim: 'fade-right',
	},
    {
		imgSrc: '/img/landing-travel.png',
		title: 'Travel Tailwind ',
		skills: ['HTML', 'JavaScript', 'Tailwind'],
		descripcion:
			'Landing page para viajes, diseñada con Tailwind CSS. Ofrece un diseño atractivo y responsivo, destacando destinos y servicios turísticos de manera clara.',
		demoURL: 'https://cinlo82.github.io/travel-tailwind/',
		repoURL: 'https://github.com/CinLo82/travel-tailwind',
		anim: 'fade-right',
	}
    
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
