declare class LineChart {
    constructor(e: HTMLElement);
    draw(data: any, options: any): void;
    clearChart(): void;
}

declare var google: {
    charts: {
        load: (s: string, o: { [ k: string ]: any }) => void,
        setOnLoadCallback: (cb: () => void) => void,
    },
    visualization: {
        arrayToDataTable: (d: any[]) => any,
        LineChart: new(e: HTMLElement) => LineChart,
    },
}
