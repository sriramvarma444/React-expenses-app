import './ExpenseDate.css';

function ExpenseDate(props){
    const NewDate = new Date(props.date);
    const month = NewDate.toLocaleString('en-US', { month: 'long'});
    const day = NewDate.toLocaleString('en-US', { day: '2-digit'});
    const year = NewDate.getFullYear();

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;