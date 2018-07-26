function createDiv() {
    var div = document.createElement('div');
    div.setAttribute('id', 'clock');
    document.body.prepend(div);
};

createDiv();

function formatnumber(num) {
    if (num < 10) {
        num = '0' + num;
    };
    return num;

};

function updatetime() {
    //console.log('updatetime called');
    //create a date object
    var now = new Date();
    //console.log(now.getTime());
    var hours = formatnumber(now.getHours());
    var mins = formatnumber(now.getMinutes());
    var secs = formatnumber(now.getSeconds());


    var hoursHTML = '<span class="red">' + hours + '</span>';
    var minsHTML = '<span class="green">' + mins + '</span>';
    var secsHTML = '<span class="yellow">' + secs + '</span>';

    document.getElementById('clock').innerHTML = hoursHTML + ':' + minsHTML + ':' + secsHTML;
};

updatetime();
setInterval(updatetime, 1000);
