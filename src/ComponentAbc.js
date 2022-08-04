import React, {Component} from "react";
import './Validation';



export default class ComponentAbc extends Component{
    constructor() {
        // super =  функция, которая вызывает родительский конструктор
        super();
        // this = явный вызов конструктора (метод)
        this.state = {
            input: "",
            items: [],
            letter:"",
            valid: true,
            /*validLenght: '1',*/
        }
        //Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекстения this предоставленное значение.
        this.ClickToChangeLetters = this.ClickToChangeLetters.bind(this);
        this.ClickToSubmitLetters = this.ClickToSubmitLetters.bind(this); //реализует вывод текста при нажатии кнопки.
        this.ClickToDeleteLetters = this.ClickToDeleteLetters.bind(this); //удаляет значения вывода при нажатии кнопк  this.UseValidation = this.UseValidation.bind(this);
        this.ClickToDeleteLetter = this.ClickToDeleteLetter.bind(this);
    }

    ClickToChangeLetters(event) {
        let valid = true
      /*  let validLength = '1'*/
        this.state.items.forEach((element) => valid = valid&&element!==event.target.value)
       /* this.state.items.forEach((element) => validLength = validLength&&element!==event.target.value)*/
        this.setState({
            input: event.target.value,
            valid: valid,
            /*validLenght: validLength*/
            })
    }

    ClickOnDeleteBtn(event, index) {
        event.preventDefault();
        let oldItems = this.state.items;
        oldItems.splice(index, 1);
        this.setState({items: oldItems});
    }

    ClickToSubmitLetters(event){
      event.preventDefault()
        if(this.state.valid) {
            this.setState({
                input: '',
                items: [...this.state.items, this.state.input]
            })
        } else {
            alert('Не больше одной одинаковой буквы или цифры, сорян')
        }

    }

    ClickToDeleteLetters(event){
        event.preventDefault()
        this.setState({
            input: '',
            items: []
        })
    }

    ClickToDeleteLetter(props){
       this.state.items.splice(props, 1)
        this.setState({items: this.state.items})
        console.log(this.state.items)
    }




    render () {
        return (
        <div>

          <h1>
              Alphabet
          </h1>
            <div>

            </div>
               <form onSubmit={this.ClickToSubmitLetters} className={"form_submit"}>
                   <label>Write the letter               </label>
                   <input value={this.state.input} maxLength={1}  onChange={this.ClickToChangeLetters}
                id="input-name"  placeholder="abc">
                   </input>
                   <button onClick={this.ClickToSubmitLetters} type={"submit"}>CLICK TO SUBMIT +</button>
                   <ul>
                       {this.state.items.map((letter, index) =>
                           <li>{letter} <button className={'delete-link'} onClick={(event) => {this.ClickOnDeleteBtn(event, index)}}>x</button></li>)}
                   </ul>
               </form>
               <form  className={"form_delete"} >
                   <button type={"button"} onClick={this.ClickToDeleteLetter}>DELETE BY ONE</button>
                   <button type={"button"} onClick={this.ClickToDeleteLetters}>CLICK TO DELETE ALL</button>
               </form>

           </div>

        )
    }
}


//  to do: значения складываются, + их можно удалить
// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
//валидация:  нельзя добавлять больше одной буквы и добавлять букву, которая уже была использована
// отправили- исчезло
// отдельный компонент с валидацией
// предупреждение внизу инпута



