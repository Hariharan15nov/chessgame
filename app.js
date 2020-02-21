var image1;
function loadingboard(){
   
    var i=0;
    for(i=0;i<8;i++){
        for(var j=0;j<8;j++){
            var boardpiece=document.createElement("button");
            boardpiece.id="boardpiece"+i+j;
            document.body.appendChild(boardpiece).style.padding=100;
        }
        document.body.appendChild(document.createElement("br"));
    }
     image1=document.getElementById("boardpiece00");
    image1.innerHTML='<img src="crowns.png" />';
}

function findqueen(){
    var search_position=window.prompt();
    console.log(search_position);
var k=0;
var j=0;
var c=0;
var splitvalues=[];
splitvalues=search_position.split(" ");
    for(var i=0;i<search_position.length;i++){
        console.log(splitvalues[i]);
var ltr= splitvalues[i].split("");
switch(ltr[0]){
	case 'e':k=k+parseInt(ltr[1]);
             j=j+0;
            c++;
            console.log(j+" "+k);
            break;
    case 's':k=k-0;
            j+=parseInt(ltr[1]);
            c++;
            console.log(j+" "+k);
            break;
    case 'w':
			k=k-parseInt(ltr[1]);
            j-=0;
            c++;
            console.log(j+" "+k);
            break;
    case 'n':j=j-parseInt(ltr[1]);
             k=k-0;
             c++;
             break;
    }
    if(c==splitvalues.length){
        
        var image=document.getElementById("boardpiece"+j+k);
        image.innerHTML='<img src="crowns.png" />';
    }
 }
}