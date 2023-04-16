import showdown from 'showdown';

const converter = new showdown.Converter();

export default function showdownPlugin(md: string): string {
    return converter.makeHtml(md);
}