import { Category } from "../models/category.models";

export const CATEGORIES: Category[] = [
    {
        title: 'game',
        icon: 'videogame_asset',
        value: 'game',
        color: 'teal',
        url: '/home/game'
    },
    {
        title: 'score',
        icon: 'score',
        value: 'score',
        color: 'cyan',
        url: '/home/score'
    },
    {
        title: 'opinion',
        icon: 'opinion',
        value: 'opinion',
        color: 'red',
        url: '/home/opinion'
    }
];