import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  Conditions: defineTable({
    Description: v.string(),
    Name: v.string(),
  }),
  Entries: defineTable({
    // ConditionID: v.id("Conditions"),
    DateLogged: v.optional(v.object({ Date: v.string() })),
    Notes: v.optional(v.string()),
    PatientID: v.optional(v.id("Patients")),
    storageId: v.id("_storage"),
    DateLogged: v.object({ Date: v.string() }),
    Notes: v.string(),
    PatientID: v.id("Patients"),
  }),
  Patients: defineTable({
    Birthday: v.object({ Date: v.string() }),
    FirstName: v.string(),
    LastName: v.string(),
    // PhysicianPhoneNumber: v.string(),
  }),
});
