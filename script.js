let addbtn = document.querySelector(".add");
let input = document.querySelector("#inp");
let todo = document.querySelector("#todo");
let label = document.querySelector("#lab");

let name = prompt("Please, input your name");

// adding keypress function to  input

input.addEventListener("keypress",(e)=>{
  let keys = e.key;
  if(keys === "Enter" ){
      add();
  }
})

label.innerHTML = `What are you doing today? ${name}`;

addbtn.textContent = "Add";

//Adding function to the Add button

addbtn.addEventListener("click", add) 

function add(){
    let newval = input.value;
    if (newval) {
      todo.innerHTML += `<li id="todolist"><p>${newval}</p>
      <span>
      <p class="edit">Edit</p>
      <p class="delete">Delete</p>
      </span></li>`;
      input.value = "";
    }
  
    //Adding function to the Delete button
  
    let del = document.querySelectorAll(".delete");
  
    del.forEach((dl) => {
      dl.addEventListener("click", delFun);
      function delFun() {
        let dd = this.parentNode;
        dd.parentNode.remove();
      }
    });
  
    let edit = document.querySelectorAll(".edit");
  
    // Adding function to the Edit button
  
    edit.forEach((ed) => {
      ed.addEventListener("click", edFun);
      function edFun() {
        let span = this.parentNode;
        let li = span.parentNode;
        let p = li.querySelector("p");
  
        let inpt = document.createElement("input");
        inpt.value = p.innerHTML;
        li.replaceChild(inpt, p);

        function saveBtn() {
              p.innerHTML = inpt.value;
              li.replaceChild(p, inpt);
              let edd = document.createElement("p");
              edd.classList.add("edit");
              edd.innerHTML = "Edit";
              span.replaceChild(edd, save);
              edd.addEventListener("click", edFun);
        }
        
        inpt.addEventListener("keypress", (x)=>{
          if(x.key === "Enter"){
            return saveBtn();
          }
        })
  
        let save = document.createElement("p");
        save.classList.add("save");
        save.innerHTML = "Save";
        span.replaceChild(save, this);
  
        //Adding function to the save button
  
        save.addEventListener("click", saveBtn);

      }
    });
  };
