import { UserV2 } from 'twitter-api-v2'
import * as css from './styles'

interface PROPS {
  user: UserV2
  pid: string
}

export default function User_Popup(props: PROPS): JSX.Element {
  const { user, pid } = props

  return (
    <css.Container id={'profile_popup_' + user.id + '_' + pid}>
      <css.Profile>
        <css.HeaderPhoto />
        <css.ProfilePhoto src={user.profile_image_url as string} />
        <h3>{user.name}</h3>
        <p>{user.description && user.description}</p>
      </css.Profile>
    </css.Container>
  )
}