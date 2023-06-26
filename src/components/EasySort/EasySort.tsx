import React, { useState } from 'react'
import SortableList, { SortableItem } from 'react-easy-sort';
import style from './EasySort.module.css'


interface ISort {
    src: string
    id: number
}

export default function EasySort() {

    const [ items, setItems ] = useState<ISort[]>([]);
    const [ src, setSrc ] = useState('');

    const onChange = (e: any) => {
        setSrc(e.target.value);
    };

    const addSrc = () => {
        setSrc('');
        setItems([
            ...items,
            {
                id: 1 + Math.max(0, ...items.map(n => n.id)),
                src,
            },
        ]);
    };


    const removeItem = (id: any) => {
        const p = setItems([...items].filter((t: any) => t.id !== id))
        console.log(p)
    }

const onSortEnd = (iOld: any, iNew: any) => {
  setItems(([...items]) => (
    [ items[iOld], items[iNew] ] = [ items[iNew], items[iOld] ],
    items
  ));
};

  return (
    <div className='_container'>
        <div className={style.body}>
            <div className={style.form_input}>
                <input value={src} onChange={onChange} />
                <button className='btn' onClick={addSrc}>add</button>
            </div>
            <SortableList className={style.card__body} onSortEnd={onSortEnd}>
            {items.map(n => (
                <SortableItem key={n.id}>
                    <div className={style.card__item}>
                        <button onClick={() => removeItem(n.id)}>УДАЛИТЬ</button>
                        <img src={n.src} />
                    </div>
                </SortableItem>
            ))}
            </SortableList>
        </div>
    </div>
  )
}
