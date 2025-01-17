// Original file: ../proto/utils.proto

import type { FileType as _proto_FileType, FileType__Output as _proto_FileType__Output } from '../proto/FileType';

export interface File {
  'id'?: (string);
  'created'?: (string);
  'updated'?: (string);
  'deleted'?: (string);
  'targetId'?: (string);
  'name'?: (string);
  'type'?: (_proto_FileType);
  'buffer'?: (Buffer | Uint8Array | string);
  '_deleted'?: "deleted";
}

export interface File__Output {
  'id': (string);
  'created': (string);
  'updated': (string);
  'deleted'?: (string);
  'targetId': (string);
  'name': (string);
  'type': (_proto_FileType__Output);
  'buffer': (Buffer);
  '_deleted': "deleted";
}
