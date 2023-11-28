function calculateCRC() {
    const dataInput = document.getElementById('dataInput').value;
    const divisor = document.getElementById('divisor').value;

    // Perform CRC calculation (you need to implement this logic)
    // const crcCode = performCRC(dataInput, divisor);


    const crcCode = performCRC(dataInput, divisor);
    console.log("CRC Code:", crcCode);

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>CRC Code: ${crcCode}</p>`;
}
function performCRC(input, divisor) {
    let inputArray = input.split('');  // Convert input to an array of characters
    let inputLength = inputArray.length;
    let divisorLength = divisor.length;

    inputArray = inputArray.concat(Array(divisorLength - 1).fill('0'));

    for (let i = 0; i < inputLength; i++) {
        if (inputArray[i] === '1') {
            for (let j = 0; j < divisorLength; j++) {
                inputArray[i + j] = (inputArray[i + j] === divisor[j]) ? '0' : '1';
            }
        }
    }

    let crcCode = inputArray.slice(inputLength, inputLength + divisorLength - 1).join('');
    console.log("\nCRC Code : " + crcCode);
    return crcCode;
}