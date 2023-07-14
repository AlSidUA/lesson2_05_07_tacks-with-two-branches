const effectiveness = (heroType, opponentType)=>{
    switch (opponentType.name) {
        case heroType.superEffect.filter(value=> value===opponentType.name)[0]:
            return 2
        case heroType.neutral.filter(value=> value===opponentType.name)[0]:
            return 1
        case heroType.notVeriEffect.filter(value=> value===opponentType.name)[0]:
            return 0.5
        default:
            return 0;
    }
}
    
export const damage = (heroType, opponentType, attackPower, opponentDefense)=>{
    return 50*(attackPower/opponentDefense)*effectiveness(heroType, opponentType);
}
