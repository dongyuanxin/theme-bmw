function hiddenHeader() {
    let current =  document.documentElement.scrollTop || document.body.scrollTop;
    if(current > 0){
        document.querySelector(".header-wrap").className = "header-wrap hidden";
    }else{
        document.querySelector(".header-wrap").className = "header-wrap";
    }
}
document.addEventListener("scroll", hiddenHeader);
