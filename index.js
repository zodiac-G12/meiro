const n = parseInt(location.href.split('#')[1]) || 5;

const per = 1.5;

const shorter = window.innerHeight > window.innerWidth ? window.innerWidth/(n*1.5) : window.innerHeight/(n*1.5);


function cdiv(k) {
    const div = document.createElement("div");
    div.setAttribute("id", String(k));
    div.style.width = `${shorter}px`;
    div.style.height = `${shorter}px`;
    div.style.fontSize = `${shorter*0.9}px`;
    return div;
}

// function makeborder(direction, k) {
//     const dir = `border${direction}`;
//     if()
// }

function init() {

    document.body.style.paddingTop=`${n>50?5:10}vh`;

    var k = 0;
    while(k < n*n) {
        var div = cdiv(k);
        var cabe = 0;

        if(k%n==0 || k!=0 && (document.getElementById(String(k-1)).style.borderRight).includes('black')) {
            div.style.borderLeft = `solid 1px black`;
            cabe = (cabe+1)|0;
        }
        else div.style.borderLeft = `solid 1px snow`;

        if(k<n || k>=n && (document.getElementById(String(k-n)).style.borderBottom).includes('black')) {
            div.style.borderTop = `solid 1px black`;
            cabe = (cabe+1)|0;
        }
        else div.style.borderTop = `solid 1px snow`;

        if(k%n==n-1 || cabe < 3 && Math.floor(Math.random()*per)) {
            div.style.borderRight = `solid 1px black`;
            cabe = (cabe+1)|0;
        }
        else div.style.borderRight = `solid 1px snow`;

        if(k>=n*(n-1) || cabe < 3 && Math.floor(Math.random()*per)) {
            div.style.borderBottom = `solid 1px black`;
            cabe = (cabe+1)|0;
        }
        else div.style.borderBottom = `solid 1px snow`;

        document.body.appendChild(div);

        if(k%n==n-1) {
            var br = document.createElement("br");
            document.body.appendChild(br);
        }
        k=(k+1)|0;
    }
}

window.addEventListener("DOMContentLoaded", init);
