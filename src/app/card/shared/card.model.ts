export interface CardDeck {
    name: string;
    types: string[];
}

export interface Card {
    cardId: string;
    cardSet: string;
    img: string;
    imgGold: string;
    name: string;

    attack: number;
    cost: number;
    health: number;
    rarity: string;
    type: string;

    dbfId: string;
    faction: string;
    playerClass: string;
    locale: string;

}