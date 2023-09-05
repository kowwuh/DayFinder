function findDay() {
    const dateInput = document.getElementById('date');
    const resultDiv = document.getElementById('result');

    // Get the selected date from the input
    const selectedDate = new Date(dateInput.value);

    // Check if a valid date was selected
    if (!isNaN(selectedDate.getTime())) {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfWeek = daysOfWeek[selectedDate.getDay()];
        resultDiv.textContent = `The selected date is ${dayOfWeek}.`;
    } else {
        resultDiv.textContent = 'Invalid date. Please select a valid date.';
    }
}
