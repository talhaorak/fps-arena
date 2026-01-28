export class Crosshair {
  private svg: SVGSVGElement;
  private lines: SVGLineElement[] = [];
  private reloadAnim: number | null = null;
  private rotation = 0;

  constructor() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('width', '40');
    this.svg.setAttribute('height', '40');
    this.svg.setAttribute('viewBox', '0 0 40 40');
    this.svg.style.cssText = 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:15;';

    const coords = [[20,5,20,15],[20,25,20,35],[5,20,15,20],[25,20,35,20]];
    coords.forEach(([x1,y1,x2,y2]) => {
      const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      l.setAttribute('x1', String(x1)); l.setAttribute('y1', String(y1));
      l.setAttribute('x2', String(x2)); l.setAttribute('y2', String(y2));
      l.setAttribute('stroke', '#fff'); l.setAttribute('stroke-width', '2');
      this.svg.appendChild(l);
      this.lines.push(l);
    });
    // Center dot
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', '20'); dot.setAttribute('cy', '20'); dot.setAttribute('r', '1.5');
    dot.setAttribute('fill', '#fff');
    this.svg.appendChild(dot);
    document.body.appendChild(this.svg);
  }

  init() { this.svg.style.display = 'block'; }

  update(hit: boolean, reloading: boolean) {
    if (hit) {
      this.lines.forEach(l => { l.setAttribute('stroke', '#f00'); l.setAttribute('stroke-width', '3'); });
      setTimeout(() => this.lines.forEach(l => { l.setAttribute('stroke', '#fff'); l.setAttribute('stroke-width', '2'); }), 100);
    }
    if (reloading && !this.reloadAnim) {
      const spin = () => { this.rotation += 2; this.svg.style.transform = `translate(-50%,-50%) rotate(${this.rotation}deg)`; this.reloadAnim = requestAnimationFrame(spin); };
      spin();
    } else if (!reloading && this.reloadAnim) {
      cancelAnimationFrame(this.reloadAnim);
      this.reloadAnim = null;
      this.svg.style.transform = 'translate(-50%,-50%)';
    }
  }
}
