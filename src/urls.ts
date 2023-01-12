type pageUrlMapping = Record<Pages, Url>
type Url = string

export enum Pages {
  LOGIN,
}

const staging: pageUrlMapping = {
  [Pages.LOGIN]: 'https://tablet2.frfrstaging.pw/login',
}

const servers: Record<string, pageUrlMapping> = {
  staging: staging,
}

export function getUrl(page: Pages): Url {
  const server = servers[process.env.SERVER]
  return server[page]
}
