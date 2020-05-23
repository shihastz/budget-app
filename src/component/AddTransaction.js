import React, {useState} from 'react'

const AddTransaction = () => {
    const [income, setincome] = useState({
        incomeText : "",
        incomeAmount : 0
    })

    const onChangeIncome = e =>{
        setincome({
            ...income,
            [e.target.name] : e.target.value
        })
        console.log("xfvxb")
    }
    return (
        <div className="form-wrapper">
            <form>
                <div className="input-group income">
                    <input type="text" name="incomeText" onChange={onChangeIncome} value={income.incomeText} placeholder="Add Income..." autoComplete="off"/>
                    <input type="number" name="incomeAmount" onChange={onChangeIncome} value={income.incomeAmount} placeholder="Amount" autoComplete="off"/>
                    <input type="submit" value="submit"/>
                </div>
            </form>
            <form>
                <div className="input-group expense">
                    <input type="text" placeholder="Add Expense..." autoComplete="off"/>
                    <input type="number" placeholder="Amount" autoComplete="off"/>
                    <input type="submit" value="submit"/>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
