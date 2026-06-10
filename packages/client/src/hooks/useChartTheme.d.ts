declare const dark: {
    tooltipBg: string;
    tooltipBorder: string;
    tooltipText: string;
    axisLabel: string;
    gridLine: string;
    gridLineMajor: string;
    connector: string;
    svgTextPrimary: string;
    svgTextSecondary: string;
    svgTextMuted: string;
    cardBg: string;
    pointerCap: string;
};
export type ChartTheme = typeof dark;
export declare const chartPalette: {
    blue: string;
    emerald: string;
    amber: string;
    red: string;
    violet: string;
    teal: string;
    orange: string;
    pink: string;
    cyan: string;
    lime: string;
    indigo: string;
    purple: string;
    lightViolet: string;
    purpleLight: string;
    orangeLight: string;
    greenLight: string;
    amberLight: string;
    amberDark: string;
    red600: string;
    blue400: string;
    font: string;
};
export declare function tooltipStyle(t: ChartTheme): {
    fill: string;
    border: {
        color: string;
        width: number;
    };
    textStyle: {
        color: string;
        fontFamily: string;
        size: string;
    };
};
export declare function tooltipStyle13(t: ChartTheme): {
    fill: string;
    border: {
        color: string;
        width: number;
    };
    textStyle: {
        color: string;
        fontFamily: string;
        size: string;
    };
};
export declare function axisLabelStyle(t: ChartTheme): {
    color: string;
    fontFamily: string;
    size: string;
};
export declare function dataLabelFont(t: ChartTheme): {
    color: string;
    fontFamily: string;
    size: string;
    fontWeight: string;
};
export declare function dataLabelFontDark(t: ChartTheme): {
    color: string;
    fontFamily: string;
    size: string;
    fontWeight: string;
};
export declare function useChartTheme(): ChartTheme;
export {};
