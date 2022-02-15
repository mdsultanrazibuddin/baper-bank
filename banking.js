document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const newDepositAmount = parseFloat(depositInputText);


    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const  previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal= previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    const balanceTotal =document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    depositInput.value = '';



})

document.getElementById("withdraw-button").addEventListener('click', function(){
    const withdrawInput =document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);

    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    const balanceTotal =document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';
})