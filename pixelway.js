(function(){
    'use strict';

class HTMLElement{
    HTMLElement(){
        //nothing..
    }

    createTag = ( nameTag ) => {
        return document.createElement(nameTag);
    }

    createCustomTag = ( tagName , attrs , parentTag) => {
        var tag = document.getElementsByTagName(parentTag);
        var isParent = tagName == parentTag;
        var nTag = !isParent ? this.createTag(tagName) : tag[0];

            for(var y = 0 ; y < attrs.length; y++) {
                nTag.setAttribute(attrs[y][0],attrs[y][1]);
            }

            for(var i = 0 ; i < tag.length && !isParent ; i++){
                tag[i].appendChild(nTag);
            }
  

    }

    addChildById = ( tagName , attrs , parentId ) => {
        var tag = document.getElementById(parentId);
        var nTag = this.createTag(tagName);
            
            for(var y = 0 ; y < attrs.length; y++) {
                nTag.setAttribute(attrs[y][0],attrs[y][1]);
            }

        tag.appendChild(nTag);  
        return nTag;
    }

    createSimpleOutput = (value, parentId, tag = "p") => {
       return document.getElementById(parentId).innerHTML=`<${tag}>${value}</${tag}>`;
    }

}

class Component {

    Component() {

    }

    card = (obj ,id) => {
       var mainCard = obj.addChildById("div",[["class","card"],["style","margin-top:5%"]], id);
       var cardBody = document.createElement("div");
       cardBody.setAttribute("class","card-body");
       cardBody.setAttribute("id","main-body");

       
       mainCard.appendChild(cardBody);

       //apply i18n
       cardBody.appendChild(obj.createSimpleOutput("Daniel Mauricio Corrales Martínez","main-body","h3"));

    }
}


    var hElem = new HTMLElement();
    var hComponent = new Component();
    hElem.createCustomTag("link", [["href","https://fonts.googleapis.com/css?family=Lato"],["rel","stylesheet"]], "head" );
    hElem.createCustomTag("link", [["rel","stylesheet"],["type","text/css"],["href","https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"]], "head" );
    hElem.createCustomTag("link", [["href","https://use.fontawesome.com/releases/v5.7.2/css/all.css"],["rel","stylesheet"]], "head" );
    
    hElem.createCustomTag("body", [["style","background-color: #4a26fd"]], 'body');

    hElem.createCustomTag("div", [["class","container"],["id","main-container"]], 'pixelway');
    hComponent.card(hElem , 'main-container');

    hElem.createCustomTag("script", [["src","https://code.jquery.com/jquery-3.2.1.slim.min.js"]], 'body');
    hElem.createCustomTag("script", [["src","https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js"]], 'body');
    //new HTMLElement().createCustomTag("script", [["src","https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js"]], 'body');


  })();
 
