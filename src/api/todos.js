const API_ROOR = "http://localhost:3000"
const fetchTodos = async ()=>{
    try{
        const response = await fetch(`${API_ROOT}/todos`);
        if(!response.ok){
            throw new Error(`HTTP Error:${response.status}`)
        }
        const todos = await response.json();
        return todos
    }catch (error) {
        console.log(error);
    }
}
const postTodo = async (todo)=>{
    try{
    if(!response.ok){
        throw new Error(`HTTP Error:${response.status}`)
    }
    const todos = await response.json();
    return todos
}catch (error){
    console.error(err)
}
}
const newTodo = {
    "title": "New Todo",
    "completed": false,
}
postTodo()