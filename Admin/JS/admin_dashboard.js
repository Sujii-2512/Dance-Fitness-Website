// document.addEventListener('DOMContentLoaded', () => {
//     const showNavbar = (toggleId, navId, bodyId, headerId, contentId) => {
//         const toggle = document.getElementById(toggleId),
//             nav = document.getElementById(navId),
//             bodypd = document.getElementById(bodyId),
//             headerpd = document.getElementById(headerId),
//             contentElement = document.getElementById(contentId);

//         // Validate that all variables exist
//         if (toggle && nav && bodypd && headerpd && contentElement) {
//             toggle.addEventListener('click', () => {
//                 // Toggle the minimized state
//                 nav.classList.toggle('minimized');
//                 bodypd.classList.toggle('navbar-minimized');
//                 headerpd.classList.toggle('body-pd');
//                 contentElement.style.marginLeft = nav.classList.contains('minimized') 
//                     ? 'var(--nav-width)' 
//                     : 'calc(var(--nav-width) + 156px)';
//             });
//         }
//     };

//     showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header', 'content');
// });