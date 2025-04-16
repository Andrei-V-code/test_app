import { Button, Stack, TextField } from "@mui/material";
import { HeaderProps } from "../../types";
import SubTitle from "./SubTitle";

const Header: React.FC<HeaderProps> = ({ text, handleSort, sort, query, setQuery }) => {
    return (
        <div className="list-header">
            <h1 className={'list-title'}>Items List</h1>
            <SubTitle>{Array.isArray(text) ? text.map(el => el.toString() + ", ") : text}</SubTitle>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" size="medium" onClick={() => handleSort(sort === "ASC" ? "DESC" : "ASC")}>Sort ({sort === 'ASC' ? 'ASC' : 'DESC'})</Button>
                <TextField id="outlined-basic" label="Filter by ID" variant="outlined" size="small" value={query} onChange={setQuery} />
            </Stack>
        </div>
    )
}

export default Header;