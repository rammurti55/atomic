import {BiBitcoin } from 'react-icons/bi'
import {FaDollarSign } from 'react-icons/fa'
import {BsCurrencyEuro } from 'react-icons/bs'
import {BsCurrencyYen } from 'react-icons/bs'



const Mydata=[
{
        category:"BALANCE",
        money:"$5900.00" 
},
{
    category:"PROFITS",
    money:"$950.00"
},
{
    category:"LOSES",
    money:"$450.00"
},
{
    category:"CURRENCIES",
    money:[ <BiBitcoin/>,<FaDollarSign/>,<BsCurrencyEuro/>,<BsCurrencyYen/>]
},
]
export default Mydata 