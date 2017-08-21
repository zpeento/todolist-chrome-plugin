window.onload = function() {
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
}