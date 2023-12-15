window.addEventListener('load', function () {
    //输入省份
    const province = this.document.querySelectorAll('.map .contain .mapBox .citys .name');
    const province2 = this.document.querySelectorAll('.map .contain .mapBox .citys .data span');
    for (let i = 5; i < province2.length; i++) {
        if (i < 32) {
            province2[i].innerHTML = province[i - 1].textContent;
        }
        if (i > 33) {
            province2[i].innerHTML = province[i - 2].textContent;
        }
    }
    //点击省份切换
    const statistics = document.querySelector('.map .contain .statistics');
    for (let i = 0; i < province2.length; i++) {
        province2[i].addEventListener('click', function () {
            statistics.innerHTML = `
                <div class="area">${province2[i].textContent}</div>
                <div class="tab">
                    <div class="tab-wrap">
                        <div class="tit1">国家级代表性项目</div>
                        <div class="tit2">国家级代表性传承人</div>                        
                    </div>

                </div>
                <div class="tab-item">
                    <div class="table">
                        <!-- <div class="fir"> -->
                            <div class="td">
                                <div class="num">251</div>
                                <div class="text">民间文学</div>
                            </div>
                            <div class="td">
                                <div class="num">431</div>
                                <div class="text">传统音乐</div>
                            </div>
                            <div class="td">
                                <div class="num">356</div>
                                <div class="text">传统舞蹈</div>
                            </div>                            
                        <!-- </div> -->
                        <!-- <div class="sec"> -->
                            <div class="td">
                                <div class="num">473</div>
                                <div class="text">传统戏剧</div>
                            </div>
                            <div class="td">
                                <div class="num">213</div>
                                <div class="text">曲艺</div>
                            </div>
                            <div class="td">
                                <div class="num">166</div>
                                <div class="text">传统体育、游艺与杂技</div>
                            </div>                            
                        <!-- </div> -->

                        <div class="td">
                                <div class="num">417</div>
                                <div class="text">传统美术</div>
                            </div>
                        <div class="td">
                                <div class="num">629</div>
                                <div class="text">传统技艺</div>
                            </div>
                        <div class="td">
                                <div class="num">182</div>
                                <div class="text">传统医药</div>
                            </div>
                        <div class="td">
                                <div class="num">492</div>
                                <div class="text">民俗</div>
                            </div>
                    </div>
                    <div class="illustrate">说明：数据来自国务院及国家文化和旅游行政主管部门公开信息，台湾省暂无数据，数据统计截至2021年06月30日 。</div>
                    <div class="total">
                        总计：<span class="count">3610</span>项
                    </div>                    
                </div>
            `;
        })
    }

});