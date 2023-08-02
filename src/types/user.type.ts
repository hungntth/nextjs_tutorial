type Role = 'PARENT' | 'STUDENT'

type UserSetting = {
  auto_save_interval_secs: number
  language_id: number
}

export type User = {
  role: Role[]
  active: boolean
  name: string
  profile_code: string
  email: string
  user_setting: UserSetting
}
