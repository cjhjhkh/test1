window.addEventListener('load', function () {

    let name = document.querySelectorAll('.figure .names .detail');
    for (let i = 0; i < name.length; i++) {
        name[i].addEventListener('mouseenter', function () {//切换图片
            document.querySelector('.figure .active').classList.remove('active');
            document.querySelector(`.figure .image${i + 1}`).classList.add('active');

        })
    }

    const sideNav = document.querySelector('.sideNav');//侧边导航栏
    const hotSpot = this.document.querySelector('.hotSpot');//底部热点推荐
    const container = document.querySelector('body');
    const img = this.document.querySelector('.figure .images');//人物板块
    const detail = this.document.querySelectorAll('.figure .names .detail');//右边人物


    //设置名录起始位置
    const book = this.document.querySelectorAll('.register .modules .book');
    const setLoc = () => {
        // alert(1);
        for (let i = 0; i < book.length; i++) {
            if (i % 2 === 0) {
                book[i].style.transform = 'translateY(105px)';
            }
            else {
                book[i].style.transform = 'translateY(-105px)';
            }
        }
    }
    setLoc();
    const show = (i) => { //名录出现
        if (i < book.length) {//确保i不超出数组下标
            book[i].style.transform = 'translateY(0px)';
            setTimeout(() => {
                book[i].style.opacity = 1;
            }, 200)
        }
    }
    const appear = () => {//名录先后出现
        this.setTimeout(() => {
            let index1 = 0;  //靠近底部的盒子的下标
            const move1 = setInterval(() => {
                show(index1);//每隔200 出现一个
                index1 += 2;//下面盒子下标相邻为2
                if (index1 >= book.length) {//定时器限制条件
                    this.clearInterval(move1);
                    index1 = 0;
                }
            }, 200)
            let index2 = 1;//上面盒子的下标
            const move2 = setInterval(() => {
                show(index2);
                index2 += 2;
                if (index2 >= book.length) {
                    this.clearInterval(move2);
                    index2 = 1;
                }
            }, 350)
        }, 1000);
    }

    let x = 0;//计数，控制滚动次数
    const duration = 700;//切换时过渡的时间
    let t = 0;//获取的滚动起始时间
    document.addEventListener('mousewheel', e => {

        //整屏滚动  
        if (new Date().getTime() < t + duration) {//如果动画还没执行完，就返回（控制每次只能滚动一个板块）
            return;
        }
        if (e.wheelDelta < 0) { //往下滚
            t = new Date().getTime();//获取滚动起始时间
            x = x + 1 <= 6 ? x + 1 : 6;//判断，重置
        }
        if (e.wheelDelta > 0) { //往上滚
            t = new Date().getTime();
            x = x - 1 >= 0 ? x - 1 : 0;
        }
        // container.style.top = -document.body.clientHeight * x + 'px';//根据得到的值改变top
        container.style.top = -window.innerHeight * x + 'px';
        // container.style.transform = `translateY(-${window.innerHeight * x}px)`;


        //侧边导航栏出现
        if (container.style.top <= -window.innerHeight * 1 + 'px') {
            setTimeout(() => {
                sideNav.classList.add('show');
                hotSpot.classList.add('active');
            }, 250);

            appear();//名录出现
        }
        if (container.style.top < -document.body.clientHeight * 1 + 'px' || container.style.top === 0) {
            setLoc();
        }
        //侧边导航栏消失
        if (container.style.top === '0px') {
            setTimeout(() => {
                hotSpot.classList.remove('active');
                sideNav.classList.remove('show');
            }, 500);
        }

        //人物板块出现
        if (container.style.top >= -document.body.clientHeight * 3 + 'px') {
            setTimeout(() => {
                img.classList.add('slide');//左边移入
                for (let i = 0; i < detail.length; i++) {
                    if (i % 2 === 0) {//右边人物部分的动画
                        detail[i].classList.add('active2');
                        setTimeout(() => {
                            // imgSize.classList.add('size');
                            for (let i = 0; i < detail.length; i += 2) {
                                detail[i].classList.add('active');
                            }
                        }, 700);
                    }
                    else {
                        detail[i].classList.add('active1');
                        setTimeout(() => {
                            // imgSize.classList.add('size');
                            for (let i = 1; i < detail.length; i += 2) {
                                detail[i].classList.add('active');
                            }
                        }, 700);
                    }
                }

            }, 1000);
        }
        else {//恢复
            setTimeout(() => {
                img.classList.remove('slide');
                // img.classList.remove('size');
                for (let i = 0; i < detail.length; i++) {
                    if (i % 2 === 0) {
                        detail[i].classList.remove('active2');
                        detail[i].classList.remove('active');
                    }
                    else {
                        detail[i].classList.remove('active1');
                        detail[i].classList.remove('active');
                    }
                }
            }, 1000);
        }

        //扇子出现
        const fan1 = this.document.querySelector('.plan .img1');
        const fan2 = this.document.querySelector('.plan .img2');
        if (container.style.top >= -document.body.clientHeight * 4 + 'px' && container.style.top < -document.body.clientHeight * 6 + 'px') {
            fan1.classList.add('active');
            this.setTimeout(() => {
                fan2.classList.add('active');
            }, 1000)
        }
        else {
            fan2.classList.remove('active');
        }


    })

});