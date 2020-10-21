import { useCallback, useEffect, useState } from 'react';
import { D_DRAGON_URL, API_URL } from '../constants';

function mergeChampionsData(championsMap, summoner) {
    return summoner.champions.map((champ) => ({
        ...champ,
        ...championsMap[champ.championId],
    }));
}

async function fetchChampionsJSON() {
    const url = `${D_DRAGON_URL}/data/en_US/champion.json`;
    const response = await fetch(url);

    if (response.ok) {
        const json = await response.json();

        const champions = Object.values(json.data);
        return champions.reduce((acc, champ) => ({
            ...acc,
            [ champ.key ]: champ,
        }), {});
    }

    throw new Error(`Error fetching champions.json from Riot API, url: ${url}`);
}

async function fetchMasteryChest(value) {
    // const response = await fetch(`${API_URL}/form`, {
    //     method: 'POST',
    //     body: JSON.stringify(value),
    // });

    const foo = {
        "id": "23OGJrH41PLSAzMNN-s2QhLWnoCzAaoBC7-spW9VGQnyHkM",
        "name": "Sad",
        "profileIconId": 3553,
        "champions": [
            {
                "championLevel": 7,
                "chestGranted": true,
                "championPoints": 383403,
                "championId": 420,
                "lastPlayTime": 1600454376000
            },
            {
                "championLevel": 6,
                "chestGranted": false,
                "championPoints": 147171,
                "championId": 115,
                "lastPlayTime": 1598378000000
            },
            {
                "championLevel": 7,
                "chestGranted": false,
                "championPoints": 129837,
                "championId": 432,
                "lastPlayTime": 1597892450000
            },
            {
                "championLevel": 6,
                "chestGranted": true,
                "championPoints": 107468,
                "championId": 99,
                "lastPlayTime": 1598984658000
            },
            {
                "championLevel": 5,
                "chestGranted": false,
                "championPoints": 77996,
                "championId": 81,
                "lastPlayTime": 1601567973000
            },
            {
                "championLevel": 5,
                "chestGranted": false,
                "championPoints": 76856,
                "championId": 63,
                "lastPlayTime": 1599190713000
            },
            {
                "championLevel": 6,
                "chestGranted": false,
                "championPoints": 55739,
                "championId": 203,
                "lastPlayTime": 1600461879000
            },
            {
                "championLevel": 5,
                "chestGranted": false,
                "championPoints": 44311,
                "championId": 53,
                "lastPlayTime": 1600196303000
            },
            {
                "championLevel": 5,
                "chestGranted": false,
                "championPoints": 44074,
                "championId": 58,
                "lastPlayTime": 1529484969000
            },
            {
                "championLevel": 6,
                "chestGranted": false,
                "championPoints": 43769,
                "championId": 89,
                "lastPlayTime": 1527704991000
            },
            {
                "championLevel": 5,
                "chestGranted": false,
                "championPoints": 38073,
                "championId": 254,
                "lastPlayTime": 1561441172000
            },
            {
                "championLevel": 5,
                "chestGranted": false,
                "championPoints": 33034,
                "championId": 21,
                "lastPlayTime": 1598398195000
            },
            {
                "championLevel": 5,
                "chestGranted": false,
                "championPoints": 25517,
                "championId": 75,
                "lastPlayTime": 1597607987000
            },
            {
                "championLevel": 5,
                "chestGranted": false,
                "championPoints": 23783,
                "championId": 14,
                "lastPlayTime": 1597597295000
            },
            {
                "championLevel": 5,
                "chestGranted": false,
                "championPoints": 23145,
                "championId": 106,
                "lastPlayTime": 1522022886000
            },
            {
                "championLevel": 5,
                "chestGranted": false,
                "championPoints": 23136,
                "championId": 84,
                "lastPlayTime": 1527928632000
            },
            {
                "championLevel": 5,
                "chestGranted": false,
                "championPoints": 21986,
                "championId": 54,
                "lastPlayTime": 1597803794000
            },
            {
                "championLevel": 4,
                "chestGranted": false,
                "championPoints": 19331,
                "championId": 62,
                "lastPlayTime": 1536170675000
            },
            {
                "championLevel": 4,
                "chestGranted": false,
                "championPoints": 17934,
                "championId": 223,
                "lastPlayTime": 1598381781000
            },
            {
                "championLevel": 4,
                "chestGranted": false,
                "championPoints": 17562,
                "championId": 98,
                "lastPlayTime": 1597606003000
            },
            {
                "championLevel": 4,
                "chestGranted": false,
                "championPoints": 16518,
                "championId": 56,
                "lastPlayTime": 1587634235000
            },
            {
                "championLevel": 4,
                "chestGranted": false,
                "championPoints": 15431,
                "championId": 122,
                "lastPlayTime": 1561517479000
            },
            {
                "championLevel": 4,
                "chestGranted": false,
                "championPoints": 15188,
                "championId": 36,
                "lastPlayTime": 1599003552000
            },
            {
                "championLevel": 4,
                "chestGranted": false,
                "championPoints": 15172,
                "championId": 45,
                "lastPlayTime": 1526297170000
            },
            {
                "championLevel": 4,
                "chestGranted": false,
                "championPoints": 14159,
                "championId": 5,
                "lastPlayTime": 1492128686000
            },
            {
                "championLevel": 4,
                "chestGranted": false,
                "championPoints": 14131,
                "championId": 24,
                "lastPlayTime": 1526918449000
            },
            {
                "championLevel": 4,
                "chestGranted": false,
                "championPoints": 13336,
                "championId": 154,
                "lastPlayTime": 1597011675000
            },
            {
                "championLevel": 4,
                "chestGranted": false,
                "championPoints": 12989,
                "championId": 59,
                "lastPlayTime": 1523991594000
            },
            {
                "championLevel": 4,
                "chestGranted": false,
                "championPoints": 12640,
                "championId": 113,
                "lastPlayTime": 1490617452000
            },
            {
                "championLevel": 4,
                "chestGranted": false,
                "championPoints": 12620,
                "championId": 120,
                "lastPlayTime": 1597805633000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 11717,
                "championId": 103,
                "lastPlayTime": 1598375723000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 11264,
                "championId": 82,
                "lastPlayTime": 1529597202000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 9696,
                "championId": 12,
                "lastPlayTime": 1601042394000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 8939,
                "championId": 25,
                "lastPlayTime": 1528411190000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 8507,
                "championId": 85,
                "lastPlayTime": 1601040464000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 8240,
                "championId": 17,
                "lastPlayTime": 1561580655000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 8001,
                "championId": 57,
                "lastPlayTime": 1525876203000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 7824,
                "championId": 121,
                "lastPlayTime": 1529774879000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 7645,
                "championId": 3,
                "lastPlayTime": 1490543306000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 7304,
                "championId": 22,
                "lastPlayTime": 1526574275000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 7023,
                "championId": 90,
                "lastPlayTime": 1597868878000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 6586,
                "championId": 67,
                "lastPlayTime": 1525911222000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 6573,
                "championId": 11,
                "lastPlayTime": 1527124599000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 6544,
                "championId": 48,
                "lastPlayTime": 1492484939000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 6530,
                "championId": 38,
                "lastPlayTime": 1496936925000
            },
            {
                "championLevel": 3,
                "chestGranted": false,
                "championPoints": 6229,
                "championId": 110,
                "lastPlayTime": 1519101620000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 5980,
                "championId": 68,
                "lastPlayTime": 1597851016000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 5720,
                "championId": 83,
                "lastPlayTime": 1493914307000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 5669,
                "championId": 202,
                "lastPlayTime": 1597878339000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 5589,
                "championId": 35,
                "lastPlayTime": 1527933206000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 5488,
                "championId": 86,
                "lastPlayTime": 1461348996000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 5455,
                "championId": 150,
                "lastPlayTime": 1597874949000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 5442,
                "championId": 37,
                "lastPlayTime": 1531760175000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 5219,
                "championId": 69,
                "lastPlayTime": 1598324181000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 5063,
                "championId": 33,
                "lastPlayTime": 1487696469000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 5058,
                "championId": 23,
                "lastPlayTime": 1526956803000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 4995,
                "championId": 8,
                "lastPlayTime": 1462899547000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 4495,
                "championId": 64,
                "lastPlayTime": 1599417782000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 4410,
                "championId": 266,
                "lastPlayTime": 1579646660000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 4209,
                "championId": 51,
                "lastPlayTime": 1601301334000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 4194,
                "championId": 412,
                "lastPlayTime": 1528703544000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 3892,
                "championId": 117,
                "lastPlayTime": 1531926462000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 3746,
                "championId": 517,
                "lastPlayTime": 1548817191000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 3688,
                "championId": 27,
                "lastPlayTime": 1597589141000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 3597,
                "championId": 131,
                "lastPlayTime": 1532020629000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 3472,
                "championId": 238,
                "lastPlayTime": 1486540334000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 3459,
                "championId": 19,
                "lastPlayTime": 1508379699000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 3278,
                "championId": 429,
                "lastPlayTime": 1524443220000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 3266,
                "championId": 163,
                "lastPlayTime": 1597809237000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 3253,
                "championId": 15,
                "lastPlayTime": 1527040834000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 3068,
                "championId": 28,
                "lastPlayTime": 1522200691000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2811,
                "championId": 55,
                "lastPlayTime": 1466886212000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2714,
                "championId": 2,
                "lastPlayTime": 1561482364000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2693,
                "championId": 245,
                "lastPlayTime": 1526475848000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2644,
                "championId": 119,
                "lastPlayTime": 1529251698000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2608,
                "championId": 31,
                "lastPlayTime": 1597591108000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2594,
                "championId": 222,
                "lastPlayTime": 1526921591000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2576,
                "championId": 32,
                "lastPlayTime": 1493222553000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2493,
                "championId": 268,
                "lastPlayTime": 1519334421000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2470,
                "championId": 79,
                "lastPlayTime": 1527708926000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2348,
                "championId": 427,
                "lastPlayTime": 1478572296000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2212,
                "championId": 107,
                "lastPlayTime": 1516169833000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2105,
                "championId": 39,
                "lastPlayTime": 1460383996000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2090,
                "championId": 498,
                "lastPlayTime": 1527468437000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2088,
                "championId": 76,
                "lastPlayTime": 1459622051000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 2048,
                "championId": 60,
                "lastPlayTime": 1515512235000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 1961,
                "championId": 104,
                "lastPlayTime": 1487246677000
            },
            {
                "championLevel": 2,
                "chestGranted": false,
                "championPoints": 1862,
                "championId": 42,
                "lastPlayTime": 1597887465000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1468,
                "championId": 164,
                "lastPlayTime": 1579642789000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1389,
                "championId": 7,
                "lastPlayTime": 1529280640000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1352,
                "championId": 9,
                "lastPlayTime": 1436813463000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1344,
                "championId": 105,
                "lastPlayTime": 1550569260000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1341,
                "championId": 114,
                "lastPlayTime": 1444597211000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1340,
                "championId": 1,
                "lastPlayTime": 1525696222000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1315,
                "championId": 141,
                "lastPlayTime": 1523395206000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1306,
                "championId": 134,
                "lastPlayTime": 1479839450000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1268,
                "championId": 518,
                "lastPlayTime": 1544708653000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1267,
                "championId": 29,
                "lastPlayTime": 1493911410000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1242,
                "championId": 143,
                "lastPlayTime": 1552380996000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1145,
                "championId": 44,
                "lastPlayTime": 1454640152000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1131,
                "championId": 43,
                "lastPlayTime": 1496974825000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1078,
                "championId": 80,
                "lastPlayTime": 1456721704000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 1033,
                "championId": 77,
                "lastPlayTime": 1458832394000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 953,
                "championId": 201,
                "lastPlayTime": 1522198107000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 902,
                "championId": 157,
                "lastPlayTime": 1529309813000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 899,
                "championId": 240,
                "lastPlayTime": 1494964490000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 596,
                "championId": 61,
                "lastPlayTime": 1467463222000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 551,
                "championId": 111,
                "lastPlayTime": 1526570114000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 387,
                "championId": 516,
                "lastPlayTime": 1599419013000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 349,
                "championId": 13,
                "lastPlayTime": 1455190767000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 348,
                "championId": 10,
                "lastPlayTime": 1513772365000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 344,
                "championId": 360,
                "lastPlayTime": 1601303782000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 336,
                "championId": 74,
                "lastPlayTime": 1494675513000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 335,
                "championId": 236,
                "lastPlayTime": 1494072463000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 315,
                "championId": 50,
                "lastPlayTime": 1579627573000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 300,
                "championId": 18,
                "lastPlayTime": 1521421019000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 288,
                "championId": 555,
                "lastPlayTime": 1527930754000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 240,
                "championId": 102,
                "lastPlayTime": 1458706897000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 217,
                "championId": 30,
                "lastPlayTime": 1445809750000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 200,
                "championId": 78,
                "lastPlayTime": 1458139243000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 181,
                "championId": 41,
                "lastPlayTime": 1525255735000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 178,
                "championId": 127,
                "lastPlayTime": 1601570651000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 175,
                "championId": 126,
                "lastPlayTime": 1490967685000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 171,
                "championId": 91,
                "lastPlayTime": 1444403864000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 160,
                "championId": 92,
                "lastPlayTime": 1550211365000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 155,
                "championId": 16,
                "lastPlayTime": 1490456326000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 134,
                "championId": 497,
                "lastPlayTime": 1528212312000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 122,
                "championId": 40,
                "lastPlayTime": 1460462668000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 115,
                "championId": 142,
                "lastPlayTime": 1527461578000
            },
            {
                "championLevel": 1,
                "chestGranted": false,
                "championPoints": 106,
                "championId": 20,
                "lastPlayTime": 1490189173000
            }
        ]
    }
    // if (response.ok) {
        const [summonerData, championsMap] = await Promise.all([foo, fetchChampionsJSON()]);

        return {
            name: summonerData.name,
            profileIconId: summonerData.profileIconId,
            champions: mergeChampionsData(championsMap, summonerData),
        };
    // } else if (response.status === 404) {
    //     throw new Error(`Summoner with name "${value}" not found :(`);
    // } else {
    //     console.error(response);
    //     throw new Error(`Error occurred. Status: ${response.status}`);
    // }
}

const useSummoner = (value) => {
    const [summoner, setSummoner] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setError(undefined);
    }, [summoner])

    const fetchSummoner = useCallback(  async () => {
        try {
            setSummoner(undefined);
            setLoading(true);
            const results = await fetchMasteryChest(value);
            setLoading(false);

            setSummoner(results);
        } catch (e) {
            setLoading(false);
            console.error(e);
            setError(e);
        }
    }, [value]);

    return { fetchSummoner, summoner, error, loading };
};

export default useSummoner;
