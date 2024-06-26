const colors = 
['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const spans = document.querySelectorAll('span');
// console.log(spans)

spans.forEach((e,i)=>{
    e.style.color = colors[i]
});

