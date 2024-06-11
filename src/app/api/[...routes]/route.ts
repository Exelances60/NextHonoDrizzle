import { createUser } from "@/db/queries";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { handle } from "hono/vercel";

export const runtime = "edge";

export const app = new Hono().basePath("/api");
app.use(cors());

const product = new Hono();

product.get("/", (c) => {
  return c.json({ message: "Product" });
});

app.route("/product", product);

app.post("/user", async (c) => {
  const formData = await c.req.formData();
  const ageData = formData.get("age");
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    age: parseInt(ageData as string),
  };
  await createUser(data);
  return c.json({ message: "Form submitted" });
});

app.onError((err, c) => {
  console.error(`${err}`);
  return c.text(err.message, 500);
});
export const GET = handle(app);
export const POST = handle(app);
