declare global {
  interface Window {
    google: {
      maps: any;
    };
  }
}
type MapWidgetProps = {
  className?: string;
  apiKey: string;
  zoom?: number;
  latlng?: string;
  mapStyle?: "roadmap" | "satellite" | "hybrid" | "terrain";
  tooltip?: string;
  title?: string;
  enableScroll?: boolean;
  enableTouch?: boolean;
};
export declare function MapWidget({
  apiKey,
  mapStyle,
  zoom,
  latlng,
  tooltip,
  title,
  enableScroll,
  enableTouch,
  className,
  ...props
}: MapWidgetProps): any;
export {};
