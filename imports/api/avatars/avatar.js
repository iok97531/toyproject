import FileCollection from "meteor/vsicvsi:file-collection";

export const Avatars = new FileCollection("avatars", {
  resumable: false, // Disable resumable.js upload support
  resumableIndexName: undefined, // Not used when resumable is false
  chunkSize: 2 * 1024 * 1024 - 1024, // Use 2MB chunks for gridFS and resumable
  baseURL: "gridfs/avatars", // Default base URL for all HTTP methods
  locks: {
    // Parameters for gridfs-locks
    timeOut: 360, // Seconds to wait for an unavailable lock
    pollingInterval: 5, // Seconds to wait between lock attempts
    lockExpiration: 90, // Seconds until a lock expires
  },
  http: [], // HTTP method definitions, none by default
});

Meteor.methods({
  "avatars.create"() {
    Avatars.insert();
  },
});
