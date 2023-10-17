import { createThreeController } from "./utils/controller";
import { addBasicLights } from "./utils/lights";
import {
  createOffsetDebugSettings,
  addParametricMesh,
  createParametricGeometry,
} from "./utils/parametric";

const controller = createThreeController(
  "#parametric-scene",
);

controller.camera.position.set(-1, 1, 3).multiplyScalar(2);
addBasicLights(controller);

const options = createOffsetDebugSettings(
  { uOffset: 0, vOffset: 0 },
  true,
  onChange
);

const mesh = addParametricMesh(controller, options);

function onChange() {
  mesh.geometry = createParametricGeometry(options.uOffset, options.vOffset);
  controller.render();
}
