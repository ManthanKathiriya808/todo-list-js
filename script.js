let todo = [
    {   
        id:"1",
        list:"do",
        status:"false"
    },
]





let tbody = document.querySelector("#tbody");


document.getElementById("form").addEventListener("submit",function(e){

    e.preventDefault();
  

    let id = document.querySelector("#id").value;

if(id){
    let updatedData = todo.map((ele) => {

        if(ele.id == id){
          ele.list = document.querySelector("#todo_list").value
        }

        return ele
    })
    console.log(updatedData)
    showData(updatedData)
}

else{

        let num = Math.random();
         let obj = {
        id:Math.round(num*1000),
        list:document.querySelector("#todo_list").value,
        status:false
        }
    todo.push(obj)
    showData(todo)

    
}console.log(todo)

    document.getElementById("todo_list").value =""
})

function update(id){

    todo.filter((ele) => {

        if(ele.id== id){
            document.getElementById("todo_list").value = ele.list
            document.getElementById("id").value = ele.id
        }
    })

    document.getElementById("submit").innerHTML="update";
    document.getElementById("submit").className="btn btn-warning"

}

function dele(id){

    let deleData = todo.filter((ele) => ele.id != id)
    todo = deleData
    showData(deleData)
}

function showData(deleData){

    tbody.innerHTML =""
   

    deleData.map((ele) => {

        tbody.innerHTML += `
        
                 <tr>
                            <td>
                                ${ele.list}
                            </td>
                            <td>
                             <div class="form-check  d-flex  justify-content-center ">
      <input class="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" >
    
    </div>   
                            </td>
                            <td>
                                <button class="btn btn-warning" onclick=update(${ele.id})>Update</button>
                            </td>
                            <td>
                                 <button class="btn btn-danger" onclick=dele(${ele.id})>Delete</button>
                            </td>
                        </tr>
        `
    })



}


todo.map((ele) => {

    tbody.innerHTML += `
    
             <tr>
                        <td>
                            ${ele.list}
                        </td>
                        <td>
                         <div class="form-check  d-flex  justify-content-center ">
  <input class="form-check-input p-2" type="checkbox" value="" id="flexCheckChecked" >

</div>   
                        </td>
                        <td>
                            <button class="btn btn-warning" onclick=update(${ele.id})>Update</button>
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick=dele(${ele.id})>Delete</button>
                        </td>
                    </tr>
    `
})


