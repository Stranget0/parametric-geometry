import {
	DirectionalLight,
	HemisphereLight
} from "three";
import { ThreeController } from "../types";


export function addBasicLights(controller: ThreeController) {
	const mainLight = new DirectionalLight(16777215, 1);
	const hemiLight = new HemisphereLight(16711422, 524288, 0.8);
	const subLight1 = new DirectionalLight(16777215, 0.5);

	mainLight.position.set(-1, 1, 0);
	subLight1.position.set(-1, 1, 3);
	controller.scene.add(mainLight, hemiLight, subLight1);
	controller.render();
}
