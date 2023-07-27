function handleClickEvent(e) {
    const keyCode = this.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const element = document.querySelector(`.box[data-key="${keyCode}"]`);
    audio.currentTime = 0;
    if (!audio) return;
    audio.play();
    element.classList.add("playing");
    setTimeout(() => {
        element.classList.remove("playing");
    }, 200);
}
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("click", handleClickEvent);
});
window.addEventListener("keydown",(e)=>{
    const keyCode=e.keyCode;
    const audio=document.querySelector(`audio[data-key="${keyCode}"]`)
    const element=document.querySelector(`.box[data-key="${keyCode}"]`)
    audio.currentTime=0;
    if(!audio) return;
    audio.play();
    element.classList.add("playing");
    // const allKeys=document.querySelectorAll(`.box`);
    setTimeout(()=>{
     element.classList.remove("playing");

    },200);
})

