window.addEventListener("load", async function() {
    const lists = document.getElementById("lis");
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await res.json();
    users.forEach(element => {
        const list = this.document.createElement("li");
        this.console.log(list);
        this.console.log(element);
        list.innerText = element.title;
        this.console.log(list);//null
        lists.appendChild(list);//appendhildの処理で詰まる
    });
})