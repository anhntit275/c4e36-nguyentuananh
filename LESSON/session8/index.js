// console.log(1);

// setTimeout(() => {
//     console.log(2)
// }, 2000)

// console.log(3);

// Quy trinh JS: callstack, APIs, callback queue, event loop
// dong bo dau vao, bat dong bo dau ra

// https://reqres.in/
// .../api/users?page=2

const context = {
    users: null,
}

window.onload = async () => {
    await getUsers();
    renderUsers();
}

const getUsers = async () => {
    const res = await fetch('https://reqres.in/api/users');
    //console.log(await res.json());
    const users = await res.json();
    context.users = users.data;
}

const renderUsers = () => {
    console.log(context.users);
}

// FrontEnd -> get request -> BackEnd
// BackEnd -> response -> Frontend
// callback, promise, asigne/await
// fetch, json chay delay 1 time, await giup doi chay xong

//bt1: hien thi avatar, fullname, email cua 3 nguoi