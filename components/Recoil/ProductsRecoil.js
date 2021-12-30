import { atom } from "recoil";

export const productsState = atom({
    key: "productsState",
    default: [
        {
            "id": 1,
            "name": "2022 R nineT Scrambler",
            "description": "The R nineT Scrambler knows no conventions: rough, unadapted, individual. Its handling is balanced and unique. With the boxer, you can ride around with your head held high, it is available for every spontaneity.",
            "price": "28,390",
            "img": "https://i.ibb.co/QnkqVMW/bmw.jpg"
        },
        {
            "id": 2,
            "name": "2022 R nineT Pure",
            "description": "Reduced to the essential. But full of self-confidence. The BMW R nineT Pure. The powerful air/oil-cooled engine gives you goosebumps on the tarmac.",
            "price": "32,291",
            "img": "https://i.ibb.co/wNFMmzS/79537227-463948757864736-300212518559986839-n.jpg"
        },
        {
            "id": 3,
            "name": "2022 M 1000 RR",
            "description": "our competitive spirit drives you. Your passion dominates and challenges you. The search for more defines every millisecond: pure motorsport. High performance, high-tech materials, the highest-quality workmanship and exclusivity down to the last detail:",
            "price": "25,123",
            "img": "https://i.ibb.co/PGD8Xpy/151672382-768363337439885-1226213494367523491-n.jpg"
        },
        {
            "id": 4,
            "name": "2022 R 18 Classic",
            "description": "The R 18 Classic is a modern cruiser with a nostalgic sense of BMW design. It reminds one of the first BMW cruisers suitable for touring. It also invokes timeless marks of our motorcycle history, such as with the white double pinstripe found on the R 18 Classic First Edition",
            "price": "34,320",
            "img": "https://i.ibb.co/bvtzgGN/95557648-237076730704400-604171637791056738-n.jpg"
        },
        {
            "id": 5,
            "name": "Royal Enfield Himalayan",
            "description": "The Himalayan is an Indian adventure touring motorcycle manufactured by Royal Enfield, premiering in February 2015 and launched early 2016. Pierre Terblanche led the design team during Himalayan's development",
            "price": "28,411",
            "img": "https://i.ibb.co/PMgjRxV/royal-enfield-himalayan.jpg"
        },
        {
            "id": 6,
            "name": "Continental GT 650",
            "description": "Royal Enfield Continental GT 650 is a cafe racer bike available at a starting price of Rs. 2,97,020 in India. It is available in 3 variants and 5 colours",
            "price": "32,330",
            "img": "https://i.ibb.co/7r164yj/photo-1622185135505-2d795003994a-1.jpg"
        },
        {
            "id": 7,
            "name": "THE BMW C 400 GT",
            "description": "A vibrant metropolis. Novelty around every corner. You have unlimited options with the C 400 GT: climb on, set off, enjoy and just keep going – even beyond city limits. ",
            "price": "25,322",
            "img": "https://i.ibb.co/FbHFC87/bmw-c-400-X-00.jpg"
        },
        {
            "id": 8,
            "name": "THE BMW F 900 XR",
            "description": "XR stands for the uncompromising combination of athleticism and long-distance performance: Adrenaline for days, curve for curve. On the F 900 XR, you can keep hunting these curves without stopping – mile after mile. Even its thrilling design promises pure performance. While the upright, relaxed sitting position and the wind and weather protector show: Only one person decides when your ride is over – you.",
            "price": "32,111",
            "img": "https://i.ibb.co/mbPWMrN/119935756-135187311643253-8269997206238053103-n.jpg"
        },
        {
            "id": 9,
            "name": "THE BMW R 18 TRANSCONTINENTAL",
            "description": "The R 18 Transcontinental offers you exclusive and luxurious traveling. As a member of the R 18 family it represents BMW Motorrad’s tradition and is deeply rooted in the here and now: its unmistakable front end with the tall windscreen and the mighty Big Boxer promise a comfortable, powerful ride for miles.",
            "price": "33,390",
            "img": "https://i.ibb.co/pyJtxF7/91112646-503029610367055-1154136224906870942-n.jpg"
        },
        {
            "id": 10,
            "name": "THE BMW R 1250 RS",
            "description": "Each tour is determined by two factors: time and distance. With the  BMW R 1250 RS you can get more out of every tour. The rich 105 lb-ft torque and 136 hp of the boxer engine accelerate you quickly to your cruising speed. The innovative BMW ShiftCam technology offers you more torque over the entire speed range, so you can rocket to an impressive sprint in every riding situation. ",
            "price": "26,234",
            "img": "https://i.ibb.co/9wHHgVv/50933669-309595103030409-2088085427206074750-n.jpg"
        },
    ],
})

export const viewState = atom({
    key: "viewState",
    default: "column",
})