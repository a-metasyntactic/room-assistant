import { Entity } from './entity.dto';
import { StrictEventEmitter } from 'nest-emitter';
import EventEmitter = NodeJS.EventEmitter;
import { EntityCustomization } from './entity-customization.interface';

interface EntitiesEvents {
  newEntity: (
    entity: Entity,
    customizations?: Array<EntityCustomization<any>>
  ) => void;

  stateUpdate: (
    id: string,
    state: boolean | string | number | Buffer,
    distributed?: boolean
  ) => void;

  attributesUpdate: (
    entityId: string,
    attributes: { [key: string]: any },
    distributed?: boolean
  ) => void;
}

export type EntitiesEventEmitter = StrictEventEmitter<
  EventEmitter,
  EntitiesEvents
>;
