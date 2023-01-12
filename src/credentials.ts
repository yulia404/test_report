type UserCredentials = {
    username: string
    password: string
  }
  
  export enum Users {
    INVALID,
  }
  
  type userCredentialsMapping = Record<Users, UserCredentials>
  const staging: userCredentialsMapping = {
    [Users.INVALID]: { username: '0', password: '0' },
  }
  
  const servers: Record<string, userCredentialsMapping> = {
    staging: staging,
  }
  
  export function getCredentials(user: Users): UserCredentials {
    const server = servers[process.env.SERVER]
    return server[user]
  }
  