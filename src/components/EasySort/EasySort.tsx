import React, { useState } from 'react'
import SortableList, { SortableItem } from 'react-easy-sort';


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

    // const removeItem = () => {
    //     setItems([...items].filter((t: any) => t.id === !id))
    // }

const onSortEnd = (iOld: any, iNew: any) => {
  setItems(([...items]) => (
    [ items[iOld], items[iNew] ] = [ items[iNew], items[iOld] ],
    items
  ));
};

  return (
    <div>
        <div>
            <input value={src} onChange={onChange} />
                <button onClick={addSrc}>add</button>
            </div>
            <SortableList onSortEnd={onSortEnd}>
            {items.map(n => (
                <SortableItem key={n.id}>
                    <div>
                        <button>УДАЛИТЬ</button>
                        <img src={n.src} />
                    </div>
                </SortableItem>
            ))}
            </SortableList>
    </div>
  )
}
