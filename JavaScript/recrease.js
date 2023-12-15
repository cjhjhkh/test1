window.addEventListener('load',() => {
        // 名录里的数字自增
        let num = document.querySelectorAll('.roster .roster-wra .nums .numBox .number');
        const arr = [num[0].textContent, num[1].textContent, num[2].textContent, num[3].textContent];
        setTimeout(() => {
            for (let i = 0; i < num.length; i++) {
                let k = 0;
                let timer = setInterval(() => {
                    if (k >= arr[i]) {
                        clearInterval(timer);
                    }
                    num[i].innerHTML = k;
                    k++;
                }, 1);
            }
        });
});