window.addEventListener('load', () => {








    //下拉菜单（名录和传承人）
    const select1 = document.querySelectorAll(' .searchBox .select');
    const cont1 = document.querySelectorAll(' .searchBox .select .cont');
    const directory1 = document.querySelectorAll(' .searchBox .select .select-btn');
    for (let i = 0; i < select1.length; i++) {
        select1[i].addEventListener('click', e => {
            // if(document.querySelector('.active')){//清除其它
            //     document.querySelector('.active').classList.remove('active');
            // }
            cont1[i].classList.add('active');
            directory1[i].classList.add('active');
            e.stopPropagation();
        });
        window.addEventListener('click', () => {
            cont1[i].classList.remove('active');
            directory1[i].classList.remove('active');
        });

    }



    //接口
    const ajax = {
        get(url, fn) {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', url)
            xhr.send()
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    fn(xhr.responseText);//回调
                }
            }
        }
    }



    //传承人
    const fn2 = (response) => {
        let result = JSON.parse(response);
        let data2 = result.data;
        // console.log(data2);
        const tbody = document.querySelector('.inheritor .inheritor-wra .table tbody');
        let sum = document.querySelector('.inheritor .inheritor-wra .result .col');//项目总数
        sum.innerHTML = data2.length;
        //获取页码
        let page = document.querySelectorAll('.inheritor .pageBox .pageItem .num a');
        let pageIndex = 0;
        for (let i = 0; i < page.length; i++) {
            page[i].addEventListener('click', () => {
                pageIndex = page[i].textContent - 1;
                let tr = '';
                for (let i = pageIndex * 10; i < pageIndex * 10 + 10; i++) {
                    tr += `
                        <tr>
                            <td>${data2[i].id}</td>
                            <td><a href="#">${data2[i].name}</a></td>
                            <td>${data2[i].gender}</td>
                            <td>${data2[i].nation}</td>
                            <td>${data2[i].category}</td>
                            <td>${data2[i].project_ref}</td>
                            <td>${data2[i].project_name}</td>
                            <td>${data2[i].district}</td>
                        </tr>
                    `;
                }
                tbody.innerHTML = `
                    <tr>
                        <th>序号</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>民族</th>
                        <th>类别</th>
                        <th>项目编号</th>
                        <th>项目名称</th>
                        <th>申报地区或单位</th>
                    </tr>   
                    ${tr}    
                `;
            })
        }
        page[0].click();
    }
    ajax.get('http://47.113.195.108:3000/inheritorList', fn2);


    const search = document.querySelector('.roster .roster-wra .searchBox .search');//搜索按钮

    //名录
    const fn1 = (response) => {
        let result = JSON.parse(response);
        let data1 = result.data;//获取的所要渲染的
        let tbody = document.querySelector('.roster .roster-wra .table tbody');
        let sum = document.querySelector('.roster .roster-wra .result .col');//项目总数
        sum.innerHTML = data1.length;//总数为所获取的数组长度

        const selText = document.querySelectorAll('.searchBox .select .select-btn p');//筛选后呈现的文字
        const selection = document.querySelectorAll('.roster .roster-wra .select .cont .wra .box ul');//选择列表
        //筛选
        for (let i = 0; i < selection.length; i++) {
            for (let j = 0; j < selection[i].children.length; j++) {
                selection[i].children[j].addEventListener('click', () => {
                    selText[i].innerHTML = selection[i].children[j].textContent;//将所选写入
                })
            }
        }
        let newData = [];//新数组
        let page;
        search.addEventListener('click', () => {//点击搜索按钮进行筛选
            for (let i = 0; i < data1.length; i++) {
                if (data1[i].district.includes(selText[0].textContent) && data1[i].time.includes(selText[1].textContent.substr(0, 4)) && data1[i].category.includes(selText[2].textContent) && data1[i].type.includes(selText[3].textContent)) {
                    newData.push(data1[i]);//筛选 得到新数组
                }
                //(差添加一个 是默认 的情况)
            }
            // console.log(newData);
            // console.log(newData.length);
            sum.innerHTML = newData.length;//将数组的长度写入（为什么这个数很奇怪……）
            // page = sum % 10 != 0 ? sum / 10 + 1 : sum / 10 ; //获取页码数（筛选后）

            //（添加页码按钮）

            //(根据页码数渲染页面)


        });

        // //获取页码
        page = document.querySelectorAll('.roster .pageBox .pageItem .num a');
        let pageIndex = 0;
        for (let i = 0; i < page.length; i++) {

            page[i].addEventListener('click', () => {
                pageIndex = page[i].textContent - 1;

                //渲染表格
                let tr = '';
                for (let i = pageIndex * 10; i < pageIndex * 10 + 10; i++) {
                    tr += `
                            <tr>
                                <td>${data1[i].id}</td>
                                <td>${data1[i].project_id}</td>
                                <td>${data1[i].ref}</td>
                                <td><a href="#">${data1[i].name}</a></td>
                                <td>${data1[i].category}</td>
                                <td>${data1[i].time.substr(0, 4)}<br>${data1[i].time.substr(4, 5)}</td>
                                <td>${data1[i].type}</td>
                                <td>${data1[i].district}</td>
                                <td>${data1[i].unit}</td>
                            </tr>                
                        `;
                }
                tbody.innerHTML = `
                        <tr>
                            <th class="proj">序号</th>
                            <th class="proj">项目序号</th>
                            <th class="proj">编号</th>
                            <th class="proj">名称</th>
                            <th class="proj">类别</th>
                            <th class="proj">公布时间</th>
                            <th class="proj">类型</th>
                            <th class="proj">申报地区或单位</th>
                            <th class="proj">保护单位</th>
                        </tr>     
                        ${tr} 
                    `});
        }

        page[0].click();

    }
    ajax.get('http://47.113.195.108:3000/projectList', fn1);





});