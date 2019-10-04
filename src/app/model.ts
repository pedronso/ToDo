export class Model{
    user;
    items;
    constructor(){
        this.user = "Pedronso";
        this.items = [new TodoItem("Dançar Zumba",false,"alta", "2019-10-10"),
                      new TodoItem("Dançar mais Zumba",false,"alta", "2019-10-10"),
                      new TodoItem("Dançar Zumba de novo",false,"alta", "2019-10-10"),
                      new TodoItem("Dançar Zumba novamente",false,"alta", "2019-10-10")]
    }
}
export class TodoItem{
    action;
    done;
    prioridade;
    date;
    constructor(action, done, prioridade, date){
        this.action = action;
        this.done = done;
        this.prioridade = prioridade;
        this.date = date;
    }
}