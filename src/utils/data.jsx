function calculation(totalBalance,number){
    const remainingBalances =[];
    let currentBalance=totalBalance
    for(let month=0;currentBalance>0;month++){
        if(month===0){
            remainingBalances.push({month:month+1,remainingBalance:totalBalance});

        }else{
            let remainingBalance =Math.max(currentBalance-number,0);
            remainingBalances.push({month:month+1,remainingBalance});
            currentBalance=remainingBalance;

        }
    }
    return remainingBalances;
}


export default calculation;