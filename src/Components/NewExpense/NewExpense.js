
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const addExpense = (userExpanse) => {
        console.log(userExpanse);
        props.onSubmitUserInput(userExpanse)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitUserInput = {addExpense} />
        </div>
    );
}

export default NewExpense;