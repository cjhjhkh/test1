window.addEventListener('load', () => {
    //上面导航栏
    let navItem = document.querySelectorAll('.nav .nav-wra>li');
    let navTit = document.querySelectorAll('.nav .nav-wra>li .nav-tit');
    navTit[0].classList.add('cli');
    for (let i = 0; i < navItem.length; i++) {
        let j;
        navTit[i].addEventListener('click', () => {
            document.querySelector('.nav .nav-wra>li .cli').classList.remove('cli');
            navTit[i].classList.add('cli');
            j = i;
        })
        if (i != j) {
            navItem[i].addEventListener('mouseenter', () => {
                document.querySelector('.nav .nav-wra>li .active').classList.remove('active');
                navTit[i].classList.add('active');
            })
        }

    }



    //搜索框
    const search = document.querySelector('.header .tools .search');
    const searchBox = document.querySelector('.search .searchBox');
    const inputBox = document.querySelector('.search .searchBox input');
    const submitBtn = document.querySelector('.search .searchBox .search-btn');
    const close = document.querySelector('.tipAlert .close');//关闭按钮
    const sub = document.querySelector('.tipAlert .sub');//"确定"按钮
    const tipAlert_wra = document.querySelector('.tipAlert-wra');
    //输入框出现
    search.addEventListener('click', e => {
        searchBox.style.display = 'flex';
        setTimeout(() => {
            searchBox.classList.add('active');
        }, 10);
        e.stopPropagation();
        document.addEventListener('click', () => {
            searchBox.classList.remove('active');
            setTimeout(() => {
                searchBox.style.display = 'none';
            }, 1000);
        });
    })
    submitBtn.addEventListener('click', () => {
        if (inputBox.value === '') {
            tipAlert_wra.style.display = 'block';
        }
    })

    //关闭提示框
    tipAlert_wra.addEventListener('click', function (e) {
        if (e.target === close || e.target === sub) {//点击这两个就关闭父级
            this.style.display = 'none';
        }
    })


    //盒子出现
    const show = (item, event1, enent2, showBox) => {
        item.addEventListener(`${event1}`, () => {
            showBox.classList.add('condict');
            // setTimeout(function(){
            showBox.classList.add('active');
            // },1000);
            this.clearTimeout(s);
        })
        item.addEventListener(`${enent2}`, () => {
            showBox.classList.remove('active');
            let s = setTimeout(function () {
                showBox.classList.remove('condict');
            }, 2000);
        })
    }
    //二维码出现
    const QRcode = document.querySelector('.header .tools .wechatIcon .wechat_QRcode');
    const weChat = document.querySelector('.header .tools .wechatIcon');
    show(weChat, 'mouseenter', 'mouseleave', QRcode);



    //日期
    const calendar = document.querySelector('.header .tools .calendar');
    let data = new Date();
    let year = data.getFullYear();//判断是否需要补0
    let month = data.getMonth() + 1 < 10 ? '0' + (data.getMonth() + 1) : data.getMonth() + 1;//月份加一！！
    let day = data.getDate() < 10 ? '0' + data.getDate() : data.getDate();
    let newdata = year + '-' + month + '-' + day;
    calendar.innerHTML = newdata + '&nbsp;&nbsp;星期四&nbsp;&nbsp;农历五月廿六&nbsp;&nbsp;&nbsp';


});