export function GET(request: Request) {
  console.log(request);
  return new Response("Hello, this is the API route!");
}