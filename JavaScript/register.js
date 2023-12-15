window.addEventListener('load', () => {

    let slotItem = document.querySelectorAll('.register .slot .slotTrack .slotItem');
    // const footBgi = document.querySelector('.slot .slotTrack .slotItem');//底部的
    for (let i = 0; i < slotItem.length; i++) {//背景图（颜色）
        slotItem[i].style.backgroundImage = `url('./images/poleBgc${i + 1}.png')`;
    }

    const topValue = ['60%', '80%', '28%', '88%', '22%', '78%', '78%', '73%', '54%', '54%', '80%', '88%', '80%', '22%', '62.5%', '80%', '80%', '30%', '16%', '80%', '57%'];
    for (let i = 21; i < slotItem.length; i++) {//设置top值
        slotItem[i].style.top = topValue[i - 21];
    }

    //设置名录背景图
    const bookIcon = this.document.querySelectorAll('.register .modules .book .contain .img');
    const bookBgc = this.document.querySelectorAll('.register .modules .book');
    for (let i = 0; i < bookIcon.length; i++) {
        bookIcon[i].style.backgroundImage = `url('./images/book-icon${i + 1}.png')`;
        bookBgc[i].style.backgroundImage = `url('./images/book_bgc${i + 1}.png')`;
    }


})
