export class InputManager {
  private keys: Set<string> = new Set();
  private mouseX = 0;
  private mouseY = 0;
  private mouseButtons: Set<number> = new Set();

  init() {
    document.addEventListener('keydown', (e) => this.keys.add(e.code));
    document.addEventListener('keyup', (e) => this.keys.delete(e.code));
    document.addEventListener('mousemove', (e) => {
      this.mouseX += e.movementX;
      this.mouseY += e.movementY;
    });
    document.addEventListener('mousedown', (e) => this.mouseButtons.add(e.button));
    document.addEventListener('mouseup', (e) => this.mouseButtons.delete(e.button));
  }

  isKeyDown(code: string): boolean { return this.keys.has(code); }
  isMouseDown(button = 0): boolean { return this.mouseButtons.has(button); }
  getMouseDelta(): { x: number; y: number } { return { x: this.mouseX, y: this.mouseY }; }
  resetMouseDelta() { this.mouseX = 0; this.mouseY = 0; }
  dispose() {
    this.keys.clear();
    this.mouseButtons.clear();
  }
}
