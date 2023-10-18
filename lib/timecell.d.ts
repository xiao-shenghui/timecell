declare module 'timecell' {
    interface options {
        mode?: number,
        lang?: string,
        debug?: boolean
    }
    export default class TimeCell {
        constructor(o?: options);
        log(): void;
        setOptions(o?: options): object;
        timecell(start: string | number, end?: string | number): string;
        tc(start: string | number, end?: string | number): string;
    }
};