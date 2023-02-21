var CartID=0;
let numCatigories = 4;
var catigorie = []
var product_recently_added
let rowvalue = 0
var row_pro = []
var selectedRow=''
var hid = $("#hid").val();
localStorage.setItem("hid",hid);

//----------------------get the selected row-------------
$("#listTable  ").on('click', 'tr', function (e) {
    e.preventDefault();
    num =''
    $("#closeButton").remove()
    selectedRow = $(this).find('.cartline').val()
    console.table(selectedRow)
    $( "#listTable tr" ).css("border",'0px ')
    $(this).css( "border", "3px solid red" );

    let closeButton = '<button type="button" class="btn btn-danger col-sm-9" id ="closeButton">x</button>';
    $("#deletebu").append(closeButton);
   
    
});

//--------intialiser les categorie ---------
for(let i = 0;i<numCatigories;i++){

    catigorie[i] = [];
    row_pro[CartID]=[]
}
catigorie[0].push({
    'id': 1,
    'price' : "10",
    'name': "par"
},
{
    'id': 2,
    'price' : "10",
    'name': "patacos"
}
,
{
    'id': 3,
    'price' : "30",
    'name': "pPAPERar"
})
catigorie[1].push({
    'id': 1,
    'price' : "100",
    'name': "panashi"
},
{
    'id': 2,
    'price' : "1250",
    'name': "samsung"
}
,
{
    'id': 3,
    'price' : "930",
    'name': "pPAPERar"
})
console.log(catigorie)
//============== gategiries ===========
function a(){
    let startcode = '';
    let endcode = '';

catigorie.forEach(element => {
     let x ;
     x = catigorie.indexOf(element)
     startcode = '<div class="tab-pane container fade  col-sm-9" id="cat'+x+'"><h3>catigory '+x+'</h3>'
    $("#products").append(startcode)
    let y 
    let products = '';
    catigorie[x].forEach(element => {
    y = catigorie[x].indexOf(element)
    products +='<button class="btn col-sm-3 btn-warning product" data-id="'+x+'-'+catigorie[x][y].id+'" data-price="'+catigorie[x][y].price+'" data-name="'+catigorie[x][y].price+'" > '+catigorie[x][y].name+'</button>'
    console.log(catigorie[0][0].id)
})
    $("#cat"+x).html(products)
    

})
code=''
products=''
}


//showcart()
var listProducts = []
listProducts[0] = [];
 listProducts[1] = [];
 listProducts[2] = [];
l = JSON.parse(localStorage.getItem("arrayP"));
if(l){
    listProducts = l;
    showcart()
}


$("#deletebu").on('click', 'button', function () {
    listProducts[CartID].forEach(element =>{
        console.log(selectedRow)
        if(element.rowvalue == selectedRow){
            
            let index = listProducts[CartID].indexOf(element)
            listProducts[CartID].splice(index,1)
               
            $("#closeButton").remove()

            

        }
      showcart()

    })
    
    
});
 // add product to array

 $("#products button").click(function(e) {
    console.log('allah akbar')
    if(listProducts[CartID]){
        $("#emptyCart").show()
        console.log('emptyCart show')
    }
     e.preventDefault();
     rowvalue++
    // data from the pressed product
    let id = $(this).data('id')
    let price = $(this).data('price')
    let Pname = $(this).data('name')
    console.log('clicked buttoon '+id)
    product_recently_added = id
    num = ""
  //===============/pushing /=================
    
listProducts[CartID].push({
    'id': id,
    'price' : price,
    'name': Pname,
    'Quantite': 1,
    'TotalProduct':price,
    'rowvalue' : rowvalue   
})

    //show cart
    showcart()
    
    console.log(listProducts);
    console.log(JSON.parse(localStorage.getItem("arrayP")));
    

});
console.log('num')

//cotrol quantite using nampad
$("#numpad button").click(function(e) {
    if(!($(this).data('value')==12)){
    if($(this).data('value')==11){
        num=0
    }else{

    
   num=num*10+$(this).data('value')
    }
    
    
    console.log(num)
    listProducts[CartID].forEach(element=>{
        if(element.rowvalue==selectedRow){
            if(num==0){
                element.Quantite =0 
                element.TotalProduct = 0
 
            }else{
            element.Quantite = num;
            element.TotalProduct = element.Quantite * element.price
            }
        }
        showcart()
    });

}  
});
 // table product 
function showcart(){
    if(jQuery.isEmptyObject(listProducts[CartID])){
        $("#emptyCart").hide()
        console.log('hide')
    
    }
    localStorage.setItem("arrayP",JSON.stringify( listProducts));
    console.log("start show cart")
    let ligne= ""
   
    listProducts[CartID].forEach(element => {
        
     ligne+="<tr class='trline'> <input class='cartline' type='hidden' value="+element.rowvalue+"><td>"+element.id+"</td><td>"+element.name+"</td><td>"+element.price+"</td><td>"+element.Quantite+"</td><td>"+element.TotalProduct+"</td></tr>"
     console.log('added tr')
     });
    $("#listTable").html(ligne)
    $("#cartSpan").html(CartID)
    console.log('row_pro')
    Total()
}
localStorage.setItem("arrayP",JSON.stringify( listProducts));

//cart dynamic

function loadCart (){
    $("#modal-cart").empty();
    $("#modal-cart").html ( '<div class="row">');

     listProducts.forEach(function (element, i) {
        let button= '<button type="button" class="btn col-sm-4 btn-outline-secondary" value ="'+i+'" data-dismiss="modal">Cart '+i+'</button>';
        $("#modal-cart").append(button);
        console.log("regenerated buttons");
        $("#modal-cart button").click(function(e){
            CartID = $(this).val();
            if(listProducts[CartID]){
                $("#emptyCart").show()
                console.log('emptyCart show')
            }
        
            console.log(CartID)
            showcart()
            localStorage.setItem("CartID",CartID);
            if(product_recently_added){
                alert('chose products first')
            }
            product_recently_added = 0
            num=''})
    
       });
       $("#modal-cart").append( '</div>');
    
    
}

$("#cart-Selector").click(function(){
    $("#cart").modal("show")
     //SELECT CART
    console.log("modal nex  click")
    loadCart();
    
    
});
$("#addc").click(function(){
    $("#addCat").modal("show")
     
    console.log("modal nex  click")
    $("#submit").click(function()
    {
        let newCat 
        newCat =  $("#catname").val()
        console.log(newCat)
        addcat(newcat)
    
    })
    
});
$("#addp").click(function(){
    $("#addPro").modal("show")
    $("#psubmit").click(function()
    {
        let pcat = $("#cat").val()
        let proname = $("#proname").val()
        let propri = $("#propri").val()
        let proid = catigorie[pcat].length +1
        if(proname && pcat ){
            catigorie[pcat].push({
                'id': proid,
                'price' :propri.toString(),
                'name': proname
            })
            $("#products").html();
            addCat()
            console.log(catigorie[pcat])
        }     
    
    })
})
//total of the 
function Total(){
var total = 0;
listProducts[CartID].forEach(element => {
     total += element.TotalProduct
     
})
$("#totale").html(total.toFixed(2))
}
function puchRow(CartID,element) {
    row_pro[CartID].push({
        'idP': listProducts[CartID].indexOf(element),
        'idR': rowvalue
       })
}
$("#empty").click(function(){
    listProducts[CartID]=new Array
    console.log('emted')
    showcart()
    $("#closeButton").remove()
    
});

$("#addu").click(function(){
    $("#addUser").modal("show")
    console.log("modal triger")
})
$("#stat").click(function(){
    $("#Stat").modal("show")
    console.log("modal triger")
})
var lp =[];
$("#valid").click(function(){
    
    console.log(listProducts[CartID])
    listProducts[CartID].forEach(element => {
        lp.push( element.id + (element.Quantite/1000));

   
})
var map = [];
map.push(hid);
map.push(lp);
listProducts[CartID]=new Array
    console.log('emted')
    showcart()
window.location.href = "printing.php?lp="+map;


console.log(lp)})
function ECart(){
listProducts[CartID]=new Array;

    showcart();}