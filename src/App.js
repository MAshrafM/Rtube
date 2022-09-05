// React srtucture
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Material UI
import { Box } from "@mui/material";
// Components
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components";

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
               <Route path="/" exact element={<Feed />} />
               <Route path="/video/:id" element={<VideoDetail />} />
               <Route path="/channel/:id" element={<ChannelDetail />} />
               <Route path="/search/:searchtxt" element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App