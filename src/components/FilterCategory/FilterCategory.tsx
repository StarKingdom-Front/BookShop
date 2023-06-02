import styles from './FilterCategory.module.css'

export default function FilterCategory({value, onClickCategory} : {onClickCategory: any, value: number}) {

    const categories: string[] = [
        'Все', 'Фэнтези', 'Детективы', 'Боевики', 'Проза', 'Бизнес'
    ]

  return (
    <div>
        <div style={{paddingBottom: '24px'}} className='_container'>
           <div>
                <ul className={styles.category}>
                    {
                        categories.map((item, index: number) => (
                            <li 
                            key={index}
                            className={value === index ? 'search__active' : '' } 
                            onClick={() => onClickCategory(index)}>{item}
                            </li>
                    ))}
                </ul>
           </div>
        </div>
    </div>
  )
}
