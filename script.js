//next class start objects for the alumni. if the randomizing is too hard/timeconsuming then just choose a couple alumni and don't include the rest (no randomizing)
//team member data
const teamMembers = [
    {
        imageUrl: 'imgs/gallery1.webp',
        name: 'George Lucas',
        degree: 'Bachelor in Cinema',
        gradYear: '1967',
        accomplishments: ['Creator of the Star Wars franchise, which revolutionized the science fiction genre and became a cultural phenomenon.', 'Founder of Lucasfilm, which produced numerous successful films and franchises.', 'Directed American Graffiti, which received critical acclaim and several Academy Award nominations.', 'Established the George Lucas Educational Foundation to support education innovation.'],
    },
    {
        imageUrl: 'imgs/gallery1.webp',
        name: 'Will Ferrell',
        degree: 'Bachelor in Sports Information',
        gradYear: '1990',
        accomplishments: ['Gained fame as a cast member on Saturday Night Live (1995-2002).', 'Starred in hit films such as Anchorman, Elf, Talladega Nights, and Step Brothers.', 'Co-founder of the comedy website Funny or Die.', 'Received multiple awards, including a star on the Hollywood Walk of Fame.'],
    },
    {
        imageUrl: 'imgs/gallery1.webp',
        name: 'Ronald Reagan',
        degree: 'Bachelor in Economics & Sociology',
        gradYear: '1932',
        accomplishments: ['40th President of the United States (1981-1989), known for conservative economic policies and ending the Cold War.', 'Served as Governor of California (1967-1975).', 'Prominent film actor before politics, appearing in over 50 films.', 'Established the Reagan Foundation, which promotes his legacy and values.'],
    },
    {
        imageUrl: 'imgs/gallery1.webp',
        name: 'Shonda Rhimes',
        degree: 'Bachelor in English',
        gradYear: '1991',
        accomplishments: ['Creator of Grey’s Anatomy, Scandal, and How to Get Away with Murder, transforming the television landscape.', 'Founded Shondaland, a production company known for diverse and engaging storytelling.', 'Received multiple Emmy nominations and awards for her work in television.', 'Authored the memoir Year of Yes, which became a bestseller.'],
    }
]

function generateTeamCards(){
    const teamCardsContainer = document.getElementById('teamCards');

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

         //Create a list of accomplishments with <li> tags
    const accomplishmentsList = member.accomplishments
    .map(accomplishments => `<li> ${accomplishments} </li>`).join('')


        card.innerHTML=`
            <div class="card">
                <div   class = "card-header">
                    ${member.name}
                </div>
                <div class="card-body">
                    <p><strong>Degree:</strong> ${member.degree}</p>
                    <p><strong>Year of Graduation:</strong> ${member.gradYear}</p>
                    <p><strong>Accomplishments:</strong>
                        <ul>
                            ${accomplishmentsList}
                        </ul>
                    </p>
                </div>
            </div>

        `

            
    teamCardsContainer.appendChild(card)
    });
}

window.onload = generateTeamCards()