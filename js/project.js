$(document).ready(function () {
    requesAPI();
    $("#choose_name").on('change',function(){
        showRecipes = $('#choose_name').val();
    });
});















//requesAPI
var requesAPI = () => {
    
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => getRecipe(data),
        error: () => getError(),

    });
}
//getUrl
var getUrl = () => {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
//getData
var getRecipe = (myData) => {
    // console.log(myData);
    myData.recipes.forEach(item => {
        //recipe : item.name
        //get ingredient
        getIngredient(item.ingredients);
    });
}
//getError
var getError = (myError) => {
    console.log(myError);

}
//get ingredient
var getIngredient = (ing) => {
    ing.forEach(item => {
        computeHTML(item);
    });
}
//compute html
var computeHTML = (element) => {
    var result = "";
    result += `
    <tr>
    <td><img src ="${element.iconUrl}" width = "100"</td>
    <td>${element.name}</td>
    <td>${element.quantity}</td>
    <td>${element.unit}</td>
    </tr>
    
    `;
    prinOut(result);
}
//print out to HTML
var prinOut = (out) => {
    $('#ingredient').append(out);
}