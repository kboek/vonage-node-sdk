import { RecordAction as RecordActionType } from '../../types';
import debug from 'debug';

debug('@vonage/voice')(

  'This interface is deprecated. Please update to use the RecordActionType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the RecordActionType type
 */
export type RecordAction = RecordActionType;
