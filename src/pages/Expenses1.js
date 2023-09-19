import React,{useState} from 'react';

import NewExpense from '../components/NewExpenses/NewExpense';

import Expenses from '../components/Expenses/Expenses';



  const Dummy_Expenses = [
    {
      id: 'e1',
      title: 'Books',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
const Expenses1 = () => {
  const [expenses,setExpenses]=useState(Dummy_Expenses);
  

  const addExpenseHandler=expense =>{
    const prevexp=[...expenses];
    const newData=[expense,...prevexp]
    setExpenses(newData)
    ;

    setExpenses((prevExpenses)=>{
      return[expense,...prevExpenses]
    })
    //setExpenses([expense,...expenses]);
  };
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <div>
      <NewExpense onAddExpense={addExpenseHandler}/>

      </div>
      
     <Expenses items={expenses} />
    </div>
  );
}

export default Expenses1;
