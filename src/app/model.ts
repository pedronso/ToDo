export class Model{
    user;
    items;
    constructor(){
        this.user = "Pedronso";
        this.items = [new TodoItem("Dançar Zumba",false),
                      new TodoItem("Dançar mais Zumba",false),
                      new TodoItem("Dançar Zumba de novo",false),
                      new TodoItem("Dançar Zumba novamente",false)]
    }
}
export class TodoItem{
    action;
    done;
    constructor(action, done){
        this.action = action;
        this.done = done;
    }
}