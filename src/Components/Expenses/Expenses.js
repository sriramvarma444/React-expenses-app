import Card from '../UI/Card';
import ExpenseItem from './ExpenseItems';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import React, {useState} from 'react';

function Expenses(props){

    const [expense, setExpense] = useState(props.expenses);

    const SelectedFilter = (SelectedYear) => {
        console.log(SelectedYear);
        setExpense(props.expenses.filter((x) => {
            return x.date.getFullYear().toString() === SelectedYear;
        }));
    }

    let ExpenseItems = <p>No expenses found</p>;
     if(expense.length > 0)
     {
        ExpenseItems = expense.map((exp) => (
            <ExpenseItem
                key = {exp.id}
                title={exp.title} 
                amount={exp.amount} 
                date={exp.date}
            />
        ));
     }

    return(
        <Card className="expenses">
            <ExpensesFilter onFilterSelected ={SelectedFilter} />
            {ExpenseItems}
        </Card>
    );
}

export default Expenses;