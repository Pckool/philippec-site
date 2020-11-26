import {Effect} from 'postprocessing'
import {Texture, Uniform} from 'three'
const fragment = `
uniform sampler2D uTexture;
#ifdef PI    
#else
    #define PI 3.14159265359
#endif
// 

    void mainUv(inout vec2 uv) {
        vec4 tex = texture2D(uTexture, uv);
		// Convert normalized values into regular unit vector
        float vx = -(tex.r *2. - 1.);
        float vy = -(tex.g *2. - 1.);
		// Normalized intensity works just fine for intensity
        float intensity = tex.b;
        float maxAmplitude = 0.2;
        uv.x += vx * intensity * maxAmplitude;
        uv.y += vy * intensity * maxAmplitude;
    }
`;

export class WaterEffect extends Effect {
    constructor(texture: Texture){
        super("WaterEffect", fragment, {
            uniforms: new Map([['uTexture', new Uniform(texture)]])
        })
    }
}

export default WaterEffect;
