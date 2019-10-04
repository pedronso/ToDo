import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  model = new Model();
  getName(){
    return this.model.user;
  }
  
  getTodoItems(){
    //return this.model.items;
    return this.dateOrder().filter(item => !item.done);
  }
  getTodoItemsDone(){ 
  return this.model.items.filter(item=>item.done);
  }

  getAlta(){
    return this.getTodoItems().filter(item=>item.prioridade==="alta")
  }
  getMedia(){
    return this.getTodoItems().filter(item=>item.prioridade==="media")
  }
  getBaixa(){
    return this.getTodoItems().filter(item=>item.prioridade==="baixa")
  }

    addItem(newItem, prioridade, date){
    if(newItem != ""){
      this.model.items.push(new TodoItem(newItem,false,prioridade, date));
    }
  }
  reopenItem(itemReopen){
    itemReopen.done = false;
  }
  dateOrder(){
    return this.model.items.sort((a,b)=>{
      return <any>new Date(b.data)-<any>new Date(a.data);
    });
  }
}
