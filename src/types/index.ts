import {
  GestureEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

export interface GestureEventType
  extends GestureEvent<PanGestureHandlerEventPayload> {}

export interface CoordinateType {
  x: number;
  y: number;
}

export interface BoundSizeType {
  width: number;
  height: number;
}

export interface BoundsType {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export enum DirectionEnum {
  Right,
  Up,
  Left,
  Down,
}
