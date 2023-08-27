
var Dep =(document.getElementById("id1"));
var Ret =(document.getElementById("id2"));
var from =(document.getElementById("idfrom"));
var to =(document.getElementById("idto"));
var filter =(document.getElementById("id4"));

fetch("jsa.json")
.then(function(response){
    return response.json();
})
.then(function(jsa){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    
    for (let J of jsa){
        if(J.Returning.toString() == Ret.toString())
        if(J.Departing.toString() == Dep.toString()){ 
        if(J.TO.toString() == to.toString()){
        if(J.From.toString() == from.toString()){
        if(J.price.toString() <= filter.toString()){
        out += `
        <tr>
        <td>${J.id}</td>
        <td>${J.From}</td>
        <td>${J.TO}</td>
        <td>${J.Departing}</td>
        <td>${J.Returning}</td>
        <td>${J.price}</td>
        </tr>
        `}}}}
    }
    placeholder.innerHTML = out;
    
})