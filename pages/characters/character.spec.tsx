import { render, screen } from "@testing-library/react"
import CharacterDetail from "./[id].page"
const character = {
    "id": "1009522",
    "name": "Pyro",
    "description": "",
    "modified": "2013-10-15T19:40:03-0400",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/c0/4ce5a0eeab435",
        "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009522",
    "comics": {
        "available": "58",
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009522/comics",
        "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6929",
                "name": "Avengers Annual (1967) #15"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/7467",
                "name": "Cable (1993) #87"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/8261",
                "name": "Daredevil (1964) #269"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/9180",
                "name": "Incredible Hulk (1962) #369"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/91756",
                "name": "King In Black: Marauders (2021) #1"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/76750",
                "name": "Marauders (2019) #1"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/76753",
                "name": "Marauders (2019) #4"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/76754",
                "name": "Marauders (2019) #5"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/78401",
                "name": "Marauders (2019) #7"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/78403",
                "name": "Marauders (2019) #9"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/90086",
                "name": "Marauders (2019) #18"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/90087",
                "name": "Marauders (2019) #19"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/90088",
                "name": "Marauders (2019) #20"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/90095",
                "name": "Marauders (2019) #27"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/16483",
                "name": "Marvel Adventures Spider-Man (2005) #31"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/53685",
                "name": "Quicksilver (1997) #9"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/16454",
                "name": "Ultimate X-Men (2001) #87"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/20638",
                "name": "Ultimate X-Men (2001) #91"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/20967",
                "name": "Ultimate X-Men (2001) #93"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/20818",
                "name": "Ultimates 3 (2007) #4"
            }
        ],
        "returned": "20"
    },
    "series": {
        "available": "23",
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009522/series",
        "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
                "name": "Avengers Annual (1967 - 1994)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1995",
                "name": "Cable (1993 - 2002)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2002",
                "name": "Daredevil (1964 - 1998)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
                "name": "Incredible Hulk (1962 - 1999)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/31383",
                "name": "King In Black: Marauders (2021)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/27555",
                "name": "Marauders (2019 - Present)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/866",
                "name": "Marvel Adventures Spider-Man (2005 - 2010)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/20086",
                "name": "Quicksilver (1997 - 1998)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/474",
                "name": "Ultimate X-Men (2001 - 2009)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/3188",
                "name": "Ultimates 3 (2007 - 2008)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7515",
                "name": "Ultimates 3: Who Killed the Scarlet Witch? (2009 - Present)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
                "name": "Uncanny X-Men (1963 - 2011)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2262",
                "name": "Wolverine (1988 - 2003)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2098",
                "name": "X-Factor (1986 - 1998)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/6689",
                "name": "X-Factor Annual (1986 - 1994)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2941",
                "name": "X-Factor Visionaries: Peter David Vol. 3 (2007)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/3633",
                "name": "X-Force (1991 - 2004)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2265",
                "name": "X-Men (1991 - 2001)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2100",
                "name": "X-Men Annual (1970 - 1994)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/31573",
                "name": "X-Men Unlimited Infinity Comic (2021 - Present)"
            }
        ],
        "returned": "20"
    },
    "stories": {
        "available": "63",
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009522/stories",
        "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/15472",
                "name": "Days of Future Past",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/16097",
                "name": "DAREDEVIL (1964) #269",
                "type": "cover"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/17387",
                "name": "Betrayal",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/18887",
                "name": "Incredible Hulk (1962) #369",
                "type": "cover"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/18888",
                "name": "Silent Screams",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/19866",
                "name": "The Razor's Edge Part 2: The Killing Stroke",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/22086",
                "name": "Fallen Angel!",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/22158",
                "name": "A Mother's Eyes",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/22237",
                "name": "Kiss Of Death!",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/22259",
                "name": "Dust To Dust",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/22352",
                "name": "Lost and Found!",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/22357",
                "name": "Cover #22357",
                "type": "cover"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/22358",
                "name": "Sittin' by the Dock of the Bay",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/22376",
                "name": "Spots!",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/24370",
                "name": "Dream's End Part II: Life Decisions",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/27788",
                "name": "Mind Out of Time!",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/27864",
                "name": "Sanction",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/27865",
                "name": "Cover #27865",
                "type": "cover"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/27866",
                "name": "Hell Hath No Fury",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/27908",
                "name": "The Spiral Path",
                "type": "interiorStory"
            }
        ],
        "returned": "20"
    },
    "events": {
        "available": "5",
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009522/events",
        "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
                "name": "Evolutionary War"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
                "name": "Fall of the Mutants"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/32",
                "name": "Kings of Pain"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/263",
                "name": "Mutant Massacre"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
                "name": "Secret Wars"
            }
        ],
        "returned": "5"
    },
    "urls": [
        {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1009522/pyro?utm_campaign=apiRef&utm_source=1a6398753f1b8571f4b2f7e5b57ac2c9"
        },
        {
            "type": "wiki",
            "url": "http://marvel.com/universe/Pyro?utm_campaign=apiRef&utm_source=1a6398753f1b8571f4b2f7e5b57ac2c9"
        },
        {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009522/pyro?utm_campaign=apiRef&utm_source=1a6398753f1b8571f4b2f7e5b57ac2c9"
        }
    ]
}

describe("Page details character", () => {
    it("Should render component character", () => {
        render(<CharacterDetail character={character} />);
        const nameCharacter = screen.getByText("Pyro");
        expect(nameCharacter).toBeInTheDocument();
    })
})