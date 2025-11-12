import { revalidatePath } from "next/cache";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return Response.json(
      {
        ok: false,
        message:
          "Invalid secret ... Please check your secret key or contact Zeidan -__- ",
      },
      { status: 401 },
    );
  }

  // Revalidate the menu page (add more paths if needed)
  revalidatePath("/menu");

  return Response.json({
    ok: true,
    revalidated: true,
    at: new Date().toISOString(),
  });
}
