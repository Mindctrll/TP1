function addTask(dayId,taskText) {
    let ulElement = document.querySelector(`#${dayId} ul`);  
    let liElement = document.createElement("li");

    liElement.innerHTML=
    `
        <input type="checkbox">
        <label>${taskText}</label>
        <button class="removeButton">Remove</button>
    `

    liElement.querySelector(".removeButton").addEventListener("click",() =>{ulElement.removeChild(liElement)})
    ulElement.appendChild(liElement);
}

document.querySelectorAll("button").forEach(button=> {
    button.addEventListener("click", (event) =>{
        //console.log(event);
        let dayContainer=event.target.closest(".day");
        let inputElement=dayContainer.querySelector(".inp");
        let taskText =inputElement.value;
        if (taskText) 
        {
            addTask(dayContainer.id, taskText);  
            inputElement.value = "";  
        } 
        else 
            alert("Task cant be empty habibi");  
    });
});
