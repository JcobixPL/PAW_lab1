(function () {
  //Zad 1_1.1
  var ex1_button = document.getElementById('ex1_button');  
  var ex1_content = document.getElementById('ex1_content');  

  ex1_button.onclick=function(){   
    var tabela=[]   
    for(var i=0;i<=9;i++)   
    {     
      tabela.push(i);   
    }     
    ex1_content.innerHTML=tabela.toString(); 
  } 

  //Zad 1_1.2
  var ex2_text = document.getElementById('ex2_text');
  var ex2_content = document.getElementById('ex2_content');

  ex2_text.addEventListener('input', function() {
    var inputText = ex2_text.value;
    if(inputText.length !== 9) {
      ex2_content.textContent = 'Długość numeru musi być równa 9';
    }
    else if (/[a-zA-Z]/.test(inputText)) {
      ex2_content.textContent = 'Numer nie może zawierać liter';
    }
    else if (/[^0-9]/.test(inputText)) {
      ex2_content.textContent = 'Numer nie może zawierać znaków specjalnych';
    }
    else {
      ex2_content.textContent = 'Numer telefonu jest poprawny';
    }
  });

  //Zad 1_2.1 i 1_2.2
  
  var ex3_element = document.getElementById('ex3_element');
  var ex3_one = document.getElementById('ex3_one');
  var ex3_two = document.getElementById('ex3_two');

  ex3_element.setAttribute('draggable', true);

  ex3_element.ondragstart = function (event) {
    event.dataTransfer.setData('text', event.target.id);
  };
  
  ex3_one.ondragover = ex3_two.ondragover = function (event) {
    event.preventDefault();
  };

  ex3_one.ondrop = ex3_two.ondrop = function (event) {
    event.preventDefault();
    var draggedElement = document.getElementById(event.dataTransfer.getData('text'));
    event.target.appendChild(draggedElement);
  };
  
})();