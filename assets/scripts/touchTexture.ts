import {Texture} from 'three'

interface Point {
    x: number;
    y: number;
    age: number;
}
const easeOutSine = (t, b, c, d) => {
  return c * Math.sin((t / d) * (Math.PI / 2)) + b;
};

const easeOutQuad = (t, b, c, d) => {
  t /= d;
  return -c * t * (t - 2) + b;
};

export class TouchTexture{
    height: number
    size: number
    width: number
    radius: number
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    trail: Array<Point>
    maxAge: number
    texture: Texture
    constructor(parent) {
        this.size = 20;
        this.trail = []
        this.maxAge = 10
        this.radius = this.size * 0.03
        this.width = this.height = this.size
        
        this.initTexture()
        
        window.addEventListener('mousemove', (e) => {
            this.onMouseMove(e)
        })
    }

    initTexture(){
        this.canvas = document.createElement("canvas")
        this.canvas.id = "touch-texture"
        this.canvas.height = this.height
        this.canvas.width = this.width
        this.ctx = this.canvas.getContext("2d")
        this.clear()
        this.texture = new Texture(this.canvas)
        requestAnimationFrame(() => this.tick())
    }

    addPoint(pointProto: ({x: number, y: number})){
        this.trail.push({...pointProto, age: 0})
    }

    clear(){
        // this.ctx.fillStyle = "black"
        // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    update(){
        this.clear()
        this.trail.forEach((point, i) => {
            point.age += 1
            if (point.age > this.maxAge) {
                this.trail.splice(i, 1)
            }
        })
        this.trail.forEach((point, i) => {
            this.drawPoint(point);
        });
        this.texture.needsUpdate = true
    }
    
    drawPoint(point) {
        // console.log(this.points)
        const ctx = this.ctx
        const pos = {
            x: point.x * this.width,
            y: point.y * this.height,
        }

        let intensity = 7
        if (point.age < this.maxAge * 0.3) {
            intensity = easeOutSine(point.age / (this.maxAge * 0.3), 0, 1, 1);
        } else {
            intensity = easeOutQuad(
                1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7),
                0,
                1,
                1
            );
        }
         
        const red = point.x * 255
        const green = point.y * 255
        const blue = intensity * 255
        
        const color = `${red}, ${green}, ${blue}`
        const offset = this.width * 5
        
        const radius = this.radius

        ctx.shadowOffsetX = offset; 
        ctx.shadowOffsetY = offset; 
        ctx.shadowBlur = radius * 1; 
        ctx.shadowColor = `rgba(${color},${0.2 * intensity})`; 
        
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(255, 0, 0, 1)";
        this.ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    derender(){
        document.getElementById('WaterTexture')?.remove()
    }

    tick(){
        // console.log(this)
        this.update()
        requestAnimationFrame(() => this.tick())
    }

    onMouseMove(e?: MouseEvent){
        const point = {
			x: e.clientX / window.innerWidth, 
			y: e.clientY / window.innerHeight, 
        }
        this.addPoint(point);
    }
}
