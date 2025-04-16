import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="section">
            <h1 className="error">404</h1>
            <div className="page">Item not found</div>
            <Link to={'../'}>
                <Button variant="outlined" color="error" size="large">
                    Go Back
                </Button>
            </Link>
        </div>
    );
};

export default NotFound;