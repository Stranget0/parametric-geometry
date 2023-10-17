import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { ThreeController } from "../types";

export function createThreeController(containerSelector: string) {
  const container = document.querySelector<HTMLElement>(containerSelector);
  if (!container) throw new Error("No canvas found");

  // basic threejs objects
  const { clientWidth: width, clientHeight: height } = container;
  const scene = new Scene();
  const camera = new PerspectiveCamera(90, width / height);
  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
  });

  renderer.setSize(width, height);
  container.append(renderer.domElement);

  window.addEventListener("resize", () => {
    const container = renderer.domElement.parentElement!;
    const { width, height } = container.getBoundingClientRect();

		renderer.setPixelRatio(window.devicePixelRatio);
		if ("aspect" in camera) {
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		}

    renderer.setSize(width, height);
		renderer.render(scene, camera)
  });

  const controller: ThreeController = {
    scene,
    camera,
    renderer,
    render() {
      this.renderer.render(this.scene, this.camera);
    },
  };
  return controller;
}
