import { useMemo, useState } from 'react';
import useData from './useData';
import useSort from './useSort';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Loading from './components/Loading';

const ListPage: React.FC = () => {
    const items = useData();
    const [sort, setSort] = useState<"ASC" | "DESC">("ASC");
    const [activeItemId, setActiveItemId] = useState<string[]>([]);
    const [query, setQuery] = useState<string>('');

    const activeItemText = useMemo(() => activeItemId.length ? activeItemId : "Empty", [activeItemId]);

    const handleItemClick = (id: string) => {
        setActiveItemId(activeItemId => [...activeItemId, id.toString()])
    };

    console.log("render component")

    const content = useMemo(() => {
        useSort(items, sort);
        if (!query) items;
        return items.filter((item: any) => { return item.id.toString().includes(query) })
    }, [items, sort, query])

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    return (
        <div className={'list-wrapper'}>
            <div className="list-header">
                <Header
                    text={activeItemText}
                    handleSort={setSort}
                    sort={sort}
                    query={query}
                    setQuery={handleQueryChange}
                />
            </div>
            <div className="list-container">
                <div className="list">
                    {content.length ?
                        content.map((item: any, index: any) => (
                            <ListItem
                                item={item}
                                id={item.id}
                                key={index}
                                isactive={activeItemText.includes(item.id.toString())}
                                onClick={handleItemClick}
                            />
                        ))
                        : <Loading />
                    }
                </div>
            </div>
        </div>
    );
}

export default ListPage;