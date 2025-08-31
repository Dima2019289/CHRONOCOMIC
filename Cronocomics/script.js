// Grab the elements
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

// Example "database" of comics
const readingOrders = {
  "batman": [
    { title: "Batman: Year One", reason: "Shows Batman’s origin and early struggles.", writer: "Frank Miller", artist: "David Mazzucchelli", year: 1987 },
    { title: "Batman: The Man Who Laughs", reason: "First modern encounter with Joker.", writer: "Ed Brubaker", artist: "Doug Mahnke", year: 2005 },
    { title: "Batman: The Long Halloween", reason: "Iconic holiday-themed murder mystery shaping Batman’s rogues gallery.", writer: "Jeph Loeb", artist: "Tim Sale", year: 1996 },
    { title: "Batman: Dark Victory", reason: "Explores the rise of Robin and sequel to Long Halloween.", writer: "Jeph Loeb", artist: "Tim Sale", year: 1999 },
    { title: "Batman: Haunted Knight", reason: "Perfect Halloween-themed Batman tales.", writer: "Jeph Loeb", artist: "Tim Sale", year: 1993 },
    { title: "Batman: Hush", reason: "Epic mystery introducing Hush and featuring nearly every major character.", writer: "Jeph Loeb", artist: "Jim Lee", year: 2002 },
    { title: "Batman: The Killing Joke", reason: "Deep dive into Joker’s origin and iconic moment for Barbara Gordon.", writer: "Alan Moore", artist: "Brian Bolland", year: 1988 },
    { title: "Batman: Venom", reason: "Shows Batman struggling with addiction and power.", writer: "Dennis O’Neil", artist: "Trevor Von Eeden", year: 1991 },
    { title: "Batman: The Black Mirror", reason: "Modern detective noir with psychological depth.", writer: "Scott Snyder", artist: "Jock & Francesco Francavilla", year: 2011 },
    { title: "Batman & Son", reason: "Introduces Damian Wayne, Batman’s son.", writer: "Grant Morrison", artist: "Andy Kubert", year: 2006 },
    { title: "Batman: The Resurrection of Ra’s al Ghul", reason: "Brings back one of Batman’s greatest foes.", writer: "Grant Morrison", artist: "Andy Kubert", year: 2007 },
    { title: "Batman: The Road to No Man’s Land", reason: "Prepares for Gotham’s ultimate crisis.", writer: "Multiple", artist: "Multiple", year: 1999 },
    { title: "Batman: No Man’s Land (Vol. 1–3)", reason: "Gotham is isolated and Batman faces chaos.", writer: "Multiple", artist: "Multiple", year: 1999 },
    { title: "Batman: War Games (Vol. 1–3)", reason: "Gang war erupts, testing Batman’s limits.", writer: "Multiple", artist: "Multiple", year: 2004 },
    { title: "Batman: War Crimes", reason: "Fallout from War Games, consequences hit Batman’s allies.", writer: "Multiple", artist: "Multiple", year: 2005 },
    { title: "Batman: Bruce Wayne – Murderer? / Fugitive", reason: "Explores Bruce as a hunted man.", writer: "Doug Moench & others", artist: "Jim Aparo & others", year: 2002 },
    { title: "Batman: Under the Red Hood", reason: "Emotional return of a lost ally.", writer: "Judd Winick", artist: "Doug Mahnke", year: 2004 },
    { title: "Batman: Heart of Hush", reason: "Hush returns with devastating plans.", writer: "Paul Dini", artist: "Dustin Nguyen", year: 2008 },
    { title: "Batman: The Return of Bruce Wayne", reason: "Time-travel adventure redefining Bruce’s legacy.", writer: "Grant Morrison", artist: "Chris Sprouse", year: 2009 },
    { title: "Batman Incorporated (Vol. 1–2)", reason: "Batman goes global with allies worldwide.", writer: "Grant Morrison", artist: "Various", year: 2010 },
    { title: "Batman: The Court of Owls", reason: "Introduces a terrifying secret society in Gotham.", writer: "Scott Snyder", artist: "Greg Capullo", year: 2011 },
    { title: "Batman: Death of the Family", reason: "Joker targets Batman’s entire family.", writer: "Scott Snyder", artist: "Greg Capullo", year: 2012 },
    { title: "Batman: Zero Year", reason: "Reinvents Batman’s origin for the modern era.", writer: "Scott Snyder", artist: "Greg Capullo", year: 2013 },
    { title: "Batman: Endgame", reason: "Epic showdown with Joker threatening all of Gotham.", writer: "Scott Snyder", artist: "Greg Capullo", year: 2014 },
    { title: "Batman: Superheavy", reason: "New Batman identity emerges under Jim Gordon.", writer: "Scott Snyder", artist: "Greg Capullo", year: 2015 },
    { title: "Batman: Rebirth (Detective Comics tie-ins)", reason: "Fresh start blending old and new Batman stories.", writer: "Various", artist: "Various", year: 2016 },
    { title: "Batman: I Am Gotham / I Am Suicide / I Am Bane", reason: "Explores Batman’s global battles and strategy.", writer: "Tom King", artist: "David Finch", year: 2017 },
    { title: "Batman: The War of Jokes and Riddles", reason: "Fun dive into Joker vs. Riddler war.", writer: "Tom King", artist: "Mikel Janín", year: 2017 },
    { title: "Batman: City of Bane", reason: "Bane takes over Gotham, testing Batman’s allies.", writer: "James Tynion IV", artist: "Tony S. Daniel", year: 2019 },
    { title: "Batman: The Joker War", reason: "Joker wreaks havoc on Gotham and Bruce Wayne.", writer: "James Tynion IV", artist: "Jorge Jiménez", year: 2020 },
    { title: "Batman: Knightmares / Dark Detective", reason: "Latest explorations of Batman’s detective prowess.", writer: "James Tynion IV", artist: "Various", year: 2021 }
  ],

"superman": [
  { title: "Superman: Birthright", reason: "Modern retelling of Superman’s origin story.", writer: "Mark Waid", artist: "Leinil Francis Yu", year: 2003 },
  { title: "Superman: For All Seasons", reason: "Explores Superman’s early years and moral compass.", writer: "Jeph Loeb", artist: "Tim Sale", year: 1998 },
  { title: "Superman: Red Son", reason: "An alternate reality where Superman lands in the Soviet Union.", writer: "Mark Millar", artist: "Dave Johnson", year: 2003 },
  { title: "Superman: Secret Identity", reason: "A unique take blending superheroics with a real-world setting.", writer: "Kurt Busiek", artist: "Stuart Immonen", year: 2004 },
  { title: "All-Star Superman", reason: "Epic, critically acclaimed Superman tale with classic feel.", writer: "Grant Morrison", artist: "Frank Quitely", year: "2005–2008" },
  { title: "Superman: Brainiac", reason: "Superman faces one of his greatest technological threats.", writer: "Geoff Johns", artist: "Gary Frank", year: 2008 },
  { title: "Superman: Secret Origin", reason: "Revisits Superman’s early years for the New 52 continuity.", writer: "Geoff Johns", artist: "Gary Frank", year: 2009 },
  { title: "Superman: Doomsday", reason: "Classic showdown introducing the Death of Superman storyline.", writer: "Dan Jurgens", artist: "Dan Jurgens", year: 1992 },
  { title: "Superman: The Man of Steel", reason: "Rebooted origin story during the 1986 post-Crisis era.", writer: "John Byrne", artist: "John Byrne", year: 1986 },
  { title: "Superman: Lois & Clark", reason: "Explores Superman’s life balancing heroism and family.", writer: "Dan Jurgens", artist: "Lee Weeks", year: 1996 },
  { title: "Superman: Earth One", reason: "Modern reimagining of Superman for a new generation.", writer: "J. Michael Straczynski", artist: "Shane Davis", year: 2010 },
  { title: "Superman: Action Comics Vol. 1–2 (New 52)", reason: "Reintroduces Superman in the New 52 universe.", writer: "Grant Morrison", artist: "Rags Morales", year: 2011 },
  { title: "Superman: Up in the Sky", reason: "An epic journey highlighting Superman’s heroism.", writer: "Tom King", artist: "Andy Kubert", year: 2019 }
],


  "spiderman": [
    {
      title: "Spider-Man: Blue",
      reason: "A poignant exploration of Peter Parker's early days and his feelings for Gwen Stacy.",
      writer: "Jeph Loeb",
      artist: "Tim Sale",
      year: 2002
    },
    {
      title: "Kraven's Last Hunt",
      reason: "A dark and psychological story that delves into Kraven the Hunter's obsession with Spider-Man.",
      writer: "J.M. DeMatteis",
      artist: "Mike Zeck",
      year: 1987
    }
  ],

  "ironman": [
    {
      title: "Iron Man: Extremis",
      reason: "A modern take on Iron Man's origin and his battle with a new enemy.",
      writer: "Warren Ellis",
      artist: "Adrian Alphona",
      year: 2005
    },
    {
      title: "Iron Man: The Five Nightmares",
      reason: "Explores Tony Stark's fears and the consequences of his actions.",
      writer: "Matt Fraction",
      artist: "Salvador Larroca",
      year: 2008
    }
  ],

  "wonderwoman": [
    {
      title: "Wonder Woman: The Hiketeia",
      reason: "A powerful story that delves into Wonder Woman's role as a warrior and a diplomat.",
      writer: "Greg Rucka",
      artist: "J.G. Jones",
      year: 2002
    },
    {
      title: "Wonder Woman: Year One",
      reason: "A modern retelling of Wonder Woman's origin.",
      writer: "Greg Rucka",
      artist: "Nicola Scott",
      year: 2016
    }
  ],

  "avengers": [
    {
      title: "Avengers: Disassembled",
      reason: "A storyline that leads to the breakup of the Avengers.",
      writer: "Brian Michael Bendis",
      artist: "David Finch",
      year: 2004
    },
    {
      title: "House of M",
      reason: "An alternate reality where mutants are the dominant species.",
      writer: "Brian Michael Bendis",
      artist: "Oliver Coipel",
      year: 2005
    }
  ]

};

// Listen for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // stops page reload

  const query = input.value.trim().toLowerCase();

  if (readingOrders[query]) {
    const list = readingOrders[query].map(c => `
    <li>
      <strong>${c.title}</strong> (${c.year})<br>
      <em>${c.reason}</em><br>
      Writer: ${c.writer}<br>
      Artist: ${c.artist}
    </li>
  `).join("");
    resultsDiv.innerHTML = `<h2>Recommended Reading Order:</h2><ul>${list}</ul>`;
  } else {
    resultsDiv.innerHTML = `<p>No results found for "${query}".</p>`;
  }
});
