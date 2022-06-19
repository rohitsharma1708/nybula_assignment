const CourseData = [{
    course: "Java",
},
{
    course: "C++"
},
];
console.log("chl rha h bc yeh");


var total = CourseData.length;
for(let i=0;i<total;i++){
    const node= document.createElement("div");
    node.innerHTML=CourseData[i].course;
    document.getElementById("f1").append(node);
}

function add(){
    const node= document.createElement("div");
    node.innerHTML="python";
    document.getElementById("f1").append(node);
    console.log(CourseData[total]);
}