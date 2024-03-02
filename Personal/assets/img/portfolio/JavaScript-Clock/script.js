
const main = () => {
    let el = document.getElementById("result")
    let a = new Date()
    let gethours = a.getHours()
    let getMinutes = a.getMinutes()
    let getSeconds = a.getSeconds()
    getSeconds = a.getSeconds()
    if (gethours > '12') {
        gethours = gethours - 12
    }
    if (getMinutes < 10) {
        getMinutes = ('0' + getMinutes)
    }
    if (getSeconds < 10) {
        getSeconds = ('0' + getSeconds)
    }
    el.innerText = `${gethours} : ${getMinutes} : ${getSeconds}`
    setInterval(() => {
        main();
    }, 1000);
}
main();
