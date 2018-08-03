$(document).ready(function(){ 
    var buscarPokemon = function(results){
        var name = "";
        var url = "";

        console.log(results);
        results.forEach(function(element){ 
            console.log(element);
            name = element.name;
            url = element.url;
            $("#elementos").append(armarTemplate(name,url));
        });
    }


    var armarTemplate = function(name, url){
        var t =    
         `<div class='elemento' data-url="${url}">
            <p>${name}</p>
            <a href>${url}</a>
        </div>`  
        return t;
    }


var ajaxPokemon = function(name){
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/',
        type: 'GET',
        datatype: 'json',
        results: {
            q: name,
        }
    })
    .done(function(response){
        console.log(response);
        buscarPokemon(response.results);
     })
     .fail(function(){
         console.log("error");
     });
    }

    

     $("#buscar-pokemon").click(function(event){
         //console.log("Entro");
        $("#elementos").empty();
        var name = $("#name-text").val();
        ajaxPokemon(name);
     });
});
