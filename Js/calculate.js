function calculateWaterNeeded(event) {
  event.preventDefault(); // prevent the form from submitting
  const age = parseInt(document.querySelector('input[name="age"]').value); // corrected age input name
  const weight = parseInt(document.querySelector('input[name="weight"]').value); // corrected weight input name
  const activityLevel = document.querySelector(
    'select[name="activity-level"]'
  ).value;
  const environment = document.querySelector(
    'select[name="environment"]'
  ).value; // corrected environment input name

  if (age >= 0 && weight > 0) {
    // check if age and weight are valid
    // Calculate the basal metabolic rate (BMR) using the Harris-Benedict equation
    const bmr =
      65 * weight + // weight factor
      6.25 * age - // age factor
      5 * // activity factor
        (activityLevel === "sedentary" // corrected activity level values to lowercase
          ? 1
          : activityLevel === "light"
          ? 2
          : activityLevel === "moderate"
          ? 3
          : activityLevel === "active"
          ? 4
          : activityLevel === "very-active"
          ? 5
          : 0) +
      (environment === "hot" ? 100 : 0); // environment factor

    // Calculate the water needed based on the BMR
    const waterNeeded = Math.round((bmr / 2000) * 1000) / 1000; // rounded to 3 decimal places

    document.querySelector(
      "#water-intake"
    ).textContent = `${waterNeeded} L per day`; // corrected display element ID and added unit
  } else {
    document.querySelector("#water-intake").textContent =
      "Please enter valid age and weight.";
  }
}

document.querySelector("form").addEventListener("submit", calculateWaterNeeded);
