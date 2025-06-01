function calcu() {

    var tch1ntd = Number(document.getElementById('tch1ntd').value) ;
  
   
  
    var tch1ctrl = Number(document.getElementById('tch1ctrl').value);
  
    
  
   
  
    var tch1tt = document.getElementById('tch1tt').value =  Number((tch1ntd)*0.4+(tch1ctrl*0.6));
  
  
  
  
  
    var tdm1ntd = Number(document.getElementById('tdm1ntd').value) ;
  
  
    var tdm1ctrl = Number(document.getElementById('tdm1ctrl').value);
  
    
  
    
  
    var tdm1tt = document.getElementById('tdm1tt').value = Number((tdm1ntd)*0.4+(tdm1ctrl*0.6));
  
  
  
  

    var tqm1ctrl = Number(document.getElementById('tqm1ctrl').value);

    
    


    var tqm1tt = document.getElementById('tqm1tt').value = Number((tqm1ctrl*0.1));
  
    
  
  
  
  
  
      var cin1ntd = Number(document.getElementById('cin1ntd').value) ;
  
     
  
      var cin1ctrl = Number(document.getElementById('cin1ctrl').value);

      var cin1ntp = Number(document.getElementById('cin1ntp').value);
  
      var cin1tt = document.getElementById('cin1tt').value = Number(((cin1ntd)*2+(cin1ctrl*6)+(cin1ntp*2))/10);
  
  
  
  
  
      var ther1ntd = Number(document.getElementById('ther1ntd').value);
  
      var ther1ctrl = Number(document.getElementById('ther1ctrl').value);
  
      

  
    var ther1tt = document.getElementById('ther1tt').value = Number((((ther1ntd)*4)+((ther1ctrl)*6))/10);
  
  
  
  
  
  
    
    var min1ntd = Number(document.getElementById('min1ntd').value);
    var min1ntp = Number(document.getElementById('min1ntp').value);
    var min1ctrl = Number(document.getElementById('min1ctrl').value);

    var min1tt = document.getElementById('min1tt').value = Number(((min1ctrl)*6+(min1ntd)*2+(min1ntp)*2)/10);
  
  
  
  
  
  
      var info1ntp = Number(document.getElementById('info1ntp').value);

      var info1ctrl = Number(document.getElementById('info1ctrl').value);

    var info1tt = document.getElementById('info1tt').value = Number((((info1ntp)*4)+(info1ctrl*6))/10);
  
  
  
  
  
        

        var diss1ntp = Number(document.getElementById('diss1ntp').value) ;

        var diss1ctrl = Number(document.getElementById('diss1ctrl').value);


        var diss1tt = document.getElementById('diss1tt').value = Number((((diss1ntp)*4)+(diss1ctrl*6))/10);


        

        var pétr1ctrl = Number(document.getElementById('pétr1ctrl').value);


        var pétr1tt = document.getElementById('pétr1tt').value = Number(((pétr1ctrl*6))/10);




        var com1ntd = Number(document.getElementById('com1ntd').value) ;

        var com1ctrl = Number(document.getElementById('com1ctrl').value);


        var com1tt = document.getElementById('com1tt').value = Number((((com1ntd)*4)+(com1ctrl*6))/10);
  
  
  
        document.getElementById("tt").innerHTML = ((2*tch1tt)+(2*tdm1tt)+(1*tqm1tt)+(3*cin1tt)+(2*ther1tt)+(3*min1tt)+(2*info1tt)+(2*diss1tt)+(1*pétr1tt)+(1*com1tt))/19;
  
  
  
  }
