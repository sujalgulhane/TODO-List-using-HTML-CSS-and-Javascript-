//let Add_button = document.querySelector('#add-button');

let todolist = [
{
    work : 'go to school',
    dueDate: '14/07/2024',
}

];
displayItem();

function addItem(){
    
    let Input_box_element = document.querySelector('#input-box');
    let dueDate = document.querySelector('#todo-date');
    let todoDate = dueDate.value;
    let todoItem = Input_box_element.value;
    todolist.push({work:todoItem ,dueDate: todoDate});
    Input_box_element.value = '';
    todoDate = '';

    displayItem();
    
}


function displayItem(){
    let contenerElement = document.querySelector('.todo-container');
    let newHTML =``;

    for(let i =0 ; i<todolist.length;i++){
        let {work , dueDate} = todolist[i];
        newHTML += `

            <span><b>${work}</b> </span>
            <span>${dueDate} </span>
                
                <button class="btn-delete" onclick ="todolist.splice(${i},1);
                displayItem();">Delete</button>
           

        
        `
        
    }

    contenerElement.innerHTML = newHTML;

}
let theme = document.querySelector('#dark');

function styleFunction(color){
    document.body.style.background = color;
}

function dark(){
    styleFunction('black');
    result.innerHTML = "Background Color changed";
    let text = document.querySelector('body');
    document.body.style.color = 'white';

}

function white(){
    styleFunction('white');
    result.innerHTML = "Background Color changed";
}
