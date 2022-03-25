declare enum PosX {
    TOP = "top",
    BOTTOM = "bottom"
}
declare enum PosY {
    RIGHT = "right",
    LEFT = "left"
}
export declare const Pos: {
    RIGHT: PosY.RIGHT;
    LEFT: PosY.LEFT;
    TOP: PosX.TOP;
    BOTTOM: PosX.BOTTOM;
};
export interface FeeditConfig {
    position: [PosX, PosY];
    hook: string;
}
export interface Feedback {
    contact: string;
    content: string;
}
export declare class Feedit {
    constructor(config: FeeditConfig);
}
export {};
