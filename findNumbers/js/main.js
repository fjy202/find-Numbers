pressd=[]
for (var i = 0; i < document.body.getElementsByClassName("number").length; i++) {
    n = document.body.getElementsByClassName("number")[i]
    n.style = "top:" + Math.floor(Math.random() * document.body.scrollHeight) + "px;left:" + Math.floor(Math.random() * document.body.scrollWidth) + "px;";
    n.onclick = function () {
        pressd.push(this.innerText)
        this.hidden = true
        if (pressd.length === 10) {
            a = Windows.UI.Popups.MessageDialog("你赢了！关闭窗口后按alt+r再玩一遍。", "你赢了")
            a.showAsync()
            q = document.createElement("a")
            q.href = "/index.html"
            q.accessKey = "r"
            q.onclick = function () { console.log(1); location.reload() }
            document.body.append(q)
        }
    }
}