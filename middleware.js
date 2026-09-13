// Vercel Edge Middleware: protege /privado/** com Basic Auth.
// Credenciais nas variáveis de ambiente do projecto Vercel:
//   PRIVADO_USER (opcional; por omissão "ppvrf") e PRIVADO_PASS (obrigatória).
// Sem PRIVADO_PASS definida, a área reservada fica fechada a toda a gente (fail-closed).

export const config = { matcher: ['/privado/:path*'] };

function recusa() {
  return new Response('Área reservada. Introduza a password.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="villaromanadefreiria.com - area reservada", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export default function middleware(request) {
  const esperadoUser = process.env.PRIVADO_USER || 'ppvrf';
  const esperadoPass = process.env.PRIVADO_PASS || '';
  if (!esperadoPass) return recusa();

  const auth = request.headers.get('authorization') || '';
  if (!auth.startsWith('Basic ')) return recusa();

  let decodificado = '';
  try {
    decodificado = atob(auth.slice(6));
  } catch (e) {
    return recusa();
  }
  const sep = decodificado.indexOf(':');
  if (sep < 0) return recusa();
  const user = decodificado.slice(0, sep);
  const pass = decodificado.slice(sep + 1);
  if (user !== esperadoUser || pass !== esperadoPass) return recusa();

  // credenciais válidas: deixa o pedido seguir para o ficheiro estático
  return undefined;
}
