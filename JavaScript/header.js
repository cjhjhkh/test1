window.addEventListener('load', function () {


    //轮播图
    const dot = document.querySelectorAll('.slick-dots .slick-dot');
    const slideItem = document.querySelector('.slickBox .slick-wra');
    let k = 0;//点击第k个
    let time = 2000;
    const cli = () => {//点击函数
        for (let i = 0; i < slideItem.children.length; i++) {
            dot[i].addEventListener('click', () => {
                document.querySelector('.slickBox .slick-wra .active').classList.remove('active');//清除之前的
                slideItem.children[i].classList.add('active');//所点击的按钮对应板块
                document.querySelector('.slick-dots .active').classList.remove('active');
                dot[i].classList.add('active');
                k = i; //手动点击后重新赋值k      
            });
        }
    }
    cli(k);
    for(let i = 0;i<slideItem.length;i++){
        if(slideItem.children[i].querySelector('video')){
            let d = slideItem.children[i].querySelector('video').duration;
            setTimeout(() => {
                k++;
                k = k >= slideItem.children.length ? 0 : k;
                dot[k].click();
            },d);
        }
        else{
            setTimeout(() => {
                k++;
                k = k >= slideItem.children.length ? 0 : k;
                dot[k].click();
            }, 2000);
        }
    }
    // const timer = setInterval(() => {
    //     k++;
    //     k = k >= slideItem.children.length ? 0 : k;
    //     dot[k].click();
    // }, 2000);



    //最下面的轮播（热点推荐）
    const hotSpot = document.querySelector('.hotSpot .hot-wra .cont .area .itemBox');
    const hotItem = document.querySelectorAll('.hotSpot .hot-wra .cont .area .itemBox .item');
    let count = 0;
    let sum = 0;
    setInterval(() => {
        count++;
        if (count === hotItem.length) {
            count = 0;
            sum = 0;
        }
        hotSpot.style.transform = `translateX(-${sum + 70}px)`;//（需修改）
        sum += hotItem[count].clientWidth;
    }, 3000);


    //关闭热点推荐
    const hot = this.document.querySelector('.hotSpot');
    const closeBtn = this.document.querySelector('.hotSpot .hot-wra .close a');
    closeBtn.addEventListener('click', () => {
        hot.style.display = 'none';
    })

});