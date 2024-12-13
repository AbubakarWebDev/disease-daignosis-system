# Disease Diagnose System

## Overview
The Disease Diagnose System is a simple JavaScript application that helps users identify potential diseases based on their symptoms. The system uses a predefined dataset of symptoms and their corresponding diseases to provide quick and basic diagnoses. The application implements a linear search algorithm to match user input with the dataset and display the result.

## Features
- User-friendly interface for symptom input.
- Instant feedback on possible diseases.
- Predefined dataset of common symptoms and diseases.
- Lightweight and responsive design.

## Technology Stack
- **Frontend:** HTML, CSS, and JavaScript (jQuery for DOM manipulation).
- **Logic:** Linear search algorithm implemented in JavaScript.

## How It Works
1. The user enters a symptom in the input field and clicks the submit button.
2. The system performs a linear search through the predefined dataset to find a match for the entered symptom.
3. If a match is found, the corresponding disease is displayed.
4. If no match is found, the system prompts the user to enter a valid symptom.

## Dataset
The system uses a hardcoded dataset consisting of symptoms and their associated diseases. Below is an example of the data structure:

```json
[
    {
        "symptom": "itching",
        "disease": "Fungal infection"
    },
    {
        "symptom": "skin_rash",
        "disease": "Allergy"
    },
    // More entries here...
]
```

## Usage Instructions
1. Clone or download the repository.
2. Open the `index.html` file in your preferred web browser.
3. Enter a symptom in the input field (e.g., "itching", "skin_rash", etc.).
4. Click the **Submit** button to see the result.
5. If the symptom is not found, the system will display a message prompting the user to enter a valid symptom.

## Code Explanation
### JavaScript Logic
#### Dataset Initialization
A dataset of symptoms and diseases is stored in a JavaScript array of objects.

#### Linear Search Function
```javascript
const linearSearch = (list, item) => {
    for (const [i, element] of list.entries()) {
        if (element.symptom == item) {
            return element.disease;
        }
    }
    return -1;
}
```
- Iterates through the dataset to find a matching symptom.
- Returns the associated disease if a match is found, or `-1` if not found.

#### Event Listener for Button Click
```javascript
document.getElementById("submitBtn").addEventListener('click', () => {
    let symptoms = document.getElementById('symptoms').value;
    let resultHtml = "";

    if (linearSearch(data, symptoms) != -1) {
        resultHtml = `
        <h4 class='font-weight-bolder'>According to Your Symptoms, Your Disease is:
            ${linearSearch(data, symptoms)}
        </h4>`;
    }
    else {
        resultHtml = `
        <h4 class='font-weight-bolder'>Please Select Your Valid Symptom</h4>`;
    }

    document.getElementById("results").innerHTML = `<hr>${resultHtml}<hr>`;
});
```
- Captures user input.
- Invokes the `linearSearch` function to find a match.
- Updates the results section with the diagnosis or a prompt for valid input.

## Limitations
- The system relies on a predefined dataset and cannot handle symptoms or diseases not listed in it.
- It does not provide medical advice or replace professional consultation.

## Future Enhancements
- Expand the dataset to include more symptoms and diseases.
- Implement fuzzy search to handle typos and partial matches.
- Provide links or resources for further reading about the diagnosed disease.
- Add support for multiple symptoms input.

## License
This project is open-source and available under the [MIT License](LICENSE).

---

**Disclaimer:** This tool is for educational purposes only and is not intended for medical use. Always consult a healthcare professional for accurate diagnosis and treatment.

