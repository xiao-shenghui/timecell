declare module 'timecell' {
    export class TimeCell {
        constructor(o?: object);
        log(): void;
        setOptions(o?: object): object;
        timecell(start: string | number, end?: string | number): string;
        tc(start: string | number, end?: string | number): string;
    }
}