import express from "express";
export const app = express();
app.use(express.json());
app.get("/users", (_, res) =>
  res.json([
    { id: 1, username: "somebody" },
    { id: 2, username: "somebody_else" },
  ]),
);
app.get("/api/customers", (_, res) =>
  res.json(
    [
      "John Doe",
      "Jane Doe",
      "Ziv Chen",
      "Isaac Groisman",
      "Avner Maman",
      "Megan Dreyfuss",
    ].map((name, i) => ({
      id: i + 1,
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1],
    })),
  ),
);
app.get("/api/hello", (_, res) => res.json({ message: "Hello From Express" }));
app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.json({
    message: `I received your POST request. This is what you sent me: ${req.body.message ?? ""}`,
  });
});
if (process.env.NODE_ENV !== "test")
  app.listen(3001, "127.0.0.1", () =>
    console.log("Exercise backend: http://localhost:3001"),
  );
