export class DcCardProperties {

    private readonly _icon: string;
    private readonly _title: string;
    private readonly _content: string;

    constructor(icon: string, title: string, content: string) {
        this._icon = icon;
        this._title = title;
        this._content = content;
    }

    get icon(): string { return this._icon; }

    get title(): string { return this._title; }

    get content(): string { return this._content; }

}
