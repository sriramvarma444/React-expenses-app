
import './ExpenseForm.css';
import React,{useState} from 'react';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();

    // const [userInput, setUserInput] = useState({
    //     userTitle : '',
    //     userAmount : '',
    //     userDate : ''
    // });

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     userTitle : event.target.value
        // });
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     userAmount : event.target.value
        // });
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     userDate : event.target.value
        // });
        setDate(event.target.value);
    };

    const submitUserInput = (event) => {
        event.preventDefault();

        const expanses = {
            id : Math.random(),
            title : title,
            amount : parseInt(amount),
            date : new Date(date)
        }

        console.log(expanses);

        props.onSubmitUserInput(expanses);

        // setUserInput({
        //     userTitle : '',
        //     userAmount : '',
        //     userDate : ''
        // }); 
        setTitle("");
        setAmount("");
        setDate("");       
    }

    return(
        <form onSubmit={submitUserInput}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type='text' value={title}  onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type='number' value={amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type='date' value={date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;