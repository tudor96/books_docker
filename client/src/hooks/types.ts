export type OperationResult <D, H = () => void> = [
    {
        data:D;
        loading:boolean;
        error: boolean;
        fetched?:boolean;
    },
    H
];

export type LocalOperationResult <D, H = () => void> = [
    {
        data:D;
    },
    H
]

export type ActivityResult<H = () => void> = [
    {
        loading:boolean;
        error:boolean;
    },
    H
]