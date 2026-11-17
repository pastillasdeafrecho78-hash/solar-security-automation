import { LayeredScene } from "./LayeredScene";
import type { Service } from "../services";
export function SceneImage({service}: {service:Service;priority?:boolean}) {
 return <LayeredScene service={service}/>;
}
