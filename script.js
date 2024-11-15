function generateFacts() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const interests = document.getElementById('interests').value
        .split(',')
        .map(interest => interest.trim())
        .filter(interest => interest !== '');

    if (!name || !age || interests.length === 0) {
        alert('Please fill in all fields!');
        return;
    }

    const facts = generatePersonalizedFacts(name, age, interests);
    displayFacts(facts);
}

function generatePersonalizedFacts(name, age, interests) {
    const templates = [
        `${name} is a vibrant ${age}-year-old soul who finds joy in ${interests[0]}.`,
        `When not exploring ${interests[1]}, you might find ${name} immersed in ${interests[2]}.`,
        `A passionate ${interests[0]} enthusiast, ${name} brings together their love for ${interests[1]} and ${interests[2]} in unique ways.`
    ];

    return templates.map(template => template);
}

function displayFacts(facts) {
    const factsContainer = document.getElementById('factsOutput');
    factsContainer.innerHTML = facts
        .map(fact => `<div class="fact">${fact}</div>`)
        .join('');
}
