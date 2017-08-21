window.onload = function() {
    console.log(0)
    var date = new Date();
    var curMonth = date.getMonth()+1;
    var curDay = date.getDate();
    var curWeekDay = date.getDay();

    var dateDom = document.querySelector("#date");
    var weekDom = document.querySelector("#week");

    var weekList = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];

    //title DOM数据初始化
    dateDom.innerHTML = curMonth + " 月 " + curDay + " 日 ";
    weekDom.innerHTML = weekList[curWeekDay];

    //点击这个按钮会显示输入框
    var addItemButton = document.querySelector(".addItemButton");

    //输入计划框的容器
    var addItemContainer = document.querySelector(".addItemContainer");

    //点击这个按钮增加计划
    var addItemShow = document.querySelector("#addItemShow");

    //计划列表
    var list = document.querySelector("#list");

    //输入框
    var addItemInput = document.querySelector("#addItemValue");

    addItemButton.onclick = function() {
        addItemButton.style.display = "none";
        addItemContainer.style.display = "flex";
    }

    addItemShow.onclick = function() {

        var newLiTag = document.createElement("li");

        var newTaskTag = document.createElement("p");
        var newTaskText = document.createTextNode(addItemInput.value);
        newTaskTag.appendChild(newTaskText);
        newLiTag.appendChild(newTaskTag);

        var newCancelButton = document.createElement("button");
        newCancelButton.innerHTML = '<button>x</button>';
        newLiTag.appendChild(newCancelButton);

        var newConfirmButton = document.createElement("button");
        newConfirmButton.innerHTML = '<button>√</button>';
        newLiTag.appendChild(newConfirmButton);

        list.appendChild(newLiTag);

        //隐藏输入框
        addItemContainer.style.display = "none";

        //显示添加计划按钮
        addItemButton.style.display = "block";
    }
}