import React , { useState } from 'react';

import './ExpenseForm.css'
function ExpenseForm(props){
    //multiple usestate
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredtAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    //one useState() instead of 3
    // const [userInput,setUserInput]=useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    const TitleChangeHandler=(event) =>{  
        setEnteredTitle(event.target.value);
    };
    const AmountChangeHandler=(event) =>{ 
        setEnteredtAmount(event.target.value);       
    };
    const DateChangeHandler=(event) =>{
        setEnteredDate(event.target.value);
    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredtAmount('');
        setEnteredDate('');
    };  
    return(
        <form className ='new-expense__control' onSubmit={submitHandler}>
            <div  className='new-expense__control input'>
                <label>Title</label>
                <input type='text'
                  value ={enteredTitle}
                  onChange={TitleChangeHandler}/>
            </div>
            <div className='new-expense__control input'>
                <label >Amount</label>
                <input type='number'
                    min='0.01'
                    step='0.01'
                    value ={enteredAmount}
                    onChange={AmountChangeHandler}/>
            </div>
            <div className='new-expense__control input'>
                <label >Date</label>
                <input type='date'
                    min='2019-01-01'
                    max='2022-12-31'
                    value ={enteredDate}
                    onChange={DateChangeHandler}/>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm ;