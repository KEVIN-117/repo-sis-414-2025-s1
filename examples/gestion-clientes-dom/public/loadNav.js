const navContent = document.getElementById('nav-content');

const links = [
    {
        name: 'Home', href: '/home', icon: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
</svg>
`
    },
    {
        name: 'Register',
        href: '/register',
        icon: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 4v3a1 1 0 0 1-1 1h-3m2 10v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L6.7 8.35A1 1 0 0 1 7.46 8H9m-1 4H4m16-7v10a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7.87a1 1 0 0 1 .24-.65l2.46-2.87a1 1 0 0 1 .76-.35H19a1 1 0 0 1 1 1Z"/>
</svg>
`,
    },
    {
        name: 'Gallery', href: '/gallery', icon: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
</svg>
`
    },
];

links.forEach((link) => {
    const a = document.createElement('a');
    a.href = link.href;
    a.className = 'flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm font-medium border-l-4 border-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 py-2.5 set-blue-opacity rounded-lg ';
    a.innerHTML = `
        ${link.icon}
        <p class="hidden md:block">${link.name}</p>
    `
    navContent.appendChild(a);
});
