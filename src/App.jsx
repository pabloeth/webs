import { useState } from 'react'
import {webs} from './data'
import { SearchIcon } from './icons/Search'
import styles from './app.module.css'

function App () {
  const [search, setSearch] = useState('')
  const [data, setData] = useState(webs)

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value)

    if (value === '') {
      setData(webs)
      return
    }

    const results = webs.filter((web) => {
      const text = value.toLowerCase()
      const name = web.name.toLowerCase()
      const description = web.description.toLowerCase()

      return name.includes(text) || description.includes(text)
    })

    setData(results)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.search}>
          <h1>Recursos</h1>
          <p>Encuentra herramientas y utilidades en un solo lugar</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Ingresa la palabra clave para tu búsqueda'
              onChange={handleSearch}
              value={search}
              name='search'
            />
            <SearchIcon className={styles.icon} />
          </form>
        </div>
      </header>
      <section className={styles.section}>
        {
          data.map((web) => (
            <a
              key={web.url}
              href={web.url}
              className={styles.card}
              target='_blank'
              rel='noopener noreferrer'
            >
              <p>{web.name}</p>
              <p>{web.description}.</p>
            </a>
          ))
        }
      </section>
    </main>
  )
}

export default App
