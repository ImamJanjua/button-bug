export async function POST(request: Request) {
  const result = "test";

  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
}
