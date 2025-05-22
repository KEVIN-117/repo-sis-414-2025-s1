const URL_DB = "https://gestion-clientes-79743-default-rtdb.firebaseio.com/";
const cloudName = "disvwilxi";
const URL_STORAGE = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
const preset = "clientes";
document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.getElementById("main-content");

  function loadContent(route) {
    let content = "";
    switch (route) {
      case "home":
        content = statics.home.content;
        break;
      case "register":
        content = statics.register.content;
        break;
      case "gallery":
        content = statics.profiles.content;
        break;
      default:
        content =
          "<h1>Page Not Found</h1><p>The requested page was not found.</p>";
    }

    mainContent.innerHTML = content;
  }

  loadContent(getRouteFromURL());

  document.querySelectorAll("#nav-content a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const route = this.getAttribute("href").substring(1);
      loadContent(route);
      history.pushState({ route }, null, `#${route}`);
    });
  });

  window.addEventListener("popstate", function (event) {
    const route = event.state.route || getRouteFromURL();
    loadContent(route);
  });

  function getRouteFromURL() {
    return window.location.hash.substring(1) || "home";
  }
});

const statics = {
  home: {
    title: "Home",
    content: `<div class="bg-white dark:bg-slate-900 overflow-hidden">
                    <div class="relative isolate px-6 pt-14 lg:px-8">
                        <div class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-500 to-violet-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);">
                            </div>
                        </div>
                        <div class="mx-auto flex flex-col justify-center items-center max-w-3xl py-40">
                            <div class="relative text-center flex flex-col justify-center items-center rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-200 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                                            <linearGradient id="_r_aP5JxeTUbgl5L40n7Ca_NU48HGBGk0Do_gr1" x1="32" x2="32" y1="22.915" y2="39.482" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#_r_aP5JxeTUbgl5L40n7Ca_NU48HGBGk0Do_gr1)" points="32,24 16,31 32,40 48,31"></polygon><linearGradient id="_r_aP5JxeTUbgl5L40n7Cb_NU48HGBGk0Do_gr2" x1="32" x2="32" y1="4.319" y2="56.536" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#_r_aP5JxeTUbgl5L40n7Cb_NU48HGBGk0Do_gr2)" d="M15.979,32.214l15.029,8.588c0.306,0.174,0.648,0.261,0.991,0.261s0.686-0.087,0.992-0.262 l15.028-8.588c0.473-0.271,0.819-0.729,0.949-1.257c0.131-0.528,0.038-1.094-0.254-1.553L33.687,5.789 c-0.369-0.58-1-0.926-1.687-0.926c-0.688,0-1.318,0.346-1.688,0.926L15.284,29.404c-0.292,0.459-0.385,1.024-0.254,1.553 C15.16,31.486,15.507,31.944,15.979,32.214z M17.598,30.838L31,25.477v13.017L17.598,30.838z M33,25.477l13.4,5.36L33,38.495 V25.477z M45.71,28.407L33,23.323V8.434L45.71,28.407z M31,8.434v14.889l-12.71,5.084L31,8.434z"></path><linearGradient id="_r_aP5JxeTUbgl5L40n7Cc_NU48HGBGk0Do_gr3" x1="32" x2="32" y1="4.319" y2="56.536" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#_r_aP5JxeTUbgl5L40n7Cc_NU48HGBGk0Do_gr3)" d="M50.178,35.027c-0.319-0.354-0.846-0.434-1.255-0.19L32,44.923L15.077,34.837 c-0.409-0.245-0.935-0.166-1.255,0.19c-0.319,0.355-0.344,0.886-0.058,1.268L30.39,58.5c0.381,0.518,0.968,0.814,1.61,0.814 s1.229-0.296,1.605-0.808l16.63-22.211C50.521,35.913,50.497,35.382,50.178,35.027z M18.396,39.143L31,46.655v9.323L18.396,39.143z M33,55.968v-9.313l12.602-7.511L33,55.968z"></path>
                                        </svg>
                                <span>Bienvenido al Sistema de Gestión de Clientes</span>
                                <code class="text-xs font-bold text-gray-500 dark:text-gray-400">this change is in the test branch</code>
                            </div>
                            <div class="text-center">
                                <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                        Bienvenido a nuestro Sistema de Gestión de Clientes. ¡Conéctate con tus clientes y mejora tus relaciones comerciales de manera eficiente!
                                    </span>
                                </h1>
                                <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                                    Sumérgete en un viaje único a través de la información de nuestros clientes. Desde perfiles detallados hasta datos precisos, nuestra plataforma te invita a descubrir la esencia de tus clientes a través de una colección cuidadosamente organizada de información relevante. ¡Bienvenido a un universo de conocimiento sobre tus clientes y emocionantes oportunidades de conexión
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                        <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
                            style="background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px); border-radius: 10px;">
                            
                            
                            <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    Boost your productivity.
                                    <br />
                                    Start using our app today.
                                </h2>
                                <p class="mt-6 text-lg leading-8 text-gray-300">
                                    Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
                                    sagittis vel nulla.
                                </p>
                                <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                    <a href="#"
                                        class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                        Get started
                                    </a>
                                    <a href="#" class="text-sm font-semibold leading-6 text-white">
                                        Learn more <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                            <div class="relative mt-16 h-80 lg:mt-8">
                                <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                                    alt="App screenshot" width="1824" height="1080" />
                            </div>
                        </div>
                    </div>
                </div>`,
  },
  register: {
    title: "Register",
    content: `
                        <h1 class="text-2xl title w-full text-center set-bg-opacity py-5">
                                    Formulario de registro de usuario
                        </h1>
                        <div class="grid grid-cols-2 p-5 gap-5">
                            <div class="set-bg-opacity border-t-8 border-[#007bff] rounded-xl shadow-md">
                                <div id="profile" class="w-full h-full flex flex-col justify-center items-center">
                                    <h2 class="text-2xl title w-full text-center py-5"
                                        style="background: rgba(0, 0, 0, 0.9);"
                                    >
                                        Imagen de perfil
                                    </h2>
                                    <img class="h-[80vh] w-full rounded-lg object-cover" src="https://firebasestorage.googleapis.com/v0/b/next-dashboard-3cfe2.appspot.com/o/defaultProfile.jpg?alt=media&token=ed606716-5cfb-4816-a9fc-22a1f1ab5462" alt="image description">

                                </div>
                            </div>
                            <form id="miFormulario" class="w-full border-t-8 border-[#007bff] p-4 rounded-xl shadow-md" onsubmit="postData(event)">
                                <label for="name">Nombre:</label>
                                <input type="text" name="name" id="name" required>
                                <br>
                                <label for="lastName">Apellido:</label>
                                <input type="text" name="lastName" id="lastName" required>
                                <br>
                                <label for="email">Email:</label>
                                <input type="email" name="email" id="email" required>
                                <br>
                                <label for="birthdate">Fecha de Nacimiento:</label>
                                <input type="date" name="birthdate" id="birthdate" required>
                                <br>
                                <label for="gender">Género:</label>
                                <select name="gender">
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                                <br>
                                <label for="phone">Telefono:</label>
                                <input type="text" name="phone" id="phone" required>
                                <br>
                                <label for="address">Direccion:</label>
                                <input type="text" name="address" id="address" required>
                                <br>
                                <label for="avatar">Avatar:</label>
                                <input type="file" name="avatar" id="avatar" required onchange="viewProfile(event)">
                                <br>
                                <button 
                                    type="submit" 
                                    style="
                                        background-color: #007bff;
                                        color: white;
                                        border: none;
                                        padding: 10px;
                                        border-radius: 5px;
                                        cursor: pointer;"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>`,
  },
  profiles: {
    title: "Profiles",
    content: `
            <div class="set-bg-opacity p-5 flex">
                <h1 class="text-2xl title w-full text-center flex-1">
                    Perfiles de usuarios
                </h1>
                <button 
                        onclick="loadFakeData()"
                        style="
                            background-color: #007bff;
                            color: white;
                            border: none;
                            padding: 10px;
                            border-radius: 5px;
                            cursor: pointer;"
                    >
                        Cargar Datos
                    </button>
            </div>
            <div id="app-profile" class="grid grid-cols-3 gap-5 p-5">
                
            </div>
        `,
  },
};

function viewProfile(event) {
  event.preventDefault();
  console.log(event);
  const image = event.target.files[0];
  const url = URL.createObjectURL(image);
  const profile = document.getElementById("profile");
  profile.innerHTML = `
        <img src="${url}" alt="${image.name}" class="h-auto w-full rounded-lg">
    `;
}

function fackeData() {
  const data = [
    {
      name: "Juan",
      lastName: "Perez",
      email: "alguien@gmail.com",
      birthdate: "1990-01-01",
      gender: "Male",
      phone: "12345678",
      address: "Calle 1",
      avatar:
        "https://res.cloudinary.com/disvwilxi/image/upload/v1712812656/wzytiaec8ghq8f0gcdqe.jpg",
    },
    {
      name: "Maria",
      lastName: "Lopez",
      email: "alguien@gmail.com",
      birthdate: "1990-01-01",
      gender: "Female",
      phone: "12345678",
      address: "Calle 2",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/next-dashboard-3cfe2.appspot.com/o/defaultProfile.jpg?alt=media&token=ed606716-5cfb-4816-a9fc-22a1f1ab5462",
    },
    {
      name: "Juan",
      lastName: "Perez",
      email: "alguien@gmail.com",
      birthdate: "1990-01-01",
      gender: "Male",
      phone: "12345678",
      address: "Calle 1",
      avatar:
        "https://res.cloudinary.com/disvwilxi/image/upload/v1712812656/wzytiaec8ghq8f0gcdqe.jpg",
    },
    {
      name: "Maria",
      lastName: "Lopez",
      email: "alguien@gmail.com",
      birthdate: "1990-01-01",
      gender: "Female",
      phone: "12345678",
      address: "Calle 2",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/next-dashboard-3cfe2.appspot.com/o/defaultProfile.jpg?alt=media&token=ed606716-5cfb-4816-a9fc-22a1f1ab5462",
    },
    {
      name: "Juan",
      lastName: "Perez",
      email: "alguien@gmail.com",
      birthdate: "1990-01-01",
      gender: "Male",
      phone: "12345678",
      address: "Calle 1",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/next-dashboard-3cfe2.appspot.com/o/faceGirldRb.jpg?alt=media&token=9c1ff84b-859d-4acd-911e-1c08b7ae10e8",
    },
    {
      name: "Maria",
      lastName: "Lopez",
      email: "alguien@gmail.com",
      birthdate: "1990-01-01",
      gender: "Female",
      phone: "12345678",
      address: "Calle 2",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/next-dashboard-3cfe2.appspot.com/o/defaultProfile.jpg?alt=media&token=ed606716-5cfb-4816-a9fc-22a1f1ab5462",
    },
  ];
  return data;
}

async function loadFakeData() {
  const app = document.getElementById("app-profile");

  const data = await fetch(`${URL_DB}clientes.json`);

  console.log(data);
  const clients = await data.json();

  for (const id in clients) {
    const user = clients[id];

    const container = document.createElement("div");
    container.id = "userContent";
    container.className =
      "flex flex-col border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg";
    container.innerHTML = `
            <div class="">
                <img src="${user.profile.url}" alt="${user.profile.name}" class="h-[50vh] w-full object-cover">
                <div class="set-bg-opacity p-5 grid grid-col-1 gap-5">
                    <div class="flex justify-between set-bg-opacity p-2 border-l-4 border-indigo-600 text-2xl font-bold rounded-md">
                        <h2>Name</h2>
                        <h2>${user.name} ${user.lastName}</h2>
                    </div>
                    <div class="flex justify-between set-bg-opacity p-2 border-l-4 border-indigo-600 text-2xl font-bold rounded-md">
                        <h2>Email</h2>
                        <h2>${user.email}</h2>
                    </div>
                    <div class="flex justify-between set-bg-opacity p-2 border-l-4 border-indigo-600 text-2xl font-bold rounded-md">
                        <h2>Birthdate</h2>
                        <h2>${user.birthdate}</h2>
                    </div>
                    <div class="flex justify-between set-bg-opacity p-2 border-l-4 border-indigo-600 text-2xl font-bold rounded-md">
                        <h2 > Gender</h2>
                        <h2 >${user.gender}</h2>
                    </div>
                    
                    <div class="flex justify-between set-bg-opacity p-2 border-l-4 border-indigo-600 text-2xl font-bold rounded-md">
                        <h2 > Phone</h2>
                        <h2 >${user.phone}</h2>
                    </div>
                    
                    <div class="flex justify-between set-bg-opacity p-2 border-l-4 border-indigo-600 text-2xl font-bold rounded-md">
                        <h2 > Address</h2>
                        <h2 >${user.address}</h2>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-5 p-5 set-bg-opacity">
                    <button class="w-full border rounded-md btn btn-outline btn-success flex md:justify-between justify-center" onclick="updateClient('${id}')">
                        <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                        </svg>
    
                        Edit
                    </button>
                    <button class="w-full border rounded-md btn btn-outline btn-error flex md:justify-between justify-center" onclick="deleteClient('${id}')">
                        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                        </svg>
    
                        Delete  
                    </button>
                </div>
            </div>
        `;
    app.appendChild(container);
  }
}

// funcionalidad para enviar datos a la base de datos

async function postData(event) {
  event.preventDefault(); //

  const name = event.target.name.value;
  const lastName = event.target.lastName.value;
  const email = event.target.email.value;
  const birthdate = event.target.birthdate.value;
  const gender = event.target.gender.value;
  const phone = event.target.phone.value;
  const address = event.target.address.value;
  const avatar = event.target.avatar.files[0];

  const formData = new FormData();

  formData.append("file", avatar);
  formData.append("upload_preset", preset);

  const response = await fetch(URL_STORAGE, {
    method: "POST",
    body: formData,
  });

  const { secure_url, width, height, original_filename, format } =
    await response.json();

  const data = {
    name,
    lastName,
    email,
    birthdate,
    gender,
    phone,
    address,
    profile: {
      url: secure_url,
      width,
      height,
      name: original_filename,
      format,
    },
  };

  const resDb = await fetch(`${URL_DB}clientes.json`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (resDb.ok) {
    alert("Cliente registrado");
    window.location.reload();
  } else {
    alert("Error");
  }
}

async function deleteClient(id) {
  const res = await fetch(`${URL_DB}clientes/${id}.json`, {
    method: "DELETE",
  });
  if (res.ok) {
    alert("Cliente Eliminado");
    window.location.reload();
  } else {
    alert("ERROR");
  }
}

async function updateClient(id) {
  const data = await fetch(`${URL_DB}clientes/${id}.json`);
  const user = await data.json();
  const userContent = document.getElementById("userContent");
  const div = document.createElement("div");
  div.className = "absolute top-0 bottom-0";
  div.id = "userUpdateContent";
  div.innerHTML = `
        <div class="grid grid-cols-2 gap-5 backdrop-blur-xl set-box-shadow"
            style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), ;"
        >
                            <div class="set-bg-opacity border-t-8 border-[#007bff] rounded-xl shadow-md">
                                <div id="profile" class="w-full h-full flex flex-col justify-center items-center">
                                    <h2 class="text-2xl title w-full text-center py-5"
                                        style="background: rgba(0, 0, 0, 0.9);"
                                    >
                                        Imagen de perfil
                                    </h2>
                                    <img class="h-[80vh] w-full rounded-lg object-cover" src="${user.profile.url}" alt="${user.profile.name}">

                                </div>
                            </div>
                            <form id="miFormulario" class="w-full border-t-8 border-[#007bff] p-4 rounded-xl shadow-md" onsubmit="update(event, '${id}')">
                                <label for="name">Nombre:</label>
                                <input type="text" value="${user.name}" name="name" id="name">
                                <br>
                                <label for="lastName">Apellido:</label>
                                <input type="text" value="${user.lastName}" name="lastName" id="lastName">
                                <br>
                                <label for="email">Email:</label>
                                <input type="email" value="${user.email}" name="email" id="email">
                                <br>
                                <label for="birthdate">Fecha de Nacimiento:</label>
                                <input type="date" value="${user.birthdate}" name="birthdate" id="birthdate">
                                <br>
                                <label for="gender">Género:</label>
                                <select name="gender" >
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                                <br>
                                <label for="phone">Telefono:</label>
                                <input type="text" value="${user.phone}" name="phone" id="phone">
                                <br>
                                <label for="address">Direccion:</label>
                                <input type="text" value="${user.address}" name="address" id="address">
                                <br>
                                <label for="avatar">Avatar:</label>
                                <input type="file" name="avatar" id="avatar" onchange="viewProfile(event)">
                                <br>
                                <button 
                                    type="submit" 
                                    style="
                                        background-color: #007bff;
                                        color: white;
                                        border: none;
                                        padding: 10px;
                                        border-radius: 5px;
                                        cursor: pointer;"
                                >
                                    Actualizar
                                </button>

                                <br>
                                <button 
                                    onclick="cancelUpdate()" 
                                    style="
                                        background-color: #007bff;
                                        color: white;
                                        border: none;
                                        padding: 10px;
                                        border-radius: 5px;
                                        cursor: pointer;"
                                >
                                    Cancelar
                                </button>
                            </form>
                        </div>
    `;
  userContent.appendChild(div);
}

async function update(event, id) {
  event.preventDefault();
  const name = event.target.name.value;
  const lastName = event.target.lastName.value;
  const email = event.target.email.value;
  const birthdate = event.target.birthdate.value;
  const gender = event.target.gender.value;
  const phone = event.target.phone.value;
  const address = event.target.address.value;

  const res = await fetch(`${URL_DB}clientes/${id}.json`);

  const data = await res.json();

  const user = {
    name,
    lastName,
    email,
    birthdate,
    gender,
    phone,
    address,
  };

  const fullUser = {
    ...data,
    ...user,
  };

  const resUpdate = await fetch(`${URL_DB}clientes/${id}.json`, {
    method: "PATCH",
    body: JSON.stringify(fullUser),
  });

  const userUpdateContent = document.getElementById("userUpdateContent");
  if (resUpdate.ok) {
    alert("Usuario Actualizado");
    userUpdateContent.remove();
    window.location.reload();
  } else {
    alert("Error al actualizar");
  }
}

function cancelUpdate() {
  const userUpdateContent = document.getElementById("userUpdateContent");
  userUpdateContent.remove();
}
