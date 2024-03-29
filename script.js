document.addEventListener("DOMContentLoaded", function() {
    const skillMessages = {
        "Critical Thinking": "Regarding concepts that require analytical ability, especially in programming, this is where my critical thinking shines, so long as it's a topic or subject I'm passionate about.",
        "Problem Solving": "If it's something important, I always try to find a way or make a compromise in order to achieve my goal. Though I sometimes tend to brute-force something when I feel frustrated, I try my best to keep my level-headedness.",
        "Adaptability": "As long as the request is reasonable and I can properly comprehend the objective, I can adapt to almost any situation with sufficient time and resources.",
        "Creativity": "My vision of creativity comes at the cost of time. To reach the peak of my output, I will have to sacrifice time to create something both satisfying and great.",
        "Leadership": "I can lead, and I will rise to the occasion if I feel it's necessary. Otherwise, I prefer to be a follower and work behind the scenes.",
        "Teamwork": "As long as others are willing to cooperate, I excel in settings requiring teamwork, as long as there isn't a heavy atmosphere.",
        "Communication": "If people need someone to talk to, whether it's business-related or personal, I'm here to lend an ear and provide my insights. Additionally, I try my best to voice out my concerns and communicate my ideas or problems.",
        "Interpersonal Skills": "I get along with people very well, as I can consider myself a social chameleon. Nevertheless, I try my best to keep up with appearances and please the needs of everyone in a professional and non-professional setting.",
        "Python": "My first programming language. I've become more used to C++, but I can adapt and easily relearn how to write Python code.",
        "C & C++": "For my freshman year, my course introduced me to C++. My experience with C and C++ primarily comes from self-studying and college lectures. I enjoy understanding the technicality behind it.",
        "HTML & CSS": "Out of boredom, I decided one day to learn HTML and CSS for fun. Now, I'm very used to it, to the point of feeling fed up with it sometimes.",
        "JavaScript": "I'm currently in the process of understanding JavaScript more and more. There will be an adjustment period, but I will surely get the hang of it."
    };

    const skillHeadings = document.querySelectorAll('.skills-container h3');

    skillHeadings.forEach(function(heading) {
        heading.addEventListener('click', function() {
            const skill = heading.textContent;
            const message = skillMessages[skill];
            alert(message);
        });
    });
});
