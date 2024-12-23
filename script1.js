let data = [
    {
        "id": 1,
        "list":"Todo Listy",
        "status": false
    }
]

let tbody =document.getElementById("tbody")

document.getElementById("form").addEventListener("submit",function(e){
  e.preventDefault();
   let id = document.getElementById("id").value
  let todo_list = document.getElementById("todo_list").value
    if(id){

     let updateData =   data.map((ele) => {

            if(ele.id == id){
                ele.list = document.getElementById("todo_list").value

                document.getElementById("submit").innerHTML = "Enter Task"
                document.getElementById("submit").style.background = "#380E60"
              

            }
            return ele
        })
        showData(updateData)

    }
  
    else{
         

    let num = Math.random()
    let obj = {
        "id": Math.round(num*1000),
        "list": todo_list,
        "status": false
    }

    data.push(obj)
    showData(data)
    }


document.getElementById("id").value =""
    document.getElementById("todo_list").value =""                
})

function dele(id){

    let deleData = data.filter((ele) => ele.id !=id)

    data = deleData
    showData(deleData)
}

function check(id){
    let statusData = data.map((ele) => {
        if(ele.id === id){
            ele.status = !ele.status;
        }
         return ele;
    })
    
     showData(statusData);
    
    
    }
function update(id){
    let updatedData = data.filter((ele) =>{
        if( ele.id == id){
            
        document.getElementById("todo_list").value = ele.list
        document.getElementById("id").value = ele.id
        }
    } )

    document.getElementById("submit").innerHTML = "update"
    document.getElementById("submit").style.background = "#FFC107"

    // document.getElementById("todo_list").value =""
    // document.getElementById("id").value = ""
}

function showData(data){
    tbody.innerHTML=""

    data.map((ele) => {

        tbody.innerHTML += `
                       <tr class=" fs-4     ${ele.status ? 'table-success' : 'table-danger' }" id="box">
                            <td class="" >
   <input id="stat" onchange="check(${ele.id})" value="true" type="checkbox" ${ele.status ? "checked" : ""} class="status1" />
    
    
    
    </td>
                            <td>${ele.list}</td>
                            <td><button onclick="update(${ele.id})" class="btn btn-yellow fs-2" ><i class="ri-ball-pen-line"></i></button></td>
                            <td><button onclick="dele(${ele.id})" class="btn btn-red fs-2" ><i class="ri-close-large-line"></i></i></button></td>
                        </tr>
        `
    })
}




data.map((ele) => {

    tbody.innerHTML += `

          <tr class="  fs-4     ${ele.status ? 'table-success ' : 'table-danger' }" id="box">
                     
<td class="" >
<input id="stat" onchange="check(${ele.id})" value="true" type="checkbox" ${ele.status ? "checked" : ""} class="status1 " />

</td>
                        <td>${ele.list}</td>
                        <td><button onclick="update(${ele.id})" class="btn btn-yellow fs-2" ><i class="ri-ball-pen-line"></i></button></td>
                        <td><button onclick="dele(${ele.id})" class="btn btn-red fs-2" ><i class="ri-close-large-line"></i></i></button></td>
                    </tr>
    `
})


setInterval( function(){
  
    

let time = new Date()
document.getElementById("time").innerHTML = `
 ${time.getHours()}
${time.getMinutes()}
${time.getSeconds()}
`
},1000
)