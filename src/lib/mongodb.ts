import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

// Explicit DB name so we don't silently fall back to Mongoose's
// default "test" database when the URI has no /dbname segment.
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME || "travel-unbounded";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || {
  conn: null,
  promise: null,
};

global.mongooseCache = cached;

export async function connectToDatabase() {
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI as string, {
        dbName: MONGODB_DB_NAME,
        bufferCommands: false,
      })
      .catch((err) => {
        // Reset the cached promise on failure so the next request
        // retries the connection instead of reusing a rejected promise.
        cached.promise = null;
        throw err;
      });
  }

  cached.conn = await cached.promise;

  return cached.conn;
}

// Convenience helper for anything that needs the raw native `Db`
// object (e.g. running admin commands like ping) instead of Mongoose
// models. `mongoose.connection.db` is only populated once connected.
export async function getDb() {
  await connectToDatabase();

  if (!mongoose.connection.db) {
    throw new Error("MongoDB connection has no active db handle");
  }

  return mongoose.connection.db;
}
