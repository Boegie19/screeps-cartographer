import { MoveOpts } from 'lib';

export const config = {
  DEFAULT_MOVE_OPTS: {
    avoidCreeps: false,
    avoidObstacleStructures: true,
    keepTargetInRoom: true,
    roadCost: 1,
    plainCost: 2,
    swampCost: 10
  } as MoveOpts,
  DEFAULT_VISUALIZE_OPTS: {
    fill: 'transparent',
    stroke: '#fff',
    lineStyle: 'dashed',
    strokeWidth: 0.15,
    opacity: 0.1
  } as PolyStyle,
  MEMORY_CACHE_PATH: '_cg',
  MEMORY_CACHE_EXPIRATION_PATH: '_cge'
};
