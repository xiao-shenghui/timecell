declare module 'timecell' {
    interface options {
        mode?: number,
        lang?: string,
        debug?: boolean
    }
    export class TimeCell {
        constructor(o?: options);
        log(): void;
        setOptions(o?: object): object;
        timecell(start: string | number, end?: string | number): string;
        tc(start: string | number, end?: string | number): string;
    }
}