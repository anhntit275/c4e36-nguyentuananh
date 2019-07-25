// console.log(1);

// setTimeout(() => {
//     console.log(2)
// }, 2000)

// console.log(3);

// Quy trinh JS: callstack, APIs, callback queue, event loop
// dong bo dau vao, bat dong bo dau ra

// https://reqres.in/
// .../api/users?page=2

//bt1
// const context = {
//     users: null,
// }

// window.onload = async () => {
//     await getUsers();
//     renderUsers();
// }

// const getUsers = async () => {
//     const res = await fetch('https://reqres.in/api/users');
//     //console.log(await res.json());
//     const users = await res.json();
//     context.users = users.data;
// }

// const renderUsers = () => {
//     let userDiv = document.getElementById('container');
//    // console.log(context.users);
//    context.users.forEach((user, index) => {
//        //console.log(user);
//        let userElement = `
//        <div>
//         <img src =${user.avatar}>
//         <b>Full name: </b>${user.last_name} ${user.first_name}
//         <b>Email: </b>${user.email}
//         </div>
//        `
//        userDiv.innerHTML += userElement;
//        })
//    }

//bt2:

// const context = {
//     users: null,
// }

// window.onload = async () => {
//     await getUsers();
//     renderUsers();
//     viewUser();
// }

// const getUsers = async () => {
//     const res = await fetch('https://reqres.in/api/users');
//     //console.log(await res.json());
//     const users = await res.json();
//     context.users = users.data;
// }

// const renderUsers = () => {
//     let userDiv = document.getElementById('container');
//    // console.log(context.users);
//    context.users.forEach((user, index) => {
//        //console.log(user);
//        let userElement = `
//        <div>
//         <img src =${user.avatar}>
//         <b>Full name: </b>${user.last_name} ${user.first_name}
//         <b>Email: </b>${user.email}
//         </div>
//        `
//        userDiv.innerHTML += userElement;
//        })
//    }

// const viewUser = () => {
//     let userdetailDiv = document.getElementById('user-detail');
//     for (let i = 0; i < 3; i++) {
//         let userId = document.getElementById('');
//         let clickId = `
//         <div id = 
//         `
//     }
// }

// chua bt2:

const context = {
    users: null,
}

window.onload = async () => {
    await getUsers();
    renderUsers();
    viewUser();
}

const getUsers = async () => {
    const res = await fetch('https://reqres.in/api/users');
    //console.log(await res.json());
    const users = await res.json();
    context.users = users.data;
}

const renderUsers = () => {
    let userDiv = document.getElementById('container');
   // console.log(context.users);
   context.users.forEach((user, index) => {
       //console.log(user);
       let userElement = `
       <div id = "user-${index}">
        <img src =${user.avatar}">
        <b>Full name: </b>${user.last_name} ${user.first_name}
        <b>Email: </b>${user.email}
        </div>
       `
       userDiv.innerHTML += userElement;
       })
   }

   const viewUser = () => {
    for (let index = 0; index < context.users.length; index++) {
        let user = document.getElementById(`user-${index}`);
        let userDetail = document.getElementById('user-detail');
        user.addEventListener('click', (event) => {
            console.log(event);
            userDetail.innerHTML = '';
            userDetail.innerHTML += user.innerHTML;
        })
        
// let info = document.getElementById('info');

// for (let i = 0; i < 3; i++) {
//     let a = `<img src = "${context.users[i].avatar}"<br>
//     <p>${context.users[i].first_name} <p>${context.users[i].last_name}<br>
//     <p>${context.users[i].email}</p>`

//     console.log(a);
//     info.innerHTML += a;
// }

// FrontEnd -> get request -> BackEnd
// BackEnd -> response -> Frontend
// callback, promise, asigne/await
// fetch, json chay delay 1 time, await giup doi chay xong

//bt1: hien thi avatar, fullname, email cua 3 nguoi

// tim hieu event.target