import Effectiveness from "./klasseffect";

const fire = "FIRE";
const water = "WATER";
const grass = "GRASS";
const electric = "ELECTRIC";

const FIRE = new Effectiveness (fire, [grass], [electric], [fire, water]);
const WATER = new Effectiveness (water, [fire], [], [water, grass, electric]);
const GRASS = new Effectiveness (grass, [water], [electric], [fire]);
const ELECTRIC = new Effectiveness (electric, [water], [fire, grass], [electric])

export {FIRE, WATER, GRASS, ELECTRIC}