import { Texture } from 'three'

export class Text2d {
    texture: Texture;
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    width: number;
    height: number;

    constructor(text: string, options: any){
        const canvas = document.createElement("canvas")
        this.ctx = canvas.getContext("2d");
        const fontSize = options.fontSize || 30;
        this.ctx.font = `${fontSize}px monospace`;

        const textDims = this.ctx.measureText(text);

        canvas.width = textDims.width
        canvas.height = fontSize

        canvas.style.width = textDims.width + 'px';
        canvas.style.width = fontSize + 'px';

        this.ctx.font = `${fontSize}px monospace`;
        this.ctx.textAlign = options.align || "center";
        this.ctx.textBaseline = options.baseline || "middle";
        this.ctx.fillStyle = "transparent";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height)
        this.ctx.fillStyle = options.color || "white";
        this.ctx.fillText(text, canvas.width / 2, canvas.height / 2);

        this.canvas = canvas;
        this.height = canvas.height;
        this.width = canvas.width;

        this.texture = new Texture(canvas)
    }

    getTexture(){
        return this.texture;
    }
}

export default Text2d;
