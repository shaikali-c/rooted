import { ObjectId } from "mongodb";
import { getDB } from "./mongodb";

export async function storeEncryptedDoc({
  ownerId, // string (optional)
  ownerHash, // string (optional)
  crypto, // encrypted payload object
}) {
  if (!ownerId && !ownerHash) {
    throw new Error("ownerId or ownerHash is required");
  }

  const db = await getDB();

  const doc = {
    ownerId: ownerId ? new ObjectId(ownerId) : undefined,
    ownerHash: ownerHash || undefined,

    crypto,

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const res = await db.collection("_secret_").insertOne(doc);
  return res.insertedId;
}
