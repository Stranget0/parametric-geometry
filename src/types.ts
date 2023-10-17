import {  OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from "three";

export interface ThreeController {
  scene: Scene;
  renderer: WebGLRenderer;
  camera: OrthographicCamera | PerspectiveCamera;
  render: VoidFunction;
}

export interface ParametricOptions {
  uOffset: number;
  vOffset: number;
}
