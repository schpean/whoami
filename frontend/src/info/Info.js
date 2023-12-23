import self from "../img/self.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
//linear-gradient(to right, rgb(198, 40, 24), rgb(19, 99, 253)); 

export const info = {
    firstName: "Bogdan",
    lastName: "Mateas",
    initials: "mb", // the example uses first and last, but feel free to use three or more if you like.
    position: "Sysadmin",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Romania, Eastern Europe'
        },
        {
            emoji: "💼",
            text: "looking for a Devops role"
        },
        {
            emoji: "📧",
            text: "mateasbogdan@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/yourguru007",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },

        {
            link: "https://github.com/schpean",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/bogdanmateas/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/BogdanMateas",
            icon: "fa-brands fa-x-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Bogdan. I'm an Computer Science Engineer. I did my high school in my hometown Oradea at \"Emanuil Gojdu\" afterwards I moved to Timisoara to study CompSci at Polytehnic University of Timisoara.",
    skills:
        {
            proficientWith: ['citrix', 'active directory', 'SCCM', 'git', 'bash', 'powershell'],
            exposedTo: ['flask', 'python', 'docker', 'kubernetes', 'rancher', 'apache', 'microservices']
        }
    ,
    hobbies: [
        {
            label: 'poker',
            emoji: '🖤♣️❤️♦️'
        },
        {
            label: 'video games',
            emoji: '🎮'
        },
        {
            label: 'fly-fishing and spinning',
            emoji: '🐟'
        },
        {
            label: 'movies',
            emoji: '🎥'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
       
    ]
}
