function listBuilder(selector) {
    return{
        createNewList:function(){
          $(`${selector}`).empty();
            $(`${selector}`).append($('<ul>'));
        },
        addItem:function(item){
            let li = $('<li>');
            li.text(item);
            let upButton = $('<button>Up</button>');
            let downButton = $('<button>Down</button>');
            upButton.click(moveUp);
            downButton.click(moveDown);
            function moveUp() {

                $(this).parent().insertBefore($(this).parent().prev())
            }
           function moveDown() {
              $(this).parent().insertAfter($(this).parent().next())
            }
            li.append(upButton);
            li.append(downButton);
            $(`${selector} ul`).append(li);
        }
    }
}