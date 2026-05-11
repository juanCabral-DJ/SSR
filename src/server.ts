import { CommonEngine } from "@angular/ssr/node"
import { render } from "@netlify/angular-runtime/common-engine"
const commonEngine = new CommonEngine()

export async function netlifycommonEngineHandler(request: Request, context: any): Promise<Response> {
  return await render(commonEngine)
}
