/**
 * State Form Mappings — Auto-Aggregating Barrel
 *
 * Central registry of all state form templates. Each new state adds:
 *   1. A re-export line
 *   2. An import line
 *   3. An entry in ALL_STATE_FORM_TEMPLATES
 *   4. An entry in STATE_FORM_REGISTRY
 *
 * Git auto-merges additions at different alphabetical positions,
 * so parallel workers can each add their states without conflicts.
 */
import type { StateFormTemplate } from '../../types/stateFormMappings.js';
export * from './al40Map.js';
export * from './ar1000fMap.js';
export * from './az140Map.js';
export * from './ca540Map.js';
export * from './ca540nrMap.js';
export * from './co104Map.js';
export * from './dcD40Map.js';
export * from './dePitResMap.js';
export * from './ga500Map.js';
export * from './hiN11Map.js';
export * from './ia1040Map.js';
export * from './id40Map.js';
export * from './il1040Map.js';
export * from './inIt40Map.js';
export * from './ksK40Map.js';
export * from './ky740Map.js';
export * from './laIt540Map.js';
export * from './ma1Map.js';
export * from './md502Map.js';
export * from './me1040Map.js';
export * from './mi1040Map.js';
export * from './mnM1Map.js';
export * from './mo1040Map.js';
export * from './ms80105Map.js';
export * from './mtForm2Map.js';
export * from './ncD400Map.js';
export * from './nd1Map.js';
export * from './ne1040nMap.js';
export * from './nj1040Map.js';
export * from './nmPit1Map.js';
export * from './nyIt201Map.js';
export * from './ohIt1040Map.js';
export * from './ok511Map.js';
export * from './or40Map.js';
export * from './pa40Map.js';
export * from './ri1040Map.js';
export * from './sc1040Map.js';
export * from './utTc40Map.js';
export * from './va760Map.js';
export * from './vtIn111Map.js';
export * from './wiForm1Map.js';
export * from './wvIt140Map.js';
export declare const ALL_STATE_FORM_TEMPLATES: StateFormTemplate[];
export declare const STATE_FORM_REGISTRY: Record<string, StateFormTemplate[]>;
