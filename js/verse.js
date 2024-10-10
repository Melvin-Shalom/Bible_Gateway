// Select the container where the verse text will be displayed
const verseContainer = document.getElementById("verse-container");

// Function to fetch verse data from the Bible API
async function fetchVerse() {
    try {
        const response = await fetch("https://bible-api.com/hebrews+1");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();

        // Extract verse text and reference
        const verseText = data.text;
        const verseReference = `${data.reference}`;

        // Split the verse text by line and add numbering to each line
        const verseLines = verseText.split("\n").map((line, index) => {
            const verseNumber = index + 1;
            return `<p><strong>${verseNumber}</strong>. ${line}</p>`;
        }).join("");

        // Insert the verse content into the container
        verseContainer.innerHTML = `
            <p><strong>${verseReference}</strong></p>
            ${verseLines}
        `;
    } catch (error) {
        verseContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Call the fetchVerse function when the page loads
fetchVerse();
