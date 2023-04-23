import protoLoader from "@grpc/proto-loader";
import { credentials, loadPackageDefinition } from "@grpc/grpc-js";
import type { ProtoGrpcType } from "$lib/proto/main";
import { URI_USERS, URI_NOTES, URI_UTILS, ENV } from "$env/static/private";

/**
 * This is needed for Vercel functions to work
 */
import { writeFileSync } from "fs";
import mainProto from "$lib/proto/main.proto?raw";
import usersProto from "$lib/proto/users.proto?raw";
import notesProto from "$lib/proto/notes.proto?raw";
import utilsProto from "$lib/proto/utils.proto?raw";
writeFileSync("/tmp/main.proto", mainProto);
writeFileSync("/tmp/users.proto", usersProto);
writeFileSync("/tmp/notes.proto", notesProto);
writeFileSync("/tmp/utils.proto", utilsProto);

export const packageDefinition = protoLoader.loadSync("/tmp/main.proto");
export const proto = loadPackageDefinition(
    packageDefinition,
) as unknown as ProtoGrpcType;

export const usersClient = new proto.proto.UsersService(
    URI_USERS,
    ENV === "production"
        ? credentials.createSsl()
        : credentials.createInsecure(),
);

export const notesClient = new proto.proto.NotesService(
    URI_NOTES,
    ENV === "production"
        ? credentials.createSsl()
        : credentials.createInsecure(),
);

export const utilsClient = new proto.proto.UtilsService(
    URI_UTILS,
    ENV === "production"
        ? credentials.createSsl()
        : credentials.createInsecure(),
);