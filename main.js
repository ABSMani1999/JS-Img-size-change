var plusBtn = document.querySelector('.plus');
var miniusBtn = document.querySelector('.minius');

 plusBtn.addEventListener('click',increseImg);

    function increseImg(e){
            e.preventDefault();
            var parentDiv = e.target.parentNode.parentNode.querySelector('img');
           // console.log(parentDiv);

            let inlineWidth =  parentDiv.style.width; 
            let widthValue = parseInt(inlineWidth);
              widthValue+=20;

            parentDiv.style.width = widthValue+'px';
           // console.log(widthValue);
            
    }

    

 miniusBtn.addEventListener('click',minius)

    function minius(e){
        e.preventDefault();
        var parentDiv = e.target.parentNode.parentNode.querySelector('img');
        // console.log(parentDiv);

         let inlineWidth =  parentDiv.style.width; 
         let widthValue = parseInt(inlineWidth);
             widthValue-=20;

         parentDiv.style.width = widthValue+'px';
         //console.log(widthValue);
             
    }