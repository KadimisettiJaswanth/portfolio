import * as schema from "@shared/schema";

let pool: any = undefined;
let db: any = undefined;

if (process.env.DATABASE_URL) {
  // Postgres (production or when DATABASE_URL provided)
  const { drizzle } = await import("drizzle-orm/node-postgres");
  const pg = await import("pg");
  const { Pool } = pg as any;

  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzle(pool, { schema });
} else {
  // SQLite fallback (WASM) for local development using sql.js to avoid native builds
  const { drizzle } = await import("drizzle-orm/sql-js");
  const initSqlJs = (await import("sql.js")).default;
  const path = (await import("path")).default;

  const wasmPath = path.join(process.cwd(), "node_modules", "sql.js", "dist", "sql-wasm.wasm");

  const SQL = await initSqlJs({ locateFile: () => wasmPath });

  const sqliteDb = new SQL.Database();

  db = drizzle(sqliteDb, { schema });
  console.warn(`No DATABASE_URL found — using in-memory sql.js (WASM) database`);
}

export { pool, db };
