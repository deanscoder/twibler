import * as css from './styles'
import author from './../../config/authorsocial'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function AboutMe(): JSX.Element {
  const { t } = useTranslation('common');

  return (
    <css.Container>
      <h2>{t('about_me')}</h2>
      <css.Divider />

      <ul>
        {author && author.map(item =>
          <Link href={item.url} key={item.id}>
            <a>

              <li>
                <div>

                  {item.thumbnail}

                  <article>
                    <h4>{item.social}</h4>
                    <p><i>{item.name}</i></p>
                  </article>

                </div>

                <span>
                  {item.label}
                </span>

              </li>
            </a>
          </Link>

        )}
      </ul>
    </css.Container>
  )
}