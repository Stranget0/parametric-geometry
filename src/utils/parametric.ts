import { ParametricGeometry } from "three/examples/jsm/geometries/ParametricGeometry.js";
import {
  Vector3,
  Mesh,
  MeshLambertMaterial,
	DoubleSide,
} from "three";
import { ParametricOptions, ThreeController } from "../types";

export function createOffsetDebugSettings(
  options: ParametricOptions,
  isDebugActive: boolean,
  onChange: VoidFunction
) {
  if (isDebugActive) {
    import("dat.gui").then(({ GUI }) => {
      const gui = new GUI();
      const optionsFolder = gui.addFolder("options");
      optionsFolder.add(options, "uOffset", 0, 2 * Math.PI).onChange(onChange);
      optionsFolder.add(options, "vOffset", 0, 2 * Math.PI).onChange(onChange);
    });
  }

  return options;
}

export function addParametricMesh(
  controller: ThreeController,
  options: ParametricOptions
) {
  const m = new MeshLambertMaterial({ color: 0x005555,side: DoubleSide });
  const g = createParametricGeometry(options.uOffset, options.vOffset);
  const parametricMesh = new Mesh(g, m);
  controller.scene.add(parametricMesh);
  controller.render();

  return parametricMesh;
}

export function createParametricGeometry(
  uOffset: number,
  vOffset: number
): ParametricGeometry {
  const f = (u: number, v: number, target: Vector3) => {
    const uf = u + uOffset;
    const vf = v + vOffset;

    const x = uf * Math.sin(vf);
    const y = uf * Math.cos(vf);
    const z = vf * Math.cos(uf);

    return target.set(x, y, z);
  };

  return new ParametricGeometry(f, 100, 100);
}

