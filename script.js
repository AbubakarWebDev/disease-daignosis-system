$(document).ready(function () {
    let data = [
        {
            "symptom": "tching",
            "disease": "Fungal infection"
        },
        {
            "symptom": "skin_rash",
            "disease": "Allergy"
        },
        {
            "symptom": "nodal_skin_eruptions",
            "disease": "GERD"
        },
        {
            "symptom": "continuous_sneezing",
            "disease": "Chronic cholestasis"
        },
        {
            "symptom": "shivering",
            "disease": "Drug Reaction"
        },
        {
            "symptom": "chills",
            "disease": "Peptic ulcer diseae"
        },
        {
            "symptom": "joint_pain",
            "disease": "AIDS"
        },
        {
            "symptom": "stomach_pain",
            "disease": "Diabetes"
        },
        {
            "symptom": "acidity",
            "disease": "Gastroenteritis"
        },
        {
            "symptom": "ulcers_on_tongue",
            "disease": "Bronchial Asthma"
        },
        {
            "symptom": "muscle_wasting",
            "disease": "Hypertension"
        },
        {
            "symptom": "vomiting",
            "disease": "Migraine"
        },
        {
            "symptom": "burning_micturition",
            "disease": "hepatitis A"
        },
        {
            "symptom": "spotting_urination",
            "disease": "Jaundice"
        },
        {
            "symptom": "fatigue",
            "disease": "Malaria"
        }
    ];

    // Linear Search
    const linearSearch = (list, item) => {
        for (const [i, element] of list.entries()) {
            if (element.symptom == item) {
                return element.disease
            }
        }
        return -1;
    }

    document.getElementById("submitBtn").addEventListener('click', ()=> {
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
        
    })
});
