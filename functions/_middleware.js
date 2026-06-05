export async function onRequest(context) {
  const url = new URL(context.request.url);
  const canonicalHost = "daltonsalud.com";
  const redirectHosts = new Set([
    "www.daltonsalud.com",
    "daltonsalud.com.ar",
    "www.daltonsalud.com.ar",
    "farmaciadalton.com.ar",
    "www.farmaciadalton.com.ar",
  ]);

  if (redirectHosts.has(url.hostname)) {
    url.hostname = canonicalHost;
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
