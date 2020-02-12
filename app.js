const scoreEl = document.getElementById('score');
const gradeInput = document.getElementById('grade')
const outOfInput = document.getElementById('outOf')
const calcBTN = document.getElementById('calcBTN')
const clearBTN = document.getElementById('resetBTN')

const calculateValues = () => {
  const inputScore = parseFloat(gradeInput.value);
  const outOfScore = parseFloat(outOfInput.value);

  const calculate = (inputScore / outOfScore) * 100;
  
if(calculate >= 60){
  scoreEl.style.color = 'green'
}else{
  scoreEl.style.color = 'red'
}  
scoreEl.innerText = `${calculate.toFixed(2)}%`
gradeInput.value = ''
outOfInput.value = ''
}

const resetValues = () => {
  scoreEl.innerText = '0';

}


calcBTN.addEventListener('click', calculateValues)
clearBTN.addEventListener('click', resetValues)