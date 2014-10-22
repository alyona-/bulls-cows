/**
 * Created by Алёна on 02.10.14.
 */
/*int number, compnumb, compnum_1, compnum_2, compnum_3, compnum_4,num_1,num_2,num_3,num_4,korova,bik; */


var comp = {};
//comp.randNum =0;
comp.random = function () {
   // alert('Работает');
  var min=101, max =9999;
    comp.randNum = min - 0.5 + Math.random()*(max-min+1);
   // alert('test');
    comp.randNum = Math.round(comp.randNum);
   // return rand;
    comp.randValue();
};



comp.randValue = function(){
    //comp.randNum =comp.random();
    //alert('Работает_2');
   // comp.num_4 = page.number.value % 10;
    comp.num_4 = comp.randNum % 10;
    comp.num_3 = parseInt(comp.randNum / 10 % 10);
    comp.num_2 = parseInt((comp.randNum / 10 / 10) % 10);
    comp.num_1 = parseInt(comp.randNum / 10 / 10 / 10);
   // if(rand<1000) comp.num_1=0;
   if(comp.num_1==comp.num_2 ||comp.num_1==comp.num_3||comp.num_1==comp.num_4 ||comp.num_2==comp.num_3 ||comp.num_2==comp.num_4 ||comp.num_3==comp.num_4) {
      // alert('Число не уникальное -'+comp.random());
       comp.random();
   }
   /* if(comp.num_1==comp.num_2) {
        alert('Число не уникальное -'+rand);
    } */
   // return comp.randNum;
};





var page = {};
page.number = document.getElementById('number');
page.button = document.getElementsByClassName('button')[0];
page.button_next = document.getElementsByClassName('next')[0];
page.result = document.getElementsByClassName('result')[0];
page.bik =0;
page.korova=0;
page.str =new String();

page.chet = function (){
    if(page.num_1 == comp.num_1) {
       // alert('бык');
        page.bik++;
    }
    else if(page.num_1==comp.num_2 ||page.num_1==comp.num_3||page.num_1==comp.num_4) {
       // alert('корова');
        page.korova++;
    }

    if(page.num_2 == comp.num_2) {
       // alert('бык');
        page.bik++;
    }
    else if(page.num_2==comp.num_1 ||page.num_2==comp.num_3||page.num_2==comp.num_4) {
       // alert('корова');
        page.korova++;
    }

    if(page.num_3 == comp.num_3) {
       // alert('бык');
        page.bik++;
    }
    else if(page.num_3==comp.num_1 ||page.num_3==comp.num_2||page.num_3==comp.num_4) {
        //alert('корова');
        page.korova++;
    }

    if(page.num_4 == comp.num_4) {
       // alert('бык');
        page.bik++;
    }
    else if(page.num_4==comp.num_1 ||page.num_4==comp.num_2||page.num_4==comp.num_3) {
       // alert('корова');
        page.korova++;
    }
};


page.button.addEventListener('click', function () {
    comp.random();
    page.num_4 = page.number.value % 10;
    page.num_3 = parseInt(page.number.value / 10 % 10);
    page.num_2 = parseInt((page.number.value / 10 / 10) % 10);
    page.num_1 = parseInt(page.number.value / 10 / 10 / 10);

    page.chet();


    page.str ='num_4='+ page.num_4+'<br>num_3='+page.num_3+'<br>'+
        'num_2='+page.num_2+'<br>'+
        'num_1='+page.num_1+'<br>'+
        'comp.comp_num_1='+comp.num_1+'<br>'+
        'comp.comp_num_2='+comp.num_2+'<br>'+
        'comp.comp_num_3='+comp.num_3+'<br>'+
        'comp.comp_num_4='+comp.num_4+'<br>'+
        'количество коров='+page.korova+'<br>'+
        'количество быков='+page.bik+'<br>';
  /*  page.result.innerHTML ='num_4='+ page.num_4+'<br>num_3='+page.num_3+'<br>'+
    'num_2='+page.num_2+'<br>'+
    'num_1='+page.num_1+'<br>'+
    'comp.comp_num_1='+comp.num_1+'<br>'+
    'comp.comp_num_2='+comp.num_2+'<br>'+
    'comp.comp_num_3='+comp.num_3+'<br>'+
    'comp.comp_num_4='+comp.num_4+'<br>'+
    'количество коров='+page.korova+'<br>'+
    'количество быков='+page.bik+'<br>'; */
    page.result.innerHTML = page.str;

}, false);
page.button_next.addEventListener('click',function (){
   // alert('Работает');
    page.chet();
    page.result.innerHTML ='количество коров='+page.korova+'<br>'+
        'количество быков='+page.bik+'<br>';
},false);