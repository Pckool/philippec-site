
import anime from 'animejs'
import {defineComponent, onMounted, ref, reactive, onBeforeUnmount} from '@nuxtjs/composition-api'
import {Scene, PerspectiveCamera, WebGLRenderer, PlaneBufferGeometry, MeshNormalMaterial, Mesh, Clock, Raycaster, MeshBasicMaterial, TextureLoader, MeshLambertMaterial, PlaneGeometry, PointLight, FontLoader, Font, TextGeometry, BufferGeometry, AmbientLight} from 'three'
import {EffectComposer, RenderPass, Effect, EffectPass} from 'postprocessing'
import Text2d, {} from './Text2d'
import { WaveShader } from '~/assets/scripts/waveShader'

interface AddTextOptions {
    [key: string]: any
}
export class ThreeInstance {
    scene: Scene
    camera: PerspectiveCamera
    renderer: WebGLRenderer
    composer: EffectComposer
    clock: Clock
    raycaster: Raycaster
    aspectRatio: number;
    backgroundAspectRatio: number;
    assets: any
    subjects: Array<any>
    hitObjects: Array<any>
    id: number
    elId: string
    background: Mesh
    
    constructor(mount: HTMLElement){
        this.id = Date.now();
        this.elId = 'threeCanvas-' + this.id;
        this.aspectRatio = window.innerWidth / window.innerHeight;

        this.renderer = reactive<WebGLRenderer>(new WebGLRenderer({antialias: false, alpha: true, powerPreference: 'high-performance'}));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor('#000000', 0.0);

        this.composer = new EffectComposer(this.renderer);
        
        const mnt = mount || document.body
        mnt.appendChild(this.renderer.domElement);
        this.renderer.domElement.classList.add('three');

        this.renderer.domElement.id = this.elId;
        
        this.camera = new PerspectiveCamera(
            75, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            1000
        );
        this.camera.position.z = 50;
        
        this.scene = new Scene();
        this.clock = new Clock()

        this.assets = {};
        this.raycaster = new Raycaster();
        this.hitObjects = [];
        
        const ctx = (<HTMLCanvasElement>document.body.querySelector(`#${this.elId}`)).getContext("2d")
        ctx?.clearRect(0, 0, window.innerWidth, window.innerHeight);
        const precForm = this.renderer.getContext().getShaderPrecisionFormat(this.renderer.getContext().VERTEX_SHADER, this.renderer.getContext().MEDIUM_FLOAT)

        window.addEventListener('resize', () => {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.camera.updateMatrixWorld()
        });

        const light1 = new PointLight(0xFFFFFF, 1, 0);
        // Specify the light's position
        light1.position.set(1, 1, 100);
        // Add the light to the scene
        this.scene.add(light1)
        const viewSize = this.getViewSize();
        
        this.backgroundAspectRatio = 450 / 574;

        const bgHeight = window.innerWidth > 1000 ? 37.0 : 23.0

        const geometry = new PlaneGeometry(bgHeight * this.backgroundAspectRatio,
        bgHeight, 16, 16)

        const mesh = new Mesh(geometry);
        this.background = mesh;

        mesh.position.set(0, 0, 0)

        this.scene.add(mesh);

        this.initComposer();
        this.render()
    }

    render(){
        requestAnimationFrame(() => {
            this.composer.render(this.clock.getDelta())
            // this.renderer.render(this.scene, this.camera);
            this.render();
        })
    }

    dispose(){
        document.body.querySelector(`#${this.elId}`)?.remove()
        // window.removeEventListener("mousemove")
    }
        
    initComposer(){
        const renderPass: RenderPass = new RenderPass(this.scene, this.camera);

        renderPass.renderToScreen = false;
        this.composer.addPass(renderPass);
    }

    addPlane(){
        const viewSize = this.getViewSize();
        const geometry = new PlaneBufferGeometry(
            viewSize.width,
            viewSize.height,
            1,
            1
        );
        const material = new MeshBasicMaterial();
        const mesh = new Mesh(geometry, material);

        this.hitObjects.push(mesh);
    }

    getViewSize() {
        const fovInRadians = (this.camera.fov * Math.PI) / 180;
        const height = Math.abs(
        this.camera.position.z * Math.tan(fovInRadians / 2) * 2
        );

        return { width: height * this.camera.aspect, height };
    }

    async setBackground(img: string){
        await this.hideBackground();

        const loader = new TextureLoader();
        const material = new MeshLambertMaterial({
            map: loader.load(img),
            transparent: true,
        })
        // const material = new WaveShader(loader.load(img)).material

        this.background.material = material;
        await anime({
            targets: this.background.material,
            opacity: [0, 1],
            duration: 300,
            easing: 'easeInOutQuad'
        }).finished;
    }

    async hideBackground(){
        await anime({
            targets: this.background.material,
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInOutQuad'
        }).finished;
    }

    addText(x: number, y: number, text: string, fontFile: string, options: AddTextOptions = {}){
        // if (options === {}) { console.log(options); options.size = 10 }

        // const loader = new FontLoader();
        // loader.load(fontFile, (font: Font) => {
        //     const textGeom = new TextGeometry(text, {
        //         font,
        //         size: 13,
        //         height: 0,
        //     })
        //     textGeom.computeBoundingBox()
        //     textGeom.computeVertexNormals()
            
        //     const geom = new BufferGeometry().fromGeometry(textGeom)
        //     const textMesh = new Mesh(geom, new MeshBasicMaterial({
        //         color: 0xFFFFFF,
        //     }));
        //     this.scene.add(textMesh)
        //     // textMesh.position.x = x;
        //     // textMesh.position.y = y;
        //     textMesh.position.set(x, y, 1)
        // })
        const textObj = new Text2d(text, {})

        const geom = new PlaneBufferGeometry(
            
        );
        
        const textMesh = new Mesh(geom, new MeshBasicMaterial({map: textObj.getTexture()}));

        this.scene.add(textMesh)
    }

    addEffect(effect: Effect){
        const effectPass = new EffectPass(this.camera, effect)
        this.composer.addPass(effectPass);
        
        effectPass.renderToScreen = true;
        this.render()
    }
}

export default ThreeInstance;
