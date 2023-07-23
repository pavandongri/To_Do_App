
let tasks = [];
let filteredTasks = [];
let activityLog = [];


window.onload = (event) => {
    let s = localStorage.getItem("key")
    tasks = JSON.parse(s)
    filteredTasks = tasks;
    // console.log(filteredTasks)
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then((response) => { 
    //     if (!response.ok) { 
    //         throw new Error('Network response was not OK'); 
    //     } 
    //     return response.json(); 
    // }) 
    // .then((data) => { 
    //     let f = tasks.length ;
    //     // console.log(data.length)
    //     for(let i=0; i<data.length && !f; i++){
    //         tasks.push({
    //             id : data[i].id ,
    //             task : data[i].title,
    //             edit : 0,
    //             done : 0,
    //             dueDate : '',
    //             priority : 'high'
    //         })
    //     }
    //     retrieveData();
    // })
    // .catch(error => { 
    //     retrieveData();
    //     console.log('Error:', error.message); 
    // });
    retrieveData();
};


function addItem(){
    let s = document.getElementById('taskInput').value;
    if(s.trim().length === 0) return false;
    // console.log(s);
    let str = s;
    if(str.length > 80){
        str = str.substring(0, 50) + '...';
    }
    tasks.push({'id':new Date().valueOf(), 
        'task' : str,
        'edit' : 0,
        'done' : 0,
        'dueDate' : '',
        'priority' : 'high',
        'subTask' : [1, 2,3],
        'category' : [],
        'tag' : []
        
    });
    activityLog.push(
        {'event' : 'item added', 
        'item' : {'id':new Date().valueOf(), 
                    'task' : str,
                    'edit' : 0,
                    'done' : 0,
                    'dueDate' : '',
                    'priority' : 'high',
                    'subTask' : [],
                    'category' : [],
                    'tag' : []
                }
        }
    )
    saveDataToLocal();
}



function retrieveData(){
    document.getElementById('taskInput').value = "";
    const myNode = document.getElementById("itemsList");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    for (i = filteredTasks.length -1; i>=0 ; i--) {
        
        let divSub = document.createElement('div')
        divSub.classList.add('divSub')

        {
            
            

            //-------------

            let subTask = document.createElement('div')
            subTask.classList.add('subTask')
            

            let subTaskInput = document.createElement('input')
            subTaskInput.classList.add('subTaskInput')
            subTaskInput.setAttribute('type' , 'text')

            let subTaskInputBtn = document.createElement('button')
            subTaskInputBtn.classList.add('subTaskInputBtn')
            subTaskInputBtn.onclick = subTaskBtnClicked;
            subTaskInputBtn.textContent = 'Add SubTask';
            
            let subTaskUl = document.createElement('ul');
            subTaskUl.classList.add('subTaskUl')


            //-------------

            let category = document.createElement('div')
            category.classList.add('subTask')
            

            let categoryInput = document.createElement('input')
            categoryInput.classList.add('subTaskInput')
            categoryInput.setAttribute('type' , 'text')

            let categoryInputBtn = document.createElement('button')
            categoryInputBtn.classList.add('subTaskInputBtn')
            categoryInputBtn.onclick = categoryBtnClicked;
            categoryInputBtn.textContent = 'Add Category';
            
            let categoryUl = document.createElement('ul');
            categoryUl.classList.add('subTaskUl')






            //---------
                let tag = document.createElement('div')
                tag.classList.add('subTask')
                

                let tagInput = document.createElement('input')
                tagInput.classList.add('subTaskInput')
                tagInput.setAttribute('type' , 'text')

                let tagInputBtn = document.createElement('button')
                tagInputBtn.classList.add('subTaskInputBtn')
                tagInputBtn.onclick = tagBtnClicked;
                tagInputBtn.textContent = 'Add tag';
                
                let tagUl = document.createElement('ul');
                tagUl.classList.add('subTaskUl')
            //---------


                let remainder = document.createElement('div')
                remainder.classList.add('subTask')
                

                let remainderInput = document.createElement('input')
                remainderInput.classList.add('subTaskInput')
                remainderInput.classList.add('remainderInput')
                remainderInput.setAttribute('placeholder' , 'Enter time in Seconds')
                remainderInput.setAttribute('type', 'number')

                let remainderInputBtn = document.createElement('button')
                remainderInputBtn.classList.add('subTaskInputBtn')
                remainderInputBtn.onclick = remainderBtnClicked;
                remainderInputBtn.textContent = 'Add remainder';
                
                
            //---------


            {
                subTask.setAttribute('id', filteredTasks[i].id)
                subTaskInput.setAttribute('id', filteredTasks[i].id+"subTaskInput")

                for(let j=0; j<filteredTasks[i].subTask.length; j++){
                    let li = document.createElement('li');
                    li.classList.add('subTaskli')
                    li.textContent = filteredTasks[i].subTask[j];
                    subTaskUl.appendChild(li);
                }

                subTask.appendChild(subTaskInput)
                subTask.appendChild(subTaskInputBtn)
                subTask.appendChild(subTaskUl)
            }
            
            {
                category.setAttribute('id', filteredTasks[i].id)
                categoryInput.setAttribute('id', filteredTasks[i].id+"categoryInput")

                for(let j=0; j<filteredTasks[i].category.length; j++){
                    let li = document.createElement('li');
                    li.classList.add('subTaskli')
                    li.textContent = filteredTasks[i].category[j];
                    categoryUl.appendChild(li);
                }

                category.appendChild(categoryInput)
                category.appendChild(categoryInputBtn)
                category.appendChild(categoryUl)
            }

            {
                tag.setAttribute('id', filteredTasks[i].id)
                tagInput.setAttribute('id', filteredTasks[i].id+"tagInput")

                for(let j=0; j<filteredTasks[i].tag.length; j++){
                    let li = document.createElement('li');
                    li.classList.add('subTaskli')
                    li.textContent = filteredTasks[i].tag[j];
                    tagUl.appendChild(li);
                }

                tag.appendChild(tagInput)
                tag.appendChild(tagInputBtn)
                tag.appendChild(tagUl)
            }

            {
                remainder.setAttribute('id', filteredTasks[i].id)
                remainderInput.setAttribute('id', filteredTasks[i].id+"remainderInput")
                remainder.appendChild(remainderInput)
                remainder.appendChild(remainderInputBtn)
            }



            divSub.appendChild(subTask)
            divSub.appendChild(category)
            divSub.appendChild(tag)
            divSub.appendChild(remainder)
            myNode.appendChild(divSub)

        }  

        let mainDiv = document.createElement('div')
        mainDiv.classList.add('mainDiv')

        if(filteredTasks[i].edit){
            mainDiv.setAttribute('id', filteredTasks[i].id)
            let div = document.createElement('div');
            div.classList.add('editDiv')
            div.setAttribute('id', filteredTasks[i].id)
        
            let textInput = document.createElement('input');
            textInput.classList.add('editItem')
            textInput.setAttribute("type", "text");
            textInput.setAttribute("id", "textInputId");
            textInput.value = filteredTasks[i].task;
            div.appendChild(textInput)




           
            var values = ['High', 'Medium', 'Low'] ;
            var select = document.createElement("select");
            select.classList.add('dropdown')
            select.setAttribute('id', filteredTasks[i].id)
            select.onchange = optionClicked;

            for (const val of values)
            {
                var option = document.createElement("option");
                option.value = val;
                option.text = val;
                option.setAttribute('id', filteredTasks[i].id + val)
                select.appendChild(option);
                if(filteredTasks[i].priority == val){
                    option.setAttribute('selected', 'selected')
                }
            }
            div.appendChild(select)


            const dueDate = document.createElement('input')
            dueDate.setAttribute('type', 'date')
            dueDate.classList.add('dueDate')
            if(filteredTasks[i].dueDate != ''){
                dueDate.value = filteredTasks[i].dueDate
            }
            div.appendChild(dueDate)

            let doneBtn = document.createElement('button')
            if(filteredTasks[i].done){
                div.style.textDecoration = 'line-through'
                doneBtn.textContent = "UnDone";
            }
            else{
                div.style.textDecoration = 'none'
                doneBtn.textContent = "Done";
            }
            doneBtn.classList.add('doneBtn')
            doneBtn.onclick = doneClicked
            div.appendChild(doneBtn);

            let saveBtn = document.createElement('button')
            saveBtn.textContent = "Save";
            saveBtn.classList.add('saveBtn');
            saveBtn.onclick = saveItem;
            div.appendChild(saveBtn);

            let btn = document.createElement('button')
            btn.textContent = "Delete";
            btn.classList.add('deleteBtn')
            btn.onclick = deleteItem
            div.appendChild(btn);

            // myNode.appendChild(div)

            mainDiv.appendChild(div)
            mainDiv.appendChild(divSub)
            myNode.appendChild(mainDiv)
            // category, subtasks, tag

        }
        else{
            mainDiv.setAttribute('id', filteredTasks[i].id)

            let li = document.createElement('li');
            
            li.classList.add('item')
            li.setAttribute('id', filteredTasks[i].id)
            li.setAttribute('draggable', 'true')
            li.textContent= filteredTasks[i].task;

            var values = ['High', 'Medium', 'Low'] ;
            var select = document.createElement("select");
            select.classList.add('dropdown')
            select.setAttribute('id', filteredTasks[i].id)
            select.onchange = optionClicked;

            for (const val of values)
            {
                var option = document.createElement("option");
                option.value = val;
                option.text = val;
                option.setAttribute('id', filteredTasks[i].id + val)
                select.appendChild(option);
                if(filteredTasks[i].priority == val){
                    option.setAttribute('selected', 'selected')
                }
            }
            li.appendChild(select)

           


            const dueDate = document.createElement('input')
            dueDate.setAttribute('type', 'date')
            dueDate.setAttribute('id', filteredTasks[i].id)
            dueDate.classList.add('dueDate')
            dueDate.onchange = dateChanged;
            li.appendChild(dueDate)
            
            if(filteredTasks[i].dueDate != ''){
                dueDate.value = filteredTasks[i].dueDate
            }

            let doneBtn = document.createElement('button')
            if(filteredTasks[i].done){
                li.style.textDecoration = 'line-through';
                doneBtn.textContent = "UnDone";
            }
            else{
                li.setAttribute("text-decoration", "none");
                doneBtn.textContent = "Done";
            }
            doneBtn.classList.add('doneBtn')
            doneBtn.onclick = doneClicked
            li.appendChild(doneBtn);

            let editBtn = document.createElement('button')
            editBtn.textContent = "Edit";
            editBtn.classList.add('editBtn')
            editBtn.onclick = editItem
            li.appendChild(editBtn);

            let btn = document.createElement('button')
            btn.textContent = "Delete";
            btn.classList.add('deleteBtn')
            btn.onclick = deleteItem

            li.appendChild(btn);
            mainDiv.appendChild(li);
            mainDiv.appendChild(divSub)
            myNode.appendChild(mainDiv)


            
        }   


        mainDiv.addEventListener("dragstart", ()=>{
                
            setTimeout(()=>{
                mainDiv.classList.add('dragging')
            }, 0)
        })
    
        mainDiv.addEventListener("dragend", ()=>{
            mainDiv.classList.remove('dragging')
        })

    }

    
}



const lists = document.querySelector('.itemsLists')

const initSortableList = (e)=>{
    e.preventDefault();
   
    const draggingItem = lists.querySelector('.dragging')
    const siblings  = [...lists.querySelectorAll('.mainDiv:not(.dragging)')]
    let nextSibling = siblings.find(sibling =>{
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight/2;
    })

    let nextSiblingDown = siblings.find(sibling =>{
        return e.clientY >= sibling.offsetTop ;
    })

    if(nextSibling){
        lists.insertBefore(draggingItem, nextSibling)
    }  
    else if(nextSiblingDown){
        lists.insertAfter(draggingItem, nextSibling)
    }
 
}

lists.addEventListener('dragover', initSortableList)
lists.addEventListener('dragenter', e => e.preventDefault())








function deleteItem(e){
    // tasks = []
    // filteredTasks = [];
    let newTasks = tasks.filter(object => {
        return object.id != e.target.parentElement.id;
    });

    activityLog.push({
        'event' : 'to-do-item deleted',
        'id' : e.target.parentElement.id
    })
    tasks = newTasks;
    filteredTasks = tasks
    saveDataToLocal()
}

function editItem(e){
    let id = e.target.parentElement.id;
    for(let i=0; i<tasks.length; i++){
        if(tasks[i].id == id){
            tasks[i].edit = !tasks[i].edit;
        }
    }
    activityLog.push({
        'event' : 'to-do-item edited',
        'id' : e.target.parentElement.id
    })
    saveDataToLocal();
}


function saveItem(e){
    let id = e.target.parentElement.id;
    for(let i=0; i<tasks.length; i++){
        if(tasks[i].id == id){
            tasks[i].edit = !tasks[i].edit;
            let child = e.target.parentElement.firstChild
            let s = child.value;
            if(s.length>50){
                s = s.substr(0, 50) + '...';
            }
            tasks[i].task = s;
        }
    }
    activityLog.push({
        'event' : 'to-do-item saved after editing',
        'id' : e.target.parentElement.id
    })
    saveDataToLocal();
}


function optionClicked(e){
    let target = e.target;
    for(let i=0; i<tasks.length ; i++){
        if(tasks[i].id == target.id){
            tasks[i].priority = target.value;
        }
    }
    activityLog.push({
        'event' : 'changed priority of the to-do-item',
        'id' : target.id
    })
    saveDataToLocal();
}

function dateChanged(e){
    let id = e.target.id;
    // console.log(e.target.value)
    for(let i=0; i<tasks.length; i++){
        if(tasks[i].id == id){
            tasks[i].dueDate = e.target.value;
        }
    }
    activityLog.push({
        'event' : 'to-do-item due date changed',
        'id' : id
    })
    saveDataToLocal();
}

function doneClicked(e){
    let id = e.target.parentElement.id;
    for(let i=0; i<tasks.length; i++){
        if(tasks[i].id == id){
            tasks[i].done = !tasks[i].done;
            activityLog.push({
                'event' : 'to-do-item toggline of done ',
                'id' : id,
                'new_done' : tasks[i].done 
            })
        }
    }
    
    saveDataToLocal();
}



function filterDateBtnClicked(){
    let sd = document.getElementById('startDate').value;
    let ed = document.getElementById('endDate').value;
    let newFilter = tasks.filter(function(e) {
        return e.dueDate >= sd && e.dueDate <= ed;
    });
    filteredTasks = newFilter;
    retrieveData();

    activityLog.push({
        'event' : 'filtered by date'
    })
    
}

function filterPriorityBtnClicked(){
    let val = document.getElementById('priorityDropDown').value;
    let newFilter = tasks.filter(function(e) {
        return e.priority.toString().toLowerCase() == val.toString().toLowerCase();
    });
    filteredTasks = newFilter;
    retrieveData();

    activityLog.push({
        'event' : 'filtered by priority'
    })
}


function removeAllFilters(){
    filteredTasks = tasks;
    // console.log('okk')
    retrieveData();
    activityLog.push({
        'event' : 'removed all filters'
    })
}


function dateSorting(){

    // console.log("in date sorting")
    filteredTasks = tasks;
    filteredTasks = filteredTasks.sort((a, b)=>{
        if(a.dueDate == '' && b.dueDate == ''){
            return 0;
        }
        else if(a.dueDate == '') return 1;
        else if(b.dueDate == '')  return -1;
        else if(a.dueDate <= b.dueDate) return -1;
        else return 1;
    })
    filteredTasks.reverse();
    retrieveData();

    activityLog.push({
        'event' : 'sorting to-do-list by date'
    })
}

function prioritySorting(){
    filteredTasks = tasks;
    let map1 = new Map();
    map1['high'] = 3;
    map1['medium'] = 2;
    map1['low'] = 1;


    filteredTasks = filteredTasks.sort((a, b)=>{
        let x = a.priority.toString().toLowerCase();
        let y = b.priority.toString().toLowerCase();
        if(map1[x]==map1[y]) return 0;
        else if(map1[x] < map1[y]) return 1;
        else return -1;
    })

    retrieveData();

    activityLog.push({
        'event' : 'sorting to-do-list by priority'
    })
}


function viewBacklogs(){
    filteredTasks = tasks;
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let date = new Date().getDate();

    if(month < 10) month = "0" + month;
    if(date < 10) date = "0" + date;

    let curDate = year + "-" +  month + "-" + date;
    

    let backlogDate = document.getElementById('backlogDate').value;
    if(backlogDate == '') backlogDate = curDate;

    filteredTasks = filteredTasks.filter((e)=>{
        // console.log(e.dueDate , backlogDate)
        return e.dueDate <= backlogDate;
    })
    retrieveData();

    activityLog.push({
        'event' : 'viewed backlogs'
    })
}



function activityLogs(){
    console.log(activityLog)
}


function subTaskBtnClicked(e){
    // console.log(e.target.parentElement.id)
    let newSubTask = document.getElementById(e.target.parentElement.id+'subTaskInput').value;
    for(let i=0; i<tasks.length && newSubTask != ''; i++){
        if(tasks[i].id == e.target.parentElement.id){
            tasks[i].subTask.push(newSubTask)
            // console.log(newSubTask)
        }
    }
    filteredTasks = tasks;
    saveDataToLocal();
}


function categoryBtnClicked(e){
    // console.log(e.target.parentElement.id)
    let newCategory = document.getElementById(e.target.parentElement.id+'categoryInput').value;
    for(let i=0; i<tasks.length && newCategory!= ''; i++){
        if(tasks[i].id == e.target.parentElement.id){
            tasks[i].category.push(newCategory)
            // console.log(newSubTask)
        }
    }
    filteredTasks = tasks;
    saveDataToLocal();
}


function tagBtnClicked(e){
    // console.log(e.target.parentElement.id)
    let newTag = document.getElementById(e.target.parentElement.id+'tagInput').value;
    for(let i=0; i<tasks.length && newTag != ''; i++){
        if(tasks[i].id == e.target.parentElement.id){
            tasks[i].tag.push(newTag)
            // console.log(newSubTask)
        }
    }
    filteredTasks = tasks;
    saveDataToLocal();
}




function saveDataToLocal(){
    localStorage.removeItem("key");
    localStorage.setItem('key', JSON.stringify(tasks));
    retrieveData();
}



function categoryFilterClicked(e){
    filteredTasks = tasks;
    let value = document.getElementById('categoryFilterInput').value.toString().trim().toLowerCase();
    filteredTasks = filteredTasks.filter(e=>{
       for(let i=0; i<e.category.length; i++){
          if(e.category[i].includes(value)) return true;   
       }
    })
    retrieveData();
}


function remainderBtnClicked(e){
    // let id = e.target.parentElement.id;
    let seconds = document.getElementById(e.target.parentElement.id+'remainderInput').value;
    if(seconds==null || seconds == 0) return;
    setTimeout(()=>{
        let audio = document.getElementById('myAudio')
        audio.play();
        let x = setInterval(()=>{
            let id = e.target.parentElement.id;
            let cnt = 1;
            if(cnt){
                cnt = !cnt;
                document.getElementById(id).style.backgroundColor = "#CB2D2D"
            }
            else{
                cnt = !cnt;
                document.getElementById(id).style.backgroundColor = "#C32D2D"
            }
                
        }, 500)
        setTimeout(()=>{
            clearInterval(x)
            let id = e.target.parentElement.id;
            document.getElementById(id).style.backgroundColor = "rgb(245, 121, 121)"
        }, 15000)
        
    }, seconds*1000);

    
}


function search(){
    filteredTasks = tasks;

    let searchWord = document.getElementById('searchInput').value;
    if(searchWord.trim()==''){
        filteredTasks = tasks; 
        retrieveData();
        return;
    }

    filteredTasks = filteredTasks.filter(item =>{
        let f = 0;
        if(item.task == searchWord) return true;
        item.subTask.forEach(st => {
            if(st.toString().toLowerCase().trim() == searchWord.toString().toLowerCase().trim()) {
                f = 1; return true;
            }
        });
        item.category.forEach(ct =>{
            if(ct.includes(searchWord.toLowerCase().trim())){
                f = 1 ;
                return true;
            }
        })
        item.tag.forEach(tg =>{
            if(tg.includes(searchWord.toLowerCase().trim())){
                f = 1;
                return true;
            }
        })
        return f;
    })

    retrieveData();
}

