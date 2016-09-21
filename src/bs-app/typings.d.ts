declare var module: { id: string };

interface Button {
    type: 'md-button' | 'md-raised-button' | 'md-fab';
    color: string;
}

interface GridLayout {
    cols: number;

}