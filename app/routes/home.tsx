import type { Route } from './+types/home'

export async function loader({ request }: Route.LoaderArgs) {
  const searchParams = new URL(request.url).searchParams
  const id = searchParams.get('id') ?? ''
  return { id }
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  const result = await serverLoader()
  return result
}

clientLoader.hydrate = true as const

export function action({ request }: Route.ActionArgs) {}

export function clientAction({ request }: Route.ClientActionArgs) {}

export function HydrateFallback() {
  return <div>Loading...</div>
}

export default function Page({ loaderData }: Route.ComponentProps) {
  return <div>Home: {loaderData.id}</div>
}
