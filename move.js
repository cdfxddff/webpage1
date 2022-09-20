let i=0;

window.addEventListener("load", async function() {
    const lists = document.getElementById("lis");
    const tilis = this.document.getElementById("li_f");
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await res.json();
    users.forEach(element => {
        const list = this.document.createElement("li");
        list.setAttribute("id",'l_'+i);
        const tili = this.document.createElement("li");
        //読み込んだjsonデータを作ったliタグの中に埋め込む
        list.innerText = element.body;
        lists.appendChild(list);
        tili.innerHTML = `<a href="#l_${i++}">`+element.title+'</a>';
        tilis.append(tili);

    });
})